import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Calendar, MapPin } from 'lucide-react'
import { SearchBar } from '@/components/ui/SearchBar'
import { Badge } from '@/components/ui/Badge'
import Fuse from 'fuse.js'
import { personalitiesData as staticPersonalities } from '@/data/personalities'
import { useAdminStore } from '@/stores/useAdminStore'

const ERAS = ['Tous', 'Antiquité', 'Moyen Âge', 'Temps Modernes', 'XIXe siècle', 'XXe siècle', 'Contemporain']

const CATEGORIES = [
  { id: 'all', label: 'Toutes' },
  { id: 'POLITICAL', label: 'Politique' },
  { id: 'MILITARY', label: 'Militaire' },
  { id: 'INTELLECTUAL', label: 'Intellectuel' },
  { id: 'RELIGIOUS', label: 'Religieux' },
  { id: 'ARTISTIC', label: 'Artistique' },
  { id: 'SOCIAL', label: 'Social' },
]

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

export default function Personnalites() {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [era, setEra] = useState('Tous')
  const [category, setCategory] = useState('all')
  const { customPersonalities } = useAdminStore()

  const personalitiesData = useMemo(() => [
    ...staticPersonalities,
    ...customPersonalities.map((p) => ({
      ...p,
      birthYear: parseInt(p.birth) || null,
      deathYear: p.death ? parseInt(p.death) || null : null,
      isAlive: !p.death,
      shortBio: p.bio,
      relatedLevel: p.level,
      quote: p.quote ? { text: p.quote } : null,
      category: p.category || 'POLITICAL',
    })),
  ], [customPersonalities])

  const fuse = useMemo(
    () => new Fuse(personalitiesData, { keys: ['name', 'shortBio', 'nationality'], threshold: 0.3 }),
    [personalitiesData]
  )

  const filtered = useMemo(() => {
    let data = search.length > 1
      ? fuse.search(search).map((r) => r.item)
      : [...personalitiesData]
    if (era !== 'Tous') data = data.filter((p) => p.era === era)
    if (category !== 'all') data = data.filter((p) => p.category === category)
    return data.sort((a, b) => a.name.localeCompare(b.name, 'fr', { sensitivity: 'base' }))
  }, [search, era, category])

  return (
    <div className="p-6 max-w-7xl mx-auto animate-fade-in">
      <div className="mb-6">
        <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">
          Personnalités historiques
        </h1>
        <p className="text-[#8B7355]">{filtered.length} personnalité{filtered.length > 1 ? 's' : ''}</p>
      </div>

      {/* Filtres */}
      <div className="flex flex-col gap-4 mb-6">
        <SearchBar value={search} onChange={setSearch} placeholder="Rechercher une personnalité…" />
        <div className="flex flex-wrap gap-2">
          {ERAS.map((e) => (
            <button
              key={e}
              onClick={() => setEra(e)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                era === e
                  ? 'bg-[#8B4513] text-white'
                  : 'bg-[#E8E0CC] dark:bg-[#30363D] text-[#4A3728] dark:text-[#8B949E] hover:bg-[#D4AF37] hover:text-[#2C1810]'
              }`}
            >
              {e}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                category === cat.id
                  ? 'bg-[#1B4F72] text-white'
                  : 'bg-[#E8E0CC] dark:bg-[#30363D] text-[#4A3728] dark:text-[#8B949E] hover:bg-[#E8E0CC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((p) => {
          const catColor = CAT_COLORS[p.category] || '#8B4513'
          return (
            <div
              key={p.id}
              className="group cursor-pointer bg-white dark:bg-[#161B22] rounded-xl border border-[#E8E0CC] dark:border-[#30363D] hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden"
              onClick={() => navigate(`/personnalites/${p.id}`)}
            >
              <div
                className="h-32 flex items-center justify-center text-white text-3xl font-['Playfair_Display'] font-bold"
                style={{ background: `linear-gradient(135deg, ${catColor}CC, ${catColor}66)` }}
              >
                {getInitials(p.name)}
              </div>
              <div className="p-4">
                <h3 className="font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3] leading-tight mb-1">
                  {p.name}
                </h3>
                <div className="flex items-center gap-1 text-xs text-[#8B7355] mb-2">
                  <Calendar size={10} />
                  <span>{formatYear(p.birthYear)} – {formatYear(p.deathYear)}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#8B7355] mb-3">
                  <MapPin size={10} />
                  <span>{p.nationality}</span>
                </div>
                <Badge style={{ backgroundColor: catColor + '20', color: catColor }} className="text-xs">
                  {CAT_LABELS[p.category] || p.category}
                </Badge>
              </div>
            </div>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <Users size={48} className="text-[#D4AF37] mx-auto mb-4 opacity-40" />
          <p className="text-[#8B7355]">Aucune personnalité trouvée.</p>
        </div>
      )}
    </div>
  )
}
