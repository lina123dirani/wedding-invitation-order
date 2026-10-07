import Button from '../Button'
import ScrollReveal from '../ScrollReveal'
import { useLanguage } from '../../i18n/LanguageContext'
import { whatsappLink } from '../../utils/whatsapp'
import './HomeCta.css'

function HomeCta() {
  const { t } = useLanguage()

  return (
    <section id="cta" className="section home-cta" aria-labelledby="cta-title">
      <ScrollReveal className="container home-cta__inner">
        <h2 id="cta-title" className="home-cta__title">
          {t('cta.title')}
        </h2>
        <Button
          href={whatsappLink(t('whatsapp.message'))}
          target="_blank"
          rel="noopener noreferrer"
          className="btn--full-mobile btn--glow"
        >
          {t('cta.button')}
        </Button>
      </ScrollReveal>
    </section>
  )
}

export default HomeCta
