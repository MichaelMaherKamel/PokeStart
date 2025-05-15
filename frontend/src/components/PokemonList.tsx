// src/components/PokemonList.tsx
import { For} from 'solid-js'
import { PokemonCard } from './Home/Featured/Pokemoncard'
import type { Pokemon } from '~/lib/pokemon'

// Define the component props interface
interface PokemonListProps {
  pokemons: Pokemon[] | undefined;
}

export default function PokemonList(props: PokemonListProps) {
  return (
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center'>
      <For each={props.pokemons}>
        {(poke: Pokemon) => (
          <PokemonCard
            id={poke.id}
            name={poke.name}
            types={poke.type.toLowerCase().split('/')}
            description={`Height: ${poke.height / 10}m, Weight: ${poke.weight / 10}kg. A ${
              poke.type
            } type Pokémon.`}
          />
        )}
      </For>
    </div>
  )
}