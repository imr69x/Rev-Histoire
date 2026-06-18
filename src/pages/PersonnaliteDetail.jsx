import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Calendar, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { personalitiesData } from '@/data/personalities'

const CAT_LABELS = {
  POLITICAL: 'Politique', MILITARY: 'Militaire', INTELLECTUAL: 'Intellectuel',
  RELIGIOUS: 'Religieux', ARTISTIC: 'Artistique', ECONOMIC: 'Économique',
  SOCIAL: 'Social',
}
const CAT_COLORS = {
  POLITICAL: '#2980B9', MILITARY: '#C0392B', INTELLECTUAL: '#8E44AD',
  RELIGIOUS: '#E67E22', ARTISTIC: '#E74C3C', ECONOMIC: '#27AE60',
  SOCIAL: '#16A085',
}

function formatYear(y) {
  if (y === null) return 'présent'
  if (y < 0) return `${Math.abs(y)} av. J.-C.`
  return String(y)
}

function getInitials(name) {
  return name
    .replace(/[^a-zA-ZÀ-ÿ\s]/g, '')
    .split(/\s+/)
    .filter((n) => n.length > 0)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function PersonnaliteDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const p = personalitiesData.find((x) => x.id === id)

  if (!p) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <p className="text-[#8B7355] text-lg">Personnalité introuvable.</p>
        <button
          onClick={() => navigate('/personnalites')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#8B4513] text-white hover:bg-[#6B3410] transition-colors"
        >
          <ArrowLeft size={16} /> Retour
        </button>
      </div>
    )
  }

  const color = CAT_COLORS[p.category] || '#8B4513'

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 animate-fade-in">
      {/* Bouton retour */}
      <button
        onClick={() => navigate('/personnalites')}
        className="flex items-center gap-2 text-sm text-[#8B7355] hover:text-[#8B4513] transition-colors mb-6"
      >
        <ArrowLeft size={16} /> Retour aux personnalités
      </button>

      {/* Hero */}
      <div
        className="rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6 mb-8 shadow-lg"
        style={{ background: `linear-gradient(135deg, ${color}DD, ${color}88)` }}
      >
        <div className="w-24 h-24 rounded-2xl bg-white/25 flex items-center justify-center text-white text-4xl font-['Playfair_Display'] font-bold shadow-lg flex-shrink-0">
          {getInitials(p.name)}
        </div>
        <div className="text-center sm:text-left">
          <h1 className="font-['Playfair_Display'] text-3xl font-bold text-white drop-shadow mb-1">
            {p.name}
          </h1>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start text-white/80 text-sm mt-2">
            <span className="flex items-center gap-1"><Calendar size={13} />{formatYear(p.birthYear)} – {formatYear(p.deathYear)}</span>
            <span className="flex items-center gap-1"><MapPin size={13} />{p.nationality}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
            <Badge style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>
              {CAT_LABELS[p.category] || p.category}
            </Badge>
            <Badge style={{ backgroundColor: 'rgba(255,255,255,0.25)', color: '#fff' }}>
              {p.era}
            </Badge>
            {p.isAlive && <Badge style={{ backgroundColor: '#16A085', color: '#fff' }}>Vivant·e</Badge>}
          </div>
        </div>
      </div>

      {/* Biographie */}
      <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-6 mb-5 shadow-sm">
        <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-3">
          Biographie
        </h2>
        <p className="text-[#4A3728] dark:text-[#8B949E] leading-relaxed text-justify">
          {p.shortBio}
        </p>
      </section>

      {/* Faits essentiels */}
      {p.keyFacts?.length > 0 && (
        <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-6 mb-5 shadow-sm">
          <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-4">
            Faits essentiels
          </h2>
          <ul className="space-y-3">
            {p.keyFacts.map((fact, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5 shadow"
                  style={{ backgroundColor: color }}
                >
                  {i + 1}
                </span>
                <span className="text-[#4A3728] dark:text-[#8B949E]">{fact}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Citation */}
      {p.quote && (
        <section className="mb-5">
          <blockquote
            className="rounded-2xl p-6 border-l-4"
            style={{ borderColor: color, backgroundColor: color + '10' }}
          >
            <p className="italic text-[#2C1810] dark:text-[#E6EDF3] text-lg leading-relaxed">
              «&nbsp;{p.quote.text}&nbsp;»
            </p>
            <footer className="text-sm text-[#8B7355] mt-3 font-medium">
              — {p.name}{p.quote.source && <span className="font-normal italic">, {p.quote.source}</span>}
            </footer>
          </blockquote>
        </section>
      )}

      {/* Niveaux scolaires */}
      {p.relatedLevel?.length > 0 && (
        <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-6 shadow-sm">
          <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-3">
            Niveaux scolaires concernés
          </h2>
          <div className="flex flex-wrap gap-2">
            {p.relatedLevel.map((l) => <Badge key={l} variant="empire">{l}</Badge>)}
          </div>
        </section>
      )}
    </div>
  )
}
