import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/jetbrains-mono'
import App from './App.tsx'
import './index.css'
import './motion.css'
import PreferencesProvider from './preferences/PreferencesProvider.tsx'
import { alignUrlWithPreferredLang } from './preferences/preferredLang.ts'
import { Analytics } from "@vercel/analytics/react"

// Before the first render, so the router and the analytics see the final address.
alignUrlWithPreferredLang()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
    <Analytics />
  </StrictMode>,
)
