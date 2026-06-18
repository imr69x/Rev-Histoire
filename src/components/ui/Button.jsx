import { cn } from '@/utils/cn'

const variants = {
  primary: 'bg-[#8B4513] hover:bg-[#A0522D] text-white shadow-sm',
  secondary: 'bg-[#1B4F72] hover:bg-[#2E86AB] text-white shadow-sm',
  gold: 'bg-[#D4AF37] hover:bg-[#E8C85A] text-[#2C1810] font-semibold shadow-sm',
  outline: 'border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white',
  ghost: 'text-[#4A3728] hover:bg-[#E8E0CC] dark:text-[#E6EDF3] dark:hover:bg-[#30363D]',
  danger: 'bg-[#C0392B] hover:bg-[#A93226] text-white shadow-sm',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-4 py-2 text-sm rounded-xl',
  lg: 'px-6 py-3 text-base rounded-xl',
}

export function Button({
  children, variant = 'primary', size = 'md',
  className, disabled, onClick, type = 'button', ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 font-medium transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
