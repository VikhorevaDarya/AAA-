import { create } from 'zustand'
import { createThemeSlice } from './slices'
import { ThemeSlice } from './types'

const useThemeStore = create<ThemeSlice>()((...a) => ({
  ...createThemeSlice(...a),
}))

const html = document.documentElement as HTMLElement

useThemeStore.subscribe((state) => {
  const themeName = state.themeName

  html.setAttribute('class', `theme-${themeName}`)
})

export default useThemeStore
