import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Register() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (password !== confirm) { setError('Les mots de passe ne correspondent pas.'); return }
    if (password.length < 6) { setError('Le mot de passe doit contenir au moins 6 caractères.'); return }
    setLoading(true)
    const { error } = await signUp(email, password)
    setLoading(false)
    if (error) { setError(error.message); return }
    setSuccess(true)
  }

  if (success) return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="text-5xl mb-4">📬</div>
        <h2 className="text-xl font-['Playfair_Display'] font-bold text-[#2C1810] mb-2">Vérifie tes emails !</h2>
        <p className="text-[#8B7355] mb-6">Un lien de confirmation t'a été envoyé à <strong>{email}</strong>. Clique dessus pour activer ton compte.</p>
        <Link to="/login" className="text-[#D4AF37] font-semibold hover:underline">Se connecter →</Link>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center mx-auto mb-3">
            <BookOpen size={22} className="text-[#2C1810]" />
          </div>
          <h1 className="text-2xl font-['Playfair_Display'] font-bold text-[#2C1810]">Rev'Histoire</h1>
          <p className="text-[#8B7355] text-sm mt-1">Crée ton compte gratuitement</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-[#E8E0CC] p-6 shadow-sm space-y-4">
          {error && <p className="text-sm text-[#C0392B] bg-[#FDEDEC] p-3 rounded-lg">{error}</p>}

          <div>
            <label className="text-sm font-medium text-[#4A3728] block mb-1">Email</label>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full px-3 py-2 border border-[#E8E0CC] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
              placeholder="ton@email.com"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#4A3728] block mb-1">Mot de passe</label>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
              className="w-full px-3 py-2 border border-[#E8E0CC] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
              placeholder="Minimum 6 caractères"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#4A3728] block mb-1">Confirmer le mot de passe</label>
            <input
              type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} required
              className="w-full px-3 py-2 border border-[#E8E0CC] rounded-lg text-sm focus:outline-none focus:border-[#D4AF37]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit" disabled={loading}
            className="w-full py-2.5 bg-[#D4AF37] text-[#2C1810] font-bold rounded-lg hover:bg-[#E8C85A] transition-colors disabled:opacity-60"
          >
            {loading ? 'Inscription…' : 'Créer mon compte'}
          </button>
        </form>

        <p className="text-center text-sm text-[#8B7355] mt-4">
          Déjà un compte ?{' '}
          <Link to="/login" className="text-[#D4AF37] font-semibold hover:underline">Se connecter</Link>
        </p>
        <p className="text-center text-sm text-[#8B7355] mt-2">
          <Link to="/" className="hover:underline">← Retour à l'accueil</Link>
        </p>
      </div>
    </div>
  )
}
