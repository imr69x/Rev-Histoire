import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const SITE_URL = 'https://rev-histoire-i.vercel.app'

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', SITE_URL)
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { userId, email } = req.body || {}

  if (!userId || !email) {
    return res.status(400).json({ error: 'Missing userId or email' })
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email,
      line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
      subscription_data: {
        metadata: { userId },
      },
      metadata: { userId },
      success_url: `${SITE_URL}/success`,
      cancel_url: `${SITE_URL}/pricing`,
    })

    return res.status(200).json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err.message)
    return res.status(500).json({ error: err.message })
  }
}
