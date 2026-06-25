import { useState, useRef, useCallback } from 'react'
import { Upload, Zap, Download, RotateCcw, Info, ChevronDown, ChevronUp, Save } from 'lucide-react'
import { regionsData } from '@/data/pays-regions'

// ── Algorithmes ──────────────────────────────────────────────────────────────

function labelRegions(data, width, height, darkThreshold) {
  const labels = new Int32Array(width * height)
  // Marquer bordures
  for (let i = 0; i < width * height; i++) {
    const r = data[i * 4], g = data[i * 4 + 1], b = data[i * 4 + 2]
    if ((r + g + b) / 3 < darkThreshold) labels[i] = -1
  }
  // Flood fill BFS
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

function countPixels(labels, regionCount) {
  const counts = new Int32Array(regionCount + 1)
  for (let i = 0; i < labels.length; i++) if (labels[i] > 0) counts[labels[i]]++
  return counts
}

// Centroïde d'une région
function getCentroid(labels, label, width) {
  let sx = 0, sy = 0, n = 0
  for (let i = 0; i < labels.length; i++) {
    if (labels[i] === label) { sx += i % width; sy += (i / width) | 0; n++ }
  }
  return n > 0 ? { x: (sx / n) | 0, y: (sy / n) | 0 } : { x: 0, y: 0 }
}

// Contour ordonné par angle depuis le centroïde (fonctionne pour les formes convexes et la plupart des régions de carte)
function traceContourByAngle(labels, label, width, height, step) {
  const c = getCentroid(labels, label, width)
  const pts = []
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if (labels[y * width + x] !== label) continue
      // pixel de bordure ?
      let isBorder = false
      for (let dy = -step; dy <= step && !isBorder; dy += step)
        for (let dx = -step; dx <= step && !isBorder; dx += step) {
          const nx = x + dx, ny = y + dy
          if (nx < 0 || nx >= width || ny < 0 || ny >= height || labels[ny * width + nx] !== label)
            isBorder = true
        }
      if (isBorder) pts.push([x, y, Math.atan2(y - c.y, x - c.x)])
    }
  }
  pts.sort((a, b) => a[2] - b[2])
  return pts.map(p => [p[0], p[1]])
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

// ── Map Builder ──────────────────────────────────────────────────────────────

