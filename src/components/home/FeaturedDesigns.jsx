import DesignCard from '../DesignCard'
import ScrollReveal from '../ScrollReveal'
import { invitations } from '../../data/invitations'
import { useLanguage } from '../../i18n/LanguageContext'
import './FeaturedDesigns.css'

function FeaturedDesigns() {
  const { t } = useLanguage()

  return (
    <section
      id="designs"
      className="section featured-designs"
      aria-labelledby="featured-title"
    >
      <div className="container">
        <ScrollReveal className="section-header">
          <p className="section-eyebrow">{t('featured.eyebrow')}</p>
          <h2 id="featured-title" className="section-title">
            {t('featured.title')}
          </h2>
          <p className="section-lead">{t('featured.lead')}</p>
        </ScrollReveal>

        <div className="featured-designs__grid">
          {invitations.map((invitation, index) => (
            <ScrollReveal key={invitation.id} delay={index * 90}>
              <DesignCard
                invitation={invitation}
                detailsLabel={t('featured.explore')}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedDesigns
