import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BookOpen, Star, Clock, ChevronRight, Filter } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { SearchBar } from '@/components/ui/SearchBar'
import { LevelSelector, LEVELS } from '@/components/ui/LevelSelector'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import Fuse from 'fuse.js'
import { allFiches } from '@/data/allData'

const LEVEL_COLORS = {
  '6e': '#E74C3C', '5e': '#E67E22', '4e': '#F1C40F',
  '3e': '#27AE60', '2nde': '#2980B9', '1ere': '#8E44AD',
  'Terminale': '#C0392B', 'HGGSP': '#1B4F72',
}

export default function Fiches() {
  const [search, setSearch] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const { favoriteChapters, toggleFavorite } = useAppStore()
  const [searchParams] = useSearchParams()

  const fuse = useMemo(
    () => new Fuse(allFiches, { keys: ['title', 'theme', 'content.context', 'content.vocabulary'], threshold: 0.3 }),
    []
  )

  const filtered = useMemo(() => {
    let data = search.length > 1 ? fuse.search(search).map((r) => r.item) : allFiches
    if (selectedLevel !== 'all') data = data.filter((f) => f.level === selectedLevel)
    if (searchParams.get('filter') === 'essentiel') {
      data = data.filter((f) => f.essential)
    }
    return data
  }, [search, selectedLevel, searchParams])

  // Grouper par niveau
  const byLevel = useMemo(() => {
    if (selectedLevel !== 'all') return { [selectedLevel]: filtered }
    const groups = {}
    for (const f of filtered) {
      if (!groups[f.level]) groups[f.level] = []
      groups[f.level].push(f)
    }
    return groups
  }, [filtered, selectedLevel])

  const levelOrder = ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'HGGSP']

  return (
    <div className="p-6 max-w-7xl mx-auto animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">
          Fiches de révision
        </h1>
        <p className="text-[#8B7355]">{filtered.length} fiche{filtered.length > 1 ? 's' : ''} disponible{filtered.length > 1 ? 's' : ''}</p>
      </div>

      {/* Filtres */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Rechercher une fiche…"
          className="flex-1"
        />
        <LevelSelector selected={selectedLevel} onSelect={setSelectedLevel} />
      </div>

      {/* Grille par niveau */}
      {levelOrder
        .filter((lvl) => byLevel[lvl]?.length > 0)
        .map((lvl) => (
          <div key={lvl} className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-2 h-8 rounded-full"
                style={{ backgroundColor: LEVEL_COLORS[lvl] }}
              />
              <h2 className="text-xl font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3]">
                {lvl === 'HGGSP' ? 'HGGSP — Spécialité' : `Classe de ${lvl}`}
              </h2>
              <Badge variant="ghost">{byLevel[lvl].length} fiche{byLevel[lvl].length > 1 ? 's' : ''}</Badge>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {byLevel[lvl].map((fiche) => (
                <FicheCard
                  key={fiche.id}
                  fiche={fiche}
                  isFav={favoriteChapters.includes(fiche.id)}
                  onToggleFav={() => toggleFavorite(fiche.id)}
                  levelColor={LEVEL_COLORS[lvl]}
                />
              ))}
            </div>
          </div>
        ))}

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <BookOpen size={48} className="text-[#D4AF37] mx-auto mb-4 opacity-40" />
          <p className="text-[#8B7355]">Aucune fiche trouvée pour cette recherche.</p>
        </div>
      )}
    </div>
  )
}

function FicheCard({ fiche, isFav, onToggleFav, levelColor }) {
  return (
    <div className="group relative bg-white dark:bg-[#161B22] rounded-xl border border-[#E8E0CC] dark:border-[#30363D] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden">
      <div className="h-1" style={{ backgroundColor: levelColor }} />
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[#8B7355] dark:text-[#8B949E] mb-1">{fiche.theme}</p>
            <h3 className="font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3] leading-tight line-clamp-2">
              {fiche.title}
            </h3>
          </div>
          <button
            onClick={(e) => { e.preventDefault(); onToggleFav() }}
            className="flex-shrink-0 p-1 rounded-lg hover:bg-[#E8E0CC] dark:hover:bg-[#30363D] transition-colors"
          >
            <Star
              size={16}
              className={isFav ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#8B7355]'}
            />
          </button>
        </div>
        <div className="flex items-center gap-1 text-xs text-[#8B7355] dark:text-[#8B949E] mb-3">
          <Clock size={12} />
          <span>{fiche.periode}</span>
        </div>
        {fiche.content?.keyPoints && (
          <p className="text-xs text-[#4A3728] dark:text-[#8B949E] line-clamp-2 mb-3">
            {fiche.content.keyPoints[0]}
          </p>
        )}
        <div className="flex items-end justify-between gap-2">
          <div className="flex flex-wrap gap-1 min-w-0 overflow-hidden flex-1">
            {fiche.content?.vocabulary?.slice(0, 2).map((v) => (
              <Badge key={v} variant="ghost" className="text-xs break-words max-w-full whitespace-normal leading-snug">{v}</Badge>
            ))}
          </div>
          <Link
            to={`/fiches/${fiche.id}`}
            className="flex-shrink-0 flex items-center gap-1 text-xs font-medium text-[#8B4513] hover:text-[#D4AF37] transition-colors"
          >
            Lire <ChevronRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  )
}
