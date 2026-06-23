import { useState, useMemo } from 'react'
import { Globe, Search, ChevronRight, Building2, Swords, Crown, User, Info, Landmark, Wheat, Music, MapPin } from 'lucide-react'
import { paysData } from '@/data/pays'
import CountryMap from '@/components/CountryMap'

const CONTINENTS = ['Tous', 'Europe', 'Moyen-Orient', 'Asie', 'Afrique', 'Amériques', 'Océanie']

const SURNOMS = {
  france: "L'Hexagone · Pays des droits de l'Homme",
  royaume_uni: "Albion · Le Royaume de Sa Majesté",
  allemagne: "Das Vaterland · Pays des poètes et penseurs",
  espagne: "Pays du Taureau · Terre de Flamenco",
  portugal: "Au bout du monde · O País das Descobertas",
  italie: "La Botte · Berceau de la Renaissance",
  grece: "Hellas · Berceau de la démocratie",
  russie: "L'Ours russe · La Sainte Russie",
  pologne: "Le Christ des nations · Le Rempart de l'Occident",
  irak: "La Terre des deux fleuves · Berceau des civilisations",
  egypte: "Le Don du Nil · Mère de toutes les civilisations",
  iran: "La Perse immortelle · Pays du Lion et du Soleil",
  turquie: "Le Carrefour de deux mondes · Pont entre Orient et Occident",
  chine: "L'Empire du Milieu · Le Dragon d'Asie",
  inde: "Bharat · Le Sous-continent aux mille visages",
  mongolie: "Pays du Ciel Bleu éternel · Steppes infinies",
  japon: "Nihon · Pays du Soleil Levant",
  ethiopie: "Le Toit de l'Afrique · Berceau de l'Humanité",
  mali: "L'Empire de l'Or · Pays de Mansa Moussa",
  afrique_du_sud: "La Nation arc-en-ciel · Rainbow Nation",
  maroc: "Royaume Chérifien · Pays du Soleil Couchant",
  etats_unis: "The New World · Uncle Sam's Land",
  mexique: "L'Aigle et le Serpent · Tierra de Maíz",
  bresil: "O País do Futuro · Le Géant de l'Amazonie",
  haiti: "La Perle des Antilles · Première République noire",
  australie: "The Lucky Country · Terra Australis",
}

const FLAG_CODES = {
  france: 'fr', royaume_uni: 'gb', allemagne: 'de', espagne: 'es', portugal: 'pt',
  italie: 'it', grece: 'gr', russie: 'ru', pologne: 'pl', irak: 'iq',
  egypte: 'eg', iran: 'ir', turquie: 'tr', chine: 'cn', inde: 'in',
  mongolie: 'mn', japon: 'jp', ethiopie: 'et', mali: 'ml', afrique_du_sud: 'za',
  maroc: 'ma', etats_unis: 'us', mexique: 'mx', bresil: 'br', haiti: 'ht',
  australie: 'au', arabie_saoudite: 'sa', coree_du_sud: 'kr',
  pays_bas: 'nl', tunisie: 'tn',
}

function getFlagUrl(id, size = 80) {
  const code = FLAG_CODES[id]
  if (!code) return null
  return `https://flagcdn.com/w${size}/${code}.png`
}

const CONTINENT_COLORS = {
  Europe: '#2980B9',
  'Moyen-Orient': '#E67E22',
  Asie: '#C0392B',
  Afrique: '#27AE60',
  Amériques: '#8E44AD',
  Océanie: '#16A085',
}

const TABS = [
  { id: 'resume',     label: 'Résumé',           icon: Info },
  { id: 'histoire',   label: 'Histoire',          icon: Landmark },
  { id: 'dynasties',  label: 'Dynasties',         icon: Crown },
  { id: 'batailles',  label: 'Batailles',         icon: Swords },
  { id: 'economie',   label: 'Économie & Culture',icon: Wheat },
  { id: 'geographie', label: 'Géographie',        icon: MapPin },
  { id: 'carte',      label: 'Carte',             icon: Globe },
]

