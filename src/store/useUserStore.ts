import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  userId: number | null;
  isLoggedIn: boolean;
  login: (userId: number) => void;
  logout: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      userId: 1, // TODO: null로 변경
      isLoggedIn: true, // TODO: false로 변경

      login: userId => {
        set({ userId, isLoggedIn: true });
      },

      logout: () => {
        set({ userId: null, isLoggedIn: false });
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),

      partialize: state => ({
        userId: state.userId,
        isLoggedIn: state.isLoggedIn,
      }),

      onRehydrateStorage: state => {
        if (state && !state.userId) {
          state.isLoggedIn = false;
        }
      },
    }
  )
);
