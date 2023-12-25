import '@/styles/index.scss'

import { StyleProvider } from '@ant-design/cssinjs'

import { Home } from './pages'

const App = () => {
  return (
    <StyleProvider hashPriority='low'>
      <Home />
    </StyleProvider>
  )
}

export default App
