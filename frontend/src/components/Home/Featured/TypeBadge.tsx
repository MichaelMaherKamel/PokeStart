export function TypeBadge({ type }) {
  // Type color mapping
  const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
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

  const backgroundColor = typeColors[type] || typeColors.normal

  return (
    <span
      style={{
        'background-color': backgroundColor,
        color: '#fff',
        padding: '0.3rem 0.8rem',
        'border-radius': '16px',
        'font-size': '0.75rem',
        'font-weight': 'bold',
        'text-transform': 'uppercase',
        'letter-spacing': '0.5px',
      }}
    >
      {type}
    </span>
  )
}
