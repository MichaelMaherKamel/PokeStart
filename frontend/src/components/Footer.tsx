import { A } from '@solidjs/router'

export default function Footer() {
  return (
    <footer
      class='pixel-border'
      style={{
        'background-color': 'rgba(0, 0, 0, 0.3)',
        'backdrop-filter': 'blur(8px)',
        '-webkit-backdrop-filter': 'blur(8px)',
        'margin-top': '2rem',
        padding: '1.5rem 0',
        'border-bottom': 'none',
        'border-left': 'none',
        'border-right': 'none',
      }}
    >
      <div
        class='game-container'
        style={{
          display: 'flex',
          'flex-direction': 'column',
          'align-items': 'center',
          'justify-content': 'center',
          gap: '1rem',
        }}
      >
        <div style={{ color: 'var(--text-light)', 'font-size': '0.9rem' }}>Crafted with ❤️</div>

        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a
            href='https://github.com/yourusername/pokestart'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'var(--text-light)', 'font-size': '1.5rem' }}
            aria-label='GitHub Repository'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
            </svg>
          </a>

          <a
            href='https://www.linkedin.com/in/michael-maher-216b13108/'
            target='_blank'
            rel='noopener noreferrer'
            style={{ color: 'var(--text-light)', 'font-size': '1.5rem' }}
            aria-label='LinkedIn Profile'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect x='2' y='9' width='4' height='12'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
