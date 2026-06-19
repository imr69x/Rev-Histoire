import { useState, useEffect, useCallback } from 'react'
import { Trash2, Plus, ChevronDown, ChevronUp, Settings, Users, CheckCircle, XCircle, RefreshCw, Shield, Crown, UserX, LayoutDashboard, SlidersHorizontal, ExternalLink } from 'lucide-react'
import { useAdminStore } from '@/stores/useAdminStore'
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'

const LEVELS = ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'HGGSP']
const ERAS = ['Antiquité', 'Moyen Âge', 'XVIe siècle', 'XVIIe siècle', 'XVIIIe siècle', 'XIXe siècle', 'XXe siècle', 'XXIe siècle']
const CATS_PERSO = ['Politique', 'Militaire', 'Intellectuel', 'Religieux', 'Artistique', 'Économique', 'Social', 'Philosophe', 'Décolonisation', 'Droits civiques']
const CATS_GLOSS = ['Politique', 'Économie', 'Société', 'Histoire', 'Militaire', 'Religion', 'Géopolitique', 'Relations internationales', 'Médias', 'Environnement', 'Philosophie', 'Droit international']

function Field({ label, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#4A3728] dark:text-[#8B949E] mb-1">{label}</label>
      {children}
    </div>
  )
}

const inputCls = 'w-full px-3 py-2 rounded-lg border border-[#E8E0CC] dark:border-[#30363D] bg-white dark:bg-[#161B22] text-[#2C1810] dark:text-[#E6EDF3] text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]'
const textareaCls = inputCls + ' resize-y min-h-[80px]'
const selectCls = inputCls

