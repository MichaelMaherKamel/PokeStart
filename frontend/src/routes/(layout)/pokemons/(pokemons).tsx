// src/routes/Pokemons.tsx
import { Component, Suspense, ErrorBoundary, lazy } from 'solid-js'
import { createAsync } from "@solidjs/router"
import { PokemonSkeleton } from '~/components/PokemonSkeleton'
import { fetchPokemons } from '~/lib/pokemon'

// Lazy load the PokemonList component
const PokemonList = lazy(() => import('~/components/PokemonList'))

const Pokemons: Component = () => {
  // Fix the type issue by providing a wrapper function
  const pokemons = createAsync(() => fetchPokemons())
 
  return (
    <div class='max-w-7xl mx-auto px-4 py-8 text-white'>
      <h1 class='text-3xl font-bold text-center mb-8'>Pokémon Collection</h1>
      <ErrorBoundary fallback={(err) => (
        <div class='p-4 mb-6 bg-red-900 text-red-100 rounded-md'>Error: {err.toString()}</div>
      )}>
        {/* Using Suspense for loading state */}
        <Suspense fallback={<PokemonSkeleton />}>
          {/* The component inside Suspense only renders when data is ready */}
          {/* Call the accessor function to get the actual data */}
          <PokemonList pokemons={pokemons()} />
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default Pokemons