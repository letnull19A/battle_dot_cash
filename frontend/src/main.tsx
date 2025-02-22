import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '/node_modules/primeflex/primeflex.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'
import eruda from 'eruda'

if (import.meta.env.MODE === 'development') {
  eruda.init()
}

createRoot(
  document.getElementById('root')!,
).render(<App />)
