import { A } from '@solidjs/router'
import { createEffect } from 'solid-js'
import { FloatingPokemon } from './FloatingPokemon'
import { ParallaxBackground } from './ParallaxBackground'

export function HeroSection() {
  // Add parallax effect on scroll
  createEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY
      const parallaxElements = document.querySelectorAll('.parallax')
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed')
        // Fix: Handle null and convert to number
        if (speed !== null) {
          const speedValue = parseFloat(speed)
          // Need to cast element as HTMLElement to access style property
          const htmlElement = element as HTMLElement
          htmlElement.style.transform = `translateY(${scrollValue * speedValue}px)`
        }
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

      {/* Hero Content - Centered - Now with lower z-index */}
      <div
        class='pixel-border animation-pulse'
        style={{
          'max-width': '800px',
          'text-align': 'center',
          'z-index': '2', // Keep z-index lower than the Pokémon
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
      </div>

      {/* Bottom Floating Pokemon - Only 2 Pokemon (including Pikachu) */}
      <div
        class='bottom-pokemon-container'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          'z-index': '3', // Higher than the welcome message
          bottom: '0',
        }}
      >
        <FloatingPokemon id={6} position='left' className='pokemon-left' /> {/* Charizard */}
        <FloatingPokemon id={25} position='right' className='pokemon-right' /> {/* Pikachu */}
      </div>

      {/* Top Floating Pokemon - Only 2 Pokemon */}
      <div
        class='top-pokemon-container'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          'z-index': '3', // Higher than the welcome message
          top: '0',
        }}
      >
        <FloatingPokemon id={94} position='left' style={{ top: '10%', left: '20%' }} className='pokemon-left' /> {/* Gengar */}
        <FloatingPokemon id={149} position='right' style={{ top: '10%', right: '20%' }} className='pokemon-right' /> {/* Dragonite */}
      </div>

      {/* CSS for responsive layout */}
      <style>
        {`
          /* Responsive styles for Pokémon visibility and sizing */
          .floating-pokemon {
            pointer-events: auto; /* Re-enable pointer events for Pokémon */
          }
          
          /* Position adjustments for 2 Pokémon per row */
          .pokemon-left {
            left: 20% !important;
          }
          
          .pokemon-right {
            right: 20% !important;
          }
          
          @media (max-width: 1200px) {
            .floating-pokemon img {
              height: 150px !important;
            }
          }
          
          @media (max-width: 768px) {
            .floating-pokemon img {
              height: 120px !important;
            }
            
            .pokemon-left {
              left: 15% !important;
            }
            
            .pokemon-right {
              right: 15% !important;
            }
          }
          
          @media (max-width: 480px) {
            .floating-pokemon img {
              height: 100px !important;
            }
            
            .pokemon-left {
              left: 5% !important;
            }
            
            .pokemon-right {
              right: 5% !important;
            }
          }
          
          /* Animation keyframes for floating effect */
          @keyframes float-left {
            0%, 100% { transform: translateY(0) rotateZ(-2deg); }
            50% { transform: translateY(-15px) rotateZ(2deg); }
          }
          
          @keyframes float-right {
            0%, 100% { transform: translateY(0) rotateZ(2deg); }
            50% { transform: translateY(-15px) rotateZ(-2deg); }
          }
        `}
      </style>
    </section>
  )
}
