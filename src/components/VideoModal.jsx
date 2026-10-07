import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './VideoModal.css'

function VideoModal({ src, title, onClose }) {
  const { t } = useLanguage()

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="video-modal" onClick={onClose}>
      <div
        className="video-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="video-modal__close"
          onClick={onClose}
          aria-label={t('featured.close')}
        >
          ×
        </button>
        <video className="video-modal__player" src={src} controls autoPlay playsInline />
      </div>
    </div>
  )
}

export default VideoModal
