import { Search, X } from 'lucide-react'
import { cn } from '@/utils/cn'

export function SearchBar({ value, onChange, placeholder = 'Rechercher…', className }) {
  return (
    <div className={cn('relative flex items-center', className)}>
      <Search className="absolute left-3 text-[#8B4513] opacity-60" size={16} />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full pl-9 pr-8 py-2.5 rounded-xl text-sm',
          'bg-white dark:bg-[#161B22]',
          'border border-[#E8E0CC] dark:border-[#30363D]',
          'text-[#2C1810] dark:text-[#E6EDF3]',
          'placeholder-[#8B7355] dark:placeholder-[#6E7681]',
          'focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent',
          'transition-all duration-200'
        )}
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-3 text-[#8B7355] hover:text-[#2C1810] transition-colors"
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
}
