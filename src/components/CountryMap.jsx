import { useState, useEffect, useRef, useCallback } from 'react'
import { MapContainer, GeoJSON, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { regionsData } from '@/data/pays-regions'
import { MapPin, X, Building2, Utensils, Landmark, Users, Waves, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react'
import MarocSVGMap from './MarocSVGMap'

const COUNTRY_MAP_CONFIG = {
  france: {
    url: '/geo/france-regions.geojson',
    nameKey: 'nom', center: [46.6, 2.5], zoom: 5,
    sublevelUrl: '/geo/france-departements.geojson',
    sublevelNameKey: 'nom', sublevelCenter: [46.6, 2.5], sublevelZoom: 5,
  },
  allemagne:     { url: '/geo/allemagne-regions.geojson',     nameKey: 'name',    center: [51.2, 10.4],  zoom: 5 },
  espagne:       { url: '/geo/espagne-regions.geojson',       nameKey: 'name',    center: [40.0, -3.7],  zoom: 5 },
  portugal:      { url: '/geo/portugal-regions.geojson',      nameKey: 'name',    center: [39.4, -8.2],  zoom: 6 },
  italie:        { url: '/geo/italie-regions.geojson',        nameKey: 'reg_name',center: [42.5, 12.5],  zoom: 5 },
  grece:         { url: '/geo/grece-regions.geojson',         nameKey: 'NAME_1',  center: [39.0, 22.0],  zoom: 6 },
  russie:        { url: '/geo/russie-regions.geojson',        nameKey: 'name',    center: [60.0, 60.0],  zoom: 2 },
  pologne:       { url: '/geo/pologne-regions.geojson',       nameKey: 'name',    center: [52.0, 19.5],  zoom: 5 },
  royaume_uni:   { url: '/geo/royaume_uni-regions.geojson',   nameKey: 'name',    center: [54.5, -3.0],  zoom: 5 },
  pays_bas:      { url: '/geo/pays_bas-regions.geojson',      nameKey: 'NAME_1',  center: [52.3, 5.3],   zoom: 7 },
  maroc:         { url: '/geo/maroc-regions.geojson?v=3',      nameKey: 'NAME_1',  center: [27.5, -9.0],  zoom: 4 },
  tunisie:       { url: '/geo/tunisie-regions.geojson',       nameKey: 'NAME_1',  center: [34.0, 9.0],   zoom: 6 },
  egypte:        { url: '/geo/egypte-regions.geojson',        nameKey: 'NAME_1',  center: [26.5, 29.5],  zoom: 5 },
  afrique_du_sud:{ url: '/geo/afrique_du_sud-regions.geojson',nameKey: 'name',    center: [-29.0, 25.0], zoom: 5 },
  mali:          { url: '/geo/mali-regions.geojson',          nameKey: 'NAME_1',  center: [17.5, -1.5],  zoom: 4 },
  ethiopie:      { url: '/geo/ethiopie-regions.geojson',      nameKey: 'NAME_1',  center: [9.0, 40.5],   zoom: 5 },
  irak:          { url: '/geo/irak-regions.geojson',          nameKey: 'NAME_1',  center: [33.0, 43.7],  zoom: 5 },
  iran:          { url: '/geo/iran-regions.geojson',          nameKey: 'NAME_1',  center: [32.5, 53.5],  zoom: 4 },
  arabie_saoudite:{ url: '/geo/arabie_saoudite-regions.geojson',nameKey: 'NAME_1',center: [24.0, 44.0],  zoom: 4 },
  turquie:       { url: '/geo/turquie-regions.geojson',       nameKey: 'name',    center: [39.0, 35.0],  zoom: 5 },
  chine:         { url: '/geo/chine-regions.geojson',         nameKey: 'name',    center: [37.0, 104.0], zoom: 3 },
  inde:          { url: '/geo/inde-regions.geojson',          nameKey: 'name',    center: [22.0, 80.0],  zoom: 4 },
  japon:         { url: '/geo/japon-regions.geojson',         nameKey: 'name_english', center: [37.0, 137.0], zoom: 4 },
  mongolie:      { url: '/geo/mongolie-regions.geojson',      nameKey: 'NAME_1',  center: [47.0, 103.0], zoom: 4 },
  coree_du_sud:  { url: '/geo/coree_du_sud-regions.geojson',  nameKey: 'NAME_1',  center: [36.5, 127.8], zoom: 6 },
  etats_unis:    { url: '/geo/etats_unis-regions.geojson',    nameKey: 'name',    center: [38.0, -96.0], zoom: 3 },
  mexique:       { url: '/geo/mexique-regions.geojson',       nameKey: 'name',    center: [24.0, -102.0],zoom: 4 },
  bresil:        { url: '/geo/bresil-regions.geojson',        nameKey: 'name',    center: [-15.0, -52.0],zoom: 3 },
  haiti:         { url: '/geo/haiti-regions.geojson',         nameKey: 'NAME_1',  center: [18.9, -72.5], zoom: 8 },
  australie:     { url: '/geo/australie-regions.geojson',     nameKey: 'name',    center: [-28.0, 134.0],zoom: 3 },
}

const HOVER_COLORS = {
  Europe: '#3498DB', 'Moyen-Orient': '#E67E22', Asie: '#E74C3C',
  Afrique: '#27AE60', Amériques: '#8E44AD', Océanie: '#16A085',
}

// Panneau d'info region (affiché SOUS la carte)
function RegionPanel({ countryId, regionName, onClose, onDrillDown, hasSublevel, color }) {
  const data = (regionsData[countryId] || {})[regionName]

  return (
    <div className="border-t border-[#E8E0CC] dark:border-[#30363D] bg-[#FAF7F2] dark:bg-[#0D1117] rounded-b-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E8E0CC] dark:border-[#30363D]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
          <h3 className="font-bold text-[#2C1810] dark:text-[#E6EDF3] text-sm">{regionName}</h3>
          {data?.chef_lieu && (
            <span className="text-xs text-[#8B7355] hidden sm:inline">· Chef-lieu : {data.chef_lieu}</span>
          )}
          {data?.population && (
            <span className="text-xs px-2 py-0.5 bg-[#E8E0CC] dark:bg-[#21262D] text-[#4A3728] dark:text-[#8B949E] rounded-full hidden sm:inline">{data.population}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasSublevel && (
            <button
              onClick={onDrillDown}
              className="flex items-center gap-1 text-xs font-semibold text-[#D4AF37] hover:text-[#8B4513] transition-colors"
            >
              Départements <ChevronRight size={13} />
            </button>
          )}
          <button onClick={onClose} className="text-[#8B7355] hover:text-[#2C1810] dark:hover:text-white transition-colors">
            <X size={15} />
          </button>
        </div>
      </div>

      {/* Contenu en grille horizontale */}
      <div className="px-5 py-4">
        {data ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.description && (
              <div className="col-span-2 sm:col-span-3 lg:col-span-4">
                <p className="text-sm text-[#4A3728] dark:text-[#8B949E] leading-relaxed">{data.description}</p>
              </div>
            )}

            {data.villes?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Building2 size={10} /> Villes
                </div>
                <div className="flex flex-wrap gap-1">
                  {data.villes.slice(0, 5).map(v => (
                    <span key={v} className="px-1.5 py-0.5 bg-white dark:bg-[#21262D] rounded text-[11px] text-[#4A3728] dark:text-[#8B949E] border border-[#E8E0CC] dark:border-[#30363D]">{v}</span>
                  ))}
                </div>
              </div>
            )}

            {data.fleuves?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Waves size={10} /> Fleuves
                </div>
                <div className="flex flex-wrap gap-1">
                  {data.fleuves.map(f => (
                    <span key={f} className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 rounded text-[11px] text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800">{f}</span>
                  ))}
                </div>
              </div>
            )}

            {data.sites?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Landmark size={10} /> Sites
                </div>
                <ul className="space-y-0.5">
                  {data.sites.slice(0, 4).map(s => (
                    <li key={s} className="text-[11px] text-[#4A3728] dark:text-[#8B949E] flex items-start gap-1">
                      <span className="text-[#D4AF37] flex-shrink-0">•</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {data.gastronomie?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Utensils size={10} /> Gastronomie
                </div>
                <div className="flex flex-wrap gap-1">
                  {data.gastronomie.slice(0, 5).map(g => (
                    <span key={g} className="px-1.5 py-0.5 bg-orange-50 dark:bg-orange-900/20 rounded text-[11px] text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-800">{g}</span>
                  ))}
                </div>
              </div>
            )}

            {data.histoire && (
              <div className="col-span-2">
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <BookOpen size={10} /> Histoire
                </div>
                <p className="text-[11px] text-[#4A3728] dark:text-[#8B949E] leading-relaxed line-clamp-3">{data.histoire}</p>
              </div>
            )}

            {data.personnages?.length > 0 && (
              <div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-[#8B7355] uppercase tracking-wider mb-1.5">
                  <Users size={10} /> Personnages
                </div>
                <ul className="space-y-0.5">
                  {data.personnages.slice(0, 3).map(p => (
                    <li key={p} className="text-[11px] text-[#4A3728] dark:text-[#8B949E] flex items-start gap-1">
                      <span className="text-[#D4AF37] flex-shrink-0">★</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <p className="text-sm text-[#8B7355] py-2">Données à venir pour cette région.</p>
        )}
      </div>
    </div>
  )
}

// Auto-fit the map to the GeoJSON bounds after load
function FitBounds({ geoData, countryId }) {
  const map = useMap()
  useEffect(() => {
    if (!geoData || !map) return
    const layer = L.geoJSON(geoData)
    let bounds = layer.getBounds()

    // Russie : Chukotka dépasse le méridien 180° et crée une bbox absurde → on limite à l'ouest de 180°
    if (countryId === 'russie') {
      bounds = L.latLngBounds(
        L.latLng(bounds.getSouth(), Math.max(bounds.getWest(), 20)),
        L.latLng(bounds.getNorth(), 180)
      )
    }

    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [4, 4] })
    }
  }, [geoData, map])
  return null
}

// Carte Leaflet interne — fixe, sans zoom, sans drag
function LeafletMap({ geoData, nameKey, center, zoom, hoverColor, onRegionClick, selectedRegion, interactive = true }) {
  const selectedLayerRef = useRef(null)
  const selectedNameRef = useRef(null)

  const defaultStyle = { fillColor: '#DDD0BB', weight: 1, opacity: 1, color: '#B8A898', fillOpacity: 1 }
  const hoverStyle   = { fillColor: '#EDE4D4', weight: 1.5, color: '#A09080', fillOpacity: 1, opacity: 1 }
  const activeStyle  = { fillColor: '#9A7A52', weight: 2,   color: '#6B5030', fillOpacity: 1, opacity: 1 }

  const onEachFeature = useCallback((feature, layer) => {
    if (!interactive) return
    const name =
      feature.properties[nameKey] ??
      feature.properties.name ??
      feature.properties.nom ??
      feature.properties.NAME_1 ??
      'Région'

    layer.on({
      mouseover(e) {
        if (selectedNameRef.current !== name) {
          e.target.setStyle(hoverStyle)
        }
        e.target.bringToFront()
      },
      mouseout(e) {
        if (selectedNameRef.current !== name) {
          e.target.setStyle(defaultStyle)
        }
      },
      click() {
        if (selectedLayerRef.current && selectedNameRef.current !== name) {
          selectedLayerRef.current.setStyle(defaultStyle)
        }
        if (selectedNameRef.current === name) {
          layer.setStyle(defaultStyle)
          selectedLayerRef.current = null
          selectedNameRef.current = null
          onRegionClick(null)
        } else {
          layer.setStyle(activeStyle)
          selectedLayerRef.current = layer
          selectedNameRef.current = name
          onRegionClick(name)
        }
      },
    })
  }, [nameKey, hoverColor, interactive])

  // Reset selection visuelle si region désélectionnée depuis l'extérieur
  useEffect(() => {
    if (!selectedRegion && selectedLayerRef.current) {
      selectedLayerRef.current.setStyle(defaultStyle)
      selectedLayerRef.current = null
      selectedNameRef.current = null
    }
  }, [selectedRegion])

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      zoomControl={false}
      attributionControl={false}
      scrollWheelZoom={false}
      doubleClickZoom={false}
      dragging={false}
      touchZoom={false}
      keyboard={false}
      boxZoom={false}
      style={{ width: '100%', height: '100%', background: '#FFFFFF' }}
    >
      <FitBounds geoData={geoData} countryId={countryId} />
      <GeoJSON
        key={countryId + String(geoData?.features?.length)}
        data={geoData}
        style={defaultStyle}
        onEachFeature={onEachFeature}
      />
    </MapContainer>
  )
}

// Besoin d'accéder au countryId dans LeafletMap pour la clé
let countryId = ''

export default function CountryMap({ countryId: cid, continent }) {
  countryId = cid
  const config = COUNTRY_MAP_CONFIG[cid]
  const [geoData, setGeoData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [drilldown, setDrilldown] = useState(false)

  const hoverColor = HOVER_COLORS[continent] || '#D4AF37'

  function loadUrl(url) {
    setLoading(true)
    setError(null)
    setGeoData(null)
    setSelectedRegion(null)
    fetch(url)
      .then(r => { if (!r.ok) throw new Error(); return r.json() })
      .then(d => { setGeoData(d); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }

  useEffect(() => {
    if (!config) return
    setDrilldown(false)
    loadUrl(config.url)
  }, [cid])

  function handleDrillDown() {
    setDrilldown(true)
    loadUrl(config.sublevelUrl)
  }

  function handleExitDrillDown() {
    setDrilldown(false)
    loadUrl(config.url)
  }

  if (!config) return null

  const nameKey = drilldown ? (config.sublevelNameKey || 'nom') : config.nameKey
  const center  = drilldown ? (config.sublevelCenter || config.center) : config.center
  const zoom    = drilldown ? (config.sublevelZoom   || config.zoom)   : config.zoom

  return (
    <div className="rounded-2xl overflow-hidden border border-[#E8E0CC] dark:border-[#30363D]">
      {/* Barre titre */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#FAF7F2] dark:bg-[#0D1117] border-b border-[#E8E0CC] dark:border-[#30363D]">
        <div className="flex items-center gap-2">
          {drilldown && (
            <>
              <button onClick={handleExitDrillDown} className="flex items-center gap-1 text-xs text-[#D4AF37] hover:text-[#8B4513] font-semibold transition-colors">
                <ChevronLeft size={14} /> Régions
              </button>
              <span className="text-[#8B7355] text-xs">/</span>
            </>
          )}
          <span className="text-xs font-semibold text-[#2C1810] dark:text-[#E6EDF3]">
            {drilldown ? 'Départements' : 'Carte des régions'}
          </span>
        </div>
        {cid !== 'maroc' && <span className="text-[10px] text-[#8B7355] italic">Survol = couleur · Clic = détails</span>}
      </div>

      {/* Carte — hauteur 85vh minimum 600px, fond blanc */}
      <div className="relative" style={{ height: 'max(85vh, 600px)', background: '#FFFFFF' }}>
        {cid === 'maroc' ? (
          <img src="/geo/carte_maroc.png" alt="Carte du Maroc" className="w-full h-full object-contain" />
        ) : (
          <>
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center z-[1000]" style={{ background: '#FFFFFF' }}>
                <div className="w-8 h-8 border-3 border-[#D4AF37] border-t-transparent rounded-full animate-spin" style={{ borderWidth: 3 }} />
              </div>
            )}
            {error && !loading && (
              <div className="absolute inset-0 flex items-center justify-center z-[1000]">
                <p className="text-sm text-[#8B7355]">Carte indisponible</p>
              </div>
            )}
            {geoData && !loading && (
              <LeafletMap
                key={cid + (drilldown ? '-d' : '-r')}
                geoData={geoData}
                nameKey={nameKey}
                center={center}
                zoom={zoom}
                hoverColor={hoverColor}
                onRegionClick={setSelectedRegion}
                selectedRegion={selectedRegion}
              />
            )}
          </>
        )}
      </div>

      {/* Panneau info — SOUS la carte */}
      {selectedRegion && (
        <RegionPanel
          countryId={cid}
          regionName={selectedRegion}
          onClose={() => setSelectedRegion(null)}
          onDrillDown={handleDrillDown}
          hasSublevel={!!config.sublevelUrl && !drilldown}
          color={hoverColor}
        />
      )}
    </div>
  )
}
