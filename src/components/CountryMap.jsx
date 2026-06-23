import { useState, memo } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { regionsData } from '@/data/pays-regions'
import { MapPin, X, Building2, Utensils, Landmark, Users, Waves, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react'

const COUNTRY_MAP_CONFIG = {
  france: {
    url: 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions-version-simplifiee.geojson',
    nameKey: 'nom',
    projection: { center: [2.5, 46.5], scale: 2200 },
    sublevelUrl: 'https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/departements-version-simplifiee.geojson',
    sublevelNameKey: 'nom',
  },
  allemagne: {
    url: 'https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/2_bundeslaender/4_niedrig.geo.json',
    nameKey: 'name_de',
    projection: { center: [10.4, 51.2], scale: 2800 },
  },
  espagne: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/spain-communities.geojson',
    nameKey: 'name',
    projection: { center: [-3.7, 40.0], scale: 2200 },
  },
  portugal: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/portugal.geojson',
    nameKey: 'name',
    projection: { center: [-8.2, 39.4], scale: 5000 },
  },
  italie: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/italy.geojson',
    nameKey: 'name',
    projection: { center: [12.5, 42.5], scale: 2200 },
  },
  grece: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/greece.geojson',
    nameKey: 'name',
    projection: { center: [22.0, 39.0], scale: 3200 },
  },
  russie: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/russia.geojson',
    nameKey: 'name',
    projection: { center: [60.0, 60.0], scale: 350 },
  },
  pologne: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/poland.geojson',
    nameKey: 'name',
    projection: { center: [19.5, 52.0], scale: 3000 },
  },
  pays_bas: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/netherlands.geojson',
    nameKey: 'name',
    projection: { center: [5.3, 52.3], scale: 6000 },
  },
  maroc: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/morocco.geojson',
    nameKey: 'name',
    projection: { center: [-6.0, 31.5], scale: 2000 },
  },
  tunisie: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/tunisia.geojson',
    nameKey: 'name',
    projection: { center: [9.0, 34.0], scale: 3500 },
  },
  egypte: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/egypt.geojson',
    nameKey: 'name',
    projection: { center: [29.5, 26.5], scale: 1700 },
  },
  afrique_du_sud: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/south-africa.geojson',
    nameKey: 'name',
    projection: { center: [25.0, -29.0], scale: 1500 },
  },
  chine: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/china.geojson',
    nameKey: 'name',
    projection: { center: [104.0, 37.0], scale: 800 },
  },
  inde: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/india.geojson',
    nameKey: 'name',
    projection: { center: [80.0, 22.0], scale: 900 },
  },
  japon: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/japan.geojson',
    nameKey: 'name',
    projection: { center: [137.0, 37.0], scale: 1400 },
  },
  etats_unis: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/usa.geojson',
    nameKey: 'name',
    projection: { center: [-96.0, 38.0], scale: 700 },
  },
  bresil: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/brazil.geojson',
    nameKey: 'name',
    projection: { center: [-52.0, -15.0], scale: 700 },
  },
  mexique: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/mexico.geojson',
    nameKey: 'name',
    projection: { center: [-102.0, 24.0], scale: 1000 },
  },
  australie: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/australia.geojson',
    nameKey: 'name',
    projection: { center: [134.0, -28.0], scale: 700 },
  },
  turquie: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/turkey.geojson',
    nameKey: 'name',
    projection: { center: [35.0, 39.0], scale: 1500 },
  },
  iran: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/iran.geojson',
    nameKey: 'name',
    projection: { center: [53.5, 32.5], scale: 1300 },
  },
  arabie_saoudite: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/saudi-arabia.geojson',
    nameKey: 'name',
    projection: { center: [44.0, 24.0], scale: 1100 },
  },
  irak: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/iraq.geojson',
    nameKey: 'name',
    projection: { center: [43.7, 33.0], scale: 2000 },
  },
  mongolie: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/mongolia.geojson',
    nameKey: 'name',
    projection: { center: [103.0, 47.0], scale: 1000 },
  },
  coree_du_sud: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/south-korea.geojson',
    nameKey: 'name',
    projection: { center: [127.8, 36.5], scale: 3000 },
  },
  mali: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/mali.geojson',
    nameKey: 'name',
    projection: { center: [-1.5, 17.5], scale: 1200 },
  },
  ethiopie: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/ethiopia.geojson',
    nameKey: 'name',
    projection: { center: [40.5, 9.0], scale: 1400 },
  },
  haiti: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/haiti.geojson',
    nameKey: 'name',
    projection: { center: [-72.5, 18.9], scale: 6000 },
  },
  royaume_uni: {
    url: 'https://raw.githubusercontent.com/codeforgermany/click_that_hood/main/public/data/uk-counties.geojson',
    nameKey: 'name',
    projection: { center: [-3.0, 54.5], scale: 2800 },
  },
}

