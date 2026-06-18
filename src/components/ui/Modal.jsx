import { useEffect } from 'react'
import { X } from 'lucide-react'
import { cn } from '@/utils/cn'

export function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const sizes = { sm: 'max-w-md', md: 'max-w-2xl', lg: 'max-w-4xl', xl: 'max-w-6xl' }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={cn(
        'relative z-10 w-full bg-white dark:bg-[#161B22] rounded-2xl shadow-2xl',
        'border border-[#E8E0CC] dark:border-[#30363D]',
        'animate-fade-in max-h-[90vh] overflow-hidden flex flex-col',
        sizes[size]
      )}>
        {title ? (
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E0CC] dark:border-[#30363D]">
            <h2 className="font-title text-xl font-semibold text-[#2C1810] dark:text-[#E6EDF3]">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#E8E0CC] dark:hover:bg-[#30363D] transition-colors"
            >
              <X size={18} className="text-[#4A3728] dark:text-[#8B949E]" />
            </button>
          </div>
        ) : (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-20 p-1.5 rounded-lg hover:bg-[#E8E0CC] dark:hover:bg-[#30363D] transition-colors"
          >
            <X size={18} className="text-[#4A3728] dark:text-[#8B949E]" />
          </button>
        )}
        <div className="overflow-y-auto flex-1 p-6">{children}</div>
      </div>
    </div>
  )
}
