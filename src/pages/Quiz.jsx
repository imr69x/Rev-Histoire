import { useState, useEffect, useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  HelpCircle, Clock, Trophy, ChevronRight, RotateCcw,
  Zap, Shield, Flame, Star, CheckCircle, XCircle, X
} from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { LevelSelector } from '@/components/ui/LevelSelector'
import { Badge } from '@/components/ui/Badge'
import { Progress } from '@/components/ui/Progress'
import { quizData as staticQuizData } from '@/data/quiz/questions'
import { useAdminStore } from '@/stores/useAdminStore'

const MODES = [
  { id: 'random',   icon: Zap,    label: 'Révision rapide',  desc: '10 questions aléatoires', color: '#D4AF37' },
  { id: 'brevet',   icon: Shield, label: 'Entraînement Brevet', desc: '20 questions · 3ème', color: '#27AE60' },
  { id: 'bac',      icon: Trophy, label: 'Entraînement Bac',  desc: '25 questions · Terminale', color: '#C0392B' },
  { id: 'chrono',   icon: Clock,  label: 'Mode Chrono',       desc: '15 s par question', color: '#E67E22' },
  { id: 'survival', icon: Flame,  label: 'Mode Survie',       desc: '1 erreur = fin', color: '#8E44AD' },
  { id: 'daily',    icon: Star,   label: 'Défi du jour',      desc: '5 questions · +50 XP', color: '#1B4F72' },
]

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

