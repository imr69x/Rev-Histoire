import { useState, useMemo, useRef } from 'react'
import { ZoomIn, ZoomOut } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'
import { Badge } from '@/components/ui/Badge'

const EVENTS = [
  { year: -3000, title: 'Premières cités-États de Sumer', type: 'politique', level: '6e', region: 'Asie' },
  { year: -2560, title: 'Construction de la pyramide de Khéops', type: 'culture', level: '6e', region: 'Afrique' },
  { year: -1792, title: 'Code d\'Hammourabi', type: 'politique', level: '6e', region: 'Asie' },
  { year: -776,  title: 'Premiers Jeux Olympiques', type: 'culture', level: '6e', region: 'Europe' },
  { year: -753,  title: 'Fondation légendaire de Rome', type: 'politique', level: '6e', region: 'Europe' },
  { year: -508,  title: 'Réformes de Clisthène — démocratie athénienne', type: 'politique', level: '6e', region: 'Europe' },
  { year: -490,  title: 'Bataille de Marathon', type: 'guerre', level: '6e', region: 'Europe' },
  { year: -336,  title: 'Alexandre le Grand — roi de Macédoine', type: 'politique', level: '6e', region: 'Europe' },
  { year: -264,  title: 'Premières guerres puniques (Rome vs Carthage)', type: 'guerre', level: '6e', region: 'Europe' },
  { year: -44,   title: 'Assassinat de Jules César', type: 'politique', level: '6e', region: 'Europe' },
  { year: -27,   title: 'Auguste — premier Empereur romain', type: 'politique', level: '6e', region: 'Europe' },
  { year: 0,     title: 'Naissance de Jésus de Nazareth', type: 'religion', level: '6e', region: 'Asie' },
  { year: 313,   title: 'Édit de Milan — tolérance du christianisme', type: 'religion', level: '6e', region: 'Europe' },
  { year: 476,   title: 'Chute de l\'Empire romain d\'Occident', type: 'politique', level: '5e', region: 'Europe' },
  { year: 570,   title: 'Naissance de Mohammed', type: 'religion', level: '5e', region: 'Asie' },
  { year: 622,   title: 'Hégire — fuite de Muhammad vers Médine', type: 'religion', level: '5e', region: 'Asie' },
  { year: 732,   title: 'Bataille de Poitiers — Charles Martel', type: 'guerre', level: '5e', region: 'Europe' },
  { year: 800,   title: 'Couronnement de Charlemagne à Rome', type: 'politique', level: '5e', region: 'Europe' },
  { year: 987,   title: 'Hugues Capet — fondation de la dynastie capétienne', type: 'politique', level: '5e', region: 'Europe' },
  { year: 1066,  title: 'Guillaume le Conquérant envahit l\'Angleterre', type: 'guerre', level: '5e', region: 'Europe' },
  { year: 1095,  title: 'Première Croisade — appel d\'Urbain II', type: 'religion', level: '5e', region: 'Europe' },
  { year: 1215,  title: 'Magna Carta — limitation du pouvoir royal', type: 'politique', level: '5e', region: 'Europe' },
  { year: 1337,  title: 'Début de la guerre de Cent Ans', type: 'guerre', level: '5e', region: 'Europe' },
  { year: 1347,  title: 'La Peste noire ravage l\'Europe', type: 'social', level: '5e', region: 'Europe' },
  { year: 1429,  title: 'Jeanne d\'Arc lève le siège d\'Orléans', type: 'guerre', level: '5e', region: 'Europe' },
  { year: 1450,  title: 'Gutenberg invente l\'imprimerie', type: 'culture', level: '5e', region: 'Europe' },
  { year: 1453,  title: 'Chute de Constantinople', type: 'politique', level: '5e', region: 'Europe' },
  { year: 1492,  title: 'Colomb découvre l\'Amérique', type: 'geo', level: '4e', region: 'Amériques' },
  { year: 1498,  title: 'Vasco de Gama atteint l\'Inde', type: 'geo', level: '4e', region: 'Asie' },
  { year: 1517,  title: 'Luther — début de la Réforme protestante', type: 'religion', level: '4e', region: 'Europe' },
  { year: 1532,  title: 'Pizarro conquiert l\'Empire inca', type: 'guerre', level: '4e', region: 'Amériques' },
  { year: 1598,  title: 'Édit de Nantes — tolérance religieuse', type: 'politique', level: '4e', region: 'Europe' },
  { year: 1648,  title: 'Traité de Westphalie — système des États', type: 'politique', level: '4e', region: 'Europe' },
  { year: 1661,  title: 'Louis XIV — règne personnel (absolutisme)', type: 'politique', level: '4e', region: 'Europe' },
  { year: 1762,  title: 'Rousseau — Du Contrat Social', type: 'culture', level: '4e', region: 'Europe' },
  { year: 1776,  title: 'Déclaration d\'Indépendance américaine', type: 'politique', level: '4e', region: 'Amériques' },
  { year: 1789,  title: 'Révolution française — prise de la Bastille', type: 'politique', level: '4e', region: 'Europe' },
  { year: 1793,  title: 'La Terreur — Robespierre', type: 'politique', level: '4e', region: 'Europe' },
  { year: 1799,  title: 'Coup d\'État du 18 Brumaire — Napoléon', type: 'politique', level: '4e', region: 'Europe' },
  { year: 1804,  title: 'Napoléon se couronne Empereur', type: 'politique', level: '4e', region: 'Europe' },
  { year: 1815,  title: 'Défaite de Waterloo — fin de l\'Empire', type: 'guerre', level: '4e', region: 'Europe' },
  { year: 1830,  title: 'Révolution de Juillet en France', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1848,  title: 'Printemps des peuples — révolutions en Europe', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1848,  title: 'Manifeste du Parti Communiste (Marx)', type: 'culture', level: '3e', region: 'Europe' },
  { year: 1861,  title: 'Unification de l\'Italie', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1865,  title: 'Abolition de l\'esclavage aux États-Unis', type: 'social', level: '3e', region: 'Amériques' },
  { year: 1871,  title: 'Unification de l\'Allemagne sous Bismarck', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1885,  title: 'Conférence de Berlin — partage de l\'Afrique', type: 'geo', level: '3e', region: 'Afrique' },
  { year: 1898,  title: 'Affaire Dreyfus', type: 'social', level: '3e', region: 'Europe' },
  { year: 1905,  title: 'Révolution russe de 1905 — Dimanche Sanglant', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1914,  title: 'Début de la Première Guerre mondiale', type: 'guerre', level: '3e', region: 'Europe' },
  { year: 1916,  title: 'Bataille de Verdun — 700 000 victimes', type: 'guerre', level: '3e', region: 'Europe' },
  { year: 1917,  title: 'Révolutions russes — Lénine et les bolcheviks', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1918,  title: 'Armistice du 11 novembre', type: 'guerre', level: '3e', region: 'Europe' },
  { year: 1919,  title: 'Traité de Versailles', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1929,  title: 'Krach boursier — Grande Dépression', type: 'economie', level: '3e', region: 'Amériques' },
  { year: 1933,  title: 'Hitler chancelier d\'Allemagne', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1936,  title: 'Front Populaire — Léon Blum', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1939,  title: 'Début de la Seconde Guerre mondiale', type: 'guerre', level: '3e', region: 'Europe' },
  { year: 1940,  title: 'Appel du 18 juin — De Gaulle / Résistance', type: 'guerre', level: '3e', region: 'Europe' },
  { year: 1942,  title: 'Conférence de Wannsee — planification de la Shoah', type: 'guerre', level: '3e', region: 'Europe' },
  { year: 1944,  title: 'Débarquement de Normandie (6 juin)', type: 'guerre', level: '3e', region: 'Europe' },
  { year: 1945,  title: 'Hiroshima — bombe atomique (6 août)', type: 'guerre', level: '3e', region: 'Asie' },
  { year: 1945,  title: 'Création de l\'ONU', type: 'politique', level: '3e', region: 'Amériques' },
  { year: 1947,  title: 'Plan Marshall — début de la Guerre Froide', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1948,  title: 'Création de l\'État d\'Israël', type: 'politique', level: 'Terminale', region: 'Asie' },
  { year: 1949,  title: 'République Populaire de Chine (Mao)', type: 'politique', level: 'Terminale', region: 'Asie' },
  { year: 1954,  title: 'Début de la guerre d\'Algérie', type: 'guerre', level: '1ere', region: 'Afrique' },
  { year: 1957,  title: 'Traité de Rome — création de la CEE', type: 'politique', level: '1ere', region: 'Europe' },
  { year: 1958,  title: 'Ve République — De Gaulle président', type: 'politique', level: '1ere', region: 'Europe' },
  { year: 1961,  title: 'Construction du Mur de Berlin', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1962,  title: 'Crise des missiles de Cuba', type: 'politique', level: '3e', region: 'Amériques' },
  { year: 1962,  title: 'Indépendance de l\'Algérie — Accords d\'Évian', type: 'politique', level: '1ere', region: 'Afrique' },
  { year: 1968,  title: 'Mai 68 en France', type: 'social', level: '1ere', region: 'Europe' },
  { year: 1973,  title: 'Choc pétrolier — crise économique mondiale', type: 'economie', level: 'Terminale', region: 'Asie' },
  { year: 1989,  title: 'Chute du Mur de Berlin (9 novembre)', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1991,  title: 'Dissolution de l\'URSS', type: 'politique', level: '3e', region: 'Europe' },
  { year: 1992,  title: 'Traité de Maastricht — création de l\'UE', type: 'politique', level: '1ere', region: 'Europe' },
  { year: 1994,  title: 'Génocide au Rwanda', type: 'guerre', level: 'Terminale', region: 'Afrique' },
  { year: 2001,  title: 'Attentats du 11 septembre', type: 'guerre', level: 'Terminale', region: 'Amériques' },
  { year: 2008,  title: 'Crise financière mondiale', type: 'economie', level: 'Terminale', region: 'Amériques' },
  { year: 2015,  title: 'Accord de Paris sur le climat', type: 'geo', level: 'HGGSP', region: 'Europe' },
  { year: 2016,  title: 'Brexit — référendum britannique', type: 'politique', level: 'HGGSP', region: 'Europe' },
  { year: 2020,  title: 'Pandémie de COVID-19', type: 'social', level: 'Terminale', region: 'Asie' },
  { year: 2022,  title: 'Invasion russe de l\'Ukraine', type: 'guerre', level: 'HGGSP', region: 'Europe' },
  { year: 2023,  title: 'Guerre Hamas-Israël (7 octobre)', type: 'guerre', level: 'HGGSP', region: 'Asie' },
]

