import { cn } from '@/utils/cn'

export function Card({ children, className, hover = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white dark:bg-[#161B22] rounded-xl border border-[#E8E0CC] dark:border-[#30363D]',
        'shadow-sm transition-all duration-200',
        hover && 'hover:shadow-md hover:-translate-y-0.5 cursor-pointer',
        onClick && 'cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className }) {
  return <div className={cn('px-5 pt-5 pb-3', className)}>{children}</div>
}

export function CardBody({ children, className }) {
  return <div className={cn('px-5 pb-5', className)}>{children}</div>
}

export function CardTitle({ children, className }) {
  return (
    <h3 className={cn('font-title text-lg font-semibold text-[#2C1810] dark:text-[#E6EDF3]', className)}>
      {children}
    </h3>
  )
}
