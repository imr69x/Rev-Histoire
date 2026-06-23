import { useState, useEffect, useRef, useCallback } from 'react'
import { MapContainer, GeoJSON, ZoomControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { regionsData } from '@/data/pays-regions'
import { MapPin, X, Building2, Utensils, Landmark, Users, Waves, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react'

const COUNTRY_MAP_CONFIG = {
  // ── Europe ──
  france: {
    url: '/geo/france-regions.geojson',
    nameKey: 'nom',
    center: [46.6, 2.5], zoom: 5,
    sublevelUrl: '/geo/france-departements.geojson',
    sublevelNameKey: 'nom',
    sublevelCenter: [46.6, 2.5], sublevelZoom: 5,
  },
  allemagne: {
    url: '/geo/allemagne-regions.geojson',
    nameKey: 'name', center: [51.2, 10.4], zoom: 5,
  },
  espagne: {
    url: '/geo/espagne-regions.geojson',
    nameKey: 'name', center: [40.0, -3.7], zoom: 5,
  },
  portugal: {
    url: '/geo/portugal-regions.geojson',
    nameKey: 'name', center: [39.4, -8.2], zoom: 6,
  },
  italie: {
    url: '/geo/italie-regions.geojson',
    nameKey: 'reg_name', center: [42.5, 12.5], zoom: 5,
  },
  grece: {
    url: '/geo/grece-regions.geojson',
    nameKey: 'NAME_1', center: [39.0, 22.0], zoom: 6,
  },
  russie: {
    url: '/geo/russie-regions.geojson',
    nameKey: 'name', center: [60.0, 60.0], zoom: 2,
  },
  pologne: {
    url: '/geo/pologne-regions.geojson',
    nameKey: 'name', center: [52.0, 19.5], zoom: 5,
  },
  royaume_uni: {
    url: '/geo/royaume_uni-regions.geojson',
    nameKey: 'name', center: [54.5, -3.0], zoom: 5,
  },
  pays_bas: {
    url: '/geo/pays_bas-regions.geojson',
    nameKey: 'NAME_1', center: [52.3, 5.3], zoom: 7,
  },
  // ── Afrique ──
  maroc: {
    url: '/geo/maroc-regions.geojson',
    nameKey: 'NAME_1', center: [31.5, -6.0], zoom: 5,
  },
  tunisie: {
    url: '/geo/tunisie-regions.geojson',
    nameKey: 'NAME_1', center: [34.0, 9.0], zoom: 6,
  },
  egypte: {
    url: '/geo/egypte-regions.geojson',
    nameKey: 'NAME_1', center: [26.5, 29.5], zoom: 5,
  },
  afrique_du_sud: {
    url: '/geo/afrique_du_sud-regions.geojson',
    nameKey: 'name', center: [-29.0, 25.0], zoom: 5,
  },
  mali: {
    url: '/geo/mali-regions.geojson',
    nameKey: 'NAME_1', center: [17.5, -1.5], zoom: 4,
  },
  ethiopie: {
    url: '/geo/ethiopie-regions.geojson',
    nameKey: 'NAME_1', center: [9.0, 40.5], zoom: 5,
  },
  // ── Moyen-Orient ──
  irak: {
    url: '/geo/irak-regions.geojson',
    nameKey: 'NAME_1', center: [33.0, 43.7], zoom: 5,
  },
  iran: {
    url: '/geo/iran-regions.geojson',
    nameKey: 'NAME_1', center: [32.5, 53.5], zoom: 4,
  },
  arabie_saoudite: {
    url: '/geo/arabie_saoudite-regions.geojson',
    nameKey: 'NAME_1', center: [24.0, 44.0], zoom: 4,
  },
  turquie: {
    url: '/geo/turquie-regions.geojson',
    nameKey: 'name', center: [39.0, 35.0], zoom: 5,
  },
  // ── Asie ──
  chine: {
    url: '/geo/chine-regions.geojson',
    nameKey: 'name', center: [37.0, 104.0], zoom: 3,
  },
  inde: {
    url: '/geo/inde-regions.geojson',
    nameKey: 'name', center: [22.0, 80.0], zoom: 4,
  },
  japon: {
    url: '/geo/japon-regions.geojson',
    nameKey: 'name_english', center: [37.0, 137.0], zoom: 4,
  },
  mongolie: {
    url: '/geo/mongolie-regions.geojson',
    nameKey: 'NAME_1', center: [47.0, 103.0], zoom: 4,
  },
  coree_du_sud: {
    url: '/geo/coree_du_sud-regions.geojson',
    nameKey: 'NAME_1', center: [36.5, 127.8], zoom: 6,
  },
  // ── Amériques ──
  etats_unis: {
    url: '/geo/etats_unis-regions.geojson',
    nameKey: 'name', center: [38.0, -96.0], zoom: 3,
  },
  mexique: {
    url: '/geo/mexique-regions.geojson',
    nameKey: 'name', center: [24.0, -102.0], zoom: 4,
  },
  bresil: {
    url: '/geo/bresil-regions.geojson',
    nameKey: 'name', center: [-15.0, -52.0], zoom: 3,
  },
  haiti: {
    url: '/geo/haiti-regions.geojson',
    nameKey: 'NAME_1', center: [18.9, -72.5], zoom: 8,
  },
  // ── Océanie ──
  australie: {
    url: '/geo/australie-regions.geojson',
    nameKey: 'name', center: [-28.0, 134.0], zoom: 3,
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
    <div className="absolute top-0 right-0 bottom-0 w-80 bg-white dark:bg-[#161B22] border-l border-[#E8E0CC] dark:border-[#30363D] z-[500] overflow-y-auto shadow-2xl">
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
                onClick={onDrillDown}
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

// Composant carte interne (react-leaflet)
function LeafletMap({ geoData, nameKey, center, zoom, hoverColor, onRegionClick }) {
  const mapRef = useRef(null)
  const geoJsonRef = useRef(null)
  const selectedLayerRef = useRef(null)
  const selectedNameRef = useRef(null)

  const defaultStyle = {
    fillColor: '#F0EDE8',
    weight: 1,
    opacity: 1,
    color: '#9B8B7A',
    fillOpacity: 1,
  }
  const hoverStyle = { fillColor: hoverColor + 'BB', weight: 1.5, color: '#6A5A4A', fillOpacity: 1 }
  const selectedStyle = { fillColor: hoverColor, weight: 2, color: '#4A3A2A', fillOpacity: 1 }

  const onEachFeature = useCallback((feature, layer) => {
    const name =
      feature.properties[nameKey] ||
      feature.properties.name ||
      feature.properties.nom ||
      feature.properties.NAME ||
      'Région'

    layer.on({
      mouseover(e) {
        const l = e.target
        if (selectedNameRef.current !== name) {
          l.setStyle(hoverStyle)
        }
        l.bringToFront()
      },
      mouseout(e) {
        const l = e.target
        if (selectedNameRef.current !== name) {
          l.setStyle(defaultStyle)
        }
      },
      click() {
        // Reset previous selection
        if (selectedLayerRef.current && selectedNameRef.current !== name) {
          selectedLayerRef.current.setStyle(defaultStyle)
        }
        if (selectedNameRef.current === name) {
          // Deselect
          layer.setStyle(defaultStyle)
          selectedLayerRef.current = null
          selectedNameRef.current = null
          onRegionClick(null)
        } else {
          // Select new
          layer.setStyle(selectedStyle)
          selectedLayerRef.current = layer
          selectedNameRef.current = name
          onRegionClick(name)
        }
      },
    })
  }, [nameKey, hoverColor])

  // Fly to new center when it changes
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoom, { animate: true, duration: 0.5 })
    }
  }, [center, zoom])

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomControl={false}
      attributionControl={false}
      ref={mapRef}
      style={{ width: '100%', height: '100%', background: '#EEF4F9' }}
    >
      <ZoomControl position="bottomright" />
      <GeoJSON
        key={JSON.stringify(geoData?.features?.length) + hoverColor}
        ref={geoJsonRef}
        data={geoData}
        style={defaultStyle}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  )
}

