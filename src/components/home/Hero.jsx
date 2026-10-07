import Button from '../Button'
import { useLanguage } from '../../i18n/LanguageContext'
import productImage from '../../assets/invitation-product.png'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__brand reveal">{t('brand')}</p>
          <h1 id="hero-title" className="hero__title reveal reveal-delay-1">
            {t('hero.title')}
          </h1>
          <p className="hero__subtitle reveal reveal-delay-2">{t('hero.subtitle')}</p>
          <div className="hero__actions reveal reveal-delay-3">
            <Button href="#cta" className="btn--full-mobile btn--glow">
              {t('hero.primaryCta')}
            </Button>
            <Button href="#designs" variant="secondary" className="btn--full-mobile">
              {t('hero.secondaryCta')}
            </Button>
          </div>
        </div>

        <div className="hero__visual reveal reveal-delay-4">
          <div className="hero__visual-glow" aria-hidden="true" />
          <figure className="hero__product">
            <img
              src={productImage}
              alt={t('hero.productAlt')}
              className="hero__product-img"
              width={720}
              height={900}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
