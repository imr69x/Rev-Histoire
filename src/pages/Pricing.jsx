import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Check, Star } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useAdminStore } from '@/stores/useAdminStore'

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

export default function Pricing() {
  const { user, isPaid } = useAuth()
  const { subscriptionConfig } = useAdminStore()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const price = subscriptionConfig?.priceDisplay || '9.99'
  const currency = subscriptionConfig?.currency === 'USD' ? '$' : subscriptionConfig?.currency === 'MAD' ? 'MAD' : '€'
  const durationDays = subscriptionConfig?.durationDays || 365
  const durationLabel = durationDays % 365 === 0
    ? `${durationDays / 365} an${durationDays / 365 > 1 ? 's' : ''}`
    : durationDays % 30 === 0
    ? `${durationDays / 30} mois`
    : `${durationDays} jour${durationDays > 1 ? 's' : ''}`

  async function handleCheckout() {
    if (!user) { navigate('/register'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, email: user.email }),
      })
      const { url } = await res.json()
      window.location.href = url
    } catch {
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
          <p className="text-3xl font-bold text-white mb-1">{price}{currency}<span className="text-base font-normal text-[#C4A882]">/{durationLabel}</span></p>
          <p className="text-sm text-[#8B7355] mb-6">Accès complet pendant {durationLabel}</p>
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
            <button
              onClick={handleCheckout} disabled={loading}
              className="w-full py-2.5 bg-[#D4AF37] text-[#2C1810] rounded-xl font-bold hover:bg-[#E8C85A] transition-colors disabled:opacity-60"
            >
              {loading ? 'Redirection…' : 'Débloquer maintenant →'}
            </button>
          )}
        </div>
      </div>

      <p className="text-center text-sm text-[#8B7355] mt-8">
        Paiement sécurisé par Stripe · Renouvellement automatique · Résiliable à tout moment
      </p>
    </div>
  )
}
