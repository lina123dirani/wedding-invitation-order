import Button from '../Button'
import ScrollReveal from '../ScrollReveal'
import { useLanguage } from '../../i18n/LanguageContext'
import productImage from '../../assets/invitation-product.png'
import { whatsappLink } from '../../utils/whatsapp'
import './Signature.css'

function Signature() {
  const { t } = useLanguage()

  return (
    <section className="signature" aria-labelledby="signature-title">
      <div className="signature__stage">
        <img
          src={productImage}
          alt=""
          className="signature__bg"
          aria-hidden="true"
        />
        <div className="signature__veil" aria-hidden="true" />

        <div className="container signature__panel">
          <ScrollReveal>
            <p className="section-eyebrow signature__eyebrow">{t('signature.eyebrow')}</p>
            <h2 id="signature-title" className="signature__title">
              {t('signature.title')}
            </h2>
            <p className="signature__body">{t('signature.body')}</p>
            <Button
              href={whatsappLink(t('whatsapp.message'))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn--glow btn--full-mobile"
            >
              {t('signature.cta')}
            </Button>
          </ScrollReveal>
        </div>

        <figure className="signature__portrait">
          <img
            src={productImage}
            alt={t('signature.imageAlt')}
            className="signature__portrait-img"
            width={640}
            height={800}
          />
        </figure>
      </div>
    </section>
  )
}

export default Signature