const TYPE_COLORS = {
  guerre:   '#C0392B', // rouge foncé — guerre
  culture:  '#8E44AD', // violet — culture
  politique:'#2980B9', // bleu — politique
  economie: '#27AE60', // vert — économie
  religion: '#E67E22', // orange — religion
  geo:      '#16A085', // vert-émeraude — géographie
  social:   '#D81B60', // rose foncé — social (≠ rouge guerre)
  science:  '#0288D1', // bleu ciel — science (≠ teal géo)
}
const TYPE_LABELS = {
  guerre: 'Guerre', culture: 'Culture', politique: 'Politique',
  economie: 'Économie', religion: 'Religion', geo: 'Géographie',
  social: 'Social', science: 'Science',
}

const MIN_YEAR = -3000
const MAX_YEAR = 2024
const TOTAL_YEARS = MAX_YEAR - MIN_YEAR
const LABEL_W = 116  // largeur du label en px (collision box)
const LANE_H = 62    // hauteur par couloir
const N_LANES = 8    // max couloirs de chaque côté

// Échelle non-linéaire : plus d'espace pour les périodes modernes
function getXPct(year) {
  // -3000→1500 : 40% de la largeur  (4500 ans → 0.009%/an)
  // 1500→1800  : 20% de la largeur  (300 ans  → 0.067%/an)
  // 1800→2024  : 40% de la largeur  (224 ans  → 0.179%/an)
  if (year <= 1500) return ((year - MIN_YEAR) / (1500 - MIN_YEAR)) * 40
  if (year <= 1800) return 40 + ((year - 1500) / 300) * 20
  return 60 + ((year - 1800) / (MAX_YEAR - 1800)) * 40
}

