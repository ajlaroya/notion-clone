import { create } from "zustand"

type CoverImageStore = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  toggle: () => void
}

export const useCoverImage = create<CoverImageStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))