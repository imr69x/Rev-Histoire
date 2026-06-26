import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export default async function handler(req, res) {
  const { userId } = req.query
  if (!userId) return res.status(400).json({ error: 'Missing userId' })

  const auth = req.headers['authorization'] || ''
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null
  if (!token) return res.status(401).json({ error: 'Unauthorized' })

  const { data: userData, error: authError } = await supabase.auth.getUser(token)
  if (authError || !userData?.user) return res.status(401).json({ error: 'Unauthorized' })

  if (userData.user.id !== userId) return res.status(403).json({ error: 'Forbidden' })

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  if (error) return res.status(500).json({ error: error.message })
  return res.status(200).json(data)
}
