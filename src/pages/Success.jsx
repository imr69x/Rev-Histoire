import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

export default function Success() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/fiches'), 5000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <CheckCircle size={64} className="text-[#27AE60] mx-auto mb-4" />
        <h1 className="text-2xl font-['Playfair_Display'] font-bold text-[#2C1810] mb-2">
          Paiement confirmé !
        </h1>
        <p className="text-[#8B7355] mb-2">
          Ton accès complet à Rev'Histoire est maintenant actif pour un an.
        </p>
        <p className="text-sm text-[#8B7355] mb-6">
          Redirection automatique dans 5 secondes…
        </p>
        <button
          onClick={() => navigate('/fiches')}
          className="px-6 py-2.5 bg-[#D4AF37] text-[#2C1810] font-bold rounded-xl hover:bg-[#E8C85A] transition-colors"
        >
          Accéder aux fiches →
        </button>
      </div>
    </div>
  )
}
