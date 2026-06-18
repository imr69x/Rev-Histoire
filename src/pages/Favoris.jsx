import { Link } from 'react-router-dom'
import { Star, BookOpen, Trash2 } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { allFiches } from '@/data/allData'
import { Badge } from '@/components/ui/Badge'

const LEVEL_COLORS = {
  '6e': '#E74C3C', '5e': '#E67E22', '4e': '#F1C40F',
  '3e': '#27AE60', '2nde': '#2980B9', '1ere': '#8E44AD',
  'Terminale': '#C0392B', 'HGGSP': '#1B4F72',
}

export default function Favoris() {
  const { favoriteChapters, toggleFavorite } = useAppStore()

  const favorites = allFiches.filter((f) => favoriteChapters.includes(f.id))

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <Star size={64} className="text-[#D4AF37] opacity-30" />
        <h2 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C1810] dark:text-[#E6EDF3]">
          Aucun favori
        </h2>
        <p className="text-[#8B7355] text-sm text-center max-w-xs">
          Marquez des fiches de révision avec ⭐ pour les retrouver ici rapidement.
        </p>
        <Link
          to="/fiches"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B4513] text-white font-medium text-sm hover:bg-[#A0522D] transition-colors"
        >
          <BookOpen size={16} /> Parcourir les fiches
        </Link>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6 flex items-center gap-3">
        <Star size={24} className="text-[#D4AF37] fill-[#D4AF37]" />
        <div>
          <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3]">
            Mes favoris
          </h1>
          <p className="text-[#8B7355]">{favorites.length} fiche{favorites.length > 1 ? 's' : ''} sauvegardée{favorites.length > 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {favorites.map((fiche) => {
          const color = LEVEL_COLORS[fiche.level] || '#8B4513'
          return (
            <div
              key={fiche.id}
              className="bg-white dark:bg-[#161B22] rounded-xl border border-[#E8E0CC] dark:border-[#30363D] overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="h-1" style={{ backgroundColor: color }} />
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex gap-2 mb-1">
                      <Badge style={{ backgroundColor: color + '20', color }}>{fiche.level}</Badge>
                      <Badge variant="ghost">{fiche.theme}</Badge>
                    </div>
                    <h3 className="font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3]">{fiche.title}</h3>
                    <p className="text-xs text-[#8B7355] mt-1">{fiche.periode}</p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(fiche.id)}
                    className="p-1.5 text-[#8B7355] hover:text-[#C0392B] transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
                <Link
                  to={`/fiches/${fiche.id}`}
                  className="mt-3 flex items-center gap-1 text-sm font-medium text-[#8B4513] hover:text-[#D4AF37] transition-colors"
                >
                  <BookOpen size={14} /> Ouvrir la fiche
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
