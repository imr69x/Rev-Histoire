import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, GraduationCap, BookMarked, CheckCircle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { glossaryData } from '@/data/glossary'
import { useAppStore } from '@/stores/useAppStore'

const CAT_LABELS = {
  POLITICAL: 'Politique', ECONOMIC: 'Économique', SOCIAL: 'Social',
  CULTURAL: 'Culturel', MILITARY: 'Militaire', GEOGRAPHIC: 'Géographique',
  LEGAL: 'Juridique', HGGSP_SPECIFIC: 'HGGSP',
}
const CAT_COLORS = {
  POLITICAL: '#2980B9', ECONOMIC: '#27AE60', SOCIAL: '#E67E22',
  CULTURAL: '#8E44AD', MILITARY: '#C0392B', GEOGRAPHIC: '#16A085',
  LEGAL: '#D4AF37', HGGSP_SPECIFIC: '#1B4F72',
}

export default function GlossaireDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { learnedTerms, markTermLearned } = useAppStore()

  const term = glossaryData.find((t) => t.id === id)

  if (!term) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-[#8B7355] text-lg">Terme introuvable.</p>
        <button
          onClick={() => navigate('/glossaire')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8B4513] text-white hover:bg-[#6B3410] transition-colors"
        >
          <ArrowLeft size={16} /> Retour
        </button>
      </div>
    )
  }

  const color = CAT_COLORS[term.category] || '#8B4513'
  const isLearned = learnedTerms.has(term.id)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-fade-in">
      <button
        onClick={() => navigate('/glossaire')}
        className="flex items-center gap-2 text-sm text-[#8B7355] hover:text-[#8B4513] transition-colors mb-6"
      >
        <ArrowLeft size={16} /> Retour au glossaire
      </button>

      {/* Hero */}
      <div
        className="rounded-2xl p-8 mb-8 shadow-lg"
        style={{ background: `linear-gradient(135deg, ${color}DD, ${color}88)` }}
      >
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-white/25 flex items-center justify-center text-white text-2xl font-['Playfair_Display'] font-bold shadow-lg flex-shrink-0">
            {term.term[0]}
          </div>
          <div className="flex-1">
            <h1 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-white drop-shadow mb-2">
              {term.term}
            </h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>
                {CAT_LABELS[term.category] || term.category}
              </Badge>
              {term.isExamKeyword && (
                <Badge style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>
                  🎓 Mot-clé Bac
                </Badge>
              )}
            </div>
          </div>
          {isLearned && (
            <CheckCircle size={24} className="text-white/80 flex-shrink-0" />
          )}
        </div>
      </div>

      {/* Mot-clé bac banner */}
      {term.isExamKeyword && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-[#FEF9EC] border border-[#D4AF37]/40 mb-5">
          <GraduationCap size={18} className="text-[#D4AF37]" />
          <span className="text-sm font-medium text-[#8B4513]">
            Ce terme est un mot-clé important pour le Bac / Brevet
          </span>
        </div>
      )}

      {/* Définition complète */}
      <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-6 mb-5 shadow-sm">
        <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-3 flex items-center gap-2">
          <BookMarked size={18} style={{ color }} /> Définition
        </h2>
        <p className="text-[#4A3728] dark:text-[#8B949E] leading-relaxed text-justify">
          {term.definition}
        </p>
      </section>

      {/* Définition simplifiée */}
      <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-6 mb-5 shadow-sm">
        <h2 className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-2">
          En résumé
        </h2>
        <p className="text-[#4A3728] dark:text-[#8B949E] italic">{term.simpleDefinition}</p>
      </section>

      {/* Exemple */}
      {term.example && (
        <section className="mb-5">
          <div
            className="rounded-2xl p-6 border-l-4"
            style={{ borderColor: color, backgroundColor: color + '10' }}
          >
            <h3 className="font-semibold mb-2" style={{ color }}>Exemple historique</h3>
            <p className="text-sm text-[#4A3728] dark:text-[#8B949E]">{term.example}</p>
          </div>
        </section>
      )}

      {/* Niveaux */}
      {term.level?.length > 0 && (
        <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-6 mb-5 shadow-sm">
          <h2 className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-3">
            Niveaux concernés
          </h2>
          <div className="flex flex-wrap gap-2">
            {term.level.map((l) => <Badge key={l} variant="empire">{l}</Badge>)}
          </div>
        </section>
      )}

      {/* Bouton appris */}
      <button
        onClick={() => markTermLearned(term.id)}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition-colors ${
          isLearned
            ? 'bg-[#EAFAF1] text-[#27AE60] border border-[#27AE60]/30'
            : 'bg-[#8B4513] text-white hover:bg-[#A0522D]'
        }`}
      >
        {isLearned ? '✓ Terme appris !' : 'Marquer comme appris'}
      </button>
    </div>
  )
}
