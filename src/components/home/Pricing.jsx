import ScrollReveal from '../ScrollReveal'
import { useLanguage } from '../../i18n/LanguageContext'
import './Pricing.css'

function Pricing() {
  const { t } = useLanguage()
  const items = t('pricing.items')

  return (
    <section id="pricing" className="section pricing" aria-labelledby="pricing-title">
      <div className="container">
        <ScrollReveal className="section-header">
          <p className="section-eyebrow">{t('pricing.eyebrow')}</p>
          <h2 id="pricing-title" className="section-title">
            {t('pricing.title')}
          </h2>
          <p className="section-lead">{t('pricing.lead')}</p>
        </ScrollReveal>

        <div className="pricing__grid">
          {items.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 80} className="pricing__card">
              <h3 className="pricing__name">{item.name}</h3>
              <p className="pricing__price">{item.price}</p>
              <p className="pricing__detail">{item.detail}</p>
            </ScrollReveal>
          ))}
        </div>

        <p className="pricing__note">{t('pricing.note')}</p>
      </div>
    </section>
  )
}

export default Pricing
