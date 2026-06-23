import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/ui/Sidebar'
import { useAppStore } from '@/stores/useAppStore'
import { useEffect } from 'react'

export function Layout() {
  const { updateStreak, recordActivity } = useAppStore()

  useEffect(() => {
    document.body.classList.remove('dark')
    updateStreak()
    recordActivity()
  }, [])

  return (
    <div className="flex min-h-screen bg-white dark:bg-[#0D1117]">
      <Sidebar />
      <main className="flex-1 overflow-auto pb-20 md:pb-0">
        <Outlet />
      </main>
    </div>
  )
}
