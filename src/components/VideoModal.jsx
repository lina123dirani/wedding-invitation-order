import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../i18n/LanguageContext'
import './VideoModal.css'

function VideoModal({ src, title, onClose }) {
  const { t } = useLanguage()
  const closeRef = useRef(null)

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return createPortal(
    <div className="video-modal" onClick={onClose} role="presentation">
      <div
        className="video-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="video-modal__toolbar">
          <p className="video-modal__title">{title}</p>
          <button
            ref={closeRef}
            type="button"
            className="video-modal__close"
            onClick={onClose}
            aria-label={t('featured.close')}
          >
            ×
          </button>
        </div>
        <video
          className="video-modal__player"
          src={src}
          controls
          autoPlay
          playsInline
          controlsList="nofullscreen"
        />
      </div>
    </div>,
    document.body,
  )
}

export default VideoModal
