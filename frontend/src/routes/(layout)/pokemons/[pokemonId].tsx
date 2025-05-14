// src/routes/pokemonId.tsx
import { useParams } from '@solidjs/router'
import { Component, Show } from 'solid-js'
import { usePokemonDetail } from '~/lib/pokemon'
import PokemonDetails from '~/components/PokemonId'

const PokemonId: Component = () => {
  const params = useParams<{ pokemonId: string }>()
  const id = parseInt(params.pokemonId)
  const pokemonQuery = usePokemonDetail(id)
  
  return (
    <div class='p-4 max-w-4xl mx-auto'>
      <h2 class='text-2xl font-bold mb-4 text-white'>Pokemon Details</h2>
      
      <Show
        when={!pokemonQuery.isPending}
        fallback={<div class='text-center py-8 text-white'>Loading Pokemon...</div>}
      >
        <Show
          when={!pokemonQuery.isError}
          fallback={<div class='text-center text-red-500'>Error: {pokemonQuery.error?.message}</div>}
        >
          <Show
            when={pokemonQuery.data}
            fallback={<div class='text-center text-red-500'>Pokemon not found</div>}
          >
            <PokemonDetails pokemon={pokemonQuery.data!} />
          </Show>
        </Show>
      </Show>
    </div>
  )
}

export default PokemonId