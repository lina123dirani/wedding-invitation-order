import { useState } from 'react'
import DesignCard from '../DesignCard'
import ScrollReveal from '../ScrollReveal'
import { heirloomExamples, momentExamples } from '../../data/invitations'
import { useLanguage } from '../../i18n/LanguageContext'
import './FeaturedDesigns.css'

function FeaturedDesigns() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('heirloom')
  const examples = activeTab === 'heirloom' ? heirloomExamples : momentExamples
  const activeCopy =
    activeTab === 'heirloom' ? t('featured.heirloom') : t('featured.moment')

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

        <div className="featured-tabs" role="tablist" aria-label={t('featured.title')}>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'heirloom'}
            className={`featured-tabs__btn${activeTab === 'heirloom' ? ' is-active' : ''}`}
            onClick={() => setActiveTab('heirloom')}
          >
            <span className="featured-tabs__name">{t('featured.heirloom.title')}</span>
            <span className="featured-tabs__sub">{t('featured.heirloom.subtitle')}</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'moment'}
            className={`featured-tabs__btn${activeTab === 'moment' ? ' is-active' : ''}`}
            onClick={() => setActiveTab('moment')}
          >
            <span className="featured-tabs__name">{t('featured.moment.title')}</span>
            <span className="featured-tabs__sub">{t('featured.moment.subtitle')}</span>
          </button>
        </div>

        <ScrollReveal className="featured-tabs__intro" key={activeTab}>
          <p>{activeCopy.body}</p>
        </ScrollReveal>

        <div className="featured-designs__grid" key={`${activeTab}-grid`}>
          {examples.map((invitation, index) => (
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
