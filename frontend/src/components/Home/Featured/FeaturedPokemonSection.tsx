import { A } from '@solidjs/router'
import { For } from 'solid-js'
import { PokemonCard } from './Pokemoncard'
import { SectionTitle } from './SectionTitle'

export function FeaturedPokemonSection() {
  // Featured Pokémon data
  const featuredPokemon = [
    {
      id: 6,
      name: 'Charizard',
      types: ['fire', 'flying'],
      description: 'Charizard flies around the sky in search of powerful opponents.',
    },
    {
      id: 25,
      name: 'Pikachu',
      types: ['electric'],
      description: "When Pikachu meet, they'll touch their tails together and exchange electricity.",
    },
    {
      id: 150,
      name: 'Mewtwo',
      types: ['psychic'],
      description: 'Mewtwo is a Pokémon created by science. It is a bipedal, humanoid creature.',
    },
  ]

  return (
    <section class='game-container'>
      <SectionTitle>Featured Pokémon</SectionTitle>

      <div
        style={{
          display: 'grid',
          'grid-template-columns': 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          'margin-bottom': '3rem',
        }}
      >
        <For each={featuredPokemon}>
          {(pokemon) => (
            <PokemonCard id={pokemon.id} name={pokemon.name} types={pokemon.types} description={pokemon.description} />
          )}
        </For>
      </div>

      <div style={{ 'text-align': 'center', 'margin-top': '2rem' }}>
        <A href='/pokemons'>View All Pokémon</A>
      </div>
    </section>
  )
}
