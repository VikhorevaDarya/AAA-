import { create, StateCreator } from 'zustand'
import { ThemeEnum } from './types'

interface ThemeSlice {
  themeName: ThemeEnum
  setTheme: (themeName: ThemeEnum) => void
}

const DEFAULT_THEME = import.meta.env.VITE_THEME_DEFAULT

export const createThemeSlice: StateCreator<ThemeSlice> = (set) => ({
  themeName: DEFAULT_THEME,
  setTheme: (themeName) => {
    set(() => ({ themeName }))
  },
})
