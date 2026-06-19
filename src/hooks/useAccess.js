import { useAuth } from '@/contexts/AuthContext'
import { allFiches } from '@/data/allData'

// First fiche ID per level — free users can access these
const FREE_FICHE_IDS = (() => {
  const levels = ['6e', '5e', '4e', '3e', '2nde', '1ere', 'Terminale', 'HGGSP']
  const ids = new Set()
  levels.forEach((lvl) => {
    const first = allFiches.find((f) => f.level === lvl)
    if (first) ids.add(first.id)
  })
  return ids
})()

const FREE_PERSONALITIES_LIMIT = 10
const FREE_GLOSSARY_WORDS_VISIBLE = true // mots visibles, contenu caché

export function useAccess() {
  const { isPaid } = useAuth()

  function canAccessFiche(ficheId) {
    if (isPaid) return true
    return FREE_FICHE_IDS.has(ficheId)
  }

  function canAccessPersonnalite(index) {
    if (isPaid) return true
    return index < FREE_PERSONALITIES_LIMIT
  }

  // Glossaire : mots toujours visibles, définition cachée si non payant
  function canReadGlossaire() {
    return isPaid
  }

  // Quiz/flashcards : uniquement sur les fiches débloquées
  function canAccessQuizForFiche(ficheId) {
    return canAccessFiche(ficheId)
  }

  // Méthodo : toujours accessible
  function canAccessMethodo() {
    return true
  }

  return {
    isPaid,
    canAccessFiche,
    canAccessPersonnalite,
    canReadGlossaire,
    canAccessQuizForFiche,
    canAccessMethodo,
    freeFicheIds: FREE_FICHE_IDS,
  }
}