function LevelPicker({ selected, onChange }) {
  const toggle = (l) => onChange(selected.includes(l) ? selected.filter((x) => x !== l) : [...selected, l])
  return (
    <div className="flex flex-wrap gap-2">
      {LEVELS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => toggle(l)}
          className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
            selected.includes(l)
              ? 'bg-[#8B4513] text-white'
              : 'bg-[#E8E0CC] dark:bg-[#30363D] text-[#4A3728] dark:text-[#8B949E] hover:bg-[#D4AF37] hover:text-[#2C1810]'
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

// ─── Personnalité ──────────────────────────────────────────────
function PersonnaliteForm() {
  const { addPersonality, customPersonalities, deletePersonality } = useAdminStore()
  const [open, setOpen] = useState(false)
  const empty = { name: '', birth: '', death: '', era: ERAS[5], category: CATS_PERSO[0], nationality: '', bio: '', fact1: '', fact2: '', fact3: '', fact4: '', fact5: '', quote: '', level: [] }
  const [form, setForm] = useState(empty)
  const [success, setSuccess] = useState(false)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.bio) return
    addPersonality({
      name: form.name, birth: form.birth, death: form.death || null,
      era: form.era, category: form.category, nationality: form.nationality,
      bio: form.bio,
      keyFacts: [form.fact1, form.fact2, form.fact3, form.fact4, form.fact5].filter(Boolean),
      quote: form.quote || null,
      level: form.level,
    })
    setForm(empty)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
  }

  return (
    <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FDF3E7] dark:hover:bg-[#1a1f29] transition-colors"
      >
        <span className="font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3] text-lg">
          Personnalités historiques
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#8B7355] bg-[#E8E0CC] dark:bg-[#30363D] px-2 py-0.5 rounded-full">
            {customPersonalities.length} ajoutée{customPersonalities.length > 1 ? 's' : ''}
          </span>
          {open ? <ChevronUp size={18} className="text-[#8B7355]" /> : <ChevronDown size={18} className="text-[#8B7355]" />}
        </div>
      </button>

      {open && (
        <div className="p-5 border-t border-[#E8E0CC] dark:border-[#30363D] space-y-5">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Nom complet *"><input className={inputCls} value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="ex : Sun Yat-sen" /></Field>
              <Field label="Nationalité"><input className={inputCls} value={form.nationality} onChange={(e) => set('nationality', e.target.value)} placeholder="ex : Chinoise" /></Field>
              <Field label="Naissance (année)"><input className={inputCls} value={form.birth} onChange={(e) => set('birth', e.target.value)} placeholder="ex : 1866 ou -551" /></Field>
              <Field label="Mort (année, vide = vivant)"><input className={inputCls} value={form.death} onChange={(e) => set('death', e.target.value)} placeholder="ex : 1925" /></Field>
              <Field label="Époque">
                <select className={selectCls} value={form.era} onChange={(e) => set('era', e.target.value)}>
                  {ERAS.map((e) => <option key={e}>{e}</option>)}
                </select>
              </Field>
              <Field label="Catégorie">
                <select className={selectCls} value={form.category} onChange={(e) => set('category', e.target.value)}>
                  {CATS_PERSO.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Biographie *"><textarea className={textareaCls} value={form.bio} onChange={(e) => set('bio', e.target.value)} placeholder="Biographie complète…" /></Field>
            <Field label="Faits essentiels (1 par ligne)">
              {[1, 2, 3, 4, 5].map((n) => (
                <input key={n} className={inputCls + ' mb-2'} value={form[`fact${n}`]} onChange={(e) => set(`fact${n}`, e.target.value)} placeholder={`Fait ${n}…`} />
              ))}
            </Field>
            <Field label="Citation"><input className={inputCls} value={form.quote} onChange={(e) => set('quote', e.target.value)} placeholder="Citation célèbre…" /></Field>
            <Field label="Niveaux scolaires"><LevelPicker selected={form.level} onChange={(l) => set('level', l)} /></Field>
            <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm hover:bg-[#E8C85A] transition-colors">
              <Plus size={16} /> Ajouter la personnalité
            </button>
            {success && <p className="text-sm text-[#27AE60] font-medium">✓ Personnalité ajoutée avec succès !</p>}
          </form>

          {customPersonalities.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-[#E8E0CC] dark:border-[#30363D]">
              <p className="text-sm font-semibold text-[#8B7355]">Personnalités ajoutées</p>
              {customPersonalities.map((p) => (
                <div key={p.id} className="flex items-center justify-between p-3 rounded-xl bg-[#FDF3E7] dark:bg-[#1a1f29] border border-[#E8E0CC] dark:border-[#30363D]">
                  <div>
                    <p className="font-medium text-sm text-[#2C1810] dark:text-[#E6EDF3]">{p.name}</p>
                    <p className="text-xs text-[#8B7355]">{p.era} · {p.nationality}</p>
                  </div>
                  <button onClick={() => deletePersonality(p.id)} className="p-1.5 rounded-lg hover:bg-[#FDEDEC] text-[#C0392B] transition-colors"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

// ─── Terme de glossaire ────────────────────────────────────────
function GlossaireForm() {
  const { addTerm, customTerms, deleteTerm } = useAdminStore()
  const [open, setOpen] = useState(false)
  const empty = { term: '', definition: '', category: CATS_GLOSS[0], level: [] }
  const [form, setForm] = useState(empty)
  const [success, setSuccess] = useState(false)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.term || !form.definition) return
    addTerm({
      term: form.term, definition: form.definition,
      category: form.category, level: form.level,
      letter: form.term[0].toUpperCase(),
      simpleDefinition: form.definition.split('.')[0] + '.',
      isExamKeyword: form.level.some((l) => ['Terminale', 'HGGSP', '1ere'].includes(l)),
    })
    setForm(empty)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
  }

  return (
    <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FDF3E7] dark:hover:bg-[#1a1f29] transition-colors"
      >
        <span className="font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3] text-lg">Termes du glossaire</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#8B7355] bg-[#E8E0CC] dark:bg-[#30363D] px-2 py-0.5 rounded-full">{customTerms.length} ajouté{customTerms.length > 1 ? 's' : ''}</span>
          {open ? <ChevronUp size={18} className="text-[#8B7355]" /> : <ChevronDown size={18} className="text-[#8B7355]" />}
        </div>
      </button>

      {open && (
        <div className="p-5 border-t border-[#E8E0CC] dark:border-[#30363D] space-y-5">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Terme *"><input className={inputCls} value={form.term} onChange={(e) => set('term', e.target.value)} placeholder="ex : Hégémonie" /></Field>
              <Field label="Catégorie">
                <select className={selectCls} value={form.category} onChange={(e) => set('category', e.target.value)}>
                  {CATS_GLOSS.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Définition complète *"><textarea className={textareaCls} value={form.definition} onChange={(e) => set('definition', e.target.value)} placeholder="Définition détaillée avec exemples historiques…" /></Field>
            <Field label="Niveaux scolaires"><LevelPicker selected={form.level} onChange={(l) => set('level', l)} /></Field>
            <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm hover:bg-[#E8C85A] transition-colors">
              <Plus size={16} /> Ajouter le terme
            </button>
            {success && <p className="text-sm text-[#27AE60] font-medium">✓ Terme ajouté avec succès !</p>}
          </form>

          {customTerms.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-[#E8E0CC] dark:border-[#30363D]">
              <p className="text-sm font-semibold text-[#8B7355]">Termes ajoutés</p>
              {customTerms.map((t) => (
                <div key={t.id} className="flex items-center justify-between p-3 rounded-xl bg-[#FDF3E7] dark:bg-[#1a1f29] border border-[#E8E0CC] dark:border-[#30363D]">
                  <div>
                    <p className="font-medium text-sm text-[#2C1810] dark:text-[#E6EDF3]">{t.term}</p>
                    <p className="text-xs text-[#8B7355] line-clamp-1">{t.simpleDefinition}</p>
                  </div>
                  <button onClick={() => deleteTerm(t.id)} className="p-1.5 rounded-lg hover:bg-[#FDEDEC] text-[#C0392B] transition-colors"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

// ─── Fiche de révision ─────────────────────────────────────────
function FicheForm() {
  const { addFiche, customFiches, deleteFiche } = useAdminStore()
  const [open, setOpen] = useState(false)
  const empty = { title: '', theme: '', level: 'HGGSP', periode: '', context: '', kp1: '', kp2: '', kp3: '', kp4: '', kp5: '' }
  const [form, setForm] = useState(empty)
  const [success, setSuccess] = useState(false)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.title || !form.context) return
    addFiche({
      title: form.title, theme: form.theme, level: form.level, periode: form.periode,
      content: {
        context: form.context,
        keyPoints: [form.kp1, form.kp2, form.kp3, form.kp4, form.kp5].filter(Boolean),
        vocabulary: [], dates: [],
      },
      flashcards: [], quiz: [],
    })
    setForm(empty)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
  }

  return (
    <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FDF3E7] dark:hover:bg-[#1a1f29] transition-colors"
      >
        <span className="font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3] text-lg">Fiches de révision</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#8B7355] bg-[#E8E0CC] dark:bg-[#30363D] px-2 py-0.5 rounded-full">{customFiches.length} ajoutée{customFiches.length > 1 ? 's' : ''}</span>
          {open ? <ChevronUp size={18} className="text-[#8B7355]" /> : <ChevronDown size={18} className="text-[#8B7355]" />}
        </div>
      </button>

      {open && (
        <div className="p-5 border-t border-[#E8E0CC] dark:border-[#30363D] space-y-5">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Titre *"><input className={inputCls} value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="ex : La démocratie athénienne" /></Field>
              <Field label="Thème"><input className={inputCls} value={form.theme} onChange={(e) => set('theme', e.target.value)} placeholder="ex : Grèce antique" /></Field>
              <Field label="Niveau">
                <select className={selectCls} value={form.level} onChange={(e) => set('level', e.target.value)}>
                  {LEVELS.map((l) => <option key={l}>{l}</option>)}
                </select>
              </Field>
              <Field label="Période"><input className={inputCls} value={form.periode} onChange={(e) => set('periode', e.target.value)} placeholder="ex : Ve siècle av. J.-C." /></Field>
            </div>
            <Field label="Contexte historique *"><textarea className={textareaCls} value={form.context} onChange={(e) => set('context', e.target.value)} placeholder="Présentation du contexte…" /></Field>
            <Field label="Points essentiels">
              {[1, 2, 3, 4, 5].map((n) => (
                <input key={n} className={inputCls + ' mb-2'} value={form[`kp${n}`]} onChange={(e) => set(`kp${n}`, e.target.value)} placeholder={`Point ${n}…`} />
              ))}
            </Field>
            <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm hover:bg-[#E8C85A] transition-colors">
              <Plus size={16} /> Ajouter la fiche
            </button>
            {success && <p className="text-sm text-[#27AE60] font-medium">✓ Fiche ajoutée avec succès !</p>}
          </form>

          {customFiches.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-[#E8E0CC] dark:border-[#30363D]">
              <p className="text-sm font-semibold text-[#8B7355]">Fiches ajoutées</p>
              {customFiches.map((f) => (
                <div key={f.id} className="flex items-center justify-between p-3 rounded-xl bg-[#FDF3E7] dark:bg-[#1a1f29] border border-[#E8E0CC] dark:border-[#30363D]">
                  <div>
                    <p className="font-medium text-sm text-[#2C1810] dark:text-[#E6EDF3]">{f.title}</p>
                    <p className="text-xs text-[#8B7355]">{f.level} · {f.theme}</p>
                  </div>
                  <button onClick={() => deleteFiche(f.id)} className="p-1.5 rounded-lg hover:bg-[#FDEDEC] text-[#C0392B] transition-colors"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

// ─── Question de quiz ──────────────────────────────────────────
function QuizForm() {
  const { addQuestion, customQuestions, deleteQuestion } = useAdminStore()
  const [open, setOpen] = useState(false)
  const empty = { question: '', opt1: '', opt2: '', opt3: '', opt4: '', answer: '', explanation: '', theme: '', level: 'HGGSP', difficulty: 1 }
  const [form, setForm] = useState(empty)
  const [success, setSuccess] = useState(false)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    const opts = [form.opt1, form.opt2, form.opt3, form.opt4].filter(Boolean)
    if (!form.question || opts.length < 2 || !form.answer) return
    addQuestion({
      question: form.question, options: opts, answer: form.answer,
      explanation: form.explanation, theme: form.theme,
      level: form.level, difficulty: Number(form.difficulty), points: 10,
    })
    setForm(empty)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
  }

  return (
    <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FDF3E7] dark:hover:bg-[#1a1f29] transition-colors"
      >
        <span className="font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3] text-lg">Questions de quiz</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#8B7355] bg-[#E8E0CC] dark:bg-[#30363D] px-2 py-0.5 rounded-full">{customQuestions.length} ajoutée{customQuestions.length > 1 ? 's' : ''}</span>
          {open ? <ChevronUp size={18} className="text-[#8B7355]" /> : <ChevronDown size={18} className="text-[#8B7355]" />}
        </div>
      </button>

      {open && (
        <div className="p-5 border-t border-[#E8E0CC] dark:border-[#30363D] space-y-5">
          <form onSubmit={submit} className="space-y-4">
            <Field label="Question *"><textarea className={textareaCls} style={{ minHeight: '60px' }} value={form.question} onChange={(e) => set('question', e.target.value)} placeholder="Posez votre question…" /></Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <Field key={n} label={`Option ${n}${n <= 2 ? ' *' : ''}`}>
                  <input className={inputCls} value={form[`opt${n}`]} onChange={(e) => set(`opt${n}`, e.target.value)} placeholder={`Option ${n}…`} />
                </Field>
              ))}
            </div>
            <Field label="Bonne réponse * (doit correspondre exactement à une option)">
              <input className={inputCls} value={form.answer} onChange={(e) => set('answer', e.target.value)} placeholder="Copier-coller la bonne option…" />
            </Field>
            <Field label="Explication"><textarea className={textareaCls} style={{ minHeight: '60px' }} value={form.explanation} onChange={(e) => set('explanation', e.target.value)} placeholder="Explication de la réponse…" /></Field>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Field label="Thème"><input className={inputCls} value={form.theme} onChange={(e) => set('theme', e.target.value)} placeholder="ex : Démocratie" /></Field>
              <Field label="Niveau">
                <select className={selectCls} value={form.level} onChange={(e) => set('level', e.target.value)}>
                  {LEVELS.map((l) => <option key={l}>{l}</option>)}
                </select>
              </Field>
              <Field label="Difficulté (1-3)">
                <select className={selectCls} value={form.difficulty} onChange={(e) => set('difficulty', e.target.value)}>
                  <option value={1}>★☆☆ Facile</option>
                  <option value={2}>★★☆ Moyen</option>
                  <option value={3}>★★★ Difficile</option>
                </select>
              </Field>
            </div>
            <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm hover:bg-[#E8C85A] transition-colors">
              <Plus size={16} /> Ajouter la question
            </button>
            {success && <p className="text-sm text-[#27AE60] font-medium">✓ Question ajoutée avec succès !</p>}
          </form>

          {customQuestions.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-[#E8E0CC] dark:border-[#30363D]">
              <p className="text-sm font-semibold text-[#8B7355]">Questions ajoutées</p>
              {customQuestions.map((q) => (
                <div key={q.id} className="flex items-center justify-between p-3 rounded-xl bg-[#FDF3E7] dark:bg-[#1a1f29] border border-[#E8E0CC] dark:border-[#30363D]">
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-[#2C1810] dark:text-[#E6EDF3] line-clamp-1">{q.question}</p>
                    <p className="text-xs text-[#8B7355]">Réponse : {q.answer}</p>
                  </div>
                  <button onClick={() => deleteQuestion(q.id)} className="ml-3 p-1.5 rounded-lg hover:bg-[#FDEDEC] text-[#C0392B] transition-colors flex-shrink-0"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

// ─── Événement frise ───────────────────────────────────────────
function FriseForm() {
  const { addFriseEvent, customFriseEvents, deleteFriseEvent } = useAdminStore()
  const [open, setOpen] = useState(false)
  const empty = { year: '', title: '', description: '', category: 'Politique', level: [] }
  const [form, setForm] = useState(empty)
  const [success, setSuccess] = useState(false)

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    if (!form.year || !form.title) return
    addFriseEvent({ year: Number(form.year), title: form.title, description: form.description, category: form.category, level: form.level })
    setForm(empty)
    setSuccess(true)
    setTimeout(() => setSuccess(false), 2500)
  }

  return (
    <section className="bg-white dark:bg-[#161B22] rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-[#FDF3E7] dark:hover:bg-[#1a1f29] transition-colors"
      >
        <span className="font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3] text-lg">Frise chronologique</span>
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#8B7355] bg-[#E8E0CC] dark:bg-[#30363D] px-2 py-0.5 rounded-full">{customFriseEvents.length} ajouté{customFriseEvents.length > 1 ? 's' : ''}</span>
          {open ? <ChevronUp size={18} className="text-[#8B7355]" /> : <ChevronDown size={18} className="text-[#8B7355]" />}
        </div>
      </button>

      {open && (
        <div className="p-5 border-t border-[#E8E0CC] dark:border-[#30363D] space-y-5">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Année * (négatif pour av. J.-C.)"><input type="number" className={inputCls} value={form.year} onChange={(e) => set('year', e.target.value)} placeholder="ex : -509 ou 1789" /></Field>
              <Field label="Titre *"><input className={inputCls} value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="ex : Révolution française" /></Field>
              <Field label="Catégorie">
                <select className={selectCls} value={form.category} onChange={(e) => set('category', e.target.value)}>
                  {CATS_GLOSS.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Description"><textarea className={textareaCls} style={{ minHeight: '60px' }} value={form.description} onChange={(e) => set('description', e.target.value)} placeholder="Description de l'événement…" /></Field>
            <Field label="Niveaux scolaires"><LevelPicker selected={form.level} onChange={(l) => set('level', l)} /></Field>
            <button type="submit" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm hover:bg-[#E8C85A] transition-colors">
              <Plus size={16} /> Ajouter l'événement
            </button>
            {success && <p className="text-sm text-[#27AE60] font-medium">✓ Événement ajouté avec succès !</p>}
          </form>

          {customFriseEvents.length > 0 && (
            <div className="space-y-2 pt-4 border-t border-[#E8E0CC] dark:border-[#30363D]">
              <p className="text-sm font-semibold text-[#8B7355]">Événements ajoutés</p>
              {customFriseEvents.map((ev) => (
                <div key={ev.id} className="flex items-center justify-between p-3 rounded-xl bg-[#FDF3E7] dark:bg-[#1a1f29] border border-[#E8E0CC] dark:border-[#30363D]">
                  <div>
                    <p className="font-medium text-sm text-[#2C1810] dark:text-[#E6EDF3]">{ev.year < 0 ? Math.abs(ev.year) + ' av. J.-C.' : ev.year} — {ev.title}</p>
                    <p className="text-xs text-[#8B7355] line-clamp-1">{ev.description}</p>
                  </div>
                  <button onClick={() => deleteFriseEvent(ev.id)} className="ml-3 p-1.5 rounded-lg hover:bg-[#FDEDEC] text-[#C0392B] transition-colors flex-shrink-0"><Trash2 size={14} /></button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}

// ─── Gestion des invitations ───────────────────────────────────
function InvitesSection() {
  const [invites, setInvites] = useState([])
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState(null)

  async function loadInvites() {
    const { data } = await supabase.from('invites').select('*').order('created_at', { ascending: false })
    setInvites(data || [])
  }

  useEffect(() => { loadInvites() }, [])

  async function addInvite(e) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    const addr = email.trim().toLowerCase()

    const { error } = await supabase.from('invites').insert({ email: addr })
    if (error && error.code !== '23505') {
      setMsg({ type: 'error', text: 'Erreur : ' + error.message })
    } else {
      // Si l'utilisateur a déjà un compte, on lui donne le rôle invité immédiatement
      await supabase.from('profiles').update({ role: 'invited' }).eq('email', addr)
      setEmail('')
      setMsg({ type: 'ok', text: `✓ ${addr} invité avec succès !` })
      loadInvites()
    }
    setLoading(false)
    setTimeout(() => setMsg(null), 3000)
  }

  async function removeInvite(id, inviteEmail) {
    await supabase.from('invites').delete().eq('id', id)
    // Repasse le compte en user si il existe
    await supabase.from('profiles').update({ role: 'user' }).eq('email', inviteEmail)
    loadInvites()
  }

  return (
    <div className="bg-white rounded-2xl border border-[#E8E0CC] p-5 mb-5">
      <h3 className="font-['Playfair_Display'] font-semibold text-[#2C1810] text-base mb-3 flex items-center gap-2">
        🎟️ Invitations — accès gratuit complet
      </h3>
      <p className="text-xs text-[#8B7355] mb-3">Les personnes invitées ont accès à tout sans payer. Elles verront "Invité" en bas à gauche.</p>
      <form onSubmit={addInvite} className="flex gap-2 mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="adresse@email.com"
          className={inputCls + ' flex-1'}
        />
        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-1.5 px-4 py-2 bg-[#D4AF37] text-[#2C1810] font-semibold text-sm rounded-lg hover:bg-[#E8C85A] transition-colors disabled:opacity-60"
        >
          <Plus size={14} /> Inviter
        </button>
      </form>
      {msg && (
        <p className={`text-sm mb-2 font-medium ${msg.type === 'ok' ? 'text-[#27AE60]' : 'text-[#C0392B]'}`}>{msg.text}</p>
      )}
      {invites.length === 0 && <p className="text-xs text-[#8B7355]">Aucune invitation pour l'instant.</p>}
      <div className="space-y-1.5">
        {invites.map((inv) => (
          <div key={inv.id} className="flex items-center justify-between px-3 py-2 bg-[#FDF3E7] rounded-lg border border-[#E8E0CC]">
            <span className="text-sm text-[#2C1810]">{inv.email}</span>
            <button
              onClick={() => removeInvite(inv.id, inv.email)}
              className="p-1 rounded hover:bg-[#FADBD8] text-[#C0392B] transition-colors"
            >
              <Trash2 size={13} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Onglet Comptes ────────────────────────────────────────────
function ComptesPanel() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const { user: me } = useAuth()

  async function loadUsers() {
    setLoading(true)
    const { data } = await supabase
      .from('profiles')
      .select('id, email, subscription_status, subscription_end_date, role, created_at')
      .order('created_at', { ascending: false })
    setUsers(data || [])
    setLoading(false)
  }

  useEffect(() => { loadUsers() }, [])

  async function toggleSubscription(userId, current) {
    const newStatus = current === 'active' ? 'inactive' : 'active'
    const endDate = newStatus === 'active'
      ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      : null
    await supabase.from('profiles').update({ subscription_status: newStatus, subscription_end_date: endDate }).eq('id', userId)
    loadUsers()
  }

  async function toggleAdmin(userId, current) {
    const newRole = current === 'admin' ? 'user' : 'admin'
    await supabase.from('profiles').update({ role: newRole }).eq('id', userId)
    loadUsers()
  }

  async function deleteUser(userId) {
    if (!window.confirm('Supprimer ce compte définitivement ?')) return
    await supabase.from('profiles').delete().eq('id', userId)
    loadUsers()
  }

  const total = users.length
  const paid = users.filter(u => u.subscription_status === 'active').length
  const admins = users.filter(u => u.role === 'admin').length
  const invited = users.filter(u => u.role === 'invited').length

  return (
    <div>
      <InvitesSection />

      {/* Stats */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Comptes', value: total, color: '#2980B9' },
          { label: 'Abonnés', value: paid, color: '#27AE60' },
          { label: 'Invités', value: invited, color: '#8E44AD' },
          { label: 'Admins', value: admins, color: '#D4AF37' },
        ].map(({ label, value, color }) => (
          <div key={label} className="bg-white rounded-xl border border-[#E8E0CC] p-4 text-center">
            <p className="text-2xl font-bold" style={{ color }}>{value}</p>
            <p className="text-xs text-[#8B7355] mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Liste */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-sm font-medium text-[#4A3728]">Tous les comptes</p>
        <button onClick={loadUsers} className="flex items-center gap-1.5 text-xs text-[#8B7355] hover:text-[#2C1810]">
          <RefreshCw size={12} className={loading ? 'animate-spin' : ''} /> Actualiser
        </button>
      </div>

      {loading && <p className="text-sm text-[#8B7355] text-center py-6">Chargement…</p>}

      <div className="space-y-2">
        {users.map((u) => {
          const isPaid = u.subscription_status === 'active'
          const isUserAdmin = u.role === 'admin'
          const isMe = u.id === me?.id || u.email === me?.email
          const endDate = u.subscription_end_date
            ? new Date(u.subscription_end_date).toLocaleDateString('fr-FR')
            : null
          const createdAt = u.created_at
            ? new Date(u.created_at).toLocaleDateString('fr-FR')
            : '—'

          return (
            <div key={u.id} className="bg-white rounded-xl border border-[#E8E0CC] p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-medium text-sm text-[#2C1810] truncate">{u.email || u.id}</p>
                    {isMe && <span className="text-xs bg-[#E8E0CC] text-[#4A3728] px-2 py-0.5 rounded-full">Moi</span>}
                    {isUserAdmin && <span className="text-xs bg-[#FDF3E7] text-[#D4AF37] px-2 py-0.5 rounded-full font-medium">Admin</span>}
                    {u.role === 'invited' && <span className="text-xs bg-[#F5EEF8] text-[#8E44AD] px-2 py-0.5 rounded-full font-medium">Invité</span>}
                  </div>
                  <div className="flex gap-3 mt-1 text-xs text-[#8B7355]">
                    <span>Inscrit le {createdAt}</span>
                    <span className={isPaid ? 'text-[#27AE60] font-medium' : ''}>
                      {isPaid ? `✓ Abonné jusqu'au ${endDate}` : '✗ Gratuit'}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-1.5 flex-shrink-0 flex-wrap justify-end">
                  <button
                    onClick={() => toggleSubscription(u.id, u.subscription_status)}
                    title={isPaid ? 'Révoquer abonnement' : 'Activer abonnement'}
                    className={`p-1.5 rounded-lg text-xs transition-colors ${isPaid ? 'bg-[#FDEDEC] text-[#C0392B] hover:bg-[#FADBD8]' : 'bg-[#EAFAF1] text-[#27AE60] hover:bg-[#D5F5E3]'}`}
                  >
                    {isPaid ? <XCircle size={14} /> : <CheckCircle size={14} />}
                  </button>
                  <button
                    onClick={() => toggleAdmin(u.id, u.role)}
                    title={isUserAdmin ? 'Retirer admin' : 'Rendre admin'}
                    className={`p-1.5 rounded-lg transition-colors ${isUserAdmin ? 'bg-[#FDF3E7] text-[#D4AF37] hover:bg-[#FDEBD0]' : 'bg-[#F8F9FA] text-[#8B7355] hover:bg-[#E8E0CC]'}`}
                  >
                    <Shield size={14} />
                  </button>
                  {!isMe && (
                    <button
                      onClick={() => deleteUser(u.id)}
                      title="Supprimer le compte"
                      className="p-1.5 rounded-lg bg-[#FDEDEC] text-[#C0392B] hover:bg-[#FADBD8] transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {users.length === 0 && !loading && (
        <p className="text-sm text-[#8B7355] text-center py-6">Aucun compte pour l'instant.</p>
      )}
    </div>
  )
}

// ─── Onglet Configuration ──────────────────────────────────────
const UNIT_TO_DAYS = { jour: 1, mois: 30, an: 365 }

function durationToParts(days) {
  if (days % 365 === 0) return { value: days / 365, unit: 'an' }
  if (days % 30 === 0) return { value: days / 30, unit: 'mois' }
  return { value: days, unit: 'jour' }
}

function ConfigPanel() {
  const { subscriptionConfig, setSubscriptionConfig } = useAdminStore()
  const parts = durationToParts(subscriptionConfig?.durationDays || 365)
  const [form, setForm] = useState({
    priceDisplay: subscriptionConfig?.priceDisplay || '9.99',
    currency: subscriptionConfig?.currency || 'EUR',
    durationValue: parts.value,
    durationUnit: parts.unit,
  })
  const [saved, setSaved] = useState(false)

  const totalDays = Number(form.durationValue) * UNIT_TO_DAYS[form.durationUnit]

  function save(e) {
    e.preventDefault()
    setSubscriptionConfig({
      priceDisplay: form.priceDisplay,
      currency: form.currency,
      durationDays: totalDays,
    })
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="space-y-6">
      {/* Prix et durée */}
      <div className="bg-white rounded-2xl border border-[#E8E0CC] p-6">
        <h3 className="font-['Playfair_Display'] font-semibold text-[#2C1810] text-lg mb-4">
          Prix & Durée de l'abonnement
        </h3>
        <form onSubmit={save} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Prix */}
            <div>
              <label className="text-sm font-medium text-[#4A3728] block mb-1">Prix affiché</label>
              <div className="flex">
                <input
                  type="number" step="0.01" min="0"
                  value={form.priceDisplay}
                  onChange={(e) => setForm((f) => ({ ...f, priceDisplay: e.target.value }))}
                  className={inputCls + ' rounded-r-none'}
                  placeholder="9.99"
                />
                <select
                  value={form.currency}
                  onChange={(e) => setForm((f) => ({ ...f, currency: e.target.value }))}
                  className={inputCls + ' rounded-l-none border-l-0 w-24'}
                >
                  <option value="EUR">€ EUR</option>
                  <option value="USD">$ USD</option>
                  <option value="MAD">MAD</option>
                </select>
              </div>
            </div>

            {/* Durée */}
            <div>
              <label className="text-sm font-medium text-[#4A3728] block mb-1">Durée de l'abonnement</label>
              <div className="flex">
                <input
                  type="number" min="1"
                  value={form.durationValue}
                  onChange={(e) => setForm((f) => ({ ...f, durationValue: e.target.value }))}
                  className={inputCls + ' rounded-r-none w-24'}
                  placeholder="1"
                />
                <select
                  value={form.durationUnit}
                  onChange={(e) => setForm((f) => ({ ...f, durationUnit: e.target.value }))}
                  className={inputCls + ' rounded-l-none border-l-0'}
                >
                  <option value="jour">Jour{form.durationValue > 1 ? 's' : ''}</option>
                  <option value="mois">Mois</option>
                  <option value="an">An{form.durationValue > 1 ? 's' : ''}</option>
                </select>
              </div>
              <p className="text-xs text-[#8B7355] mt-1">= {totalDays} jour{totalDays > 1 ? 's' : ''} d'accès</p>
            </div>
          </div>

          {/* Aperçu */}
          <div className="p-3 bg-[#FDF3E7] rounded-lg text-sm text-[#4A3728]">
            Aperçu sur la page Tarifs : <strong>{form.priceDisplay} {form.currency === 'EUR' ? '€' : form.currency === 'USD' ? '$' : 'MAD'} / {form.durationValue} {form.durationUnit}{form.durationValue > 1 ? (form.durationUnit === 'an' ? 's' : form.durationUnit === 'mois' ? '' : 's') : ''}</strong>
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-2.5 bg-[#D4AF37] text-[#2C1810] font-bold rounded-xl text-sm hover:bg-[#E8C85A] transition-colors">
              Enregistrer
            </button>
            {saved && <p className="text-sm text-[#27AE60] font-medium">✓ Sauvegardé !</p>}
          </div>
        </form>

        <div className="mt-4 p-3 bg-[#FDF3E7] rounded-lg border border-[#E8E0CC]">
          <p className="text-xs text-[#8B7355]">
            ⚠️ Ces valeurs modifient l'affichage sur la page Tarifs. Pour changer le <strong>vrai prix Stripe</strong>, crée un nouveau produit dans ton dashboard Stripe et mets à jour la variable <code className="bg-[#E8E0CC] px-1 rounded">STRIPE_PRICE_ID</code> dans Vercel.
          </p>
        </div>
      </div>

      {/* Liens rapides */}
      <div className="bg-white rounded-2xl border border-[#E8E0CC] p-6">
        <h3 className="font-['Playfair_Display'] font-semibold text-[#2C1810] text-lg mb-4">Accès rapides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: 'Dashboard Stripe', url: 'https://dashboard.stripe.com', desc: 'Gérer produits, prix, paiements' },
            { label: 'Dashboard Supabase', url: 'https://supabase.com/dashboard', desc: 'Base de données, utilisateurs auth' },
            { label: 'Variables Vercel', url: 'https://vercel.com', desc: 'Modifier STRIPE_PRICE_ID, clés API' },
          ].map(({ label, url, desc }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-[#E8E0CC] hover:border-[#D4AF37] hover:bg-[#FDF3E7] transition-colors group"
            >
              <div>
                <p className="text-sm font-medium text-[#2C1810]">{label}</p>
                <p className="text-xs text-[#8B7355]">{desc}</p>
              </div>
              <ExternalLink size={14} className="text-[#8B7355] group-hover:text-[#D4AF37] flex-shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Page principale ───────────────────────────────────────────
export default function Admin() {
  const { isAdmin } = useAuth()
  const [tab, setTab] = useState(isAdmin ? 'comptes' : 'contenu')
  const { customPersonalities, customTerms, customFiches, customQuestions, customFriseEvents } = useAdminStore()
  const total = customPersonalities.length + customTerms.length + customFiches.length + customQuestions.length + customFriseEvents.length

  const TABS = [
    ...(isAdmin ? [
      { id: 'comptes', label: 'Comptes', icon: Users },
      { id: 'config', label: 'Configuration', icon: SlidersHorizontal },
    ] : []),
    { id: 'contenu', label: 'Contenu', icon: Settings },
  ]

  return (
    <div className="p-6 max-w-4xl mx-auto animate-fade-in">
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-1">
          <LayoutDashboard size={28} className="text-[#D4AF37]" />
          <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3]">
            Administration
          </h1>
        </div>
      </div>

      {/* Onglets */}
      <div className="flex gap-2 mb-6 border-b border-[#E8E0CC]">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors -mb-px ${
              tab === id
                ? 'border-[#D4AF37] text-[#2C1810]'
                : 'border-transparent text-[#8B7355] hover:text-[#2C1810]'
            }`}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {/* Contenu des onglets */}
      {tab === 'comptes' && isAdmin && <ComptesPanel />}
      {tab === 'config' && isAdmin && <ConfigPanel />}

      {tab === 'contenu' && (
        <div className="space-y-4">
          <PersonnaliteForm />
          <GlossaireForm />
          <FicheForm />
          <QuizForm />
          <FriseForm />
          <p className="text-center text-xs text-[#8B7355] mt-4">
            Données sauvegardées automatiquement dans le navigateur.
          </p>
        </div>
      )}
    </div>
  )
}
