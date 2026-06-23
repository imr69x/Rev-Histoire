import { NavLink, useNavigate } from 'react-router-dom'
import {
  BookOpen, Globe, Users, BookMarked, HelpCircle,
  Clock, BarChart3, GraduationCap, Menu, X,
  Scroll, Star, MapPin, Settings, LogOut, Crown
} from 'lucide-react'
import { useState } from 'react'
import { useAppStore } from '@/stores/useAppStore'
import { useAuth } from '@/contexts/AuthContext'
import { getLevel, getProgressToNext } from '@/utils/xp'
import { Progress } from './Progress'
import { cn } from '@/utils/cn'

const NAV_ITEMS = [
  { to: '/dashboard',  icon: BarChart3,   label: 'Tableau de bord' },
  { to: '/fiches',    icon: BookOpen,    label: 'Fiches de révision' },
  { to: '/glossaire', icon: BookMarked,  label: 'Glossaire' },
  { to: '/personnalites', icon: Users,   label: 'Personnalités' },
  { to: '/quiz',      icon: HelpCircle,  label: 'Quiz' },
  { to: '/carte',     icon: Globe,       label: 'Carte interactive' },
  { to: '/frise',     icon: Clock,       label: 'Frise chronologique' },
  { to: '/methode',   icon: GraduationCap, label: 'Méthode Bac/Brevet' },
  { to: '/favoris',   icon: Star,        label: 'Mes favoris' },
  { to: '/pays',      icon: MapPin,      label: 'Histoire des pays' },
  { to: '/pricing',   icon: Crown,       label: 'Tarifs & Abonnement' },
  { to: '/admin',     icon: Settings,    label: 'Modification' },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const { xp } = useAppStore()
  const { user, isPaid, isAdmin, isInvited, signOut, refreshProfile } = useAuth()
  const navigate = useNavigate()
  const level = getLevel(xp)
  const progress = getProgressToNext(xp)

  async function handleSignOut() {
    await signOut()
    navigate('/landing')
  }

  return (
    <>
      {/* Sidebar desktop */}
      <aside className={cn(
        'hidden md:flex flex-col h-screen sticky top-0',
        'bg-[#2C1810] dark:bg-[#0D1117]',
        'border-r border-[#4A3728] dark:border-[#30363D]',
        'transition-all duration-300',
        collapsed ? 'w-16' : 'w-64'
      )}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-[#4A3728] dark:border-[#30363D]">
          <div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
            <Scroll size={16} className="text-[#2C1810]" />
          </div>
          {!collapsed && (
            <span className="font-title text-[#D4AF37] font-semibold text-sm leading-tight">
              Rev'Histoire
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto text-[#8B7355] hover:text-[#D4AF37] transition-colors"
          >
            {collapsed ? <Menu size={16} /> : <X size={16} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-2 space-y-0.5">
          {NAV_ITEMS.filter(({ to }) => {
            if (to === '/admin') return isAdmin
            if (to === '/pricing') return !isAdmin
            return true
          }).map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/dashboard'}
              className={({ isActive }) => cn(
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium',
                'transition-all duration-150 group',
                isActive
                  ? 'bg-[#D4AF37] text-[#2C1810]'
                  : 'text-[#C4A882] hover:bg-[#3D2314] hover:text-[#D4AF37]'
              )}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span>{label}</span>}
            </NavLink>
          ))}
        </nav>

        {/* XP & Profil */}
        <div className="px-4 py-4 border-t border-[#4A3728] dark:border-[#30363D] space-y-3">
          {!collapsed && (
            <>
              <div className="flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-[#2C1810] flex-shrink-0"
                  style={{ backgroundColor: level.color }}
                >
                  {level.label[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-[#D4AF37] truncate">{isAdmin ? '👑 Admin' : isInvited ? '🎟️ Invité' : level.label}</p>
                  <p className="text-xs text-[#8B7355] truncate">{user?.email || 'Invité'}</p>
                </div>
              </div>
              <Progress value={progress} className="h-1.5" />
              {!isPaid && !isAdmin && (
                <>
                  <button
                    onClick={() => navigate('/pricing')}
                    className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-[#D4AF37] text-[#2C1810] text-xs font-bold hover:bg-[#E8C85A] transition-colors"
                  >
                    <Crown size={13} /> Passer Premium
                  </button>
                  <button
                    onClick={async () => { if (refreshProfile) await refreshProfile() }}
                    className="w-full text-center text-[10px] text-[#8B7355] hover:text-[#D4AF37] transition-colors py-0.5"
                  >
                    ↻ Déjà payé ? Actualiser
                  </button>
                </>
              )}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-[#8B7355] hover:text-[#E74C3C] hover:bg-[#3D2314] text-xs transition-colors"
              >
                <LogOut size={13} /> Se déconnecter
              </button>
            </>
          )}
          {collapsed && (
            <button onClick={handleSignOut} className="w-full flex justify-center text-[#8B7355] hover:text-[#E74C3C] transition-colors">
              <LogOut size={16} />
            </button>
          )}
        </div>

      </aside>

      {/* Mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#2C1810] border-t border-[#4A3728] px-2 py-2">
        <div className="flex justify-around">
          {NAV_ITEMS.slice(0, 5).map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => cn(
                'flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg text-xs',
                isActive ? 'text-[#D4AF37]' : 'text-[#8B7355]'
              )}
            >
              <Icon size={20} />
              <span className="hidden xs:block">{label.split(' ')[0]}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}
