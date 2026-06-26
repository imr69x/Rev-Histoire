import { useState, useRef, useCallback } from 'react'
import { Upload, Zap, Download, RotateCcw, Info, Save, Plus, Globe, Pencil, CheckCheck, Undo2 } from 'lucide-react'
import { regionsData } from '@/data/pays-regions'

// ── BFS label ─────────────────────────────────────────────────────────────────

function labelRegions(data, width, height, darkThreshold) {
  const labels = new Int32Array(width * height)
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2]
    if ((r + g + b) / 3 < darkThreshold) labels[i] = -1
  }
  let regionCount = 0
  const queue = new Int32Array(width * height)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x
      if (labels[idx] !== 0) continue
      regionCount++
      const label = regionCount
      let head = 0, tail = 0
      queue[tail++] = idx
      labels[idx] = label
      while (head < tail) {
        const cur = queue[head++]
        const cx = cur % width, cy = (cur / width) | 0
        if (cy > 0 && labels[cur - width] === 0) { labels[cur - width] = label; queue[tail++] = cur - width }
        if (cy < height - 1 && labels[cur + width] === 0) { labels[cur + width] = label; queue[tail++] = cur + width }
        if (cx > 0 && labels[cur - 1] === 0) { labels[cur - 1] = label; queue[tail++] = cur - 1 }
        if (cx < width - 1 && labels[cur + 1] === 0) { labels[cur + 1] = label; queue[tail++] = cur + 1 }
      }
    }
  }
  return { labels, regionCount }
}

function getBorderLabels(labels, width, height) {
  const bg = new Set()
  for (let x = 0; x < width; x++) {
    if (labels[x] > 0) bg.add(labels[x])
    if (labels[(height - 1) * width + x] > 0) bg.add(labels[(height - 1) * width + x])
  }
  for (let y = 0; y < height; y++) {
    if (labels[y * width] > 0) bg.add(labels[y * width])
    if (labels[y * width + width - 1] > 0) bg.add(labels[y * width + width - 1])
  }
  return bg
}

function getCentroid(labels, label, width) {
  let sx = 0, sy = 0, n = 0
  for (let i = 0; i < labels.length; i++) {
    if (labels[i] === label) { sx += i % width; sy += (i / width) | 0; n++ }
  }
  return n > 0 ? { x: (sx / n) | 0, y: (sy / n) | 0 } : { x: 0, y: 0 }
}

// ── Tracé EXACT des bords de pixels (zéro chevauchement, zéro trou) ──────────
// Construit la map d'adjacence de bords pour TOUTES les régions en un seul scan
function buildAllBoundaryAdj(labels, width, height) {
  const adjs = new Map() // label → Map("x,y" → [[x2,y2]...])

  function addEdge(adj, x1, y1, x2, y2) {
    const k = `${x1},${y1}`
    if (!adj.has(k)) adj.set(k, [])
    adj.get(k).push([x2, y2])
  }

  for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      const lbl = labels[py * width + px]
      if (lbl <= 0) continue
      if (!adjs.has(lbl)) adjs.set(lbl, new Map())
      const adj = adjs.get(lbl)
      // Bord haut → arête gauche→droite (région en bas = à droite du sens de marche)
      if (py === 0 || labels[(py - 1) * width + px] !== lbl)
        addEdge(adj, px, py, px + 1, py)
      // Bord bas → arête droite→gauche
      if (py === height - 1 || labels[(py + 1) * width + px] !== lbl)
        addEdge(adj, px + 1, py + 1, px, py + 1)
      // Bord gauche → arête bas→haut
      if (px === 0 || labels[py * width + px - 1] !== lbl)
        addEdge(adj, px, py + 1, px, py)
      // Bord droit → arête haut→bas
      if (px === width - 1 || labels[py * width + px + 1] !== lbl)
        addEdge(adj, px + 1, py, px + 1, py + 1)
    }
  }
  return adjs
}

