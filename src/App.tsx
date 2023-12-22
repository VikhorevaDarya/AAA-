import '@/styles/index.scss'

import { useMemo } from 'react'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import { createThemeConfig, px2rem } from './themes'

import themeSelector from './store/themes/selectors'
import { Home } from './pages'

const App = () => {
  const themeName = themeSelector.use.themeName()

  const themeConfig = useMemo(() => createThemeConfig(themeName), [themeName])

  return (
    <ConfigProvider theme={themeConfig}>
      <StyleProvider transformers={[px2rem]} hashPriority='low'>
        <Home />
      </StyleProvider>
    </ConfigProvider>
  )
}

export default App
