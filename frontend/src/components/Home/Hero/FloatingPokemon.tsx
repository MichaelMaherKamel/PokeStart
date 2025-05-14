import { createSignal, mergeProps, JSX } from 'solid-js'

// Define the props interface
interface FloatingPokemonProps {
  id: number;
  position?: 'left' | 'center' | 'right';
  style?: JSX.CSSProperties;
  className?: string;
}

export function FloatingPokemon(props: FloatingPokemonProps) {
  const merged = mergeProps(
    {
      position: 'center' as const,
      style: {} as JSX.CSSProperties,
      className: '',
    },
    props
  )
 
  const [isHovered, setIsHovered] = createSignal(false)
 
  // Format Pokémon ID with leading zeros
  const formattedId = props.id.toString().padStart(3, '0')
 
  // Get position-specific styles
  const positions = {
    left: { bottom: '15%', left: '15%', transform: 'translateX(-50%)' },
    center: { bottom: '10%', left: '50%', transform: 'translateX(-50%)' },
    right: { bottom: '15%', right: '15%', transform: 'translateX(50%)' },
  }
 
  // Use provided style or default position
  const posStyles =
    merged.style.top || merged.style.bottom 
      ? merged.style 
      : positions[merged.position as keyof typeof positions] || positions.center
 
  return (
    <div
      class={`floating-pokemon ${merged.position} ${merged.className}`}
      style={{
        position: 'absolute',
        ...posStyles,
        'z-index': '10', // Higher z-index to ensure it's above other elements
        animation: `float-${merged.position} 4s infinite ease-in-out`,
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`}
        alt={`Pokemon #${props.id}`}
        style={{
          height: merged.position === 'center' ? '220px' : '180px',
          'max-width': '100%', // Ensure image doesn't overflow container
          filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.4))',
          transform: isHovered() ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
      />
    </div>
  )
}