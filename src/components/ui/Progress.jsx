import { cn } from '@/utils/cn'

export function Progress({ value = 0, max = 100, className, color }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))
  return (
    <div className={cn('w-full bg-[#E8E0CC] dark:bg-[#30363D] rounded-full h-2 overflow-hidden', className)}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, backgroundColor: color || '#D4AF37' }}
      />
    </div>
  )
}
