import { useState, useRef, useCallback } from 'react'
import { Upload, Zap, Download, RotateCcw, Info, Save, Plus, Globe } from 'lucide-react'
import { regionsData } from '@/data/pays-regions'

// ── Algorithmes (inchangés) ───────────────────────────────────────────────────

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

// Régions touchant les bords = fond (océan, fond blanc…) → ignorer
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

function traceContourByAngle(labels, label, width, height, step) {
  const c = getCentroid(labels, label, width)
  const pts = []
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      if (labels[y * width + x] !== label) continue
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

// ── Map Builder ───────────────────────────────────────────────────────────────

function MapBuilder() {
  const [imageSrc, setImageSrc] = useState(null)
  const [imgSize, setImgSize] = useState({ w: 0, h: 0 })
  const [regions, setRegions] = useState([])
  const [status, setStatus] = useState('')
  const [darkThreshold, setDarkThreshold] = useState(80)
  const [minPixels, setMinPixels] = useState(300)
  const [epsilon, setEpsilon] = useState(3)
  const [step, setStep] = useState(2)
  // Edition par région (nom + données)
  const [editing, setEditing] = useState(null) // id de la région éditée
  const [editForm, setEditForm] = useState({})
  // Pays cible
  const [countryMode, setCountryMode] = useState('existing')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [newCountryId, setNewCountryId] = useState('')
  const [newCountryLabel, setNewCountryLabel] = useState('')
  // Export
  const [exportedCode, setExportedCode] = useState('')
  const canvasRef = useRef(null)

  const handleFile = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      setImageSrc(url); setImgSize({ w: img.naturalWidth, h: img.naturalHeight })
      setRegions([]); setExportedCode(''); setStatus('Image chargée.')
    }
    img.src = url
  }

  const detect = useCallback(async () => {
    if (!imageSrc) return
    setStatus('Analyse en cours…'); setRegions([]); setExportedCode('')
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
    const bgSet = getBorderLabels(labels, W, H) // fond ignoré

    const counts = new Int32Array(regionCount + 1)
    for (let i = 0; i < labels.length; i++) if (labels[i] > 0) counts[labels[i]]++

    setStatus('Tracé des contours…')
    await new Promise(res => setTimeout(res, 10))

    const detected = []
    for (let r = 1; r <= regionCount; r++) {
      if (counts[r] < minPixels) continue
      if (bgSet.has(r)) continue // ← filtre le fond
      const c = getCentroid(labels, r, W)
      const rawPts = traceContourByAngle(labels, r, W, H, step)
      const simplified = douglasPeucker(rawPts, epsilon)
      detected.push({
        id: r, path: toPath(simplified), centroid: c,
        name: '', chef_lieu: '', villes: '', fleuves: '', description: '',
        color: COLORS[detected.length % COLORS.length],
        pixelCount: counts[r],
      })
    }
    detected.sort((a, b) => b.pixelCount - a.pixelCount)
    setRegions(detected)
    setStatus(`${detected.length} région(s) détectée(s). Clique pour nommer et compléter les données.`)
  }, [imageSrc, darkThreshold, minPixels, epsilon, step])

  const openEdit = (r) => {
    setEditing(r.id)
    setEditForm({ name: r.name, chef_lieu: r.chef_lieu, villes: r.villes, fleuves: r.fleuves, description: r.description, color: r.color })
  }

  const saveEdit = () => {
    setRegions(prev => prev.map(r => r.id === editing ? { ...r, ...editForm } : r))
    setEditing(null)
  }

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
// Ajoute dans regionsData :
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

  return (
    <div className="space-y-4">
      {/* Barre actions */}
      <div className="flex flex-wrap gap-2">
        <label className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm cursor-pointer hover:bg-[#E8C85A]">
          <Upload size={14} /> Charger image
          <input type="file" accept="image/*" className="hidden" onChange={handleFile} />
        </label>
        {imageSrc && <>
          <button onClick={detect} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2C1810] text-white font-semibold text-sm hover:bg-[#4A3728]">
            <Zap size={14} /> Détecter
          </button>
          <button onClick={() => { setImageSrc(null); setRegions([]); setStatus(''); setExportedCode('') }}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#E8E0CC] text-[#8B7355] text-sm">
            <RotateCcw size={13} /> Reset
          </button>
        </>}
      </div>

      {/* Sliders */}
      {imageSrc && (
        <div className="flex flex-wrap gap-4 p-3 bg-[#FAF7F2] rounded-xl border border-[#E8E0CC] text-sm">
          {[
            ['Seuil trait', darkThreshold, setDarkThreshold, 20, 200, 1],
            ['Min pixels', minPixels, setMinPixels, 50, 5000, 50],
            ['Pas scan', step, setStep, 1, 6, 1],
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

      {status && <p className="text-sm font-medium text-[#D4AF37]">{status}</p>}
      <canvas ref={canvasRef} className="hidden" />

      {/* Carte SVG */}
      {imageSrc && (
        <div className="relative border border-[#E8E0CC] rounded-xl overflow-hidden bg-gray-50" style={{ maxHeight: '65vh' }}>
          <img src={imageSrc} alt="carte" style={{ width: '100%', display: 'block' }} />
          {regions.length > 0 && (
            <svg viewBox={`0 0 ${imgSize.w} ${imgSize.h}`}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
              {regions.map(r => (
                <g key={r.id} onClick={() => openEdit(r)} style={{ cursor: 'pointer' }}>
                  <path d={r.path} fill={r.name ? '#D4AF3744' : r.color + '55'} stroke={r.name ? '#D4AF37' : r.color} strokeWidth="1.5" />
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

      {/* Chips régions + section pays */}
      {regions.length > 0 && (
        <div className="border border-[#E8E0CC] rounded-xl p-4 space-y-4">
          {/* Chips */}
          <div>
            <p className="text-xs font-bold text-[#8B7355] uppercase tracking-wider mb-2">
              {regions.filter(r => r.name).length}/{regions.length} régions nommées — clique pour éditer
            </p>
            <div className="flex flex-wrap gap-1.5">
              {regions.map(r => (
                <button key={r.id} onClick={() => openEdit(r)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border hover:opacity-80 transition-opacity"
                  style={{ borderColor: r.color, color: r.color, background: r.color + '15' }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: r.color }} />
                  {r.name || `#${r.id}`}
                </button>
              ))}
            </div>
          </div>

          {/* Pays cible */}
          <div>
            <p className="text-sm font-bold text-[#2C1810] mb-2 flex items-center gap-2"><Globe size={14}/> Associer à un pays</p>
            <div className="flex gap-2 mb-2">
              {[['existing', 'Pays existant'], ['new', 'Nouveau pays']].map(([m, lbl]) => (
                <button key={m} onClick={() => setCountryMode(m)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${countryMode === m ? 'bg-[#D4AF37] text-[#2C1810]' : 'bg-[#F5F0E8] text-[#8B7355] hover:bg-[#E8E0CC]'}`}>
                  {m === 'new' && <Plus size={12} className="inline mr-1" />}{lbl}
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
                <input value={newCountryId} onChange={e => setNewCountryId(e.target.value)}
                  placeholder="id (ex: maroc)" className="flex-1 px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
                <input value={newCountryLabel} onChange={e => setNewCountryLabel(e.target.value)}
                  placeholder="Nom (ex: Maroc)" className="flex-1 px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
              </div>
            )}
          </div>

          <button onClick={generateExport}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#27AE60] text-white font-semibold text-sm hover:bg-[#229954]">
            <Download size={14} /> Générer le code
          </button>
        </div>
      )}

      {/* Export */}
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

      {/* Modal édition région */}
      {editing !== null && (() => {
        const region = regions.find(r => r.id === editing)
        if (!region) return null
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setEditing(null)}>
            <div className="bg-white dark:bg-[#161B22] rounded-2xl p-5 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: editForm.color }} />
                <h3 className="font-bold text-[#2C1810] dark:text-[#E6EDF3]">Éditer la région</h3>
              </div>
              <div className="space-y-3">
                {[
                  ['name', 'Nom de la région *', 'text', 'Ex: Souss-Massa'],
                  ['chef_lieu', 'Chef-lieu', 'text', 'Ex: Agadir'],
                ].map(([k, lbl, , ph]) => (
                  <div key={k}>
                    <label className="block text-xs font-semibold text-[#8B7355] uppercase tracking-wider mb-1">{lbl}</label>
                    <input value={editForm[k] || ''} onChange={e => setEditForm(p => ({ ...p, [k]: e.target.value }))} placeholder={ph}
                      className="w-full px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" />
                  </div>
                ))}
                {[
                  ['villes', 'Villes (une par ligne)', 'Agadir\nInezgane\nTiznit'],
                  ['fleuves', 'Fleuves / côtes (un par ligne)', 'Oued Souss\nOued Massa'],
                  ['description', 'Description', 'Région du sud-ouest…'],
                ].map(([k, lbl, ph]) => (
                  <div key={k}>
                    <label className="block text-xs font-semibold text-[#8B7355] uppercase tracking-wider mb-1">{lbl}</label>
                    <textarea value={editForm[k] || ''} onChange={e => setEditForm(p => ({ ...p, [k]: e.target.value }))} placeholder={ph} rows={3}
                      className="w-full px-3 py-2 rounded-lg border border-[#E8E0CC] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] resize-y" />
                  </div>
                ))}
                <div>
                  <label className="block text-xs font-semibold text-[#8B7355] uppercase tracking-wider mb-1">Couleur</label>
                  <div className="flex gap-1.5 flex-wrap">
                    {COLORS.map(c => (
                      <button key={c} onClick={() => setEditForm(p => ({ ...p, color: c }))}
                        className={`w-7 h-7 rounded-full border-2 transition-transform hover:scale-110 ${editForm.color === c ? 'border-[#2C1810] scale-110' : 'border-transparent'}`}
                        style={{ background: c }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 mt-4">
                <button onClick={saveEdit} className="flex-1 px-3 py-2 rounded-lg bg-[#D4AF37] text-[#2C1810] font-semibold text-sm">
                  <Save size={13} className="inline mr-1" />Enregistrer
                </button>
                <button onClick={() => setEditing(null)} className="px-3 py-2 rounded-lg border text-sm text-[#8B7355]">Annuler</button>
              </div>
            </div>
          </div>
        )
      })()}
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

// ── Export principal ──────────────────────────────────────────────────────────

export default function AdminMapBuilder() {
  const [tab, setTab] = useState('builder')
  return (
    <div className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] p-5">
      <h2 className="text-lg font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">🗺️ Map Builder</h2>
      <p className="text-sm text-[#8B7355] mb-4">Détecte les régions d'une image de carte et génère une carte interactive.</p>
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
