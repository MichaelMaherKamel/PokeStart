import { A } from '@solidjs/router'

export function GameButton(props) {
  const variant = props.variant || 'primary'

  const baseStyles = {
    display: 'inline-block',
    padding: '0.8rem 1.5rem',
    color: 'var(--text-light)',
    border: 'none',
    'text-decoration': 'none',
    'text-transform': 'uppercase',
    'font-weight': 'bold',
    'font-size': '0.9rem',
    'border-radius': '4px',
    cursor: 'pointer',
    'letter-spacing': '1px',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
    'box-shadow': '3px 3px 0 rgba(0, 0, 0, 0.2)',
  }

  const variants = {
    primary: {
      'background-color': 'var(--primary-color)',
    },
    secondary: {
      'background-color': 'var(--secondary-color)',
    },
    accent: {
      'background-color': 'var(--accent-color)',
      color: 'var(--text-dark)',
    },
  }

  const variantStyles = variants[variant] || variants.primary

  // Combine styles
  const buttonStyles = { ...baseStyles, ...variantStyles, ...props.style }

  // If href is provided, render an A component
  if (props.href) {
    return (
      <A href={props.href} class='btn-game' style={buttonStyles} {...props}>
        {props.children}
      </A>
    )
  }

  // Otherwise render a button
  return (
    <button class='btn-game' style={buttonStyles} onClick={props.onClick} type={props.type || 'button'} {...props}>
      {props.children}
    </button>
  )
}
