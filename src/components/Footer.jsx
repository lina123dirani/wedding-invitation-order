import { useLanguage } from '../i18n/LanguageContext'
import logo from '../assets/logo.png'
import './Footer.css'

function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand-block">
          <a href="#top" className="site-footer__brand">
            <img src={logo} alt={t('brand')} className="site-footer__logo" />
          </a>
          <p className="site-footer__tagline">{t('footer.tagline')}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer">
          <a href="#top">{t('footer.home')}</a>
          <a href="#designs">{t('footer.designs')}</a>
          <a href="#how-it-works">{t('footer.howItWorks')}</a>
        </nav>

        <p className="site-footer__copy">
          © {year} {t('brand')} — {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
