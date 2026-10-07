import { useInView } from '../hooks/useInView'
import './ScrollReveal.css'

function ScrollReveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const [ref, isInView] = useInView()

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal${isInView ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}

export default ScrollReveal
