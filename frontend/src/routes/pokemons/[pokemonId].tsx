import { useParams } from '@solidjs/router'
import { Component, createResource, Suspense, Show } from 'solid-js'
import { Pokemon, getPokemonById } from '~/lib/pokemon'
import PokemonDetails from '~/components/PokemonId'

const PokemonId: Component = () => {
  const params = useParams<{ pokemonId: string }>()
  const [pokemon] = createResource<Pokemon, number>(() => parseInt(params.pokemonId), getPokemonById)

  console.log(pokemon())

  return (
    <div class='p-4 max-w-4xl mx-auto'>
      <h2 class='text-2xl font-bold mb-4'>Pokemon Details</h2>
      <Suspense fallback={<div class='text-center py-8'>Loading Pokemon...</div>}>
        <Show when={pokemon} fallback={<div class='text-center text-red-500'>Pokemon not found</div>}>
          <PokemonDetails pokemon={pokemon} />
        </Show>
      </Suspense>
    </div>
  )
}

export default PokemonId
