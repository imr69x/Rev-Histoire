import { cn } from '@/utils/cn'

const LEVELS = [
  { id: 'all',       label: 'Tous',       color: '#8B4513' },
  { id: '6e',        label: '6ème',       color: '#E74C3C' },
  { id: '5e',        label: '5ème',       color: '#E67E22' },
  { id: '4e',        label: '4ème',       color: '#F1C40F' },
  { id: '3e',        label: '3ème',       color: '#27AE60' },
  { id: '2nde',      label: '2nde',       color: '#2980B9' },
  { id: '1ere',      label: '1ère',       color: '#8E44AD' },
  { id: 'Terminale', label: 'Terminale',  color: '#C0392B' },
  { id: 'HGGSP',     label: 'HGGSP',      color: '#1B4F72' },
]

export function LevelSelector({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      {LEVELS.map((lvl) => (
        <button
          key={lvl.id}
          onClick={() => onSelect(lvl.id)}
          className={cn(
            'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-150',
            selected === lvl.id
              ? 'text-white shadow-md scale-105'
              : 'bg-[#E8E0CC] dark:bg-[#30363D] text-[#4A3728] dark:text-[#8B949E] hover:scale-105'
          )}
          style={selected === lvl.id ? { backgroundColor: lvl.color } : {}}
        >
          {lvl.label}
        </button>
      ))}
    </div>
  )
}

export { LEVELS }
