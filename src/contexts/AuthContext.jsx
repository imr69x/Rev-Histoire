import { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  async function fetchProfile(userId) {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      const token = session?.access_token
      if (token) {
        const res = await fetch(`/api/get-profile?userId=${userId}`, {
          headers: { 'Authorization': `Bearer ${token}` },
        })
        if (res.ok) {
          const data = await res.json()
          setProfile(data)
          return
        }
      }
    } catch {}
    // Fallback : lecture directe Supabase
    const { data } = await supabase.from('profiles').select('*').eq('id', userId).single()
    setProfile(data || null)
  }

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else setProfile(null)
    })

    // Rafraîchit le profil quand l'onglet reprend le focus
    function onFocus() {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) fetchProfile(session.user.id)
      })
    }
    window.addEventListener('focus', onFocus)

    return () => {
      subscription.unsubscribe()
      window.removeEventListener('focus', onFocus)
    }
  }, [])

  const isAdmin = profile?.role === 'admin' || user?.email === 'imranbouras69@gmail.com'
  const isInvited = profile?.role === 'invited'
  const isPaid = profile?.subscription_status === 'active' || isAdmin || isInvited

  async function signUp(email, password) {
    return supabase.auth.signUp({ email, password })
  }

  async function signIn(email, password) {
    return supabase.auth.signInWithPassword({ email, password })
  }

  async function signOut() {
    await supabase.auth.signOut()
  }

  async function refreshProfile() {
    if (user) await fetchProfile(user.id)
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, isPaid, isAdmin, isInvited, signUp, signIn, signOut, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
