import { useState, useRef, useCallback } from 'react'
import { Upload, Zap, Download, RotateCcw, Info } from 'lucide-react'

// ── Algorithmes de détection ─────────────────────────────────────────────────

function isBorderPixel(r, g, b, threshold) {
  return (r + g + b) / 3 < threshold
}

// Flood fill BFS — retourne un tableau de labels (0 = border, 1..N = région)
function labelRegions(data, width, height, darkThreshold) {
  const labels = new Int32Array(width * height) // 0 = non visité, -1 = bordure, >0 = région
  let regionCount = 0

  // Marquer les bordures
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2]
    if (isBorderPixel(r, g, b, darkThreshold)) labels[i] = -1
  }

  // Flood fill BFS sur les non-bordures
  const queue = []
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x
      if (labels[idx] !== 0) continue
      regionCount++
      const label = regionCount
      queue.push(idx)
      labels[idx] = label
      let head = 0
      while (head < queue.length) {
        const cur = queue[head++]
        const cx = cur % width, cy = Math.floor(cur / width)
        const neighbors = [
          cy > 0 ? cur - width : -1,
          cy < height - 1 ? cur + width : -1,
          cx > 0 ? cur - 1 : -1,
          cx < width - 1 ? cur + 1 : -1,
        ]
        for (const nb of neighbors) {
          if (nb >= 0 && labels[nb] === 0) {
            labels[nb] = label
            queue.push(nb)
          }
        }
      }
      queue.length = 0
    }
  }
  return { labels, regionCount }
}

// Compte les pixels de chaque région
function countPixels(labels, regionCount) {
  const counts = new Int32Array(regionCount + 1)
  for (let i = 0; i < labels.length; i++) {
    if (labels[i] > 0) counts[labels[i]]++
  }
  return counts
}

// Trouve le centroïde d'une région
function centroid(labels, label, width) {
  let sx = 0, sy = 0, count = 0
  for (let i = 0; i < labels.length; i++) {
    if (labels[i] === label) {
      sx += i % width
      sy += Math.floor(i / width)
      count++
    }
  }
  return count > 0 ? { x: Math.round(sx / count), y: Math.round(sy / count) } : null
}

// Trace le contour d'une région (pixels de bordure adjacents à la région)
function traceContour(labels, label, width, height) {
  const pts = []
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (labels[y * width + x] !== label) continue
      // pixel appartient à la région — vérifier si c'est un pixel de bord
      const hasNonRegionNeighbor =
        (y === 0 || labels[(y - 1) * width + x] !== label) ||
        (y === height - 1 || labels[(y + 1) * width + x] !== label) ||
        (x === 0 || labels[y * width + x - 1] !== label) ||
        (x === width - 1 || labels[y * width + x + 1] !== label)
      if (hasNonRegionNeighbor) pts.push([x, y])
    }
  }
  return pts
}

// Douglas-Peucker simplification
function perpendicularDist(pt, lineStart, lineEnd) {
  const dx = lineEnd[0] - lineStart[0]
  const dy = lineEnd[1] - lineStart[1]
  if (dx === 0 && dy === 0) {
    return Math.hypot(pt[0] - lineStart[0], pt[1] - lineStart[1])
  }
  const t = ((pt[0] - lineStart[0]) * dx + (pt[1] - lineStart[1]) * dy) / (dx * dx + dy * dy)
  return Math.hypot(pt[0] - (lineStart[0] + t * dx), pt[1] - (lineStart[1] + t * dy))
}

function douglasPeucker(points, epsilon) {
  if (points.length <= 2) return points
  let maxDist = 0, maxIdx = 0
  for (let i = 1; i < points.length - 1; i++) {
    const d = perpendicularDist(points[i], points[0], points[points.length - 1])
    if (d > maxDist) { maxDist = d; maxIdx = i }
  }
  if (maxDist > epsilon) {
    const left = douglasPeucker(points.slice(0, maxIdx + 1), epsilon)
    const right = douglasPeucker(points.slice(maxIdx), epsilon)
    return [...left.slice(0, -1), ...right]
  }
  return [points[0], points[points.length - 1]]
}

// Sous-échantillonne les points du contour avant simplification
function subsample(pts, step) {
  return pts.filter((_, i) => i % step === 0)
}

// Convertit les points en SVG path
function pointsToPath(pts) {
  if (pts.length === 0) return ''
  return `M${pts.map(p => `${p[0]},${p[1]}`).join('L')}Z`
}

// ── Composant principal ───────────────────────────────────────────────────────

