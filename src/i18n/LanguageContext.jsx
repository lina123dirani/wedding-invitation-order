import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from './translations'

const STORAGE_KEY = 'maison-invite-lang'
const LanguageContext = createContext(null)

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'ar'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'ar' || saved === 'en') return saved
  return 'ar'
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage)

  useEffect(() => {
    const root = document.documentElement
    root.lang = language
    root.dir = language === 'ar' ? 'rtl' : 'ltr'
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const value = useMemo(() => {
    function setLanguage(next) {
      if (next !== 'ar' && next !== 'en') return
      setLanguageState(next)
    }

    function t(path) {
      const keys = path.split('.')
      let current = translations[language]
      for (const key of keys) {
        if (current == null) return path
        current = current[key]
      }
      return current ?? path
    }

    return {
      language,
      setLanguage,
      t,
      isRtl: language === 'ar',
      dir: language === 'ar' ? 'rtl' : 'ltr',
    }
  }, [language])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
