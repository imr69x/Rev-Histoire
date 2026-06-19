import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider } from '@/contexts/AuthContext'
import { useAuth } from '@/contexts/AuthContext'
import { Layout } from '@/pages/Layout'

const Dashboard           = lazy(() => import('@/pages/Dashboard'))
const Fiches              = lazy(() => import('@/pages/Fiches'))
const FicheDetail         = lazy(() => import('@/pages/FicheDetail'))
const Glossaire           = lazy(() => import('@/pages/Glossaire'))
const GlossaireDetail     = lazy(() => import('@/pages/GlossaireDetail'))
const Personnalites       = lazy(() => import('@/pages/Personnalites'))
const PersonnaliteDetail  = lazy(() => import('@/pages/PersonnaliteDetail'))
const Quiz                = lazy(() => import('@/pages/Quiz'))
const Carte               = lazy(() => import('@/pages/Carte'))
const Frise               = lazy(() => import('@/pages/Frise'))
const Methode             = lazy(() => import('@/pages/Methode'))
const Favoris             = lazy(() => import('@/pages/Favoris'))
const Pays                = lazy(() => import('@/pages/Pays'))
const Admin               = lazy(() => import('@/pages/Admin'))
const Landing             = lazy(() => import('@/pages/Landing'))
const Login               = lazy(() => import('@/pages/Login'))
const Register            = lazy(() => import('@/pages/Register'))
const Pricing             = lazy(() => import('@/pages/Pricing'))
const Success             = lazy(() => import('@/pages/Success'))

function HomeRedirect() {
  const { user, loading } = useAuth()
  if (loading) return null
  return user ? <Navigate to="/dashboard" replace /> : <Navigate to="/landing" replace />
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-12 h-12 rounded-full border-4 border-[#D4AF37] border-t-transparent animate-spin mx-auto mb-4" />
        <p className="font-['Playfair_Display'] text-[#8B4513]">Chargement…</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Accueil : landing si non connecté, dashboard si connecté */}
            <Route path="/" element={<HomeRedirect />} />

            {/* Public pages (no layout) */}
            <Route path="/landing" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/success" element={<Success />} />

            {/* App pages (with nav layout) */}
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="fiches" element={<Fiches />} />
              <Route path="fiches/:id" element={<FicheDetail />} />
              <Route path="glossaire" element={<Glossaire />} />
              <Route path="glossaire/:id" element={<GlossaireDetail />} />
              <Route path="personnalites" element={<Personnalites />} />
              <Route path="personnalites/:id" element={<PersonnaliteDetail />} />
              <Route path="quiz" element={<Quiz />} />
              <Route path="carte" element={<Carte />} />
              <Route path="frise" element={<Frise />} />
              <Route path="methode" element={<Methode />} />
              <Route path="favoris" element={<Favoris />} />
              <Route path="pays" element={<Pays />} />
              <Route path="admin" element={<Admin />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  )
}
