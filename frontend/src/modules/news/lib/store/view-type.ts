import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface ViewTypeStore {
  type: "new" | "archived";
  setType: (value: "new" | "archived") => void;
}

export const useViewType = create<ViewTypeStore>()(
  persist(
    (set) => ({
      type: "new",
      setType: (type) => set({ type }),
    }),
    {
      name: "view-type-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