const HOVER_COLORS = {
  Europe: '#3498DB',
  'Moyen-Orient': '#E67E22',
  Asie: '#E74C3C',
  Afrique: '#27AE60',
  Amériques: '#8E44AD',
  Océanie: '#16A085',
}

function RegionPanel({ countryId, regionName, onClose, onDrillDown, hasSublevel }) {
  const data = (regionsData[countryId] || {})[regionName]

  return (
    <div className="absolute top-0 right-0 bottom-0 w-80 bg-white dark:bg-[#161B22] border-l border-[#E8E0CC] dark:border-[#30363D] z-20 overflow-y-auto shadow-2xl">
      <div className="sticky top-0 bg-white dark:bg-[#161B22] border-b border-[#E8E0CC] dark:border-[#30363D] px-4 py-3 flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <MapPin size={16} className="text-[#D4AF37] flex-shrink-0" />
          <h3 className="font-bold text-[#2C1810] dark:text-[#E6EDF3] text-sm truncate">{regionName}</h3>
        </div>
        <button onClick={onClose} className="text-[#8B7355] hover:text-[#2C1810] dark:hover:text-white transition-colors flex-shrink-0">
          <X size={16} />
        </button>
      </div>

      <div className="p-4 space-y-4">
        {data ? (
          <>
            {data.chef_lieu && (
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-[#D4AF37]/20 text-[#8B4513] dark:text-[#D4AF37] rounded-full text-xs font-medium border border-[#D4AF37]/30">
                  🏛️ Chef-lieu : {data.chef_lieu}
                </span>
                {data.population && (
                  <span className="px-2 py-0.5 bg-[#E8E0CC] dark:bg-[#21262D] text-[#4A3728] dark:text-[#8B949E] rounded-full text-xs">
                    {data.population}
                  </span>
                )}
              </div>
            )}

            {data.description && (
              <p className="text-sm text-[#4A3728] dark:text-[#8B949E] leading-relaxed">{data.description}</p>
            )}

            {data.villes?.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-2">
                  <Building2 size={12} /> Villes principales
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.villes.map(v => (
                    <span key={v} className="px-2 py-0.5 bg-[#FAF7F2] dark:bg-[#21262D] rounded text-xs text-[#4A3728] dark:text-[#8B949E] border border-[#E8E0CC] dark:border-[#30363D]">{v}</span>
                  ))}
                </div>
              </div>
            )}

            {data.fleuves?.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-2">
                  <Waves size={12} /> Fleuves & rivières
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.fleuves.map(f => (
                    <span key={f} className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-xs text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">{f}</span>
                  ))}
                </div>
              </div>
            )}

            {data.sites?.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-2">
                  <Landmark size={12} /> Sites remarquables
                </div>
                <ul className="space-y-1">
                  {data.sites.map(s => (
                    <li key={s} className="text-xs text-[#4A3728] dark:text-[#8B949E] flex items-start gap-1.5">
                      <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data.gastronomie?.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-2">
                  <Utensils size={12} /> Gastronomie
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.gastronomie.map(g => (
                    <span key={g} className="px-2 py-0.5 bg-orange-50 dark:bg-orange-900/20 rounded text-xs text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800">{g}</span>
                  ))}
                </div>
              </div>
            )}

            {data.histoire && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-2">
                  <BookOpen size={12} /> Repères historiques
                </div>
                <p className="text-xs text-[#4A3728] dark:text-[#8B949E] leading-relaxed">{data.histoire}</p>
              </div>
            )}

            {data.personnages?.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-2">
                  <Users size={12} /> Personnages célèbres
                </div>
                <ul className="space-y-1">
                  {data.personnages.map(p => (
                    <li key={p} className="text-xs text-[#4A3728] dark:text-[#8B949E] flex items-start gap-1.5">
                      <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">★</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data.departements?.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-2">
                  <MapPin size={12} /> Départements
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {data.departements.map(d => (
                    <span key={d} className="px-2 py-0.5 bg-[#FAF7F2] dark:bg-[#21262D] rounded text-xs text-[#4A3728] dark:text-[#8B949E] border border-[#E8E0CC] dark:border-[#30363D]">{d}</span>
                  ))}
                </div>
              </div>
            )}

            {hasSublevel && (
              <button
                onClick={() => onDrillDown(regionName)}
                className="w-full flex items-center justify-center gap-2 py-2.5 mt-2 rounded-xl bg-[#D4AF37] text-[#2C1810] text-sm font-bold hover:bg-[#E8C85A] transition-colors"
              >
                <MapPin size={14} /> Voir les départements <ChevronRight size={14} />
              </button>
            )}
          </>
        ) : (
          <div className="text-center py-8">
            <MapPin size={32} className="mx-auto mb-3 text-[#D4AF37] opacity-40" />
            <p className="text-sm font-medium text-[#2C1810] dark:text-[#E6EDF3] mb-1">{regionName}</p>
            <p className="text-xs text-[#8B7355]">Données détaillées à venir pour cette région.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default memo(function CountryMap({ countryId, countryColor, continent }) {
  const config = COUNTRY_MAP_CONFIG[countryId]
  const [hoveredRegion, setHoveredRegion] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [drilldown, setDrilldown] = useState(false)

  const hoverColor = HOVER_COLORS[continent] || '#D4AF37'

  // Reset state when country changes
  const [currentCountry, setCurrentCountry] = useState(countryId)
  if (currentCountry !== countryId) {
    setCurrentCountry(countryId)
    setSelectedRegion(null)
    setDrilldown(false)
    setHoveredRegion(null)
  }

  if (!config) {
    return (
      <div className="flex items-center justify-center h-56 rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] bg-[#FAF7F2] dark:bg-[#161B22]">
        <div className="text-center">
          <MapPin size={36} className="mx-auto mb-3 text-[#D4AF37] opacity-40" />
          <p className="text-sm text-[#8B7355]">Carte interactive non disponible pour ce pays.</p>
        </div>
      </div>
    )
  }

  const activeUrl = drilldown ? config.sublevelUrl : config.url
  const activeNameKey = drilldown ? (config.sublevelNameKey || 'nom') : config.nameKey
  const projection = config.projection

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {drilldown && (
            <>
              <button
                onClick={() => { setDrilldown(false); setSelectedRegion(null) }}
                className="flex items-center gap-1 text-sm text-[#D4AF37] hover:text-[#8B4513] transition-colors font-medium"
              >
                <ChevronLeft size={16} /> Régions
              </button>
              <span className="text-[#8B7355] text-sm">/</span>
            </>
          )}
          <span className="text-sm font-semibold text-[#2C1810] dark:text-[#E6EDF3]">
            {drilldown ? 'Départements' : 'Carte des régions'}
          </span>
        </div>
        <span className="text-xs text-[#8B7355] italic">Survol = couleur · Clic = détails</span>
      </div>

      {/* Map container */}
      <div
        className="relative rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] overflow-hidden"
        style={{ height: 400, background: '#EEF4F9' }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={projection}
          style={{ width: '100%', height: '100%' }}
        >
          <Geographies geography={activeUrl}>
            {({ geographies }) => {
              if (!geographies || geographies.length === 0) return null
              return geographies.map(geo => {
                const name =
                  geo.properties[activeNameKey] ||
                  geo.properties.name ||
                  geo.properties.nom ||
                  geo.properties.NAME ||
                  'Région'
                const isSelected = selectedRegion === name

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHoveredRegion(name)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => setSelectedRegion(isSelected ? null : name)}
                    style={{
                      default: {
                        fill: isSelected ? hoverColor : '#F0EDE8',
                        stroke: '#9B8B7A',
                        strokeWidth: 0.6,
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      hover: {
                        fill: hoverColor + 'BB',
                        stroke: '#7A6A5A',
                        strokeWidth: 0.8,
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        fill: hoverColor,
                        stroke: '#7A6A5A',
                        strokeWidth: 0.8,
                        outline: 'none',
                      },
                    }}
                  />
                )
              })
            }}
          </Geographies>
        </ComposableMap>

        {/* Tooltip survol */}
        {hoveredRegion && !selectedRegion && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#2C1810]/90 text-white text-xs rounded-lg pointer-events-none z-10 whitespace-nowrap shadow">
            {hoveredRegion}
          </div>
        )}

        {/* Panneau latéral infos région */}
        {selectedRegion && (
          <RegionPanel
            countryId={countryId}
            regionName={selectedRegion}
            onClose={() => setSelectedRegion(null)}
            onDrillDown={() => { setDrilldown(true); setSelectedRegion(null) }}
            hasSublevel={!!config.sublevelUrl && !drilldown}
          />
        )}
      </div>

      {/* Légende */}
      <div className="flex items-center gap-4 text-xs text-[#8B7355]">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded border border-[#9B8B7A]" style={{ background: '#F0EDE8' }} />
          Région
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ background: hoverColor + 'BB' }} />
          Survolée
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded" style={{ background: hoverColor }} />
          Sélectionnée
        </div>
      </div>
    </div>
  )
})
