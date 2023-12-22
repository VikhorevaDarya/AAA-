import ReactDOM from 'react-dom/client'
import App from '@/App'

import 'virtual:svg-icons-register'

export const HTMLRoot = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(HTMLRoot).render(<App />)
