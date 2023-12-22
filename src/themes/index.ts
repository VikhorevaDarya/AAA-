import type { ThemeConfig } from 'antd'
import { px2remTransformer } from '@ant-design/cssinjs'
import { ThemeEnum } from '@/store/themes/types'
import { getCSSRootValue, getCSSThemeColor } from './helpers'
import * as components from './components'

const px2rem = px2remTransformer({
  rootValue: 14, // 14px = 1rem; @default 16
})

const createThemeConfig = (themeName: ThemeEnum): ThemeConfig => {
  return {
    components,
    token: {
      fontFamily: getCSSRootValue('--font-family-default'),
      fontSize: parseFloat(getCSSRootValue('--font-size-default')),
      colorBgLayout: getCSSThemeColor(themeName, 'main-bg'),
      colorText: getCSSThemeColor(themeName, 'text-color'),
    },
  }
}

export { px2rem, createThemeConfig }