const GEO_LABELS = {
  montagnes:  '⛰️ Reliefs & montagnes',
  fleuves:    '🌊 Fleuves & lacs',
  deserts:    '🏜️ Déserts & steppes',
  cotes:      '🏖️ Littoral & mers',
  sites:      '🏛️ Sites remarquables',
  forets:     '🌲 Forêts & parcs',
  climat:     '🌤️ Climat',
}

export default function Pays() {
  const [search, setSearch] = useState('')
  const [continent, setContinent] = useState('Tous')
  const [selected, setSelected] = useState(paysData[0])
  const [tab, setTab] = useState('resume')

  const filtered = useMemo(() => {
    let data = [...paysData]
    if (continent !== 'Tous') data = data.filter((p) => p.continent === continent)
    if (search.trim().length > 0) {
      const q = search.toLowerCase()
      data = data.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.capital.toLowerCase().includes(q) ||
          p.continent.toLowerCase().includes(q)
      )
    }
    return data
  }, [search, continent])

  const grouped = useMemo(() => {
    const groups = {}
    for (const p of filtered) {
      if (!groups[p.continent]) groups[p.continent] = []
      groups[p.continent].push(p)
    }
    return groups
  }, [filtered])

  function selectPays(p) {
    setSelected(p)
    setTab('resume')
  }

  return (
    <div className="flex h-[calc(100vh-80px)] overflow-hidden animate-fade-in">
      {/* ── Panneau gauche ── */}
      <aside className="w-72 flex-shrink-0 flex flex-col border-r border-[#E8E0CC] dark:border-[#30363D] bg-white dark:bg-[#0D1117]">
        {/* En-tête sidebar */}
        <div className="p-4 border-b border-[#E8E0CC] dark:border-[#30363D]">
          <div className="flex items-center gap-2 mb-3">
            <Globe size={18} className="text-[#D4AF37]" />
            <h2 className="font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3]">
              Histoire des pays
            </h2>
          </div>
          {/* Recherche */}
          <div className="relative mb-3">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8B7355]" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher…"
              className="w-full pl-8 pr-3 py-2 text-sm rounded-lg border border-[#E8E0CC] dark:border-[#30363D] bg-white dark:bg-[#161B22] text-[#2C1810] dark:text-[#E6EDF3] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>
          {/* Filtre continent */}
          <div className="flex flex-wrap gap-1">
            {CONTINENTS.map((c) => (
              <button
                key={c}
                onClick={() => setContinent(c)}
                className={`px-2 py-0.5 rounded-full text-xs font-medium transition-all ${
                  continent === c
                    ? 'bg-[#8B4513] text-white'
                    : 'bg-[#E8E0CC] dark:bg-[#21262D] text-[#4A3728] dark:text-[#8B949E] hover:bg-[#D4AF37]/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Liste des pays */}
        <div className="flex-1 overflow-y-auto py-2">
          {Object.entries(grouped).map(([cont, pays]) => (
            <div key={cont}>
              <div className="px-4 py-2 sticky top-0 z-10 bg-[#FAF7F2] dark:bg-[#0D1117]">
                <span
                  className="text-xs font-bold uppercase tracking-wider"
                  style={{ color: CONTINENT_COLORS[cont] || '#8B7355' }}
                >
                  {cont} ({pays.length})
                </span>
              </div>
              {pays.map((p) => (
                <button
                  key={p.id}
                  onClick={() => selectPays(p)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all ${
                    selected?.id === p.id
                      ? 'bg-[#D4AF37]/20 border-r-2 border-[#D4AF37]'
                      : 'hover:bg-[#E8E0CC]/50 dark:hover:bg-[#21262D]'
                  }`}
                >
                  {getFlagUrl(p.id) ? (
                    <img
                      src={getFlagUrl(p.id)}
                      alt={p.name}
                      className="w-9 h-6 object-cover rounded shadow-sm flex-shrink-0"
                    />
                  ) : (
                    <span className="text-xl leading-none">{p.flag}</span>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-[#2C1810] dark:text-[#E6EDF3] truncate">
                      {p.name}
                    </div>
                    <div className="text-xs text-[#8B7355] truncate">{p.capital}</div>
                  </div>
                  {selected?.id === p.id && <ChevronRight size={14} className="text-[#D4AF37] flex-shrink-0" />}
                </button>
              ))}
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-[#8B7355] text-sm px-4">Aucun pays trouvé.</div>
          )}
        </div>
      </aside>

      {/* ── Panneau droit ── */}
      <main className="flex-1 overflow-y-auto bg-white dark:bg-[#0D1117]">
        {selected ? (
          <div>
            {/* Hero */}
            <div
              className="relative h-56 flex items-end p-6"
              style={{
                background: `linear-gradient(135deg, ${selected.color}DD 0%, ${selected.color}66 50%, transparent 100%), linear-gradient(to bottom, #0d1117, #1a1a2e)`,
              }}
            >
              <div className="flex items-end gap-5 z-10 w-full">
                {getFlagUrl(selected.id, 320) ? (
                  <img
                    src={getFlagUrl(selected.id, 320)}
                    alt={selected.name}
                    className="w-40 h-24 object-cover rounded-xl shadow-xl flex-shrink-0 border-2 border-white/20"
                  />
                ) : (
                  <span className="text-8xl drop-shadow-lg leading-none flex-shrink-0">{selected.flag}</span>
                )}
                <div className="flex-1 min-w-0">
                  <h1 className="font-['Playfair_Display'] text-3xl font-bold text-white drop-shadow leading-tight">
                    {selected.name}
                  </h1>
                  {(selected.surnom || SURNOMS[selected.id]) && (
                    <p className="text-[#D4AF37] text-sm font-medium mt-1 italic">
                      ✦ {selected.surnom || SURNOMS[selected.id]}
                    </p>
                  )}
                  <p className="text-white/60 text-xs mt-1.5">
                    {selected.capital} · {selected.continent} · {selected.regime}
                  </p>
                </div>
              </div>
            </div>

            {/* Infos rapides */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-6 py-4 border-b border-[#E8E0CC] dark:border-[#30363D] bg-[#FAF7F2] dark:bg-[#161B22]">
              {[
                { label: 'Population', value: selected.population },
                { label: 'Superficie', value: selected.area },
                { label: 'Régime', value: selected.regime },
                { label: 'Langue', value: selected.langue },
              ].map((info) => (
                <div key={info.label} className="text-center">
                  <div className="text-xs text-[#8B7355] uppercase tracking-wider mb-1">{info.label}</div>
                  <div className="text-sm font-medium text-[#2C1810] dark:text-[#E6EDF3] leading-tight">{info.value}</div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#E8E0CC] dark:border-[#30363D] px-6">
              {TABS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setTab(id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all -mb-px ${
                    tab === id
                      ? 'border-[#D4AF37] text-[#8B4513] dark:text-[#D4AF37]'
                      : 'border-transparent text-[#8B7355] hover:text-[#2C1810] dark:hover:text-[#E6EDF3]'
                  }`}
                >
                  <Icon size={15} />
                  {label}
                </button>
              ))}
            </div>

            {/* Contenu des onglets */}
            <div className="p-6 space-y-6">
              {/* ── Résumé ── */}
              {tab === 'resume' && (
                <div className="space-y-6">
                  {/* Résumé */}
                  <div>
                    <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-3">
                      Résumé historique
                    </h3>
                    <p className="text-[#4A3728] dark:text-[#8B949E] leading-relaxed text-justify">
                      {selected.summary}
                    </p>
                  </div>

                  {/* Raisons historiques */}
                  {selected.reasons?.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-3">Pourquoi ce pays est historiquement important</h3>
                      <ul className="space-y-2">
                        {selected.reasons.map((r, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="flex-shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                              style={{ backgroundColor: selected.color }}
                            >
                              {i + 1}
                            </span>
                            <span className="text-sm text-[#4A3728] dark:text-[#8B949E]">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Infos actuelles */}
                  {selected.currentInfo && (
                    <div className="bg-[#FAF7F2] dark:bg-[#161B22] rounded-xl border border-[#E8E0CC] dark:border-[#30363D] p-5">
                      <h3 className="font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-4 flex items-center gap-2">
                        <Building2 size={16} className="text-[#D4AF37]" />
                        Situation actuelle
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {Object.entries(selected.currentInfo).map(([k, v]) => {
                          const labels = {
                            president: 'Dirigeant(s)',
                            pib: 'PIB',
                            hdm: 'IDH',
                            allies: 'Alliances',
                            challenges: 'Défis',
                          }
                          return (
                            <div key={k} className="text-sm">
                              <span className="text-[#8B7355] font-medium">{labels[k] || k} : </span>
                              <span className="text-[#4A3728] dark:text-[#8B949E]">{v}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Personnages notables */}
                  {selected.notableFigures?.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-3 flex items-center gap-2">
                        <User size={16} className="text-[#D4AF37]" />
                        Personnages notables
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selected.notableFigures.map((fig) => (
                          <span
                            key={fig}
                            className="px-3 py-1 rounded-full text-xs font-medium border"
                            style={{
                              borderColor: selected.color + '60',
                              color: selected.color,
                              backgroundColor: selected.color + '12',
                            }}
                          >
                            {fig}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── Histoire ── */}
              {tab === 'histoire' && (
                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-5">
                    Chronologie
                  </h3>
                  <div className="relative">
                    {/* Ligne verticale */}
                    <div
                      className="absolute left-16 top-0 bottom-0 w-0.5"
                      style={{ backgroundColor: selected.color + '40' }}
                    />
                    <div className="space-y-0">
                      {selected.history?.map((evt, i) => (
                        <div key={i} className="flex gap-4 group">
                          {/* Date */}
                          <div className="w-14 flex-shrink-0 text-right pt-1">
                            <span className="text-xs font-bold text-[#8B7355] leading-tight block">{evt.date}</span>
                          </div>
                          {/* Point */}
                          <div className="relative flex-shrink-0 w-6 flex justify-center pt-1.5">
                            <div
                              className="w-3 h-3 rounded-full border-2 border-white dark:border-[#0D1117] z-10 transition-transform group-hover:scale-125"
                              style={{ backgroundColor: selected.color }}
                            />
                          </div>
                          {/* Événement */}
                          <div className="pb-5 flex-1">
                            <p className="text-sm text-[#4A3728] dark:text-[#8B949E] leading-relaxed">
                              {evt.event}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Dynasties ── */}
              {tab === 'dynasties' && (
                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-5 flex items-center gap-2">
                    <Crown size={20} className="text-[#D4AF37]" />
                    Dynasties & régimes
                  </h3>
                  <div className="space-y-3">
                    {selected.dynasties?.map((d, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 p-4 rounded-xl border border-[#E8E0CC] dark:border-[#30363D] bg-[#FAF7F2] dark:bg-[#161B22] hover:shadow-sm transition-shadow"
                      >
                        <div
                          className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-white text-sm font-bold"
                          style={{ backgroundColor: selected.color + 'CC' }}
                        >
                          {i + 1}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#2C1810] dark:text-[#E6EDF3]">{d}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Batailles ── */}
              {tab === 'batailles' && (
                <div>
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-5 flex items-center gap-2">
                    <Swords size={20} className="text-[#D4AF37]" />
                    Batailles & conflits célèbres
                  </h3>
                  <div className="space-y-4">
                    {selected.famousBattles?.map((b, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl border border-[#E8E0CC] dark:border-[#30363D] bg-[#FAF7F2] dark:bg-[#161B22] hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-white"
                            style={{ backgroundColor: selected.color + 'BB' }}
                          >
                            <Swords size={18} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-1">{b.name}</h4>
                            <p className="text-sm text-[#4A3728] dark:text-[#8B949E] leading-relaxed">{b.result}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {(!selected.famousBattles || selected.famousBattles.length === 0) && (
                      <p className="text-[#8B7355] text-sm">Aucune bataille répertoriée.</p>
                    )}
                  </div>
                </div>
              )}

              {/* ── Économie & Culture ── */}
              {tab === 'economie' && (
                <div className="space-y-6">
                  {selected.economie ? (
                    <div>
                      <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-4 flex items-center gap-2">
                        <Wheat size={20} className="text-[#D4AF37]" />
                        Économie
                      </h3>
                      <div className="space-y-3">
                        {Object.entries(selected.economie).map(([k, v]) => {
                          const labels = { ressources: 'Ressources & exports', industries: 'Industries clés', pib: 'PIB & position' }
                          return (
                            <div key={k} className="p-4 rounded-xl border border-[#E8E0CC] dark:border-[#30363D] bg-[#FAF7F2] dark:bg-[#161B22]">
                              <p className="text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-1">{labels[k] || k}</p>
                              <p className="text-sm text-[#4A3728] dark:text-[#8B949E]">{v}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-[#8B7355] text-sm">Données économiques à venir.</div>
                  )}

                  {selected.culture && (
                    <div>
                      <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-4 flex items-center gap-2">
                        <Music size={20} className="text-[#D4AF37]" />
                        Culture & traditions
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {Object.entries(selected.culture).map(([k, v]) => {
                          const labels = { cuisine: '🍽️ Cuisine', musique: '🎵 Musique', artisanat: '🪆 Artisanat', fetes: '🎉 Fêtes & traditions' }
                          return (
                            <div key={k} className="p-4 rounded-xl border border-[#E8E0CC] dark:border-[#30363D] bg-[#FAF7F2] dark:bg-[#161B22]">
                              <p className="text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-1">{labels[k] || k}</p>
                              <p className="text-sm text-[#4A3728] dark:text-[#8B949E]">{v}</p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {!selected.economie && !selected.culture && (
                    <div className="text-center py-12">
                      <Wheat size={40} className="mx-auto mb-3 text-[#D4AF37] opacity-40" />
                      <p className="text-[#8B7355] text-sm">Données économiques et culturelles à venir pour ce pays.</p>
                    </div>
                  )}
                </div>
              )}

              {/* ── Géographie ── */}
              {tab === 'geographie' && (
                <div className="space-y-6">
                  <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#2C1810] dark:text-[#E6EDF3] flex items-center gap-2">
                    <MapPin size={20} className="text-[#D4AF37]" />
                    Géographie de {selected.name}
                  </h3>
                  {selected.geography ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {Object.entries(selected.geography).map(([k, v]) => (
                        <div key={k} className="p-4 rounded-xl border border-[#E8E0CC] dark:border-[#30363D] bg-[#FAF7F2] dark:bg-[#161B22]">
                          <p className="text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-1">{GEO_LABELS[k] || k}</p>
                          <p className="text-sm text-[#4A3728] dark:text-[#8B949E]">{v}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-[#8B7355]">Données géographiques à venir.</p>
                  )}
                </div>
              )}

              {/* ── Carte interactive ── */}
              {tab === 'carte' && (
                <CountryMap
                  countryId={selected.id}
                  continent={selected.continent}
                />
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-[#8B7355]">
            <div className="text-center">
              <Globe size={48} className="mx-auto mb-4 opacity-30" />
              <p>Sélectionne un pays pour voir son histoire.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
