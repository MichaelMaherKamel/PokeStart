import { A } from '@solidjs/router'

export default function Header() {
  return (
    <header
      class='pixel-border'
      style={{
        'background-color': 'rgba(0, 0, 0, 0.3)',
        'backdrop-filter': 'blur(8px)',
        '-webkit-backdrop-filter': 'blur(8px)',
        'margin-bottom': '2rem',
        position: 'sticky',
        top: '0',
        'z-index': '100',
        'border-top': 'none',
        'border-left': 'none',
        'border-right': 'none',
      }}
    >
      <div
        class='game-container'
        style={{
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
          padding: '0.75rem 0',
        }}
      >
        <A href='/' class='logo' style={{ 'text-decoration': 'none' }}>
          <h1
            style={{
              'font-size': '1.2rem',
              color: 'var(--accent-color)',
              margin: '0',
              'text-shadow': '2px 2px 0 var(--text-dark)',
            }}
          >
            PokéStart
          </h1>
        </A>
      </div>
    </header>
  )
}
