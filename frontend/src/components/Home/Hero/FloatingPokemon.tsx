import { createSignal, mergeProps } from 'solid-js'

export function FloatingPokemon(props) {
  const merged = mergeProps(
    {
      position: 'center',
      style: {},
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
    merged.style.top || merged.style.bottom ? merged.style : positions[merged.position] || positions.center

  return (
    <div
      class={`floating-pokemon ${merged.position} ${merged.className}`}
      style={{
        position: 'absolute',
        ...posStyles,
        'z-index': '1',
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
          filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.4))',
          transform: isHovered() ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.3s ease',
        }}
      />
    </div>
  )
}
