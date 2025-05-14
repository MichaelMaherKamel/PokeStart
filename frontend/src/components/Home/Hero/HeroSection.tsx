import { A } from '@solidjs/router'
import { createEffect } from 'solid-js'
import { FloatingPokemon } from './FloatingPokemon'
import { ParallaxBackground } from './ParallaxBackground'
import { GameButton } from './GameButton'

export function HeroSection() {
  // Add parallax effect on scroll
  createEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY
      const parallaxElements = document.querySelectorAll('.parallax')
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed')
        element.style.transform = `translateY(${scrollValue * speed}px)`
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        overflow: 'hidden',
        'background-image': 'linear-gradient(to bottom, var(--background-dark), rgba(30, 30, 30, 0.8))',
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
      }}
    >
      {/* Background Elements */}
      <ParallaxBackground />

      {/* Bottom Floating Pokemon */}
      <div
        class='bottom-pokemon-container'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          'z-index': '1',
          bottom: '0',
        }}
      >
        <FloatingPokemon id={6} position='left' className='pokemon-left' />
        <FloatingPokemon id={25} position='center' className='pokemon-center' />
        <FloatingPokemon id={150} position='right' className='pokemon-right' />
      </div>

      {/* Top Floating Pokemon */}
      <div
        class='top-pokemon-container'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          'z-index': '1',
          top: '0',
        }}
      >
        <FloatingPokemon id={94} position='left' style={{ top: '10%', left: '15%' }} className='pokemon-left' />{' '}
        {/* Gengar */}
        <FloatingPokemon
          id={149}
          position='center'
          style={{ top: '5%', left: '50%' }}
          className='pokemon-center'
        />{' '}
        {/* Dragonite */}
        <FloatingPokemon id={3} position='right' style={{ top: '10%', right: '15%' }} className='pokemon-right' />{' '}
        {/* Venusaur */}
      </div>

      {/* Hero Content - Centered */}
      <div
        class='pixel-border animation-pulse'
        style={{
          'max-width': '800px',
          'text-align': 'center',
          'z-index': '2',
          'background-color': 'rgba(0, 0, 0, 0.7)',
          'backdrop-filter': 'blur(5px)',
          padding: '2.5rem',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
        }}
      >
        <h1
          style={{
            'font-size': 'clamp(2rem, 5vw, 3rem)',
            color: 'var(--accent-color)',
            'text-shadow': '3px 3px 0 var(--primary-color)',
            'margin-bottom': '1.5rem',
          }}
        >
          Welcome to PokéStart
        </h1>
        <p
          style={{
            'font-size': 'clamp(1rem, 2vw, 1.2rem)',
            'margin-bottom': '2rem',
          }}
        >
          Your ultimate Pokémon adventure begins here with SolidStart and Go!
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            'justify-content': 'center',
            'flex-wrap': 'wrap',
          }}
        >
          <GameButton href='/pokemons'>Explore Pokémon</GameButton>
          <GameButton href='/about' variant='secondary'>
            Learn More
          </GameButton>
        </div>
      </div>

      {/* CSS for responsive layout */}
      <style>
        {`
          /* Responsive styles for Pokémon visibility */
          @media (max-width: 768px) {
            .pokemon-center {
              display: none;
            }
            
            .floating-pokemon img {
              height: 150px !important;
            }
          }
        `}
      </style>
    </section>
  )
}
