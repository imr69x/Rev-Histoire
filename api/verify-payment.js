import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { sessionId } = req.body || {}
  if (!sessionId) return res.status(400).json({ error: 'Missing sessionId' })

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid' && session.status !== 'complete') {
      return res.status(400).json({ error: 'Payment not completed' })
    }

    const userId = session.metadata?.userId
    if (!userId) return res.status(400).json({ error: 'No userId in session' })

    let endDate = null
    if (session.subscription) {
      const sub = await stripe.subscriptions.retrieve(session.subscription)
      endDate = new Date(sub.current_period_end * 1000).toISOString()
    }

    await supabase.from('profiles').update({
      subscription_status: 'active',
      subscription_end_date: endDate,
      stripe_customer_id: session.customer || null,
      stripe_subscription_id: session.subscription || null,
    }).eq('id', userId)

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('verify-payment error:', err.message)
    return res.status(500).json({ error: err.message })
  }
}
