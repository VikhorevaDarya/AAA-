import '@/styles/index.scss'

import { StyleProvider } from '@ant-design/cssinjs'

import { Footer, Header } from './partials'
import { Home } from './pages'

const App = () => {
  return (
    <StyleProvider hashPriority='low'>
      <Header />
      <Home />
      <Footer />
    </StyleProvider>
  )
}

export default App
