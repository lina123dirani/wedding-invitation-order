import Button from '../Button'
import ScrollReveal from '../ScrollReveal'
import { useLanguage } from '../../i18n/LanguageContext'
import './HomeCta.css'

function HomeCta() {
  const { t } = useLanguage()

  return (
    <section id="cta" className="section home-cta" aria-labelledby="cta-title">
      <ScrollReveal className="container home-cta__inner">
        <h2 id="cta-title" className="home-cta__title">
          {t('cta.title')}
        </h2>
        <Button href="#designs" className="btn--full-mobile btn--glow">
          {t('cta.button')}
        </Button>
      </ScrollReveal>
    </section>
  )
}

export default HomeCta
