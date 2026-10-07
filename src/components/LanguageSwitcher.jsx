import { useLanguage } from '../i18n/LanguageContext'
import './LanguageSwitcher.css'

function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="lang-switcher" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-switcher__btn${language === 'ar' ? ' is-active' : ''}`}
        onClick={() => setLanguage('ar')}
        aria-pressed={language === 'ar'}
      >
        {t('lang.ar')}
      </button>
      <span className="lang-switcher__sep" aria-hidden="true">
        |
      </span>
      <button
        type="button"
        className={`lang-switcher__btn${language === 'en' ? ' is-active' : ''}`}
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
      >
        {t('lang.en')}
      </button>
    </div>
  )
}

export default LanguageSwitcher
