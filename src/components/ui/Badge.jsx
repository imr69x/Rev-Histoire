import { cn } from '@/utils/cn'

const variants = {
  default: 'bg-[#D4AF37] text-[#2C1810]',
  empire: 'bg-[#1B4F72] text-white',
  success: 'bg-[#27AE60] text-white',
  danger: 'bg-[#C0392B] text-white',
  outline: 'border border-[#D4AF37] text-[#8B4513]',
  ghost: 'bg-[#E8E0CC] text-[#4A3728]',
  level: 'bg-[#8B4513] text-white',
}

export function Badge({ children, variant = 'default', className }) {
  return (
    <span className={cn(
      'inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold overflow-hidden',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}
