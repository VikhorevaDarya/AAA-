import '@/styles/index.scss'

import { StyleProvider } from '@ant-design/cssinjs'

import { Footer, Header } from './partials'
import { Home } from './pages'
import { Modal } from './components'

const App = () => {
  return (
    <StyleProvider hashPriority='low'>
      <Header />
      <Home />
      <Footer />

      <Modal />
    </StyleProvider>
  )
}

export default App
