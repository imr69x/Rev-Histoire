import { Link } from 'react-router-dom'
import {
  BookOpen, Globe, Users, BookMarked, HelpCircle,
  Clock, Flame, Star, TrendingUp, Award, Target
} from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { getLevel, getProgressToNext, XP_LEVELS } from '@/utils/xp'
import { Card, CardHeader, CardBody, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Progress } from '@/components/ui/Progress'

const MODULES = [
  {
    to: '/fiches', icon: BookOpen, color: '#8B4513', bg: '#FDF3E7',
    label: 'Fiches de révision',
    desc: 'De la 6ème à la Terminale',
    stat: '80+ fiches'
  },
  {
    to: '/glossaire', icon: BookMarked, color: '#1B4F72', bg: '#EAF4FB',
    label: 'Glossaire',
    desc: '150+ termes définis',
    stat: 'Toutes périodes'
  },
  {
    to: '/personnalites', icon: Users, color: '#8E44AD', bg: '#F5EEF8',
    label: 'Personnalités',
    desc: '80+ portraits historiques',
    stat: 'Antiquité → Présent'
  },
  {
    to: '/quiz', icon: HelpCircle, color: '#27AE60', bg: '#EAFAF1',
    label: 'Quiz adaptatif',
    desc: '120+ questions par niveau',
    stat: 'Mode Brevet & Bac'
  },
  {
    to: '/carte', icon: Globe, color: '#D4AF37', bg: '#FEF9EC',
    label: 'Carte interactive',
    desc: 'Voyagez dans le temps',
    stat: '19 époques'
  },
  {
    to: '/frise', icon: Clock, color: '#E74C3C', bg: '#FDEDEC',
    label: 'Frise chronologique',
    desc: '-3000 → 2024',
    stat: '500+ événements'
  },
]

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-[#161B22] border border-[#E8E0CC] dark:border-[#30363D]">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + '20' }}>
        <Icon size={20} style={{ color }} />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#2C1810] dark:text-[#E6EDF3]">{value}</p>
        <p className="text-xs text-[#8B7355] dark:text-[#8B949E]">{label}</p>
      </div>
    </div>
  )
}

function HeatmapCell({ count }) {
  const intensity = count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : 3
  const colors = ['#E8E0CC', '#F5D88A', '#D4AF37', '#8B4513']
  return (
    <div
      className="w-3 h-3 rounded-sm"
      style={{ backgroundColor: colors[intensity] }}
      title={`${count} activité(s)`}
    />
  )
}

export default function Dashboard() {
  const { xp, streak, quizHistory, learnedCards, learnedTerms, activity } = useAppStore()
  const level = getLevel(xp)
  const progress = getProgressToNext(xp)

  // Génère 52 semaines de données pour la heatmap
  const today = new Date()
  const weeks = []
  for (let w = 51; w >= 0; w--) {
    const week = []
    for (let d = 6; d >= 0; d--) {
      const date = new Date(today)
      date.setDate(date.getDate() - w * 7 - d)
      const key = date.toISOString().split('T')[0]
      week.push(activity[key] || 0)
    }
    weeks.push(week)
  }

  const totalQuestions = quizHistory.reduce((sum, r) => sum + (r.total || 0), 0)
  const avgScore = quizHistory.length > 0
    ? Math.round(quizHistory.reduce((sum, r) => sum + (r.score || 0), 0) / quizHistory.length)
    : 0

  return (
    <div className="p-6 max-w-7xl mx-auto animate-fade-in">
      {/* En-tête */}
      <div className="mb-8">
        <h1 className="text-3xl font-['Playfair_Display'] font-bold text-[#2C1810] dark:text-[#E6EDF3] mb-1">
          Tableau de bord
        </h1>
        <p className="text-[#8B7355] dark:text-[#8B949E]">
          Bienvenue dans votre espace de révision d'Histoire
        </p>
      </div>

      {/* Carte XP / Niveau */}
      <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-[#2C1810] to-[#4A3728] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-[#2C1810]"
              style={{ backgroundColor: level.color }}
            >
              {level.label[0]}
            </div>
            <div>
              <p className="font-semibold text-[#D4AF37]">{level.label}</p>
              <p className="text-sm text-white/70">{xp} XP total</p>
            </div>
            {streak > 0 && (
              <div className="ml-auto flex items-center gap-1.5 bg-white/10 rounded-xl px-3 py-1.5">
                <Flame size={16} className="text-orange-400" />
                <span className="font-semibold">{streak} jour{streak > 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
          <Progress value={progress} className="mb-1" />
          <div className="flex justify-between text-xs text-white/60">
            <span>{level.label}</span>
            <span>{progress}% vers le niveau suivant</span>
          </div>
        </div>
      </div>

      {/* Stats rapides */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={HelpCircle} label="Questions répondues" value={totalQuestions} color="#27AE60" />
        <StatCard icon={TrendingUp} label="Score moyen" value={`${avgScore}%`} color="#D4AF37" />
        <StatCard icon={Star}  label="Flashcards apprises" value={learnedCards.size} color="#8E44AD" />
        <StatCard icon={BookMarked} label="Termes appris" value={learnedTerms.size} color="#1B4F72" />
      </div>

      {/* Heatmap d'activité */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Activité (12 derniers mois)</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="flex gap-1 overflow-x-auto">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1">
                {week.map((count, di) => (
                  <HeatmapCell key={di} count={count} />
                ))}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3 text-xs text-[#8B7355]">
            <span>Moins</span>
            {['#E8E0CC', '#F5D88A', '#D4AF37', '#8B4513'].map((c) => (
              <div key={c} className="w-3 h-3 rounded-sm" style={{ backgroundColor: c }} />
            ))}
            <span>Plus</span>
          </div>
        </CardBody>
      </Card>

      {/* Modules */}
      <h2 className="text-xl font-['Playfair_Display'] font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-4">
        Modules de révision
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {MODULES.map(({ to, icon: Icon, color, bg, label, desc, stat }) => (
          <Link
            key={to}
            to={to}
            className="group p-5 rounded-2xl border border-[#E8E0CC] dark:border-[#30363D] bg-white dark:bg-[#161B22] hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: bg }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[#2C1810] dark:text-[#E6EDF3] mb-0.5">{label}</h3>
                <p className="text-sm text-[#8B7355] dark:text-[#8B949E] mb-2">{desc}</p>
                <Badge variant="ghost" className="text-xs">{stat}</Badge>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Raccourcis rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader><CardTitle>Défi du jour</CardTitle></CardHeader>
          <CardBody>
            <p className="text-sm text-[#8B7355] dark:text-[#8B949E] mb-4">
              Réponds à 5 questions pour maintenir ton streak et gagner 50 XP !
            </p>
            <Link
              to="/quiz?mode=daily"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#D4AF37] text-[#2C1810] font-semibold text-sm hover:bg-[#E8C85A] transition-colors"
            >
              <Target size={16} />
              Commencer le défi
            </Link>
          </CardBody>
        </Card>
        <Card>
          <CardHeader><CardTitle>Révision de dernière minute</CardTitle></CardHeader>
          <CardBody>
            <p className="text-sm text-[#8B7355] dark:text-[#8B949E] mb-4">
              Les 20 fiches et notions les plus importantes pour le Brevet/Bac.
            </p>
            <Link
              to="/fiches?filter=essentiel"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#8B4513] text-white font-semibold text-sm hover:bg-[#A0522D] transition-colors"
            >
              <Award size={16} />
              Voir les essentiels
            </Link>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
