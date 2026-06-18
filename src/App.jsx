import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/pages/Layout'

const Dashboard     = lazy(() => import('@/pages/Dashboard'))
const Fiches        = lazy(() => import('@/pages/Fiches'))
const FicheDetail   = lazy(() => import('@/pages/FicheDetail'))
const Glossaire       = lazy(() => import('@/pages/Glossaire'))
const GlossaireDetail = lazy(() => import('@/pages/GlossaireDetail'))
const Personnalites       = lazy(() => import('@/pages/Personnalites'))
const PersonnaliteDetail  = lazy(() => import('@/pages/PersonnaliteDetail'))
const Quiz          = lazy(() => import('@/pages/Quiz'))
const Carte         = lazy(() => import('@/pages/Carte'))
const Frise         = lazy(() => import('@/pages/Frise'))
const Methode       = lazy(() => import('@/pages/Methode'))
const Favoris       = lazy(() => import('@/pages/Favoris'))
const Pays          = lazy(() => import('@/pages/Pays'))
const Admin         = lazy(() => import('@/pages/Admin'))

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
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
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
  )
}
