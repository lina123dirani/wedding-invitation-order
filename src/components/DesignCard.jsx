import { useState } from 'react'
import Button from './Button'
import VideoModal from './VideoModal'
import { useLanguage } from '../i18n/LanguageContext'
import './DesignCard.css'

function DesignCard({ invitation, detailsLabel }) {
  const { language } = useLanguage()
  const [videoOpen, setVideoOpen] = useState(false)
  const name = language === 'ar' ? invitation.nameAr : invitation.nameEn
  const description =
    language === 'ar' ? invitation.descriptionAr : invitation.descriptionEn
  const isVideo = Boolean(invitation.video)

  return (
    <article className="design-card">
      {isVideo ? (
        <button
          type="button"
          className="design-card__preview"
          onClick={() => setVideoOpen(true)}
          aria-label={detailsLabel}
        >
          <img src={invitation.image} alt={name} className="design-card__image" />
        </button>
      ) : (
        <a
          className="design-card__preview"
          href={invitation.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={detailsLabel}
        >
          <img src={invitation.image} alt={name} className="design-card__image" />
        </a>
      )}

      <div className="design-card__body">
        <h3 className="design-card__name">{name}</h3>
        <p className="design-card__desc">{description}</p>
        {isVideo ? (
          <Button variant="ghost" className="design-card__btn" onClick={() => setVideoOpen(true)}>
            {detailsLabel}
          </Button>
        ) : (
          <Button
            variant="ghost"
            className="design-card__btn"
            href={invitation.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {detailsLabel}
          </Button>
        )}
      </div>

      {videoOpen ? (
        <VideoModal
          src={invitation.video}
          title={name}
          onClose={() => setVideoOpen(false)}
        />
      ) : null}
    </article>
  )
}

export default DesignCard
