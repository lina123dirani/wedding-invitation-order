import { useEffect, useState } from 'react'
import Button from './Button'
import LanguageSwitcher from './LanguageSwitcher'
import { useLanguage } from '../i18n/LanguageContext'
import logo from '../assets/logo.png'
import './Navbar.css'

function Navbar() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 18)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" onClick={closeMenu}>
          <img src={logo} alt={t('brand')} className="navbar__logo" />
        </a>

        <nav className="navbar__links" aria-label="Primary">
          <a href="#top">{t('nav.home')}</a>
          <a href="#designs">{t('nav.designs')}</a>
          <a href="#how-it-works">{t('nav.howItWorks')}</a>
        </nav>

        <div className="navbar__actions">
          <LanguageSwitcher />
          <Button href="#cta" className="navbar__cta btn--full-mobile">
            {t('nav.cta')}
          </Button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`navbar__mobile${menuOpen ? ' is-open' : ''}`}
      >
        <nav className="navbar__mobile-nav" aria-label="Mobile">
          <a href="#top" onClick={closeMenu}>
            {t('nav.home')}
          </a>
          <a href="#designs" onClick={closeMenu}>
            {t('nav.designs')}
          </a>
          <a href="#how-it-works" onClick={closeMenu}>
            {t('nav.howItWorks')}
          </a>
        </nav>
        <div className="navbar__mobile-footer">
          <LanguageSwitcher />
          <Button href="#cta" className="btn--full-mobile" onClick={closeMenu}>
            {t('nav.cta')}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
