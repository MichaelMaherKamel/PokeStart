import { Component, Suspense, ErrorBoundary, lazy } from 'solid-js'
import { useParams, createAsync } from '@solidjs/router'
import { fetchPokemonById, Pokemon } from '~/lib/pokemon'
import PokemonDetailsSkeleton from '~/components/PokemonDetailsSkeleton'

// Lazy load the PokemonDetails component
const PokemonDetails = lazy(() => import('~/components/PokemonDetails'))

const PokemonId: Component = () => {
  const params = useParams<{ pokemonId: string }>()
  
  // Using createAsync instead of createResource
  const pokemon = createAsync(() => fetchPokemonById(parseInt(params.pokemonId)))
 
  return (
    <div class='p-4 max-w-4xl mx-auto h-90dvh'>
      <h2 class='text-2xl font-bold mb-4 text-white'>Pokemon Details</h2>
      <ErrorBoundary fallback={(err) => (
        <div class='p-4 mb-6 bg-red-900 text-red-100 rounded-md'>Error: {err.toString()}</div>
      )}>
        {/* Using nested Suspense for both component loading and data loading */}
        <Suspense fallback={<PokemonDetailsSkeleton />}>
          {/* The PokemonDetails component will only render when data is ready */}
          {pokemon() !== undefined && <PokemonDetails pokemon={pokemon() as Pokemon} />}
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default PokemonId