import ScrollReveal from '../ScrollReveal'
import { useLanguage } from '../../i18n/LanguageContext'
import './HowItWorks.css'

function HowItWorks() {
  const { t } = useLanguage()
  const steps = t('how.steps')

  return (
    <section
      id="how-it-works"
      className="section how-it-works"
      aria-labelledby="how-title"
    >
      <div className="container">
        <ScrollReveal className="section-header">
          <p className="section-eyebrow">{t('how.eyebrow')}</p>
          <h2 id="how-title" className="section-title">
            {t('how.title')}
          </h2>
          <p className="section-lead">{t('how.lead')}</p>
        </ScrollReveal>

        <ol className="how-it-works__list">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} as="li" delay={index * 110} className="how-it-works__item">
              <span className="how-it-works__number" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="how-it-works__step-title">{step.title}</h3>
              <p className="how-it-works__desc">{step.description}</p>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default HowItWorks
