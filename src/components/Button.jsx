import './Button.css'

function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  type = 'button',
  ...props
}) {
  const classes = `btn btn--${variant}${className ? ` ${className}` : ''}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
