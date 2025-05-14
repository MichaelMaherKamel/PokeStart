import { A } from '@solidjs/router'
import { For, createSignal } from 'solid-js'
import { TypeBadge } from './TypeBadge'

interface PokemonCardProps {
  id: number;
  name: string;
  types: string[];
  description: string;
}

export function PokemonCard(props: PokemonCardProps) {
  const { id, name, types = [], description } = props;
  const [isHovered, setIsHovered] = createSignal(false)
  const [isPulsing, setIsPulsing] = createSignal(false)

  // Format ID with leading zeros
  const formattedId = id.toString().padStart(3, '0')

  // Get accent color based on primary type
  const getTypeColor = (type: string) => {
    const typeColors = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#FFD700',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC',
    }

    return typeColors[type as keyof typeof typeColors] || '#A8A878'
  }

  const primaryType = types[0] || 'normal'
  const accentColor = getTypeColor(primaryType)

  // Start/stop pulse animation on hover
  const handleMouseEnter = () => {
    setIsHovered(true)
    setIsPulsing(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsPulsing(false)
  }

  return (
    <A
      href={`/pokemons/${id}`}
      style={{
        'text-decoration': 'none',
        display: 'block',
      }}
    >
      <div
        style={{
          position: 'relative',
          'margin-top': '70px',
          'padding-top': '20px',
          'margin-bottom': '20px',
          cursor: 'pointer',
          width: '100%',
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Floating Pokemon image */}
        <div
          style={{
            position: 'absolute',
            top: '-70px',
            left: '50%',
            transform: isHovered() ? 'translateX(-50%) scale(1.05)' : 'translateX(-50%) scale(1)',
            'z-index': '2',
            display: 'flex',
            'justify-content': 'center',
            transition: 'transform 0.3s',
          }}
        >
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedId}.png`}
            alt={name}
            style={{
              width: '130px',
              height: '130px',
              'object-fit': 'contain',

            }}
          />
        </div>

        {/* Circular card body - styled like an opened Pokeball */}
        <div
          style={{
            position: 'relative',
            width: '220px',
            height: '220px',
            'border-radius': '50%',
            overflow: 'hidden',
            'box-shadow': isHovered() ? '0 15px 30px rgba(0, 0, 0, 0.15)' : '0 5px 15px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s, transform 0.3s',
            transform: isHovered() ? 'translateY(-5px)' : 'translateY(0)',
            margin: '0 auto',

          }}
        >
          {/* Pokeball top half design - red portion */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '50%',
              background: 'linear-gradient(to bottom, #FF1A1A 0%, #E60000 100%)',
              'z-index': '0',
            }}
          >
            {/* Light reflection on the red portion */}
            <div
              style={{
                position: 'absolute',
                top: '15px',
                left: '30px',
                width: '40px',
                height: '15px',
                background: 'rgba(255, 255, 255, 0.3)',
                'border-radius': '50%',
                transform: 'rotate(-30deg)',

              }}
            />
          </div>

          {/* Pokeball bottom half - white portion */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              height: '50%',
              background: 'white',
              'z-index': '0',
            }}
          />

          {/* Pokeball divider line with center button */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              width: '100%',
              height: '8px',
              background: '#333',
              transform: 'translateY(-50%)',
              'z-index': '1',

            }}
          >
            {/* Interactive center button */}
            <div
              class={isPulsing() ? 'pulsing-button' : ''}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '36px',
                height: '36px',
                background: 'white',
                border: '5px solid #333',
                'border-radius': '50%',
                'z-index': '2',
                display: 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                transition: 'all 0.3s ease',
                overflow: 'hidden',

              }}
            >
              {/* Tap indicator - shows on hover */}
              <div
                style={{
                  opacity: isHovered() ? '1' : '0',
                  transition: 'opacity 0.3s',
                  position: 'relative',
                }}
              >
                {/* Create a minimalist arrow icon */}
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    'border-right': `2px solid ${accentColor}`,
                    'border-bottom': `2px solid ${accentColor}`,
                    transform: 'rotate(45deg)',

                  }}
                />
              </div>

              {/* Inner circle with Pokémon's type color */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) scale(0)',
                  width: '20px',
                  height: '20px',
                  'background-color': accentColor,
                  'border-radius': '50%',
                  opacity: '0',
                  transition: 'transform 0.3s, opacity 0.3s',
                  ...(isHovered() && {
                    transform: 'translate(-50%, -50%) scale(1)',
                    opacity: '0.7',
                  }),

                }}
              />
            </div>
          </div>

          {/* Card content area */}
          <div
            style={{
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '100%',
              height: '50%',
              padding: '1.8rem 1rem 1rem',
              color: '#333',
              'z-index': '1',
              display: 'flex',
              'flex-direction': 'column',
              'justify-content': 'center',
              'text-align': 'center',

            }}
          >
            {/* Pokemon Name */}
            <h3
              style={{
                margin: '0 0 0.3rem',
                'font-size': '1.1rem',
                color: accentColor,
                'font-weight': 'bold',
    
              }}
            >
              {name}
            </h3>

            {/* Types */}
            <div
              style={{
                display: 'flex',
                'justify-content': 'center',
                gap: '0.4rem',
                'margin-bottom': '0.5rem',

              }}
            >
              <For each={types}>{(type) => <TypeBadge type={type} />}</For>
            </div>

            {/* Description - shortened for space */}
            <p
              style={{
                'font-size': '0.75rem',
                'line-height': '1.3',
                margin: '0',
                opacity: '0.9',
                'max-height': '3.9em',
                overflow: 'hidden',
                'text-overflow': 'ellipsis',
                display: '-webkit-box',
                '-webkit-line-clamp': '3',
                '-webkit-box-orient': 'vertical',
    
              }}
            >
              {description}
            </p>
          </div>
        </div>

        {/* CSS for the pulsing animation */}
        <style>{`
          .pulsing-button {
            animation: pulse 1.5s infinite;
          }
          
          @keyframes pulse {
            0% {
              box-shadow: 0 0 0 0 rgba(${accentColor.replace(/[^\d,]/g, '')}, 0.7);
              transform: translate(-50%, -50%) scale(1);
            }
            
            70% {
              box-shadow: 0 0 0 10px rgba(${accentColor.replace(/[^\d,]/g, '')}, 0);
              transform: translate(-50%, -50%) scale(1.1);
            }
            
            100% {
              box-shadow: 0 0 0 0 rgba(${accentColor.replace(/[^\d,]/g, '')}, 0);
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}</style>
      </div>
    </A>
  )
}