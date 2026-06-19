import { useState, useMemo } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { BookMarked, CheckCircle, Lock } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { useAdminStore } from '@/stores/useAdminStore'
import { SearchBar } from '@/components/ui/SearchBar'
import Fuse from 'fuse.js'
import { glossaryData as staticGlossaryData } from '@/data/glossary'
import { useAccess } from '@/hooks/useAccess'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const CATEGORIES = [
  { id: 'all',          label: 'Tous' },
  { id: 'POLITICAL',    label: 'Politique' },
  { id: 'ECONOMIC',     label: 'Économique' },
  { id: 'SOCIAL',       label: 'Social' },
  { id: 'CULTURAL',     label: 'Culturel' },
  { id: 'MILITARY',     label: 'Militaire' },
  { id: 'GEOGRAPHIC',   label: 'Géographique' },
  { id: 'LEGAL',        label: 'Juridique' },
  { id: 'HGGSP_SPECIFIC', label: 'HGGSP' },
]

const CAT_COLORS = {
  POLITICAL: '#2980B9', ECONOMIC: '#27AE60', SOCIAL: '#E67E22',
  CULTURAL: '#8E44AD', MILITARY: '#C0392B', GEOGRAPHIC: '#16A085',
  LEGAL: '#D4AF37', HGGSP_SPECIFIC: '#1B4F72',
}

export default function Glossaire() {
  const [search, setSearch] = useState('')
  const [letter, setLetter] = useState(null)
  const [category, setCategory] = useState('all')
  const { learnedTerms } = useAppStore()
  const { customTerms } = useAdminStore()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { canReadGlossaire } = useAccess()
  const canRead = canReadGlossaire()

  const glossaryData = useMemo(() => [...staticGlossaryData, ...customTerms], [customTerms])

  // Recherche initiale depuis query string
  const initQ = searchParams.get('q') || ''
  const [localSearch, setLocalSearch] = useState(initQ || search)

  const fuse = useMemo(
    () => new Fuse(glossaryData, { keys: ['term', 'definition', 'example'], threshold: 0.3 }),
    []
  )

  const filtered = useMemo(() => {
    const q = localSearch || search
    let data = q.length > 1 ? fuse.search(q).map((r) => r.item) : [...glossaryData]
    if (letter) data = data.filter((t) => t.term.toUpperCase().startsWith(letter))
    if (category !== 'all') {
      if (category === 'HGGSP_SPECIFIC') {
        data = data.filter((t) => t.level?.includes('HGGSP'))
      } else {
        data = data.filter((t) => t.category === category)
      }
    }
    return data.sort((a, b) => a.term.localeCompare(b.term, 'fr'))
  }, [localSearch, search, letter, category])

  const handleSearch = (v) => {
    setLocalSearch(v)
    setSearch(v)
    if (v) setLetter(null)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">
          Glossaire historique
        </h1>
        <p className="text-[#8B7355]">{filtered.length} terme{filtered.length > 1 ? 's' : ''} — {learnedTerms.size} appris</p>
      </div>

      {/* Filtres */}
      <div className="flex flex-col gap-4 mb-6">
        <SearchBar value={localSearch} onChange={handleSearch} placeholder="Rechercher un terme…" />
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                category === cat.id
                  ? 'bg-[#8B4513] text-white'
                  : 'bg-[#E8E0CC] dark:bg-[#30363D] text-[#4A3728] dark:text-[#8B949E] hover:bg-[#D4AF37] hover:text-[#2C1810]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Index alphabétique */}
      <div className="flex flex-wrap gap-1 mb-6 p-3 bg-white dark:bg-[#161B22] rounded-xl border border-[#E8E0CC] dark:border-[#30363D]">
        <button
          onClick={() => setLetter(null)}
          className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
            !letter ? 'bg-[#D4AF37] text-[#2C1810]' : 'hover:bg-[#E8E0CC] dark:hover:bg-[#30363D] text-[#8B7355]'
          }`}
        >
          Tous
        </button>
        {ALPHABET.map((l) => {
          const hasTerms = glossaryData.some((t) => t.term.toUpperCase().startsWith(l))
          return (
            <button
              key={l}
              onClick={() => hasTerms && setLetter(l === letter ? null : l)}
              disabled={!hasTerms}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
                letter === l
                  ? 'bg-[#8B4513] text-white'
                  : hasTerms
                  ? 'hover:bg-[#E8E0CC] dark:hover:bg-[#30363D] text-[#4A3728] dark:text-[#8B949E]'
                  : 'text-[#C4A882] cursor-not-allowed'
              }`}
            >
              {l}
            </button>
          )
        })}
      </div>

      {/* Grille de termes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((term) => {
          const isLearned = learnedTerms.has(term.id)
          const catColor = CAT_COLORS[term.category] || '#8B4513'
          return (
            <div
              key={term.id}
              className="group relative p-4 rounded-xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D] hover:shadow-md hover:-translate-y-0.5 cursor-pointer transition-all duration-200"
              onClick={() => navigate(`/glossaire/${term.id}`)}
            >
              {isLearned && (
                <CheckCircle size={14} className="absolute top-3 right-3 text-[#27AE60]" />
              )}
              <div className="flex items-start gap-2 mb-2">
                <div className="w-1 h-full min-h-8 rounded-full flex-shrink-0" style={{ backgroundColor: catColor }} />
                <div className="flex-1 min-w-0">
                  <h3 className="font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3] leading-tight">
                    {term.term}
                  </h3>
                  {term.isExamKeyword && (
                    <span className="text-xs text-[#D4AF37] font-medium">🎓 Mot-clé Bac</span>
                  )}
                </div>
              </div>
              {canRead ? (
                <p className="text-xs text-[#8B7355] dark:text-[#8B949E] line-clamp-2">{term.simpleDefinition}</p>
              ) : (
                <div className="flex items-center gap-1.5 mt-1">
                  <Lock size={11} className="text-[#D4AF37] flex-shrink-0" />
                  <p
                    className="text-xs text-[#8B7355] line-clamp-1 blur-sm select-none"
                    onClick={(e) => { e.stopPropagation(); navigate('/pricing') }}
                  >
                    {term.simpleDefinition}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <BookMarked size={48} className="text-[#D4AF37] mx-auto mb-4 opacity-40" />
          <p className="text-[#8B7355]">Aucun terme trouvé.</p>
        </div>
      )}

    </div>
  )
}
