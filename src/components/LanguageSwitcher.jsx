import { useLanguage } from '../i18n/LanguageContext'
import './LanguageSwitcher.css'

const OPTIONS = ['ar', 'en', 'sv']

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      {OPTIONS.map((code, index) => (
        <span key={code} className="lang-switcher__item">
          {index > 0 ? (
            <span className="lang-switcher__sep" aria-hidden="true">
              |
            </span>
          ) : null}
          <button
            type="button"
            className={`lang-switcher__btn${language === code ? ' is-active' : ''}`}
            onClick={() => setLanguage(code)}
            aria-pressed={language === code}
          >
            {t(`lang.${code}`)}
          </button>
        </span>
      ))}
    </div>
  )
}

export default LanguageSwitcher
