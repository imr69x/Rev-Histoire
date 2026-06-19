import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft, Star, BookOpen, Calendar, Key, Target,
  ChevronRight, ChevronLeft, HelpCircle, RotateCcw, Lock
} from 'lucide-react'
import { useState } from 'react'
import { useAppStore } from '@/stores/useAppStore'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { allFiches } from '@/data/allData'
import { useAccess } from '@/hooks/useAccess'

const LEVEL_COLORS = {
  '6e': '#E74C3C', '5e': '#E67E22', '4e': '#F1C40F',
  '3e': '#27AE60', '2nde': '#2980B9', '1ere': '#8E44AD',
  'Terminale': '#C0392B', 'HGGSP': '#1B4F72',
}

function FlashCard({ card }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <div
      className="cursor-pointer select-none"
      onClick={() => setFlipped(!flipped)}
      style={{ perspective: '1000px' }}
    >
      <div
        className="relative transition-all duration-500"
        style={{ transformStyle: 'preserve-3d', transform: flipped ? 'rotateY(180deg)' : 'none' }}
      >
        {/* Fantôme invisible : fixe la hauteur sur le texte le plus long */}
        <div className="invisible p-4 text-sm min-h-[8rem] leading-relaxed" aria-hidden="true">
          {card.back.length > card.front.length ? card.back : card.front}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 rounded-xl bg-[#FDF3E7] dark:bg-[#1A1A2E] border-2 border-[#D4AF37] text-center text-sm font-medium text-[#2C1810] dark:text-[#E6EDF3]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {card.front}
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center p-4 rounded-xl bg-[#2C1810] text-[#D4AF37] text-center text-sm"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {card.back}
        </div>
      </div>
      <p className="text-center text-xs text-[#8B7355] mt-1">Cliquer pour retourner</p>
    </div>
  )
}

function QuizInline({ questions, addXP }) {
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[current]

  const handleAnswer = (opt) => {
    if (selected !== null) return
    setSelected(opt)
    if (opt === q.answer) {
      setScore((s) => s + 1)
      addXP(20)
    }
  }

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1)
      setSelected(null)
    } else {
      setDone(true)
    }
  }

  if (done) {
    return (
      <div className="text-center py-6">
        <p className="text-2xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-2">
          {score}/{questions.length}
        </p>
        <p className="text-[#8B7355] mb-4">
          {score === questions.length ? '🎉 Parfait !' : score >= questions.length / 2 ? '👍 Bien !' : '💪 Continue !'}
        </p>
        <Button variant="gold" size="sm" onClick={() => { setCurrent(0); setSelected(null); setScore(0); setDone(false) }}>
          <RotateCcw size={14} /> Recommencer
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-[#8B7355]">Question {current + 1}/{questions.length}</span>
        <span className="text-sm font-semibold text-[#D4AF37]">{score} bonne{score > 1 ? 's' : ''}</span>
      </div>
      <p className="font-medium text-[#2C1810] dark:text-[#E6EDF3] mb-4">{q.question}</p>
      <div className="grid grid-cols-1 gap-2">
        {q.options.map((opt) => {
          const isCorrect = opt === q.answer
          const isSelected = opt === selected
          let cls = 'p-3 rounded-xl border-2 text-sm text-left transition-all cursor-pointer '
          if (selected === null) {
            cls += 'border-[#E8E0CC] hover:border-[#D4AF37] bg-white dark:bg-[#161B22]'
          } else if (isCorrect) {
            cls += 'border-[#27AE60] bg-[#EAFAF1] text-[#27AE60] font-medium'
          } else if (isSelected) {
            cls += 'border-[#C0392B] bg-[#FDEDEC] text-[#C0392B]'
          } else {
            cls += 'border-[#E8E0CC] bg-white dark:bg-[#161B22] opacity-50'
          }
          return (
            <button key={opt} className={cls} onClick={() => handleAnswer(opt)}>
              {opt}
            </button>
          )
        })}
      </div>
      {selected && (
        <div className="mt-3">
          <p className="text-xs text-[#8B7355] italic mb-2">{q.explanation}</p>
          <Button size="sm" onClick={next}>
            {current < questions.length - 1 ? 'Suivant' : 'Résultat'}
            <ChevronRight size={14} />
          </Button>
        </div>
      )}
    </div>
  )
}

export default function FicheDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { favoriteChapters, toggleFavorite, addXP } = useAppStore()
  const { canAccessFiche } = useAccess()
  const [activeTab, setActiveTab] = useState('cours')

  const fiche = allFiches.find((f) => f.id === id)
  const currentIdx = allFiches.findIndex((f) => f.id === id)
  const prevFiche = currentIdx > 0 ? allFiches[currentIdx - 1] : null
  const nextFiche = currentIdx < allFiches.length - 1 ? allFiches[currentIdx + 1] : null
  const isFav = favoriteChapters.includes(id)
  const levelColor = LEVEL_COLORS[fiche?.level] || '#8B4513'

  if (!fiche) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <p className="text-[#8B7355]">Fiche introuvable.</p>
        <Button onClick={() => navigate('/fiches')}>Retour aux fiches</Button>
      </div>
    )
  }

  if (!canAccessFiche(id)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-6 text-center">
        <div className="w-16 h-16 rounded-full bg-[#F5F0E8] flex items-center justify-center mb-2">
          <Lock size={28} className="text-[#D4AF37]" />
        </div>
        <h2 className="text-xl font-['Playfair_Display'] font-bold text-[#2C1810]">Contenu verrouillé</h2>
        <p className="text-[#8B7355] max-w-sm">Cette fiche est réservée aux abonnés. Débloque l'accès complet pour 9,99€/an.</p>
        <button
          onClick={() => navigate('/pricing')}
          className="px-6 py-2.5 bg-[#D4AF37] text-[#2C1810] font-bold rounded-xl hover:bg-[#E8C85A] transition-colors"
        >
          Débloquer l'accès →
        </button>
        <button onClick={() => navigate('/fiches')} className="text-sm text-[#8B7355] hover:underline">
          ← Retour aux fiches
        </button>
      </div>
    )
  }

  const tabs = [
    { id: 'cours', label: 'Cours' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'quiz', label: 'Quiz' },
  ]

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fade-in">
      {/* Navigation */}
      <div className="flex items-center gap-2 mb-6 text-sm text-[#8B7355]">
        <Link to="/fiches" className="flex items-center gap-1 hover:text-[#8B4513] transition-colors">
          <ArrowLeft size={14} /> Fiches
        </Link>
        <ChevronRight size={12} />
        <span className="text-[#2C1810] dark:text-[#E6EDF3]">{fiche.title}</span>
      </div>

      {/* En-tête */}
      <div className="mb-6 p-6 rounded-2xl" style={{ backgroundColor: levelColor + '15', borderLeft: `4px solid ${levelColor}` }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <Badge style={{ backgroundColor: levelColor, color: 'white' }}>{fiche.level}</Badge>
              <Badge variant="ghost">{fiche.theme}</Badge>
              {fiche.essential && <Badge variant="gold">⭐ Essentiel Bac</Badge>}
            </div>
            <h1 className="text-2xl md:text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-2">
              {fiche.title}
            </h1>
            <div className="flex items-center gap-2 text-sm text-[#8B7355]">
              <Calendar size={14} />
              <span>{fiche.periode}</span>
            </div>
          </div>
          <button
            onClick={() => toggleFavorite(fiche.id)}
            className="p-2 rounded-xl hover:bg-white/50 transition-colors"
          >
            <Star size={20} className={isFav ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#8B7355]'} />
          </button>
        </div>
      </div>

      {/* Onglets */}
      <div className="flex gap-1 mb-6 bg-[#E8E0CC] dark:bg-[#30363D] rounded-xl p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-white dark:bg-[#161B22] text-[#2C1810] dark:text-[#E6EDF3] shadow-sm'
                : 'text-[#8B7355] hover:text-[#4A3728]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Contenu onglet Cours */}
      {activeTab === 'cours' && (
        <div className="space-y-6">
          {/* Contexte */}
          <div className="p-5 rounded-xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D]">
            <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-3 flex items-center gap-2">
              <BookOpen size={18} className="text-[#8B4513]" /> Contexte historique
            </h2>
            <p className="text-[#4A3728] dark:text-[#8B949E] leading-relaxed">{fiche.content.context}</p>
          </div>

          {/* Points clés */}
          <div className="p-5 rounded-xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D]">
            <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-3 flex items-center gap-2">
              <Key size={18} className="text-[#D4AF37]" /> Points essentiels
            </h2>
            <ul className="space-y-2">
              {fiche.content.keyPoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37] text-[#2C1810] text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[#4A3728] dark:text-[#8B949E]">{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Causes & Conséquences */}
          {(fiche.content.causes?.length > 0 || fiche.content.consequences?.length > 0) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fiche.content.causes?.length > 0 && (
                <div className="p-5 rounded-xl bg-[#FDEDEC] dark:bg-[#1A0D0D] border border-[#C0392B]/20">
                  <h3 className="font-semibold text-[#C0392B] mb-3">Causes</h3>
                  <ul className="space-y-1">
                    {fiche.content.causes.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#4A3728] dark:text-[#8B949E]">
                        <span className="text-[#C0392B] mt-0.5">→</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {fiche.content.consequences?.length > 0 && (
                <div className="p-5 rounded-xl bg-[#EAFAF1] dark:bg-[#0D1A10] border border-[#27AE60]/20">
                  <h3 className="font-semibold text-[#27AE60] mb-3">Conséquences</h3>
                  <ul className="space-y-1">
                    {fiche.content.consequences.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-[#4A3728] dark:text-[#8B949E]">
                        <span className="text-[#27AE60] mt-0.5">→</span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Dates clés */}
          {fiche.content.dates?.length > 0 && (
            <div className="p-5 rounded-xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D]">
              <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-3 flex items-center gap-2">
                <Calendar size={18} className="text-[#8E44AD]" /> Dates clés
              </h2>
              <div className="space-y-2">
                {fiche.content.dates.map(({ date, event }, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 font-bold text-[#8B4513] dark:text-[#D4AF37] w-28 text-sm">{date}</span>
                    <span className="text-[#4A3728] dark:text-[#8B949E] text-sm">{event}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vocabulaire */}
          {fiche.content.vocabulary?.length > 0 && (
            <div className="p-5 rounded-xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D]">
              <h2 className="font-['Playfair_Display'] text-lg font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-3">
                Vocabulaire clé
              </h2>
              <div className="flex flex-wrap gap-2">
                {fiche.content.vocabulary.map((v) => (
                  <Link
                    key={v}
                    to={`/glossaire?q=${encodeURIComponent(v)}`}
                    className="px-3 py-1 rounded-full bg-[#FDF3E7] border border-[#D4AF37] text-[#8B4513] text-sm hover:bg-[#D4AF37] hover:text-[#2C1810] transition-colors"
                  >
                    {v}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Conseil méthodo */}
          {fiche.content.methodTips && (
            <div className="p-5 rounded-xl bg-[#EAF4FB] dark:bg-[#0D1420] border border-[#1B4F72]/20">
              <h3 className="font-semibold text-[#1B4F72] mb-2 flex items-center gap-2">
                <Target size={16} /> Astuce méthode
              </h3>
              <p className="text-sm text-[#4A3728] dark:text-[#8B949E]">{fiche.content.methodTips}</p>
            </div>
          )}
        </div>
      )}

      {/* Onglet Flashcards */}
      {activeTab === 'flashcards' && (
        <div>
          <p className="text-sm text-[#8B7355] mb-4">Clique sur chaque carte pour la retourner.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(fiche.flashcards || []).map((card, i) => (
              <FlashCard key={i} card={card} />
            ))}
          </div>
        </div>
      )}

      {/* Onglet Quiz */}
      {activeTab === 'quiz' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D]">
          <h2 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-4 flex items-center gap-2">
            <HelpCircle size={20} className="text-[#D4AF37]" /> Mini-quiz
          </h2>
          {fiche.quiz?.length > 0 ? (
            <QuizInline questions={fiche.quiz} addXP={addXP} />
          ) : (
            <p className="text-[#8B7355]">Pas de questions pour cette fiche.</p>
          )}
        </div>
      )}

      {/* Navigation entre fiches */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E8E0CC] dark:border-[#30363D]">
        {prevFiche ? (
          <Link
            to={`/fiches/${prevFiche.id}`}
            className="flex items-center gap-2 text-sm text-[#8B4513] hover:text-[#D4AF37] transition-colors"
          >
            <ChevronLeft size={16} />
            <span className="hidden sm:block">{prevFiche.title}</span>
            <span className="sm:hidden">Précédent</span>
          </Link>
        ) : <div />}
        {nextFiche ? (
          <Link
            to={`/fiches/${nextFiche.id}`}
            className="flex items-center gap-2 text-sm text-[#8B4513] hover:text-[#D4AF37] transition-colors"
          >
            <span className="hidden sm:block">{nextFiche.title}</span>
            <span className="sm:hidden">Suivant</span>
            <ChevronRight size={16} />
          </Link>
        ) : <div />}
      </div>
    </div>
  )
}