export default function Quiz() {
  const { customQuestions } = useAdminStore()
  const quizData = useMemo(() => [...staticQuizData, ...customQuestions], [customQuestions])

  function getQuestions(mode, level) {
    let pool = level === 'all' ? quizData : quizData.filter((q) => q.level === level)
    switch (mode) {
      case 'brevet':  pool = quizData.filter((q) => ['3e', '4e'].includes(q.level)); return shuffle(pool).slice(0, 20)
      case 'bac':     pool = quizData.filter((q) => ['Terminale', '1ere', 'HGGSP'].includes(q.level)); return shuffle(pool).slice(0, 25)
      case 'chrono':  return shuffle(pool).slice(0, 15)
      case 'survival': return shuffle(pool)
      case 'daily':   return shuffle(pool).slice(0, 5)
      default:        return shuffle(pool).slice(0, 10)
    }
  }
  const [searchParams] = useSearchParams()
  const [phase, setPhase] = useState(searchParams.get('mode') ? 'playing' : 'menu')
  const [mode, setMode] = useState(searchParams.get('mode') || 'random')
  const [level, setLevel] = useState('all')
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(15)
  const [results, setResults] = useState([])
  const [alive, setAlive] = useState(true)
  const { addXP, addQuizResult, recordActivity } = useAppStore()

  const startQuiz = useCallback((m, l = level) => {
    const qs = getQuestions(m, l)
    setQuestions(qs)
    setMode(m)
    setCurrent(0)
    setSelected(null)
    setScore(0)
    setTimeLeft(15)
    setResults([])
    setAlive(true)
    setPhase('playing')
  }, [level])

  // Timer pour mode chrono
  useEffect(() => {
    if (phase !== 'playing' || mode !== 'chrono' || selected !== null) return
    if (timeLeft <= 0) { handleAnswer(null); return }
    const t = setTimeout(() => setTimeLeft((v) => v - 1), 1000)
    return () => clearTimeout(t)
  }, [phase, mode, selected, timeLeft])

  useEffect(() => {
    if (phase === 'playing' && mode === 'chrono') setTimeLeft(15)
  }, [current])

  const handleAnswer = (opt) => {
    if (selected !== null) return
    const q = questions[current]
    const correct = opt === q.answer
    setSelected(opt || '__timeout__')
    if (correct) {
      setScore((s) => s + (q.points || 10))
      addXP(q.points || 10)
    } else if (mode === 'survival') {
      setAlive(false)
    }
    setResults((r) => [...r, { question: q.question, correct, answer: q.answer, chosen: opt }])
  }

  const next = () => {
    if (!alive) { endQuiz(); return }
    if (current >= questions.length - 1) { endQuiz(); return }
    setCurrent((c) => c + 1)
    setSelected(null)
    setTimeLeft(15)
  }

  const endQuiz = (partial = false) => {
    const total = questions.length
    addQuizResult({ mode, level, score, total, answered: results.length, partial, date: new Date().toISOString() })
    recordActivity()
    if (!partial && mode === 'daily') addXP(50)
    setPhase('result')
  }

  const quitQuiz = () => endQuiz(true)

  // Menu
  if (phase === 'menu') {
    return (
      <div className="p-6 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-6">
          <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">
            Quiz adaptatif
          </h1>
          <p className="text-[#8B7355]">Testez vos connaissances avec {quizData.length} questions</p>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium text-[#4A3728] dark:text-[#8B949E] mb-3">Filtrer par niveau :</p>
          <LevelSelector selected={level} onSelect={setLevel} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODES.map(({ id, icon: Icon, label, desc, color }) => (
            <button
              key={id}
              onClick={() => startQuiz(id)}
              className="group p-5 rounded-2xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D] hover:shadow-lg hover:-translate-y-1 transition-all text-left"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-3"
                style={{ backgroundColor: color + '20' }}
              >
                <Icon size={24} style={{ color }} />
              </div>
              <h3 className="font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-1">{label}</h3>
              <p className="text-sm text-[#8B7355] dark:text-[#8B949E]">{desc}</p>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // Résultats
  if (phase === 'result') {
    const answered = results.length
    const correct = results.filter((r) => r.correct).length
    const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0
    const wasPartial = answered < questions.length
    return (
      <div className="p-6 max-w-2xl mx-auto animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-[#FDF3E7] border-4 border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
            <Trophy size={40} className="text-[#D4AF37]" />
          </div>
          {wasPartial && (
            <p className="text-sm text-[#8B7355] mb-2 italic">Quiz interrompu — {answered}/{questions.length} questions répondues</p>
          )}
          <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] mb-2">
            {pct >= 80 ? '🎉 Excellent !' : pct >= 60 ? '👍 Bien joué !' : '💪 Continue !'}
          </h1>
          <p className="text-5xl font-bold text-[#D4AF37] mb-1">{pct}%</p>
          <p className="text-[#8B7355]">{correct}/{answered} bonnes réponses</p>
        </div>

        {/* Récapitulatif */}
        <div className="space-y-2 mb-8">
          {results.map((r, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D]">
              {r.correct
                ? <CheckCircle size={16} className="text-[#27AE60] flex-shrink-0 mt-0.5" />
                : <XCircle size={16} className="text-[#C0392B] flex-shrink-0 mt-0.5" />
              }
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#2C1810] dark:text-[#E6EDF3]">{r.question}</p>
                {!r.correct && (
                  <p className="text-xs text-[#27AE60] mt-0.5">✓ {r.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => startQuiz(mode)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold hover:bg-[#E8C85A] transition-colors"
          >
            <RotateCcw size={16} /> Rejouer
          </button>
          <button
            onClick={() => setPhase('menu')}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E8E0CC] dark:bg-[#30363D] text-[#4A3728] dark:text-[#8B949E] font-medium hover:bg-[#D4AF37] hover:text-[#2C1810] transition-colors"
          >
            Choisir un mode
          </button>
        </div>
      </div>
    )
  }

  // En jeu
  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-[#8B7355]">Chargement des questions…</p>
      </div>
    )
  }

  const q = questions[current]
  if (!q) { endQuiz(); return null }

  return (
    <div className="p-6 max-w-2xl mx-auto animate-fade-in">
      {/* En-tête */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Badge variant="level">{MODES.find((m) => m.id === mode)?.label}</Badge>
          <span className="text-sm text-[#8B7355]">{current + 1}/{questions.length}</span>
        </div>
        <div className="flex items-center gap-3">
          {mode === 'chrono' && (
            <div className={`flex items-center gap-1 font-bold ${timeLeft <= 5 ? 'text-[#C0392B]' : 'text-[#D4AF37]'}`}>
              <Clock size={16} />
              {timeLeft}s
            </div>
          )}
          <button
            onClick={quitQuiz}
            title="Quitter le quiz"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#8B7355] border border-[#E8E0CC] hover:bg-[#FDEDEC] hover:text-[#C0392B] hover:border-[#C0392B] transition-colors"
          >
            <X size={13} /> Quitter
          </button>
          <span className="text-sm font-semibold text-[#D4AF37]">{score} pts</span>
        </div>
      </div>

      <Progress value={current + 1} max={questions.length} className="mb-6" />

      {/* Question */}
      <div className="mb-6 p-6 rounded-2xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D]">
        <div className="flex gap-2 mb-3">
          <Badge variant="ghost">{q.level}</Badge>
          <Badge variant="ghost">{q.theme}</Badge>
          {'★'.repeat(q.difficulty || 1).padEnd(3, '☆').split('').map((s, i) => (
            <span key={i} className={`text-sm ${s === '★' ? 'text-[#D4AF37]' : 'text-[#E8E0CC]'}`}>{s}</span>
          ))}
        </div>
        <p className="text-lg font-medium text-[#2C1810] dark:text-[#E6EDF3] leading-relaxed">{q.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {q.options?.map((opt, i) => {
          const isCorrect = opt === q.answer
          const isSelected = opt === selected
          let cls = 'w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all duration-150 '
          if (selected === null) {
            cls += 'border-[#E8E0CC] dark:border-[#30363D] bg-white dark:bg-[#161B22] text-[#2C1810] dark:text-[#E6EDF3] hover:border-[#D4AF37] hover:bg-[#FDF3E7]'
          } else if (isCorrect) {
            cls += 'border-[#27AE60] bg-[#EAFAF1] text-[#27AE60]'
          } else if (isSelected) {
            cls += 'border-[#C0392B] bg-[#FDEDEC] text-[#C0392B]'
          } else {
            cls += 'border-[#E8E0CC] dark:border-[#30363D] bg-white dark:bg-[#161B22] text-[#8B7355] opacity-60'
          }
          return (
            <button key={i} className={cls} onClick={() => handleAnswer(opt)}>
              <span className="mr-2 font-bold">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          )
        })}
      </div>

      {/* Explication + bouton suivant */}
      {selected && (
        <div className="animate-fade-in">
          {q.explanation && (
            <div className={`p-4 rounded-xl mb-4 text-sm ${selected === q.answer ? 'bg-[#EAFAF1] text-[#27AE60]' : 'bg-[#FDEDEC] text-[#C0392B]'}`}>
              <span className="font-semibold">{selected === q.answer ? '✓ Correct !' : '✗ Incorrect.'} </span>
              {q.explanation}
            </div>
          )}
          {!alive ? (
            <button
              onClick={endQuiz}
              className="w-full py-3 rounded-xl bg-[#C0392B] text-white font-semibold hover:bg-[#A93226] transition-colors"
            >
              Voir les résultats
            </button>
          ) : (
            <button
              onClick={next}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold hover:bg-[#E8C85A] transition-colors"
            >
              {current >= questions.length - 1 ? 'Voir les résultats' : 'Suivant'}
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  )
}
