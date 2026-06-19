import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Check, Star } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'

const FREE_FEATURES = [
  '1 fiche de révision par niveau',
  'Mots du glossaire (sans définitions)',
  '10 premières personnalités historiques',
  'Quiz sur les fiches gratuites',
  'Méthode Bac/Brevet complète',
]

const PAID_FEATURES = [
  'Toutes les fiches (700+, de la 6ème à la Terminale)',
  'Glossaire complet avec définitions',
  'Toutes les personnalités historiques',
  '800+ questions de quiz adaptatives',
  'Carte interactive mondiale',
  'Flashcards sur tous les thèmes',
  'Histoire des pays du monde',
  'Frise chronologique interactive',
  'Mises à jour incluses',
]

function durationLabel(days) {
  if (days % 365 === 0) return `${days / 365} an${days / 365 > 1 ? 's' : ''}`
  if (days % 30 === 0) return `${days / 30} mois`
  return `${days} jour${days > 1 ? 's' : ''}`
}

export default function Pricing() {
  const { user, isPaid } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState(null)
  const [config, setConfig] = useState({ price: '9.99', currency: '€', days: 90 })

  useEffect(() => {
    supabase.from('app_config').select('key, value').then(({ data }) => {
      if (!data) return
      const cfg = Object.fromEntries(data.map((r) => [r.key, r.value]))
      const cur = cfg.currency === 'USD' ? '$' : cfg.currency === 'MAD' ? 'MAD' : '€'
      setConfig({ price: cfg.price_display || '9.99', currency: cur, days: Number(cfg.duration_days || 90) })
    })
  }, [])

  const label = durationLabel(config.days)

  async function handleCheckout() {
    if (!user) { navigate('/register'); return }
    setLoading(true)
    setErrMsg(null)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, email: user.email }),
      })
      const data = await res.json()
      if (!res.ok || !data.url) {
        setErrMsg(data.error || 'Erreur inconnue')
        setLoading(false)
        return
      }
      window.location.href = data.url
    } catch (err) {
      setErrMsg('Impossible de contacter le serveur : ' + err.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F0E8] py-12 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 mx-auto mb-6 text-[#8B7355] hover:text-[#2C1810]">
          <BookOpen size={18} className="text-[#D4AF37]" />
          <span className="font-bold text-[#2C1810]">Rev'Histoire</span>
        </button>
        <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] mb-3">
          Choisissez votre accès
        </h1>
        <p className="text-[#8B7355]">Accès complet à toute la plateforme pour une année</p>
      </div>

      {/* Plans */}
      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Free */}
        <div className="bg-white rounded-2xl border border-[#E8E0CC] p-6">
          <h2 className="text-lg font-bold text-[#2C1810] mb-1">Gratuit</h2>
          <p className="text-3xl font-bold text-[#2C1810] mb-1">0 €</p>
          <p className="text-sm text-[#8B7355] mb-6">Pour découvrir la plateforme</p>
          <ul className="space-y-2 mb-6">
            {FREE_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#4A3728]">
                <Check size={14} className="text-[#27AE60] mt-0.5 flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
          <button
            onClick={() => user ? navigate('/fiches') : navigate('/register')}
            className="w-full py-2.5 border border-[#E8E0CC] text-[#4A3728] rounded-xl font-medium hover:bg-[#F5F0E8] transition-colors"
          >
            {user ? 'Accès gratuit actif' : 'Commencer gratuitement'}
          </button>
        </div>

        {/* Paid */}
        <div className="bg-[#2C1810] rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#2C1810] text-xs font-bold px-2 py-0.5 rounded-full">
            Recommandé
          </div>
          <h2 className="text-lg font-bold text-[#D4AF37] mb-1">Accès complet</h2>
          <p className="text-3xl font-bold text-white mb-1">{config.price}{config.currency}<span className="text-base font-normal text-[#C4A882]">/{label}</span></p>
          <p className="text-sm text-[#8B7355] mb-6">Accès complet pendant {label}</p>
          <ul className="space-y-2 mb-6">
            {PAID_FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#E8E0CC]">
                <Star size={13} className="text-[#D4AF37] mt-0.5 flex-shrink-0" /> {f}
              </li>
            ))}
          </ul>
          {isPaid ? (
            <div className="w-full py-2.5 bg-[#27AE60] text-white rounded-xl font-bold text-center">
              ✓ Accès actif
            </div>
          ) : (
            <>
              <button
                onClick={handleCheckout} disabled={loading}
                className="w-full py-2.5 bg-[#D4AF37] text-[#2C1810] rounded-xl font-bold hover:bg-[#E8C85A] transition-colors disabled:opacity-60"
              >
                {loading ? 'Connexion à Stripe…' : 'Débloquer maintenant →'}
              </button>
              {errMsg && (
                <p className="mt-3 text-xs text-[#E74C3C] bg-[#FDEDEC] rounded-lg px-3 py-2">{errMsg}</p>
              )}
            </>
          )}
        </div>
      </div>

      <p className="text-center text-sm text-[#8B7355] mt-8">
        Paiement sécurisé par Stripe · Renouvellement automatique · Résiliable à tout moment
      </p>
    </div>
  )
}