function assignLanes(events, trackWidth) {
  const items = events.map(e => ({
    ...e,
    px: getXPct(e.year) / 100 * trackWidth,
  })).sort((a, b) => a.px - b.px)

  const laneEnd = {}
  const ORDER = []
  for (let i = 1; i <= N_LANES; i++) { ORDER.push(i); ORDER.push(-i) }

  items.forEach(item => {
    const half = LABEL_W / 2
    const s = item.px - half
    // Cherche le couloir libre le plus proche du centre
    let chosen = null
    for (const lane of ORDER) {
      if ((laneEnd[lane] ?? -Infinity) + 4 <= s) { chosen = lane; break }
    }
    // Si tous occupés, prend celui dont la fin est la plus ancienne (moins de chevauchement)
    if (chosen === null) {
      chosen = ORDER.reduce((best, lane) => (laneEnd[lane] ?? -Infinity) < (laneEnd[best] ?? -Infinity) ? lane : best, ORDER[0])
    }
    laneEnd[chosen] = item.px + half
    item.lane = chosen
  })
  return items
}

export default function Frise() {
  const [zoom, setZoom] = useState(2)
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)

  const filtered = EVENTS.filter(e => filter === 'all' || e.type === filter)

  const BASE_TRACK = 4000
  const trackWidth = BASE_TRACK * zoom

  const placed = useMemo(
    () => assignLanes(filtered, trackWidth),
    [filtered, trackWidth]
  )

  const getX = (year) => getXPct(year) / 100 * trackWidth

  // Hauteur dynamique : centre + N_LANES couloirs de chaque côté
  const CENTER = N_LANES * LANE_H + 40
  const TOTAL_H = CENTER * 2

  return (
    <div className="p-6 max-w-full mx-auto animate-fade-in">
      <div className="mb-4">
        <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">
          Frise chronologique
        </h1>
        <p className="text-[#8B7355]">{filtered.length} événements de -3000 à 2024</p>
      </div>

      {/* Contrôles */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-2 bg-white dark:bg-[#161B22] rounded-xl border border-[#E8E0CC] dark:border-[#30363D] px-3 py-1.5">
          <button onClick={() => setZoom(z => Math.max(0.1, +(z - 0.1).toFixed(2)))} className="hover:text-[#D4AF37] text-xs px-1">-10%</button>
          <button onClick={() => setZoom(z => Math.max(0.25, +(z - 0.25).toFixed(2)))} className="hover:text-[#D4AF37]"><ZoomOut size={16}/></button>
          <span className="text-sm text-[#8B7355] w-12 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom(z => Math.min(8, +(z + 0.25).toFixed(2)))} className="hover:text-[#D4AF37]"><ZoomIn size={16}/></button>
          <button onClick={() => setZoom(z => Math.min(8, +(z + 0.1).toFixed(2)))} className="hover:text-[#D4AF37] text-xs px-1">+10%</button>
        </div>
        <div className="flex flex-wrap gap-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-full text-xs font-medium ${filter === 'all' ? 'bg-[#8B4513] text-white' : 'bg-[#E8E0CC] dark:bg-[#30363D] text-[#4A3728] dark:text-[#8B949E]'}`}
          >Tous</button>
          {Object.entries(TYPE_LABELS).map(([type, label]) => (
            <button
              key={type}
              onClick={() => setFilter(filter === type ? 'all' : type)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all"
              style={filter === type
                ? { backgroundColor: TYPE_COLORS[type], color: 'white' }
                : { backgroundColor: TYPE_COLORS[type] + '22', color: TYPE_COLORS[type] }}
            >{label}</button>
          ))}
        </div>
      </div>

      {/* Frise */}
      <div className="overflow-x-auto pb-2 bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D]">
        <div style={{ width: `${trackWidth}px`, minWidth: '100%', position: 'relative', height: `${TOTAL_H}px` }}>

          {/* Ligne centrale */}
          <div style={{ position: 'absolute', top: `${CENTER}px`, left: 0, right: 0, height: '3px', background: '#D4AF37', borderRadius: '99px' }} />

          {/* Repères de siècles */}
          {Array.from({ length: 51 }, (_, i) => MIN_YEAR + i * 100)
            .filter(y => y % 500 === 0)
            .map(y => {
              const x = getX(y)
              return (
                <div key={y} style={{ position: 'absolute', left: x, top: CENTER - 14, transform: 'translateX(-50%)' }}>
                  <div style={{ width: 1, height: 28, background: 'rgba(139,115,85,0.3)', margin: '0 auto' }} />
                  <div style={{ fontSize: 10, color: '#8B7355', textAlign: 'center', whiteSpace: 'nowrap', marginTop: 2 }}>
                    {y < 0 ? `${Math.abs(y)} av.` : y}
                  </div>
                </div>
              )
            })}

          {/* Événements */}
          {placed.map((evt, i) => {
            const color = TYPE_COLORS[evt.type] || '#8B4513'
            const above = evt.lane > 0
            const distance = Math.abs(evt.lane) * LANE_H
            const connectorH = distance - 16
            const labelTop = above
              ? CENTER - distance - 34
              : CENTER + distance + 4

            return (
              <button
                key={i}
                onClick={() => setSelected(evt)}
                title={evt.title}
                style={{
                  position: 'absolute',
                  left: evt.px,
                  top: CENTER - 6,
                  transform: 'translateX(-50%)',
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                }}
              >
                {/* Connecteur */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 1,
                  height: connectorH,
                  background: color + 'AA',
                  ...(above ? { bottom: 6 } : { top: 6 }),
                }} />

                {/* Point */}
                <div style={{
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: color,
                  border: '2px solid white',
                  position: 'relative',
                  zIndex: 2,
                  transition: 'transform 0.15s',
                }} />

                {/* Label */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: labelTop - CENTER + 6,
                  transform: 'translateX(-50%)',
                  width: LABEL_W,
                  textAlign: 'center',
                  pointerEvents: 'none',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 600, lineHeight: 1.3, color, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {evt.title}
                  </div>
                  <div style={{ fontSize: 9, color: '#8B7355', marginTop: 1 }}>
                    {evt.year < 0 ? `${Math.abs(evt.year)} av.` : evt.year}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Légende */}
      <div className="flex flex-wrap gap-3 mt-3">
        {Object.entries(TYPE_LABELS).map(([type, label]) => (
          <div key={type} className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: TYPE_COLORS[type] }} />
            <span className="text-xs text-[#8B7355]">{label}</span>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={!!selected} onClose={() => setSelected(null)} title={selected?.title} size="sm">
        {selected && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 flex-wrap">
              <Badge style={{ backgroundColor: TYPE_COLORS[selected.type] + '20', color: TYPE_COLORS[selected.type] }}>
                {TYPE_LABELS[selected.type]}
              </Badge>
              <Badge variant="empire">{selected.level}</Badge>
              <Badge variant="ghost">{selected.region}</Badge>
            </div>
            <p className="text-2xl font-bold text-[#D4AF37]">
              {selected.year < 0 ? `${Math.abs(selected.year)} av. J.-C.` : selected.year}
            </p>
          </div>
        )}
      </Modal>
    </div>
  )
}
