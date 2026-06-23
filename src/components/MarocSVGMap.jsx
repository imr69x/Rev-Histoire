import { useState, useEffect } from 'react'

const W = 800, H = 600, PAD = 10

function toX(lon, minLon, scale) { return PAD + (lon - minLon) * scale }
function toY(lat, minLat, scale, h) { return h - PAD - (lat - minLat) * scale }

function ringToD(ring, minLon, minLat, scale) {
  return ring.map((p, i) =>
    `${i === 0 ? 'M' : 'L'}${toX(p[0], minLon, scale).toFixed(1)},${toY(p[1], minLat, scale, H).toFixed(1)}`
  ).join(' ') + ' Z'
}

function geomToD(geom, minLon, minLat, scale) {
  if (geom.type === 'Polygon')
    return geom.coordinates.map(r => ringToD(r, minLon, minLat, scale)).join(' ')
  if (geom.type === 'MultiPolygon')
    return geom.coordinates.map(poly => poly.map(r => ringToD(r, minLon, minLat, scale)).join(' ')).join(' ')
  return ''
}

export default function MarocSVGMap({ onRegionClick }) {
  const [features, setFeatures] = useState([])
  const [hovered, setHovered] = useState(null)
  const [selected, setSelected] = useState(null)
  const [bbox, setBbox] = useState(null)

  useEffect(() => {
    fetch('/geo/maroc-regions.geojson')
      .then(r => r.json())
      .then(data => {
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
        data.features.forEach(f => scan(f.geometry.coordinates))
        const scaleX = (W - 2 * PAD) / (maxLon - minLon)
        const scaleY = (H - 2 * PAD) / (maxLat - minLat)
        const scale = Math.min(scaleX, scaleY)
        setBbox({ minLon, minLat, scale })
        setFeatures(data.features)
      })
  }, [])

  function handleClick(name) {
    if (selected === name) {
      setSelected(null)
      onRegionClick(null)
    } else {
      setSelected(name)
      onRegionClick(name)
    }
  }

  if (!bbox || !features.length) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 border-3 border-[#D4AF37] border-t-transparent rounded-full animate-spin" style={{ borderWidth: 3 }} />
      </div>
    )
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-full"
      style={{ display: 'block' }}
    >
      {features.map(f => {
        const name = f.properties.NAME_1 || ''
        const d = geomToD(f.geometry, bbox.minLon, bbox.minLat, bbox.scale)
        const isHovered = hovered === name
        const isSelected = selected === name
        return (
          <path
            key={name}
            d={d}
            fill={isSelected ? '#9A7A52' : isHovered ? '#EDE4D4' : '#DDD0BB'}
            stroke="#B8A898"
            strokeWidth={isSelected ? 2 : 1}
            strokeLinejoin="round"
            strokeLinecap="round"
            style={{ cursor: 'pointer', transition: 'fill 0.15s' }}
            onMouseEnter={() => setHovered(name)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(name)}
          />
        )
      })}
    </svg>
  )
}
