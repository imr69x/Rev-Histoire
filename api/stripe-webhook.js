import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export const config = { api: { bodyParser: false } }

async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (chunk) => chunks.push(chunk))
    req.on('end', () => resolve(Buffer.concat(chunks)))
    req.on('error', reject)
  })
}

async function setActive(userId, customerId, subscriptionId, periodEnd) {
  const endDate = periodEnd ? new Date(periodEnd * 1000).toISOString() : null
  await supabase.from('profiles').update({
    subscription_status: 'active',
    subscription_end_date: endDate,
    stripe_customer_id: customerId || null,
    stripe_subscription_id: subscriptionId || null,
  }).eq('id', userId)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const sig = req.headers['stripe-signature']
  const rawBody = await getRawBody(req)

  let event
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature error:', err.message)
    return res.status(400).json({ error: `Webhook error: ${err.message}` })
  }

  try {
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object
      const userId = session.metadata?.userId
      if (userId && session.subscription) {
        const sub = await stripe.subscriptions.retrieve(session.subscription)
        await setActive(userId, session.customer, session.subscription, sub.current_period_end)
      }
    }

    if (event.type === 'invoice.payment_succeeded') {
      const invoice = event.data.object
      if (invoice.subscription) {
        const sub = await stripe.subscriptions.retrieve(invoice.subscription)
        const userId = sub.metadata?.userId
        if (userId) await setActive(userId, invoice.customer, invoice.subscription, sub.current_period_end)
      }
    }

    if (event.type === 'customer.subscription.updated') {
      const sub = event.data.object
      const userId = sub.metadata?.userId
      if (userId) {
        if (['active', 'trialing'].includes(sub.status)) {
          await setActive(userId, sub.customer, sub.id, sub.current_period_end)
        } else {
          await supabase.from('profiles').update({ subscription_status: sub.status }).eq('id', userId)
        }
      }
    }

    if (event.type === 'customer.subscription.deleted') {
      const sub = event.data.object
      const userId = sub.metadata?.userId
      if (userId) {
        await supabase.from('profiles').update({ subscription_status: 'inactive' }).eq('id', userId)
      }
    }
  } catch (err) {
    console.error('Handler error:', err.message)
    return res.status(500).json({ error: err.message })
  }

  return res.status(200).json({ received: true })
}
