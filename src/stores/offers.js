import create from 'zustand';

export const useStore = create((set) => ({
  list: [],
  setList: (list) =>
    set((state) => ({
      ...state,
      list,
    })),
}));