function MapBuilder() {
  const [imageSrc, setImageSrc] = useState(null)
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 })
  const [regions, setRegions] = useState([])
  const [status, setStatus] = useState('')
  const [darkThreshold, setDarkThreshold] = useState(80)
  const [minPixels, setMinPixels] = useState(300)
  const [epsilon, setEpsilon] = useState(3)
  const [step, setStep] = useState(2)
  const [naming, setNaming] = useState(null)
  const [nameInput, setNameInput] = useState('')
  const [exported, setExported] = useState('')
  const canvasRef = useRef(null)
  const fileRef = useRef(null)

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      setImageSrc(url); setImgSize({ w: img.naturalWidth, h: img.naturalHeight })
      setRegions([]); setExported(''); setStatus('Image chargée.')
    }
    img.src = url
  }

  const detect = useCallback(async () => {
    if (!imageSrc) return
    setStatus('Analyse en cours…'); setRegions([]); setExported('')
    const img = new Image()
    await new Promise(res => { img.onload = res; img.src = imageSrc })
    const canvas = canvasRef.current
    canvas.width = img.naturalWidth; canvas.height = img.naturalHeight
    const ctx = canvas.getContext('2d')
    ctx.drawImage(img, 0, 0)
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const W = canvas.width, H = canvas.height

    setStatus('Étiquetage des régions…')
    await new Promise(res => setTimeout(res, 10))
    const { labels, regionCount } = labelRegions(data, W, H, darkThreshold)
    const counts = countPixels(labels, regionCount)

    setStatus('Tracé des contours…')
    await new Promise(res => setTimeout(res, 10))

    const detected = []
    for (let r = 1; r <= regionCount; r++) {
      if (counts[r] < minPixels) continue
      const c = getCentroid(labels, r, W)
      const rawPts = traceContourByAngle(labels, r, W, H, step)
      const simplified = douglasPeucker(rawPts, epsilon)
      detected.push({
        id: r, path: toPath(simplified), centroid: c, name: '',
        color: COLORS[detected.length % COLORS.length], pixelCount: counts[r],
      })
    }
    detected.sort((a, b) => b.pixelCount - a.pixelCount)
    setRegions(detected)
    setStatus(`${detected.length} région(s) détectée(s). Clique pour nommer.`)
  }, [imageSrc, darkThreshold, minPixels, epsilon, step])

  const exportCode = () => {
    const named = regions.filter(r => r.name)
    if (!named.length) { setExported('// Nomme au moins une région.'); return }
    const code = `// Généré par Map Builder — colle dans src/components/
import { useState } from 'react'

const REGIONS = [
${named.map(r => `  { name: '${r.name}', path: '${r.path}', cx: ${r.centroid?.x||0}, cy: ${r.centroid?.y||0} },`).join('\n')}
]
const W = ${imgSize.w}, H = ${imgSize.h}

export default function CustomSVGMap({ onRegionClick, selectedRegion }) {
  const [hovered, setHovered] = useState(null)
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <img src="/geo/YOUR_MAP.png" alt="carte" style={{ width: '100%', display: 'block' }} />
      <svg viewBox={\`0 0 \${W} \${H}\`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        {REGIONS.map(({ name, path, cx, cy }) => {
          const sel = selectedRegion === name, hov = hovered === name
          return (
            <g key={name} onClick={() => onRegionClick(sel ? null : name)}
              onMouseEnter={() => setHovered(name)} onMouseLeave={() => setHovered(null)}
              style={{ cursor: 'pointer' }}>
              <path d={path} fill={sel ? '#D4AF3766' : hov ? '#D4AF3733' : 'transparent'}
                stroke={sel ? '#D4AF37' : 'transparent'} strokeWidth="1" />
              {(sel || hov) && (
                <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle"
                  fontSize="12" fill="#2C1810" fontWeight="bold" style={{ pointerEvents: 'none' }}>
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

  return (
    <div className="space-y-4">
      {/* Contrôles */}
      <div className="flex flex-wrap gap-2 mb-2">
        <label className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm cursor-pointer hover:bg-[#E8C85A]">
          <Upload size={14} /> Charger image
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </label>
        {imageSrc && <>
          <button onClick={detect} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C1810] text-white font-semibold text-sm hover:bg-[#4A3728]">
            <Zap size={14} /> Détecter
          </button>
          <button onClick={exportCode} disabled={!regions.some(r => r.name)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#27AE60] text-white font-semibold text-sm hover:bg-[#229954] disabled:opacity-40">
            <Download size={14} /> Exporter
          </button>
          <button onClick={() => { setImageSrc(null); setRegions([]); setStatus(''); setExported('') }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#E8E0CC] text-[#8B7355] text-sm">
            <RotateCcw size={13} /> Reset
          </button>
        </>}
      </div>

      {/* Sliders */}
      {imageSrc && (
        <div className="flex flex-wrap gap-4 p-3 bg-[#FAF7F2] rounded-xl border border-[#E8E0CC] text-sm">
          {[
            ['Seuil bordure', darkThreshold, setDarkThreshold, 20, 200, 1],
            ['Min pixels', minPixels, setMinPixels, 50, 5000, 50],
            ['Pas scan', step, setStep, 1, 6, 1],
            ['Simplification', epsilon, setEpsilon, 1, 20, 1],
          ].map(([label, val, set, min, max, s]) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[#8B7355] whitespace-nowrap">{label} :</span>
              <input type="range" min={min} max={max} step={s} value={val}
                onChange={e => set(+e.target.value)} className="w-20" />
              <span className="font-mono text-[#2C1810] w-10">{val}</span>
            </div>
          ))}
          <span className="text-[#8B7355] flex items-center gap-1 text-xs"><Info size={11}/> Réajuste et re-clique Détecter</span>
        </div>
      )}

      {status && <p className="text-sm font-medium text-[#D4AF37]">{status}</p>}

      <canvas ref={canvasRef} className="hidden" />

      {/* Prévisualisation */}
      {imageSrc && (
        <div className="relative border border-[#E8E0CC] rounded-xl overflow-hidden bg-gray-50" style={{ maxHeight: '65vh' }}>
          <img src={imageSrc} alt="carte" style={{ width: '100%', display: 'block' }} />
          {regions.length > 0 && (
            <svg viewBox={`0 0 ${imgSize.w} ${imgSize.h}`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              {regions.map(r => (
                <g key={r.id} onClick={() => { setNaming({ id: r.id }); setNameInput(r.name) }} style={{ cursor: 'pointer' }}>
                  <path d={r.path}
                    fill={r.name ? '#D4AF3744' : r.color + '55'}
                    stroke={r.name ? '#D4AF37' : r.color}
                    strokeWidth="1.5" />
                  {r.name && r.centroid && (
                    <text x={r.centroid.x} y={r.centroid.y} textAnchor="middle" dominantBaseline="middle"
                      fontSize={Math.max(8, Math.min(14, imgSize.w / 70))} fill="#2C1810" fontWeight="bold"
                      style={{ pointerEvents: 'none', userSelect: 'none' }}>
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
            <input autoFocus value={nameInput} onChange={e => setNameInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') { setRegions(p => p.map(r => r.id === naming.id ? {...r, name: nameInput.trim()} : r)); setNaming(null) }}}
              placeholder="Ex: Souss-Massa…"
              className="w-full px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
            <div className="flex gap-2">
              <button onClick={() => { setRegions(p => p.map(r => r.id === naming.id ? {...r, name: nameInput.trim()} : r)); setNaming(null) }}
                className="flex-1 px-3 py-2 rounded-lg bg-[#D4AF37] text-[#2C1810] font-semibold text-sm">Valider</button>
              <button onClick={() => setNaming(null)} className="px-3 py-2 rounded-lg border text-sm text-[#8B7355]">Annuler</button>
            </div>
          </div>
        </div>
      )}

      {/* Export */}
      {exported && (
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-semibold text-[#2C1810]">Code généré</span>
            <button onClick={() => navigator.clipboard.writeText(exported)}
              className="text-xs px-3 py-1 rounded-lg bg-[#E8E0CC] hover:bg-[#D4AF37] transition-colors">Copier</button>
          </div>
          <pre className="text-xs bg-[#0D1117] text-[#58A6FF] rounded-xl p-4 overflow-auto max-h-56">{exported}</pre>
        </div>
      )}
    </div>
  )
}

// ── Éditeur pays existants ───────────────────────────────────────────────────

function CountryEditor() {
  const countries = Object.keys(regionsData)
  const [selectedCountry, setSelectedCountry] = useState('')
  const [editData, setEditData] = useState({})
  const [selectedRegion, setSelectedRegion] = useState('')
  const [saved, setSaved] = useState(false)

  const loadCountry = (cid) => {
    setSelectedCountry(cid)
    setSelectedRegion('')
    // Deep copy
    setEditData(JSON.parse(JSON.stringify(regionsData[cid] || {})))
    setSaved(false)
  }

  const regionNames = Object.keys(editData)
  const regionData = editData[selectedRegion] || {}

  const updateField = (field, value) => {
    setEditData(prev => ({
      ...prev,
      [selectedRegion]: { ...prev[selectedRegion], [field]: value }
    }))
    setSaved(false)
  }

  const updateArrayField = (field, value) => {
    updateField(field, value.split('\n').map(s => s.trim()).filter(Boolean))
  }

  const exportPatch = () => {
    const patch = JSON.stringify({ [selectedCountry]: editData }, null, 2)
    navigator.clipboard.writeText(patch)
    setSaved(true)
  }

  return (
    <div className="space-y-4">
      {/* Sélection pays */}
      <div className="flex gap-3 items-center">
        <select value={selectedCountry} onChange={e => loadCountry(e.target.value)}
          className="px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
          <option value="">-- Choisir un pays --</option>
          {countries.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        {selectedCountry && (
          <span className="text-sm text-[#8B7355]">{regionNames.length} entrées</span>
        )}
      </div>

      {selectedCountry && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Liste des régions/dept */}
          <div className="border border-[#E8E0CC] rounded-xl overflow-auto max-h-[60vh]">
            <div className="px-3 py-2 bg-[#FAF7F2] border-b border-[#E8E0CC] text-xs font-bold text-[#8B7355] uppercase tracking-wider">
              Régions / Départements
            </div>
            {regionNames.map(name => (
              <button key={name} onClick={() => setSelectedRegion(name)}
                className={`w-full text-left px-3 py-2 text-sm border-b border-[#F0EBE0] transition-colors ${selectedRegion === name ? 'bg-[#D4AF3722] text-[#2C1810] font-semibold' : 'text-[#4A3728] hover:bg-[#F5F0E8]'}`}>
                {name}
              </button>
            ))}
          </div>

          {/* Éditeur champs */}
          {selectedRegion && (
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-[#2C1810]">{selectedRegion}</h3>
                <button onClick={exportPatch}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF37] text-[#2C1810] text-xs font-bold">
                  <Save size={12} /> Copier le patch
                </button>
              </div>
              {saved && <p className="text-xs text-[#27AE60] font-medium">✓ Copié dans le presse-papiers</p>}

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
                { key: 'gastronomie', label: 'Gastronomie (un par ligne)' },
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

// ── Export principal ─────────────────────────────────────────────────────────

export default function AdminMapBuilder() {
  const [tab, setTab] = useState('builder')

  return (
    <div className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-5">
      <h2 className="text-lg font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">
        🗺️ Map Builder
      </h2>
      <p className="text-sm text-[#8B7355] mb-4">
        Détecte automatiquement les régions d'une image de carte, ou modifie les données des pays existants.
      </p>

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