export default function CountryMap({ countryId, continent }) {
  const config = COUNTRY_MAP_CONFIG[countryId]
  const [geoData, setGeoData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [drilldown, setDrilldown] = useState(false)

  const hoverColor = HOVER_COLORS[continent] || '#D4AF37'

  useEffect(() => {
    if (!config) return
    setLoading(true)
    setError(null)
    setGeoData(null)
    setSelectedRegion(null)
    setDrilldown(false)

    const url = config.url
    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then(data => { setGeoData(data); setLoading(false) })
      .catch(() => { setError('Impossible de charger la carte.'); setLoading(false) })
  }, [countryId])

  function handleDrillDown() {
    if (!config?.sublevelUrl) return
    setLoading(true)
    setError(null)
    setSelectedRegion(null)
    setDrilldown(true)

    fetch(config.sublevelUrl)
      .then(r => r.json())
      .then(data => { setGeoData(data); setLoading(false) })
      .catch(() => { setError('Impossible de charger les départements.'); setLoading(false) })
  }

  function handleExitDrillDown() {
    setDrilldown(false)
    setSelectedRegion(null)
    setLoading(true)
    fetch(config.url)
      .then(r => r.json())
      .then(data => { setGeoData(data); setLoading(false) })
      .catch(() => { setError('Impossible de charger la carte.'); setLoading(false) })
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

  const activeNameKey = drilldown ? (config.sublevelNameKey || 'nom') : config.nameKey
  const mapCenter = drilldown ? (config.sublevelCenter || config.center) : config.center
  const mapZoom = drilldown ? (config.sublevelZoom || config.zoom) : config.zoom

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {drilldown && (
            <>
              <button
                onClick={handleExitDrillDown}
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

      {/* Carte */}
      <div className="relative rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] overflow-hidden" style={{ height: 400 }}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-[1000] bg-[#EEF4F9]">
            <div className="text-center">
              <div className="w-10 h-10 border-4 border-[#D4AF37] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-[#8B7355]">Chargement de la carte…</p>
            </div>
          </div>
        )}

        {error && !loading && (
          <div className="absolute inset-0 flex items-center justify-center z-[1000] bg-[#EEF4F9]">
            <div className="text-center px-8">
              <MapPin size={36} className="mx-auto mb-3 text-[#8B7355] opacity-40" />
              <p className="text-sm text-[#8B7355]">{error}</p>
            </div>
          </div>
        )}

        {geoData && !loading && (
          <LeafletMap
            key={countryId + (drilldown ? '-dept' : '-reg')}
            geoData={geoData}
            nameKey={activeNameKey}
            center={mapCenter}
            zoom={mapZoom}
            hoverColor={hoverColor}
            onRegionClick={setSelectedRegion}
          />
        )}

        {/* Panneau infos région */}
        {selectedRegion && (
          <RegionPanel
            countryId={countryId}
            regionName={selectedRegion}
            onClose={() => setSelectedRegion(null)}
            onDrillDown={handleDrillDown}
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
}