function traceFromAdj(adj, labels, label, width, height) {
  if (!adj || adj.size === 0) return []

  // Point de départ : coin supérieur gauche du premier pixel (haut-gauche de l'image)
  let startPx = -1, startPy = -1
  outer: for (let py = 0; py < height; py++) {
    for (let px = 0; px < width; px++) {
      if (labels[py * width + px] === label) { startPx = px; startPy = py; break outer }
    }
  }
  if (startPx === -1) return []

  let cx = startPx, cy = startPy
  let nx = startPx + 1, ny = startPy  // première arête : haut du premier pixel, gauche→droite

  const path = []
  const visited = new Set()

  for (let guard = 0; guard < labels.length; guard++) {
    const eKey = `${cx},${cy}→${nx},${ny}`
    if (visited.has(eKey)) break
    visited.add(eKey)
    path.push([cx, cy])

    const adx = nx - cx, ady = ny - cy
    const nexts = adj.get(`${nx},${ny}`) || []
    cx = nx; cy = ny
    if (nexts.length === 0) break

    if (nexts.length === 1) {
      ;[nx, ny] = nexts[0]
      continue
    }

    // Plusieurs sorties : privilégier virage à DROITE (tracé horaire, région à droite)
    // Rotation horaire écran (Y bas) : (dx,dy) → (dy,−dx)
    const prefs = [
      [cx + ady, cy - adx],   // virage droite
      [cx + adx, cy + ady],   // tout droit
      [cx - ady, cy + adx],   // virage gauche
      [cx - adx, cy - ady],   // demi-tour
    ]
    let chosen = nexts[0]
    for (const [px, py] of prefs) {
      const f = nexts.find(([x, y]) => x === px && y === py)
      if (f) { chosen = f; break }
    }
    ;[nx, ny] = chosen
  }

  return path
}

function douglasPeucker(pts, eps) {
  if (pts.length <= 2) return pts
  let maxD = 0, maxI = 0
  const [ax, ay] = pts[0], [bx, by] = pts[pts.length - 1]
  const dx = bx - ax, dy = by - ay, len = Math.hypot(dx, dy)
  for (let i = 1; i < pts.length - 1; i++) {
    const d = len > 0 ? Math.abs((pts[i][1] - ay) * dx - (pts[i][0] - ax) * dy) / len : Math.hypot(pts[i][0] - ax, pts[i][1] - ay)
    if (d > maxD) { maxD = d; maxI = i }
  }
  if (maxD > eps) {
    const l = douglasPeucker(pts.slice(0, maxI + 1), eps)
    const r = douglasPeucker(pts.slice(maxI), eps)
    return [...l.slice(0, -1), ...r]
  }
  return [pts[0], pts[pts.length - 1]]
}

function toPath(pts) {
  if (!pts.length) return ''
  return `M${pts.map(p => `${p[0]},${p[1]}`).join('L')}Z`
}

const COLORS = ['#3498DB','#E67E22','#27AE60','#8E44AD','#E74C3C',
  '#F39C12','#1ABC9C','#D4AF37','#C0392B','#2980B9','#16A085','#9B59B6']

// ── Map Builder ───────────────────────────────────────────────────────────────

