import { create } from 'zustand'

const useStore = create((set) => ({
   associations: [],
   setAssociations: (associations) => set({ associations })
}))

export default useStore;