// src/components/PokemonList.tsx
import { For, Show, ErrorBoundary } from 'solid-js'
import { PokemonCard } from './Home/Featured/Pokemoncard'
import { usePokemonList } from '~/lib/pokemon'
import type { Pokemon } from '~/lib/pokemon' // Import the Pokemon interface

export default function PokemonList() {
  const pokemonQuery = usePokemonList()
  return (
    <div class='max-w-7xl mx-auto px-4 py-8 text-white'>
      <h1 class='text-3xl font-bold text-center mb-8'>Pokémon Collection</h1>
      <ErrorBoundary
        fallback={(err) => <div class='p-4 mb-6 bg-red-900 text-red-100 rounded-md'>Error: {err.toString()}</div>}
      >
        <Show
          when={!pokemonQuery.isPending}
          fallback={<div class='flex justify-center items-center h-48 text-lg text-gray-300'>Loading Pokémon...</div>}
        >
          <Show
            when={!pokemonQuery.isError}
            fallback={<div class='p-4 mb-6 bg-red-900 text-red-100 rounded-md'>Error: {pokemonQuery.error?.message}</div>}
          >
            <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center'>
              <For each={pokemonQuery.data}>
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
          </Show>
        </Show>
      </ErrorBoundary>
    </div>
  )
}