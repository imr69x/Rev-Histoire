import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const ADMIN_EMAIL = 'imranbouras69@gmail.com'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const callerEmail = req.headers['x-admin-email']
  if (callerEmail !== ADMIN_EMAIL) return res.status(403).json({ error: 'Forbidden' })

  const { email, password } = req.body || {}
  if (!email || !password) return res.status(400).json({ error: 'Email et mot de passe requis' })

  // 1. Créer le compte Supabase
  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })

  if (authError) return res.status(500).json({ error: authError.message })

  const userId = authData.user.id

  // 2. Créer le profil avec rôle invité
  await supabase.from('profiles').upsert({
    id: userId,
    email,
    role: 'invited',
    subscription_status: 'active',
  })

  // 3. Ajouter à la table invites
  await supabase.from('invites').upsert({ email: email.toLowerCase() }, { onConflict: 'email' })

  // 4. Envoyer l'email avec Resend
  if (process.env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Rev\'Histoire <onboarding@resend.dev>',
        to: email,
        subject: 'Votre accès à Rev\'Histoire',
        html: `
          <div style="font-family:sans-serif;max-width:500px;margin:auto;padding:32px;">
            <h2 style="color:#2C1810;">Bienvenue sur Rev'Histoire ! 🎓</h2>
            <p>Ton accès a été créé. Voici tes identifiants :</p>
            <div style="background:#F5F0E8;padding:16px;border-radius:8px;margin:16px 0;">
              <p style="margin:4px 0;"><strong>Email :</strong> ${email}</p>
              <p style="margin:4px 0;"><strong>Mot de passe :</strong> ${password}</p>
            </div>
            <a href="https://rev-histoire-i.vercel.app/login"
               style="display:inline-block;background:#D4AF37;color:#2C1810;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold;">
              Se connecter →
            </a>
            <p style="color:#8B7355;font-size:12px;margin-top:24px;">
              Tu as accès à toutes les fiches, quiz, personnalités et plus encore.
            </p>
          </div>
        `,
      }),
    })
  }

  return res.status(200).json({ ok: true, userId })
}
