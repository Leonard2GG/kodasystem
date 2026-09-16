import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import favicon from './assets/favicon.svg'

const faviconLink = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
if (faviconLink) faviconLink.href = favicon

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)