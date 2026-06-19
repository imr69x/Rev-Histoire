import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const ADMIN_EMAIL = 'imranbouras69@gmail.com'

export default async function handler(req, res) {
  // Vérification simple : l'email admin doit être passé en header
  const callerEmail = req.headers['x-admin-email']
  if (callerEmail !== ADMIN_EMAIL) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  // GET — lister tous les profils
  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, email, subscription_status, subscription_end_date, role, created_at')
      .order('created_at', { ascending: false })
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json(data)
  }

  // PATCH — modifier un profil (role ou subscription_status)
  if (req.method === 'PATCH') {
    const { id, updates } = req.body || {}
    if (!id || !updates) return res.status(400).json({ error: 'Missing id or updates' })
    const { error } = await supabase.from('profiles').update(updates).eq('id', id)
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ ok: true })
  }

  // DELETE — supprimer un profil
  if (req.method === 'DELETE') {
    const { id } = req.body || {}
    if (!id) return res.status(400).json({ error: 'Missing id' })
    const { error } = await supabase.from('profiles').delete().eq('id', id)
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ ok: true })
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
