import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAdminStore = create(
  persist(
    (set, get) => ({
      customPersonalities: [],
      customTerms: [],
      customFiches: [],
      customQuestions: [],
      customFriseEvents: [],

      addPersonality: (p) => set((s) => ({
        customPersonalities: [...s.customPersonalities, { ...p, id: 'custom_p_' + Date.now() }],
      })),
      addTerm: (t) => set((s) => ({
        customTerms: [...s.customTerms, { ...t, id: 'custom_t_' + Date.now() }],
      })),
      addFiche: (f) => set((s) => ({
        customFiches: [...s.customFiches, { ...f, id: 'custom_f_' + Date.now() }],
      })),
      addQuestion: (q) => set((s) => ({
        customQuestions: [...s.customQuestions, { ...q, id: 'custom_q_' + Date.now() }],
      })),
      addFriseEvent: (e) => set((s) => ({
        customFriseEvents: [...s.customFriseEvents, { ...e, id: 'custom_e_' + Date.now() }],
      })),

      deletePersonality: (id) => set((s) => ({ customPersonalities: s.customPersonalities.filter((x) => x.id !== id) })),
      deleteTerm: (id) => set((s) => ({ customTerms: s.customTerms.filter((x) => x.id !== id) })),
      deleteFiche: (id) => set((s) => ({ customFiches: s.customFiches.filter((x) => x.id !== id) })),
      deleteQuestion: (id) => set((s) => ({ customQuestions: s.customQuestions.filter((x) => x.id !== id) })),
      deleteFriseEvent: (id) => set((s) => ({ customFriseEvents: s.customFriseEvents.filter((x) => x.id !== id) })),
    }),
    { name: 'admin-store' }
  )
)
