export const XP_LEVELS = [
  { min: 0,    label: 'Élève',      color: '#6B7280' },
  { min: 100,  label: 'Apprenti',   color: '#3B82F6' },
  { min: 300,  label: 'Historien',  color: '#8B5CF6' },
  { min: 700,  label: 'Érudit',     color: '#D4AF37' },
  { min: 1500, label: 'Expert',     color: '#F59E0B' },
  { min: 3000, label: 'Maître',     color: '#EF4444' },
]

export function getLevel(xp) {
  let current = XP_LEVELS[0]
  for (const lvl of XP_LEVELS) {
    if (xp >= lvl.min) current = lvl
  }
  return current
}

export function getProgressToNext(xp) {
  const idx = XP_LEVELS.findLastIndex((l) => xp >= l.min)
  if (idx === XP_LEVELS.length - 1) return 100
  const cur = XP_LEVELS[idx].min
  const next = XP_LEVELS[idx + 1].min
  return Math.round(((xp - cur) / (next - cur)) * 100)
}
