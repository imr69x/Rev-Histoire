import { useNavigate } from 'react-router-dom'
import { BookOpen, Globe, HelpCircle, Users, Star, Lock } from 'lucide-react'

const FEATURES = [
  { icon: BookOpen, label: '700+ fiches de révision', desc: 'De la 6ème à la Terminale HGGSP' },
  { icon: HelpCircle, label: '800+ questions de quiz', desc: 'Avec explications détaillées' },
  { icon: Globe, label: 'Carte interactive', desc: 'Histoire du monde visualisée' },
  { icon: Users, label: 'Personnalités historiques', desc: 'Les grands acteurs de l\'Histoire' },
  { icon: BookOpen, label: 'Flashcards', desc: 'Mémorisation rapide et efficace' },
  { icon: Star, label: 'Méthode Bac/Brevet', desc: 'Tous les conseils de rédaction' },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#2C1810] shadow">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center">
            <BookOpen size={16} className="text-[#2C1810]" />
          </div>
          <span className="text-[#D4AF37] font-bold text-lg">Rev'Histoire</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 text-sm text-[#D4AF37] border border-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-[#2C1810] transition-colors"
          >
            Connexion
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-4 py-2 text-sm bg-[#D4AF37] text-[#2C1810] rounded-lg font-semibold hover:bg-[#E8C85A] transition-colors"
          >
            S'inscrire
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <div className="inline-block bg-[#D4AF37]/20 text-[#8B5E3C] text-sm font-medium px-3 py-1 rounded-full mb-4">
          🏛️ Révision Histoire-Géographie
        </div>
        <h1 className="text-4xl md:text-5xl font-['Playfair_Display'] font-bold text-[#2C1810] mb-4">
          Rev'Histoire
        </h1>
        <p className="text-xl text-[#4A3728] mb-3 max-w-xl mx-auto">
          La plateforme complète pour réviser l'Histoire de la 6ème à la Terminale.
        </p>
        <p className="text-[#8B7355] mb-10 max-w-lg mx-auto">
          Fiches, quiz, carte interactive, flashcards, méthodo Bac/Brevet — tout ce qu'il faut pour réussir.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate('/pricing')}
            className="px-8 py-3 bg-[#D4AF37] text-[#2C1810] font-bold rounded-xl text-lg hover:bg-[#E8C85A] transition-colors shadow-lg"
          >
            Commencer maintenant
          </button>
          <button
            onClick={() => navigate('/register')}
            className="px-8 py-3 border-2 border-[#2C1810] text-[#2C1810] font-semibold rounded-xl text-lg hover:bg-[#2C1810] hover:text-[#F5F0E8] transition-colors"
          >
            Essai gratuit
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-['Playfair_Display'] font-bold text-[#2C1810] text-center mb-8">
          Tout ce qu'il vous faut pour réviser
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {FEATURES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-white rounded-2xl p-5 border border-[#E8E0CC] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#FDF3E7] flex items-center justify-center mb-3">
                <Icon size={20} className="text-[#D4AF37]" />
              </div>
              <h3 className="font-semibold text-[#2C1810] mb-1">{label}</h3>
              <p className="text-sm text-[#8B7355]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Free vs Paid */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl border border-[#E8E0CC] overflow-hidden shadow">
          <div className="grid grid-cols-2">
            <div className="p-6 border-r border-[#E8E0CC]">
              <h3 className="font-bold text-[#2C1810] mb-4">Gratuit</h3>
              {[
                '1 fiche par niveau',
                'Mots du glossaire visibles',
                '10 personnalités',
                'Quiz sur fiches gratuites',
                'Méthode Bac/Brevet',
              ].map((f) => (
                <p key={f} className="text-sm text-[#8B7355] flex items-center gap-2 mb-2">
                  <span className="text-[#27AE60]">✓</span> {f}
                </p>
              ))}
            </div>
            <div className="p-6 bg-[#FDF3E7]">
              <h3 className="font-bold text-[#D4AF37] mb-4">Accès complet</h3>
              {[
                'Toutes les fiches (700+)',
                'Glossaire complet',
                'Toutes les personnalités',
                '800+ questions de quiz',
                'Carte interactive',
                'Flashcards illimitées',
              ].map((f) => (
                <p key={f} className="text-sm text-[#4A3728] flex items-center gap-2 mb-2">
                  <Star size={12} className="text-[#D4AF37]" /> {f}
                </p>
              ))}
              <button
                onClick={() => navigate('/pricing')}
                className="mt-4 w-full py-2 bg-[#D4AF37] text-[#2C1810] font-bold rounded-lg text-sm hover:bg-[#E8C85A] transition-colors"
              >
                Voir les tarifs →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
