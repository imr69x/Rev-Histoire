import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, Loader } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'

export default function Success() {
  const navigate = useNavigate()
  const { refreshProfile } = useAuth()
  const [status, setStatus] = useState('loading') // loading | ok | error

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id')

    async function activate() {
      if (sessionId) {
        try {
          const res = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId }),
          })
          const data = await res.json()
          if (!res.ok) throw new Error(data.error)
        } catch (err) {
          console.error('verify-payment:', err)
        }
      }

      // Rafraîchit le profil en mémoire pour débloquer l'accès immédiatement
      if (refreshProfile) await refreshProfile()
      setStatus('ok')

      setTimeout(() => navigate('/fiches'), 4000)
    }

    activate()
  }, [navigate, refreshProfile])

  return (
    <div className="min-h-screen bg-[#F5F0E8] flex items-center justify-center px-4">
      <div className="text-center max-w-sm">
        {status === 'loading' ? (
          <>
            <Loader size={64} className="text-[#D4AF37] mx-auto mb-4 animate-spin" />
            <h1 className="text-2xl font-['Playfair_Display'] font-bold text-[#2C1810] mb-2">
              Activation en cours…
            </h1>
            <p className="text-[#8B7355]">Nous activons ton accès, un instant.</p>
          </>
        ) : (
          <>
            <CheckCircle size={64} className="text-[#27AE60] mx-auto mb-4" />
            <h1 className="text-2xl font-['Playfair_Display'] font-bold text-[#2C1810] mb-2">
              Accès activé !
            </h1>
            <p className="text-[#8B7355] mb-2">
              Ton accès complet à Rev'Histoire est maintenant actif.
            </p>
            <p className="text-sm text-[#8B7355] mb-6">
              Redirection dans quelques secondes…
            </p>
            <button
              onClick={() => navigate('/fiches')}
              className="px-6 py-2.5 bg-[#D4AF37] text-[#2C1810] font-bold rounded-xl hover:bg-[#E8C85A] transition-colors"
            >
              Accéder aux fiches →
            </button>
          </>
        )}
      </div>
    </div>
  )
}
