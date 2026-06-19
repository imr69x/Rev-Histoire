import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Login() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const { error } = await signIn(email, password)
    setLoading(false)
    if (error) { setError(error.message); return }
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#D4AF37] flex items-center justify-center mx-auto mb-3">
            <BookOpen size={22} className="text-[#2C1810]" />
          </div>
          <h1 className="text-2xl font-['Playfair_Display'] font-bold text-[#2C1810]">Rev'Histoire</h1>
          <p className="text-[#8B7355] text-sm mt-1">Connecte-toi à ton compte</p>
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
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit" disabled={loading}
            className="w-full py-2.5 bg-[#D4AF37] text-[#2C1810] font-bold rounded-lg hover:bg-[#E8C85A] transition-colors disabled:opacity-60"
          >
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>
        </form>

        <p className="text-center text-sm text-[#8B7355] mt-4">
          Pas encore de compte ?{' '}
          <Link to="/register" className="text-[#D4AF37] font-semibold hover:underline">S'inscrire</Link>
        </p>
        <p className="text-center text-sm text-[#8B7355] mt-2">
          <Link to="/" className="hover:underline">← Retour à l'accueil</Link>
        </p>
      </div>
    </div>
  )
}