export default function AdminMapBuilder() {
  const [imageSrc, setImageSrc] = useState(null)
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 })
  const [regions, setRegions] = useState([]) // {id, path, centroid, name, color}
  const [status, setStatus] = useState('')
  const [darkThreshold, setDarkThreshold] = useState(80)
  const [minPixels, setMinPixels] = useState(500)
  const [epsilon, setEpsilon] = useState(4)
  const [naming, setNaming] = useState(null) // {id}
  const [nameInput, setNameInput] = useState('')
  const [exported, setExported] = useState('')
  const canvasRef = useRef(null)
  const fileRef = useRef(null)

  const COLORS = ['#3498DB55','#E67E2255','#27AE6055','#8E44AD55','#E74C3C55',
    '#F39C1255','#1ABC9C55','#D4AF3755','#C0392B55','#2980B955','#16A08555','#9B59B655']

  const handleFile = useCallback((e) => {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      setImageSrc(url)
      setImgSize({ w: img.naturalWidth, h: img.naturalHeight })
      setRegions([])
      setExported('')
      setStatus('Image chargée. Clique sur "Détecter les régions".')
    }
    img.src = url
  }, [])

  const detect = useCallback(async () => {
    if (!imageSrc) return
    setStatus('Chargement de l\'image…')
    setRegions([])
    setExported('')

    const img = new Image()
    img.crossOrigin = 'anonymous'
    await new Promise(res => { img.onload = res; img.src = imageSrc })

    const canvas = canvasRef.current
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const W = canvas.width, H = canvas.height

    setStatus('Détection des bordures et découpage des régions…')
    await new Promise(res => setTimeout(res, 10))

    const { labels, regionCount } = labelRegions(data, W, H, darkThreshold)
    const counts = countPixels(labels, regionCount)

    setStatus('Tracé des contours…')
    await new Promise(res => setTimeout(res, 10))

    const detected = []
    for (let r = 1; r <= regionCount; r++) {
      if (counts[r] < minPixels) continue
      const c = centroid(labels, r, W)
      const rawPts = traceContour(labels, r, W, H)
      const sampled = subsample(rawPts, Math.max(1, Math.floor(rawPts.length / 600)))
      const simplified = douglasPeucker(sampled, epsilon)
      const path = pointsToPath(simplified)
      detected.push({
        id: r,
        path,
        centroid: c,
        name: '',
        color: COLORS[detected.length % COLORS.length],
        pixelCount: counts[r],
      })
    }

    // Trier par taille décroissante
    detected.sort((a, b) => b.pixelCount - a.pixelCount)
    setRegions(detected)
    setStatus(`${detected.length} région(s) détectée(s). Clique sur une région pour la nommer.`)
  }, [imageSrc, darkThreshold, minPixels, epsilon])

  const handleRegionClick = (id) => {
    const r = regions.find(r => r.id === id)
    setNaming({ id })
    setNameInput(r?.name || '')
  }

  const saveName = () => {
    if (!naming) return
    setRegions(prev => prev.map(r => r.id === naming.id ? { ...r, name: nameInput.trim() } : r))
    setNaming(null)
    setNameInput('')
  }

  const exportCode = () => {
    const named = regions.filter(r => r.name)
    if (named.length === 0) { setExported('// Nomme au moins une région avant d\'exporter.'); return }

    const paths = named.map(r =>
      `  { name: '${r.name}', path: '${r.path}', cx: ${r.centroid?.x || 0}, cy: ${r.centroid?.y || 0} },`
    ).join('\n')

    const code = `// Composant généré automatiquement par Map Builder
// Colle ce fichier dans src/components/ et importe-le dans CountryMap.jsx

import { useState } from 'react'

const REGIONS = [
${paths}
]

const W = ${imgSize.w}
const H = ${imgSize.h}

export default function CustomSVGMap({ onRegionClick, selectedRegion }) {
  const [hovered, setHovered] = useState(null)
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img src="/geo/YOUR_MAP_IMAGE.png" alt="carte" style={{ width: '100%', display: 'block' }} />
      <svg
        viewBox={\`0 0 \${W} \${H}\`}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        {REGIONS.map(({ name, path, cx, cy }) => {
          const isSelected = selectedRegion === name
          const isHovered = hovered === name
          return (
            <g key={name}>
              <path
                d={path}
                fill={isSelected ? '#D4AF3766' : isHovered ? '#D4AF3733' : 'transparent'}
                stroke={isSelected ? '#D4AF37' : '#00000000'}
                strokeWidth="1"
                style={{ cursor: 'pointer', transition: 'fill 0.15s' }}
                onMouseEnter={() => setHovered(name)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onRegionClick(selectedRegion === name ? null : name)}
              />
              {(isSelected || isHovered) && (
                <text x={cx} y={cy} textAnchor="middle" fontSize="12" fill="#2C1810" fontWeight="bold"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}>
                  {name}
                </text>
              )}
            </g>
          )
        })}
      </svg>
    </div>
  )
}`
    setExported(code)
  }

  const reset = () => {
    setImageSrc(null)
    setRegions([])
    setStatus('')
    setExported('')
    if (fileRef.current) fileRef.current.value = ''
  }

  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-5">
        <h2 className="text-lg font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">
          🗺️ Map Builder — Détection automatique des régions
        </h2>
        <p className="text-sm text-[#8B7355] mb-4">
          Charge une image de carte avec des frontières tracées. L'outil détecte automatiquement les régions, tu les nommes, puis tu exportes le composant interactif.
        </p>

        {/* Upload */}
        <div className="flex flex-wrap gap-3 mb-4">
          <label className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm cursor-pointer hover:bg-[#E8C85A] transition-colors">
            <Upload size={15} />
            Charger une image
            <input ref={fileRef} type="file" accept="image/*,.pdf" className="hidden" onChange={handleFile} />
          </label>

          {imageSrc && (
            <>
              <button
                onClick={detect}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C1810] text-white font-semibold text-sm hover:bg-[#4A3728] transition-colors"
              >
                <Zap size={15} /> Détecter les régions
              </button>
              <button
                onClick={exportCode}
                disabled={regions.filter(r => r.name).length === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#27AE60] text-white font-semibold text-sm hover:bg-[#229954] transition-colors disabled:opacity-40"
              >
                <Download size={15} /> Exporter le composant
              </button>
              <button onClick={reset} className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#E8E0CC] text-[#8B7355] text-sm hover:bg-[#F5F0E8] transition-colors">
                <RotateCcw size={14} /> Réinitialiser
              </button>
            </>
          )}
        </div>

        {/* Paramètres */}
        {imageSrc && (
          <div className="flex flex-wrap gap-4 mb-4 p-3 bg-[#FAF7F2] dark:bg-[#0D1117] rounded-xl border border-[#E8E0CC] dark:border-[#30363D]">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#8B7355]">Seuil bordure :</span>
              <input type="range" min="30" max="180" value={darkThreshold}
                onChange={e => setDarkThreshold(+e.target.value)} className="w-24" />
              <span className="text-[#2C1810] font-mono w-6">{darkThreshold}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#8B7355]">Min pixels :</span>
              <input type="range" min="100" max="5000" step="100" value={minPixels}
                onChange={e => setMinPixels(+e.target.value)} className="w-24" />
              <span className="text-[#2C1810] font-mono w-12">{minPixels}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[#8B7355]">Simplification :</span>
              <input type="range" min="1" max="20" value={epsilon}
                onChange={e => setEpsilon(+e.target.value)} className="w-24" />
              <span className="text-[#2C1810] font-mono w-4">{epsilon}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-[#8B7355]">
              <Info size={12} /> Ajuste et re-clique "Détecter" si le résultat n'est pas bon
            </div>
          </div>
        )}

        {/* Statut */}
        {status && (
          <p className="text-sm text-[#D4AF37] font-medium mb-3">{status}</p>
        )}

        {/* Canvas caché pour traitement */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Prévisualisation avec régions SVG */}
        {imageSrc && (
          <div className="relative border border-[#E8E0CC] rounded-xl overflow-hidden" style={{ maxHeight: '70vh' }}>
            <img src={imageSrc} alt="carte" style={{ width: '100%', display: 'block' }} />
            {regions.length > 0 && (
              <svg
                viewBox={`0 0 ${imgSize.w} ${imgSize.h}`}
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
              >
                {regions.map(r => (
                  <g key={r.id} onClick={() => handleRegionClick(r.id)} style={{ cursor: 'pointer' }}>
                    <path
                      d={r.path}
                      fill={r.name ? '#D4AF3744' : r.color}
                      stroke={r.name ? '#D4AF37' : '#00000033'}
                      strokeWidth="1"
                      style={{ transition: 'fill 0.15s' }}
                    />
                    {r.name && r.centroid && (
                      <text
                        x={r.centroid.x} y={r.centroid.y}
                        textAnchor="middle" dominantBaseline="middle"
                        fontSize={Math.max(8, Math.min(14, imgSize.w / 60))}
                        fill="#2C1810" fontWeight="bold"
                        style={{ pointerEvents: 'none', userSelect: 'none' }}
                      >
                        {r.name}
                      </text>
                    )}
                  </g>
                ))}
              </svg>
            )}
          </div>
        )}

        {/* Modal nommage */}
        {naming && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setNaming(null)}>
            <div className="bg-white dark:bg-[#161B22] rounded-2xl p-5 w-72 shadow-2xl" onClick={e => e.stopPropagation()}>
              <h3 className="font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-3">Nommer la région</h3>
              <input
                autoFocus
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && saveName()}
                placeholder="Ex: Nord, Île-de-France…"
                className="w-full px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
              <div className="flex gap-2">
                <button onClick={saveName} className="flex-1 px-3 py-2 rounded-lg bg-[#D4AF37] text-[#2C1810] font-semibold text-sm">
                  Valider
                </button>
                <button onClick={() => setNaming(null)} className="px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm text-[#8B7355]">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Export */}
        {exported && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#2C1810] dark:text-[#E6EDF3]">Code généré — colle dans src/components/</span>
              <button
                onClick={() => navigator.clipboard.writeText(exported)}
                className="text-xs px-3 py-1 rounded-lg bg-[#E8E0CC] text-[#4A3728] hover:bg-[#D4AF37] transition-colors"
              >
                Copier
              </button>
            </div>
            <pre className="text-xs bg-[#0D1117] text-[#58A6FF] rounded-xl p-4 overflow-auto max-h-64 leading-relaxed">
              {exported}
            </pre>
          </div>
        )}
      </div>
    </div>
  )
}
