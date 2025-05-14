import { A } from "@solidjs/router";

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
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <A
            href='https://github.com/MichaelMaherKamel/PokeStart'
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
          </A>
        </div>
      </div>
    </footer>
  )
}
