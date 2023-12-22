import colors from 'styles/export.module.scss'
import { ThemeEnum } from '@/store/themes/types'

export const getCSSRootValue = <T>(variable: string): T => {
  return getComputedStyle(document.documentElement).getPropertyValue(
    variable,
  ) as T
}

export const getCSSColor = (colorName: string) => {
  return colors[colorName]
}

export const getCSSThemeColor = (themeName: ThemeEnum, colorName: string) => {
  return getCSSColor(`${themeName}-${colorName}`)
}
