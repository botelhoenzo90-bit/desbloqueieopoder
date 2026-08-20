import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  name: string;
  points: number;
}

interface JourneyState {
  user: User | null;
  completedDays: number[];
  quizAnswers: Record<string, number[]>;
  points: number;
  unlockedMetaphors: Record<string, string>;
  
  // Actions
  login: (name: string) => void;
  addPoints: (amount: number) => void;
  completeDay: (dayId: number) => void;
  resetJourney: () => void;
}

export const useJourneyStore = create<JourneyState>()(
  persist(
    (set) => ({
      user: null,
      completedDays: [],
      quizAnswers: {},
      points: 0,
      unlockedMetaphors: {},

      login: (name) => set({ user: { name, points: 0 } }),
      
      addPoints: (amount) => set((state) => ({ 
        points: state.points + amount,
        user: state.user ? { ...state.user, points: state.user.points + amount } : null
      })),
      
      completeDay: (dayId) => set((state) => ({
        completedDays: state.completedDays.includes(dayId) 
          ? state.completedDays 
          : [...state.completedDays, dayId]
      })),
      
      resetJourney: () => set({
        user: null,
        completedDays: [],
        quizAnswers: {},
        points: 0,
        unlockedMetaphors: {}
      }),
    }),
    {
      name: 'mind-power-journey',
    }
  )
);