function MapBuilder() {
  const [imageSrc, setImageSrc] = useState(null)
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 })
  const [regions, setRegions] = useState([])
  const [status, setStatus] = useState('')
  const [darkThreshold, setDarkThreshold] = useState(80)
  const [minPixels, setMinPixels] = useState(300)
  const [epsilon, setEpsilon] = useState(3)
  const [naming, setNaming] = useState(null)
  const [nameInput, setNameInput] = useState('')
  const [expandedId, setExpandedId] = useState(null)
  const [countryMode, setCountryMode] = useState('existing')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [newCountryId, setNewCountryId] = useState('')
  const [newCountryLabel, setNewCountryLabel] = useState('')
  const [exportedCode, setExportedCode] = useState('')

  // Mode dessin manuel
  const [manualMode, setManualMode] = useState(false)
  const [drawPoints, setDrawPoints] = useState([])   // [[x,y], ...] en coords image
  const [cursorPt, setCursorPt] = useState(null)

  const hiddenCanvasRef = useRef(null)
  const svgOverlayRef = useRef(null)

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      setImageSrc(url); setImgSize({ w: img.naturalWidth, h: img.naturalHeight })
      setRegions([]); setExportedCode(''); setStatus('Image chargée.')
      setManualMode(false); setDrawPoints([])
    }
    img.src = url
  }

  const detect = useCallback(async () => {
    if (!imageSrc) return
    setStatus('Analyse en cours…'); setRegions([]); setExportedCode('')
    setManualMode(false); setDrawPoints([])
    const img = new Image()
    await new Promise(res => { img.onload = res; img.src = imageSrc })
    const canvas = hiddenCanvasRef.current
    canvas.width = img.naturalWidth; canvas.height = img.naturalHeight
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const W = canvas.width, H = canvas.height

    setStatus('Étiquetage BFS…')
    await new Promise(res => setTimeout(res, 10))
    const { labels, regionCount } = labelRegions(data, W, H, darkThreshold)
    const bgSet = getBorderLabels(labels, W, H)

    const counts = new Int32Array(regionCount + 1)
    for (let i = 0; i < labels.length; i++) if (labels[i] > 0) counts[labels[i]]++

    setStatus('Construction des bords exacts…')
    await new Promise(res => setTimeout(res, 10))
    const allAdjs = buildAllBoundaryAdj(labels, W, H)

    setStatus('Tracé des contours…')
    await new Promise(res => setTimeout(res, 10))

    const detected = []
    for (let r = 1; r <= regionCount; r++) {
      if (counts[r] < minPixels) continue
      if (bgSet.has(r)) continue
      const c = getCentroid(labels, r, W)
      const adj = allAdjs.get(r)
      const rawPts = traceFromAdj(adj, labels, r, W, H)
      const simplified = douglasPeucker(rawPts, epsilon)
      detected.push({
        id: r, path: toPath(simplified), centroid: c,
        name: '', chef_lieu: '', villes: '', fleuves: '', description: '',
        color: COLORS[detected.length % COLORS.length],
        pixelCount: counts[r],
      })
    }
    detected.sort((a, b) => b.pixelCount - a.pixelCount)
    const median = detected[Math.floor(detected.length / 2)]?.pixelCount || 0
    const filtered = detected.filter(r => r.pixelCount >= median * 0.05)
    setRegions(filtered)
    setStatus(`${filtered.length} région(s) détectée(s) — sans chevauchement.`)
  }, [imageSrc, darkThreshold, minPixels, epsilon])

  const updateRegion = (id, fields) =>
    setRegions(prev => prev.map(r => r.id === id ? { ...r, ...fields } : r))

  // ── Dessin manuel ────────────────────────────────────────────────────────────

  const svgToImageCoords = (e) => {
    const svg = svgOverlayRef.current
    if (!svg) return null
    const rect = svg.getBoundingClientRect()
    return [
      Math.round((e.clientX - rect.left) * imgSize.w / rect.width),
      Math.round((e.clientY - rect.top) * imgSize.h / rect.height),
    ]
  }

  const handleSvgClick = (e) => {
    if (!manualMode) {
      // clic normal → modal nommage
      return
    }
    e.stopPropagation()
    const pt = svgToImageCoords(e)
    if (pt) setDrawPoints(prev => [...prev, pt])
  }

  const handleSvgMove = (e) => {
    if (!manualMode || drawPoints.length === 0) { setCursorPt(null); return }
    setCursorPt(svgToImageCoords(e))
  }

  const handleSvgDblClick = (e) => {
    if (!manualMode) return
    e.stopPropagation()
    closeManualPolygon()
  }

  const closeManualPolygon = () => {
    if (drawPoints.length < 3) return
    const pts = drawPoints
    const path = toPath(pts)
    const cx = (pts.reduce((s, p) => s + p[0], 0) / pts.length) | 0
    const cy = (pts.reduce((s, p) => s + p[1], 0) / pts.length) | 0
    setRegions(prev => [...prev, {
      id: Date.now(),
      path, centroid: { x: cx, y: cy },
      name: '', chef_lieu: '', villes: '', fleuves: '', description: '',
      color: COLORS[regions.length % COLORS.length],
      pixelCount: 0, manual: true,
    }])
    setDrawPoints([])
    setCursorPt(null)
  }

  const undoLastPoint = () => setDrawPoints(prev => prev.slice(0, -1))

  // ── Export ───────────────────────────────────────────────────────────────────

  const generateExport = () => {
    const countryId = countryMode === 'existing' ? selectedCountry : newCountryId.trim()
    const countryLabel = countryMode === 'existing' ? selectedCountry : newCountryLabel.trim()
    if (!countryId) { setStatus('Choisis ou saisis un pays cible.'); return }
    const compName = (countryLabel || countryId).replace(/[^a-zA-Z0-9]/g, '') || 'Custom'

    const paysEntries = regions.map((r, i) => {
      const nom = r.name || `Région ${i + 1}`
      const villes = r.villes ? r.villes.split('\n').filter(Boolean) : []
      const fleuves = r.fleuves ? r.fleuves.split('\n').filter(Boolean) : []
      return `  '${nom}': { chef_lieu: '${r.chef_lieu || ''}', villes: [${villes.map(v => `'${v}'`).join(', ')}], fleuves: [${fleuves.map(f => `'${f}'`).join(', ')}], description: '${r.description || ''}', couleur: '${r.color}' },`
    }).join('\n')

    const svgRegions = regions.map((r, i) => {
      const nom = r.name || `Région ${i + 1}`
      return `  { name: '${nom}', path: '${r.path}', cx: ${r.centroid?.x || 0}, cy: ${r.centroid?.y || 0}, couleur: '${r.color}' },`
    }).join('\n')

    setExportedCode(`// ── 1. Dans src/data/pays-regions.js ──────────────────
'${countryId}': {
${paysEntries}
},

// ── 2. Crée src/components/${compName}SVGMap.jsx ───────
import { useState } from 'react'
const REGIONS = [
${svgRegions}
]
const W = ${imgSize.w}, H = ${imgSize.h}
export default function ${compName}SVGMap({ onRegionClick, selectedRegion }) {
  const [hov, setHov] = useState(null)
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img src="/geo/${countryId}-map.png" alt="carte" style={{ width: '100%', display: 'block' }} />
      <svg viewBox={\`0 0 \${W} \${H}\`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {REGIONS.map(({ name, path, cx, cy, couleur }) => {
          const sel = selectedRegion === name, h = hov === name
          return (
            <g key={name} onClick={() => onRegionClick(sel ? null : name)}
              onMouseEnter={() => setHov(name)} onMouseLeave={() => setHov(null)} style={{ cursor: 'pointer' }}>
              <path d={path} fill={sel ? couleur+'99' : h ? couleur+'44' : couleur+'22'}
                stroke={sel || h ? couleur : 'transparent'} strokeWidth="1.5" />
              {(sel || h) && <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
                fontSize="12" fill="#2C1810" fontWeight="bold" style={{ pointerEvents: 'none' }}>{name}</text>}
            </g>
          )
        })}
      </svg>
    </div>
  )
}`)
  }

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <div className="space-y-4">
      {/* Actions */}
      <div className="flex flex-wrap gap-2">
        <label className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm cursor-pointer hover:bg-[#E8C85A]">
          <Upload size={14} /> Charger image
          <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </label>
        {imageSrc && <>
          <button onClick={detect} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C1810] text-white font-semibold text-sm hover:bg-[#4A3728]">
            <Zap size={14} /> Détecter auto
          </button>
          <button
            onClick={() => { setManualMode(m => !m); setDrawPoints([]); setCursorPt(null) }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-colors ${manualMode ? 'bg-[#E74C3C] text-white' : 'bg-[#8E44AD] text-white hover:bg-[#7D3C98]'}`}>
            <Pencil size={14} /> {manualMode ? 'Quitter dessin' : 'Dessin manuel'}
          </button>
          <button onClick={() => { setImageSrc(null); setRegions([]); setStatus(''); setExportedCode(''); setManualMode(false); setDrawPoints([]) }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#E8E0CC] text-[#8B7355] text-sm">
            <RotateCcw size={13} /> Reset
          </button>
        </>}
      </div>

      {/* Sliders (détection auto) */}
      {imageSrc && !manualMode && (
        <div className="flex flex-wrap gap-4 p-3 bg-[#FAF7F2] rounded-xl border border-[#E8E0CC] text-sm">
          {[
            ['Seuil trait', darkThreshold, setDarkThreshold, 20, 200, 1],
            ['Min pixels', minPixels, setMinPixels, 50, 5000, 50],
            ['Simplification', epsilon, setEpsilon, 1, 20, 1],
          ].map(([label, val, set, min, max, s]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[#8B7355] whitespace-nowrap">{label} :</span>
              <input type="range" min={min} max={max} step={s} value={val} onChange={e => set(+e.target.value)} className="w-20" />
              <span className="font-mono text-[#2C1810] w-10">{val}</span>
            </div>
          ))}
          <span className="text-[#8B7355] flex items-center gap-1 text-xs"><Info size={11}/> Réajuste et re-clique Détecter</span>
        </div>
      )}

      {/* Aide mode manuel */}
      {manualMode && (
        <div className="flex flex-wrap items-center gap-3 p-3 bg-[#F5F0FB] rounded-xl border border-[#C39BD3] text-sm">
          <span className="text-[#8E44AD] font-semibold">✏️ Mode dessin :</span>
          <span className="text-[#5B2C6F]">Clique pour poser des points • Double-clic pour fermer la région</span>
          {drawPoints.length > 0 && <>
            <span className="text-[#8E44AD] font-mono">{drawPoints.length} pt{drawPoints.length > 1 ? 's' : ''}</span>
            <button onClick={undoLastPoint} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white border border-[#C39BD3] text-[#8E44AD] text-xs hover:bg-[#F5EEF8]">
              <Undo2 size={12} /> Annuler dernier
            </button>
            {drawPoints.length >= 3 && (
              <button onClick={closeManualPolygon} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#8E44AD] text-white text-xs hover:bg-[#7D3C98]">
                <CheckCheck size={12} /> Fermer la région
              </button>
            )}
            <button onClick={() => setDrawPoints([])} className="text-xs px-2 py-1 rounded-lg border border-[#E8E0CC] text-[#8B7355]">
              Effacer
            </button>
          </>}
        </div>
      )}

      {status && <p className="text-sm font-medium text-[#D4AF37]">{status}</p>}
      <canvas ref={hiddenCanvasRef} className="hidden" />

      {/* Carte interactive */}
      {imageSrc && (
        <div className="relative border border-[#E8E0CC] rounded-xl overflow-hidden bg-gray-50"
          style={{ maxHeight: '65vh', cursor: manualMode ? 'crosshair' : 'default' }}>
          <img src={imageSrc} alt="carte" style={{ width: '100%', display: 'block' }} />

          <svg
            ref={svgOverlayRef}
            viewBox={`0 0 ${imgSize.w} ${imgSize.h}`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            onClick={handleSvgClick}
            onMouseMove={handleSvgMove}
            onMouseLeave={() => setCursorPt(null)}
            onDoubleClick={handleSvgDblClick}
          >
            {/* Régions détectées / manuelles */}
            {regions.map(r => (
              <g key={r.id}
                onClick={manualMode ? undefined : (e) => { e.stopPropagation(); setNaming(r.id); setNameInput(r.name) }}
                style={{ cursor: manualMode ? 'crosshair' : 'pointer' }}>
                <path d={r.path} fill={r.name ? r.color + '55' : r.color + '33'} stroke={r.color} strokeWidth="1.5" />
                {r.name && r.centroid && (
                  <text x={r.centroid.x} y={r.centroid.y} textAnchor="middle" dominantBaseline="middle"
                    fontSize={Math.max(8, Math.min(13, imgSize.w / 75))} fill="#2C1810" fontWeight="bold"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}>{r.name}</text>
                )}
              </g>
            ))}

            {/* Polygone en cours de dessin */}
            {manualMode && drawPoints.length > 1 && (
              <polyline
                points={drawPoints.map(p => p.join(',')).join(' ')}
                fill="none" stroke="#8E44AD" strokeWidth="2" strokeDasharray="6,3" />
            )}
            {manualMode && drawPoints.length >= 3 && (
              <line
                x1={drawPoints[drawPoints.length - 1][0]} y1={drawPoints[drawPoints.length - 1][1]}
                x2={drawPoints[0][0]} y2={drawPoints[0][1]}
                stroke="#8E44AD" strokeWidth="1.5" strokeDasharray="4,6" opacity="0.5" />
            )}
            {manualMode && cursorPt && drawPoints.length > 0 && (
              <line
                x1={drawPoints[drawPoints.length - 1][0]} y1={drawPoints[drawPoints.length - 1][1]}
                x2={cursorPt[0]} y2={cursorPt[1]}
                stroke="#C39BD3" strokeWidth="1.5" strokeDasharray="4,4" />
            )}
            {manualMode && drawPoints.map((p, i) => (
              <circle key={i} cx={p[0]} cy={p[1]} r={i === 0 ? 6 : 4}
                fill={i === 0 ? '#8E44AD' : '#D4AF37'} stroke="white" strokeWidth="1.5" />
            ))}
          </svg>
        </div>
      )}

      {/* Modal nommage */}
      {naming !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={() => setNaming(null)}>
          <div className="bg-white dark:bg-[#161B22] rounded-2xl p-5 w-72 shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-3">Nom de la région</h3>
            <input autoFocus value={nameInput} onChange={e => setNameInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { updateRegion(naming, { name: nameInput.trim() }); setNaming(null) } }}
              placeholder="Ex: Souss-Massa"
              className="w-full px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
            <div className="flex gap-2">
              <button onClick={() => { updateRegion(naming, { name: nameInput.trim() }); setNaming(null) }}
                className="flex-1 px-3 py-2 rounded-lg bg-[#D4AF37] text-[#2C1810] font-semibold text-sm">Valider</button>
              <button onClick={() => setNaming(null)} className="px-3 py-2 rounded-lg border text-sm text-[#8B7355]">Annuler</button>
            </div>
          </div>
        </div>
      )}

      {/* Données + export */}
      {regions.length > 0 && (
        <div className="border border-[#E8E0CC] rounded-xl p-4 space-y-4">
          <div>
            <p className="text-sm font-bold text-[#2C1810] mb-2 flex items-center gap-2"><Globe size={14}/> Associer à un pays</p>
            <div className="flex gap-2 mb-2">
              {[['existing', 'Pays existant'], ['new', 'Nouveau pays']].map(([m, lbl]) => (
                <button key={m} onClick={() => setCountryMode(m)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${countryMode === m ? 'bg-[#D4AF37] text-[#2C1810]' : 'bg-[#F5F0E8] text-[#8B7355] hover:bg-[#E8E0CC]'}`}>
                  {m === 'new' && <Plus size={12} className="inline mr-1"/>}{lbl}
                </button>
              ))}
            </div>
            {countryMode === 'existing' ? (
              <select value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                <option value="">-- Choisir --</option>
                {Object.keys(regionsData).map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            ) : (
              <div className="flex gap-2">
                <input value={newCountryId} onChange={e => setNewCountryId(e.target.value)} placeholder="id (ex: maroc)"
                  className="flex-1 px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
                <input value={newCountryLabel} onChange={e => setNewCountryLabel(e.target.value)} placeholder="Nom affiché (ex: Maroc)"
                  className="flex-1 px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              </div>
            )}
          </div>

          <div>
            <p className="text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-2">
              {regions.filter(r => r.name).length}/{regions.length} régions nommées
            </p>
            <div className="space-y-1.5">
              {regions.map((r, i) => (
                <div key={r.id} className="border border-[#E8E0CC] rounded-xl overflow-hidden">
                  <button onClick={() => setExpandedId(expandedId === r.id ? null : r.id)}
                    className="w-full flex items-center gap-2.5 px-3 py-2.5 text-left hover:bg-[#FAF7F2] transition-colors">
                    <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: r.color }} />
                    <span className="flex-1 text-sm font-medium text-[#2C1810]">
                      {r.name || <span className="text-[#8B7355] italic">Région {i+1}{r.manual ? ' ✏️' : ''} — clique sur la carte pour nommer</span>}
                    </span>
                    {r.chef_lieu && <span className="text-xs text-[#8B7355]">{r.chef_lieu}</span>}
                    <span className="text-[#8B7355] text-xs">{expandedId === r.id ? '▲' : '▼'}</span>
                  </button>
                  {expandedId === r.id && (
                    <div className="px-3 pb-3 space-y-2 border-t border-[#E8E0CC] bg-[#FAFAF8]">
                      <div className="pt-2 grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs font-semibold text-[#8B7355] uppercase tracking-wider mb-1">Nom</label>
                          <input value={r.name} onChange={e => updateRegion(r.id, { name: e.target.value })} placeholder="Ex: Souss-Massa"
                            className="w-full px-2 py-1.5 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#8B7355] uppercase tracking-wider mb-1">Chef-lieu</label>
                          <input value={r.chef_lieu} onChange={e => updateRegion(r.id, { chef_lieu: e.target.value })} placeholder="Ex: Agadir"
                            className="w-full px-2 py-1.5 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
                        </div>
                      </div>
                      {[['villes','Villes (une par ligne)','Agadir\nInezgane'],['fleuves','Fleuves (un par ligne)','Oued Souss'],['description','Description','Région du sud-ouest…']].map(([k,lbl,ph]) => (
                        <div key={k}>
                          <label className="block text-xs font-semibold text-[#8B7355] uppercase tracking-wider mb-1">{lbl}</label>
                          <textarea value={r[k] || ''} onChange={e => updateRegion(r.id, { [k]: e.target.value })} placeholder={ph} rows={2}
                            className="w-full px-2 py-1.5 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-y" />
                        </div>
                      ))}
                      <div>
                        <label className="block text-xs font-semibold text-[#8B7355] uppercase tracking-wider mb-1">Couleur</label>
                        <div className="flex gap-1 flex-wrap">
                          {COLORS.map(c => (
                            <button key={c} onClick={() => updateRegion(r.id, { color: c })}
                              className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${r.color === c ? 'border-[#2C1810] scale-110' : 'border-transparent'}`}
                              style={{ background: c }} />
                          ))}
                        </div>
                      </div>
                      <button onClick={() => setRegions(prev => prev.filter(x => x.id !== r.id))}
                        className="text-xs text-[#E74C3C] hover:underline">Supprimer cette région</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button onClick={generateExport}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#27AE60] text-white font-semibold text-sm hover:bg-[#229954]">
            <Download size={14} /> Générer le code
          </button>
        </div>
      )}

      {exportedCode && (
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold text-[#2C1810]">Code généré</span>
            <button onClick={() => navigator.clipboard.writeText(exportedCode)}
              className="text-xs px-3 py-1 rounded-lg bg-[#E8E0CC] hover:bg-[#D4AF37] transition-colors font-medium">📋 Copier</button>
          </div>
          <pre className="text-xs bg-[#0D1117] text-[#58A6FF] rounded-xl p-4 overflow-auto max-h-56 whitespace-pre-wrap">{exportedCode}</pre>
        </div>
      )}
    </div>
  )
}

// ── Éditeur pays existants ────────────────────────────────────────────────────

function CountryEditor() {
  const countries = Object.keys(regionsData)
  const [selectedCountry, setSelectedCountry] = useState('')
  const [editData, setEditData] = useState({})
  const [selectedRegion, setSelectedRegion] = useState('')
  const [saved, setSaved] = useState(false)

  const loadCountry = (cid) => {
    setSelectedCountry(cid); setSelectedRegion('')
    setEditData(JSON.parse(JSON.stringify(regionsData[cid] || {})))
    setSaved(false)
  }

  const regionNames = Object.keys(editData)
  const regionData = editData[selectedRegion] || {}

  const updateField = (field, value) => {
    setEditData(prev => ({ ...prev, [selectedRegion]: { ...prev[selectedRegion], [field]: value } }))
    setSaved(false)
  }
  const updateArrayField = (field, value) => updateField(field, value.split('\n').map(s => s.trim()).filter(Boolean))

  const exportPatch = () => {
    navigator.clipboard.writeText(JSON.stringify({ [selectedCountry]: editData }, null, 2))
    setSaved(true)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3 items-center">
        <select value={selectedCountry} onChange={e => loadCountry(e.target.value)}
          className="px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
          <option value="">-- Choisir un pays --</option>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        {selectedCountry && <span className="text-sm text-[#8B7355]">{regionNames.length} entrées</span>}
      </div>

      {selectedCountry && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-[#E8E0CC] rounded-xl overflow-auto max-h-[60vh]">
            <div className="px-3 py-2 bg-[#FAF7F2] border-b border-[#E8E0CC] text-xs font-bold text-[#8B7355] uppercase tracking-wider sticky top-0">
              Régions / Depts
            </div>
            {regionNames.map(name => (
              <button key={name} onClick={() => setSelectedRegion(name)}
                className={`w-full text-left px-3 py-2 text-sm border-b border-[#F0EBE0] transition-colors ${selectedRegion === name ? 'bg-[#D4AF3722] text-[#2C1810] font-semibold' : 'text-[#4A3728] hover:bg-[#F5F0E8]'}`}>
                {name}
              </button>
            ))}
          </div>

          {selectedRegion && (
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#2C1810]">{selectedRegion}</h3>
                <button onClick={exportPatch}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${saved ? 'bg-[#27AE60] text-white' : 'bg-[#D4AF37] text-[#2C1810]'}`}>
                  <Save size={12} />{saved ? '✓ Copié !' : 'Copier le patch'}
                </button>
              </div>

              {[
                { key: 'chef_lieu', label: 'Chef-lieu', type: 'text' },
                { key: 'population', label: 'Population', type: 'text' },
                { key: 'superficie', label: 'Superficie', type: 'text' },
                { key: 'description', label: 'Description', type: 'textarea' },
                { key: 'histoire', label: 'Histoire', type: 'textarea' },
              ].map(({ key, label, type }) => (
                <div key={key}>
                  <label className="block text-xs font-semibold text-[#8B7355] uppercase tracking-wider mb-1">{label}</label>
                  {type === 'textarea' ? (
                    <textarea value={regionData[key] || ''} onChange={e => updateField(key, e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-y min-h-[70px]" />
                  ) : (
                    <input value={regionData[key] || ''} onChange={e => updateField(key, e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
                  )}
                </div>
              ))}

              {[
                { key: 'villes', label: 'Villes (une par ligne)' },
                { key: 'fleuves', label: 'Fleuves (un par ligne)' },
                { key: 'sites', label: 'Sites (un par ligne)' },
                { key: 'personnages', label: 'Personnages (un par ligne)' },
              ].map(({ key, label }) => (
                <div key={key}>
                  <label className="block text-xs font-semibold text-[#8B7355] uppercase tracking-wider mb-1">{label}</label>
                  <textarea value={(regionData[key] || []).join('\n')} onChange={e => updateArrayField(key, e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-y min-h-[60px]" />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Export ────────────────────────────────────────────────────────────────────

export default function AdminMapBuilder() {
  const [tab, setTab] = useState('builder')
  return (
    <div className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-5">
      <h2 className="text-lg font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">🗺️ Map Builder</h2>
      <p className="text-sm text-[#8B7355] mb-4">Détecte ou dessine les régions d'une carte et génère une carte interactive.</p>
      <div className="flex gap-1 mb-5 border-b border-[#E8E0CC]">
        {[['builder', '🖼️ Nouvelle carte'], ['editor', '✏️ Modifier un pays existant']].map(([id, label]) => (
          <button key={id} onClick={() => setTab(id)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors ${tab === id ? 'border-[#D4AF37] text-[#2C1810]' : 'border-transparent text-[#8B7355] hover:text-[#2C1810]'}`}>
            {label}
          </button>
        ))}
      </div>
      {tab === 'builder' && <MapBuilder />}
      {tab === 'editor' && <CountryEditor />}
    </div>
  )
}
