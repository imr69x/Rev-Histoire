import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAppStore = create(
  persist(
    (set, get) => ({
      // Thème
      darkMode: false,
      toggleDarkMode: () => {
        const next = !get().darkMode
        set({ darkMode: next })
        document.body.classList.toggle('dark', next)
      },

      // Niveau scolaire sélectionné
      selectedLevel: 'all',
      setSelectedLevel: (level) => set({ selectedLevel: level }),

      // Progression utilisateur
      xp: 0,
      addXP: (amount) => set((s) => ({ xp: s.xp + amount })),

      // Quiz — historique des scores
      quizHistory: [],
      addQuizResult: (result) =>
        set((s) => ({ quizHistory: [...s.quizHistory, result] })),

      // Flashcards apprises
      learnedCards: new Set(),
      markCardLearned: (id) =>
        set((s) => ({ learnedCards: new Set([...s.learnedCards, id]) })),

      // Termes du glossaire marqués
      learnedTerms: new Set(),
      markTermLearned: (id) =>
        set((s) => ({ learnedTerms: new Set([...s.learnedTerms, id]) })),

      // Favoris fiches
      favoriteChapters: [],
      toggleFavorite: (id) =>
        set((s) => ({
          favoriteChapters: s.favoriteChapters.includes(id)
            ? s.favoriteChapters.filter((f) => f !== id)
            : [...s.favoriteChapters, id],
        })),

      // Activité (heatmap)
      activity: {},
      recordActivity: () => {
        const today = new Date().toISOString().split('T')[0]
        set((s) => ({
          activity: { ...s.activity, [today]: (s.activity[today] || 0) + 1 },
        }))
      },

      // Streak quotidien
      streak: 0,
      lastActiveDate: null,
      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0]
        const { lastActiveDate, streak } = get()
        if (lastActiveDate === today) return
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
        const newStreak = lastActiveDate === yesterday ? streak + 1 : 1
        set({ streak: newStreak, lastActiveDate: today })
      },

      // Carte — période sélectionnée
      selectedMapPeriod: '1914',
      setSelectedMapPeriod: (p) => set({ selectedMapPeriod: p }),

      // Recherche globale
      searchQuery: '',
      setSearchQuery: (q) => set({ searchQuery: q }),
    }),
    {
      name: 'histoire-revision-store',
      partialize: (s) => ({
        darkMode: s.darkMode,
        selectedLevel: s.selectedLevel,
        xp: s.xp,
        quizHistory: s.quizHistory,
        learnedCards: [...s.learnedCards],
        learnedTerms: [...s.learnedTerms],
        favoriteChapters: s.favoriteChapters,
        activity: s.activity,
        streak: s.streak,
        lastActiveDate: s.lastActiveDate,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.learnedCards = new Set(state.learnedCards || [])
          state.learnedTerms = new Set(state.learnedTerms || [])
          if (state.darkMode) document.body.classList.add('dark')
        }
      },
    }
  )
)
