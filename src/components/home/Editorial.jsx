import ScrollReveal from '../ScrollReveal'
import { useLanguage } from '../../i18n/LanguageContext'
import './Editorial.css'

function Editorial() {
  const { t } = useLanguage()

  return (
    <section className="section editorial" aria-labelledby="editorial-title">
      <ScrollReveal className="container editorial__inner">
        <div className="editorial__rule" aria-hidden="true" />
        <p className="section-eyebrow">{t('editorial.eyebrow')}</p>
        <h2 id="editorial-title" className="section-title editorial__title">
          {t('editorial.title')}
        </h2>
        <p className="editorial__body">{t('editorial.body')}</p>
      </ScrollReveal>
    </section>
  )
}

export default Editorial
