import { A } from '@solidjs/router'
import { createSignal, onMount } from 'solid-js'

export default function NotFound() {
  const [isHovered, setIsHovered] = createSignal(false)
  const [isMobile, setIsMobile] = createSignal(false)

  // Check for mobile on mount
  onMount(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Add resize listener
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  })

  // Pokemon that represent confusion/being lost
  const lostPokemonIds = [
    54, // Psyduck (perfect for confusion)
    79, // Slowpoke
    96, // Drowzee
    132, // Ditto
    202, // Wobbuffet
  ]

  // Randomly select one of the confused Pokémon
  const randomPokemonId = lostPokemonIds[Math.floor(Math.random() * lostPokemonIds.length)]
  const pokemonImageId = randomPokemonId.toString().padStart(3, '0')

  return (
    <main class='text-center mx-auto p-4 overflow-hidden'>
      <div
        class='flex flex-col items-center justify-center w-full'
        style={{
          'background-image': 'linear-gradient(to bottom, var(--background-dark), rgba(30, 30, 30, 0.8))',
          'background-size': 'cover',
          'background-position': 'center',
          'background-repeat': 'no-repeat',
          'max-width': '100%',
        }}
      >
        {/* Background Pokeball */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            'background-image':
              'radial-gradient(circle, transparent 0%, transparent 35%, var(--primary-color) 35%, var(--primary-color) 45%, var(--text-dark) 45%, var(--text-dark) 47%, white 47%, white 53%, var(--text-dark) 53%, var(--text-dark) 55%, var(--primary-color) 55%, var(--primary-color) 65%, transparent 65%)',
            'border-radius': '50%',
            opacity: '0.05',
            'z-index': '0',
            'pointer-events': 'none',
          }}
        />

        <div
          class='pixel-border animation-pulse relative z-10 max-w-3xl mx-auto text-center p-6 my-16'
          style={{
            'background-color': 'rgba(0, 0, 0, 0.7)',
            'backdrop-filter': 'blur(5px)',
            width: '90%',
            'max-width': '100%',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            overflow: 'hidden',
          }}
        >
          {/* 404 Title */}
          <h1
            class='max-6-xs text-6xl font-thin uppercase'
            style={{
              color: 'var(--accent-color)',
              'text-shadow': '3px 3px 0 var(--primary-color)',
              'margin-bottom': '0.5rem',
              'line-height': '1',
            }}
          >
            404
          </h1>

          {/* Error Message */}
          <h2
            style={{
              'font-size': 'clamp(1.2rem, 3vw, 2rem)',
              color: 'var(--primary-color)',
              'margin-bottom': '1rem',
              'line-height': '1.2',
            }}
          >
            Wild Page Not Found!
          </h2>

          {/* Pokemon Image */}
          <div
            style={{
              display: 'flex',
              'justify-content': 'center',
              'margin-bottom': '1rem',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonImageId}.png`}
              alt='Confused Pokemon'
              style={{
                height: isMobile() ? '100px' : '120px',
                'max-width': '100%',
                filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.4))',
                transform: isHovered() ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease',
              }}
            />
          </div>

          {/* Error Description */}
          <p
            class='mt-4'
            style={{
              'font-size': 'clamp(0.9rem, 1.5vw, 1.1rem)',
              'margin-bottom': '1.5rem',
              color: 'var(--text-light)',
            }}
          >
            The page you're looking for has fled into the tall grass.
          </p>

          {/* Home Button */}
          <div class='flex justify-center'>
            <A
              href='/'
              class='text-sky-600 hover:underline'
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.2rem',
                'background-color': 'var(--primary-color)',
                color: 'var(--text-light)',
                border: 'none',
                'text-decoration': 'none',
                'font-weight': 'bold',
                'border-radius': '4px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              Return to Home
            </A>
          </div>
        </div>
      </div>
    </main>
  )
}
