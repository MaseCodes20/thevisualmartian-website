import { create } from 'zustand'
import type { BookingState } from '../types'

export const useBookingStore = create<BookingState>((set) => ({
  showModal: false,
  
  setShowModal: (val) => set({ showModal: val }),
}))
