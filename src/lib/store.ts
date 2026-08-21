import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  name: string;
  password?: string;
  points: number;
}

interface JourneyState {
  user: User | null;
  completedDays: number[];
  quizAnswers: Record<string, number[]>;
  points: number;
  unlockedMetaphors: Record<string, {
    date: string;
    text: string;
    reflection: string;
    exercise: string;
    mission: string;
  }>;
  completedMissions: number[];
  
  // Actions
  login: (name: string, password?: string) => void;
  addPoints: (amount: number) => void;
  completeDay: (dayId: number) => void;
  completeMission: (dayId: number) => void;
  saveMetaphor: (date: string, data: any) => void;
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
      completedMissions: [],

      login: (name, password) => set({ user: { name, password, points: 0 } }),
      
      addPoints: (amount) => set((state) => ({ 
        points: state.points + amount,
        user: state.user ? { ...state.user, points: state.user.points + amount } : null
      })),
      
      completeDay: (dayId) => set((state) => ({
        completedDays: state.completedDays.includes(dayId) 
          ? state.completedDays 
          : [...state.completedDays, dayId]
      })),

      completeMission: (dayId) => set((state) => ({
        completedMissions: state.completedMissions.includes(dayId)
          ? state.completedMissions
          : [...state.completedMissions, dayId]
      })),

      saveMetaphor: (date, data) => set((state) => ({
        unlockedMetaphors: {
          ...state.unlockedMetaphors,
          [date]: data
        }
      })),
      
      resetJourney: () => set({
        user: null,
        completedDays: [],
        quizAnswers: {},
        points: 0,
        unlockedMetaphors: {},
        completedMissions: []
      }),
    }),
    {
      name: 'mind-power-journey-v2',
    }
  )
);
