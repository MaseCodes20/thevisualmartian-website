import { create } from 'zustand'

export const useBookingStore = create((set) => ({
  showModal: false,
  setShowModal: (val) => set({ showModal: val }),
}))

