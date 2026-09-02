import { createContext, useContext, useEffect } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

// English-only site.
const lang = 'en'

export function LanguageProvider({ children }) {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
