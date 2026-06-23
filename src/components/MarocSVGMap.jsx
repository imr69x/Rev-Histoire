import { useState, useEffect, useMemo } from 'react'

const W = 800
const H = 600
const PAD = 16

function mercY(lat) {
  const rad = (lat * Math.PI) / 180
  return Math.log(Math.tan(Math.PI / 4 + rad / 2))
}

function computeProjection(features) {
  let minLon = 180, maxLon = -180, minLat = 90, maxLat = -90

  function scan(c) {
    if (!Array.isArray(c)) return
    if (typeof c[0] === 'number') {
      if (c[0] < minLon) minLon = c[0]
      if (c[0] > maxLon) maxLon = c[0]
      if (c[1] < minLat) minLat = c[1]
      if (c[1] > maxLat) maxLat = c[1]
    } else c.forEach(scan)
  }
  features.forEach(f => scan(f.geometry.coordinates))

  const minMY = mercY(minLat)
  const maxMY = mercY(maxLat)

  const scaleX = (W - 2 * PAD) / (maxLon - minLon)
  const scaleY = (H - 2 * PAD) / (maxMY - minMY)
  const scale = Math.min(scaleX, scaleY)

  const mapW = (maxLon - minLon) * scale
  const mapH = (maxMY - minMY) * scale
  const offsetX = PAD + (W - 2 * PAD - mapW) / 2
  const offsetY = PAD + (H - 2 * PAD - mapH) / 2

  return { minLon, maxMY, scale, offsetX, offsetY }
}

function toX(lon, proj) {
  return proj.offsetX + (lon - proj.minLon) * proj.scale
}
function toY(lat, proj) {
  return proj.offsetY + (proj.maxMY - mercY(lat)) * proj.scale
}

function ringToD(ring, proj) {
  return (
    ring
      .map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p[0], proj).toFixed(1)},${toY(p[1], proj).toFixed(1)}`)
      .join(' ') + ' Z'
  )
}

function geomToD(geom, proj) {
  if (geom.type === 'Polygon') return geom.coordinates.map(r => ringToD(r, proj)).join(' ')
  if (geom.type === 'MultiPolygon')
    return geom.coordinates.map(poly => poly.map(r => ringToD(r, proj)).join(' ')).join(' ')
  return ''
}

function getCentroid(geom, proj) {
  let coords = []
  function collect(c) {
    if (!Array.isArray(c)) return
    if (typeof c[0] === 'number') coords.push(c)
    else c.forEach(collect)
  }
  collect(geom.coordinates)
  if (!coords.length) return null
  const x = coords.reduce((s, p) => s + toX(p[0], proj), 0) / coords.length
  const y = coords.reduce((s, p) => s + toY(p[1], proj), 0) / coords.length
  return { x, y }
}

export default function MarocSVGMap({ onRegionClick, selectedRegion }) {
  const [features, setFeatures] = useState([])
  const [proj, setProj] = useState(null)
  const [hovered, setHovered] = useState(null)

  useEffect(() => {
    fetch('/geo/maroc-regions.geojson?v=3')
      .then(r => r.json())
      .then(data => {
        const p = computeProjection(data.features)
        setProj(p)
        setFeatures(data.features)
      })
  }, [])

  const paths = useMemo(() => {
    if (!proj || !features.length) return []
    return features.map(f => {
      const name = f.properties.NAME_1 || f.properties.name || ''
      return { name, d: geomToD(f.geometry, proj), centroid: getCentroid(f.geometry, proj) }
    })
  }, [features, proj])

  if (!proj || !paths.length) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-white">
        <div className="w-8 h-8 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin" />
      </div>
    )
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-full"
      style={{ display: 'block', background: '#FFFFFF' }}
    >
      {paths.map(({ name, d, centroid }) => {
        const isHovered = hovered === name
        const isSelected = selectedRegion === name
        return (
          <g key={name}>
            <path
              d={d}
              fill={isSelected ? '#9A7A52' : isHovered ? '#C8B898' : '#DDD0BB'}
              stroke="#A89880"
              strokeWidth={isSelected ? 1.8 : 1}
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{ cursor: 'pointer', transition: 'fill 0.15s' }}
              onMouseEnter={() => setHovered(name)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onRegionClick(selectedRegion === name ? null : name)}
            />
            {centroid && (isHovered || isSelected) && (
              <text
                x={centroid.x}
                y={centroid.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="10"
                fontFamily="sans-serif"
                fill={isSelected ? '#fff' : '#4A3728'}
                pointerEvents="none"
                style={{ userSelect: 'none' }}
              >
                {name}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}
