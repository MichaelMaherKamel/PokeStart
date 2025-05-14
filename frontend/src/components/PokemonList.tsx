// src/components/PokemonList.tsx
import { createSignal, For, Show, Suspense, ErrorBoundary } from 'solid-js'
import { createAsync } from '@solidjs/router'
import { getAllPokemon, createPokemon } from '~/lib/pokemon'
import { PokemonCard } from './Home/Featured/Pokemoncard'

export default function PokemonList() {
  // State for the form to create a new Pokemon
  const [newPokemon, setNewPokemon] = createSignal({
    name: '',
    type: '',
    image: '',
    height: 0,
    weight: 0,
  })

  // Create a resource to fetch Pokemon data using the server function
  const pokemon = createAsync(() => getAllPokemon())

  // Form submission handler
  const handleSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    try {
      await createPokemon(newPokemon())
      // Reset form after successful creation
      setNewPokemon({
        name: '',
        type: '',
        image: '',
        height: 0,
        weight: 0,
      })
      // This will automatically refresh the Pokemon list due to SolidStart's
      // revalidation of the query after the action completes
    } catch (error) {
      console.error('Error creating Pokemon:', error)
    }
  }

  return (
    <div class='max-w-7xl mx-auto px-4 py-8'>
      <h1 class='text-3xl font-bold text-center mb-8'>Pokémon Collection</h1>

      <ErrorBoundary
        fallback={(err) => <div class='p-4 mb-6 bg-red-100 text-red-800 rounded-md'>Error: {err.toString()}</div>}
      >
        <Suspense
          fallback={<div class='flex justify-center items-center h-48 text-lg text-gray-600'>Loading Pokémon...</div>}
        >
          <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
            <For each={pokemon()}>
              {(poke) => (
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
        </Suspense>
      </ErrorBoundary>

      <div class='mt-24 bg-gray-50 p-6 rounded-lg shadow-md'>
        <h2 class='text-2xl font-semibold mb-6'>Add New Pokémon</h2>
        <form onSubmit={handleSubmit} class='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div class='flex flex-col'>
            <label for='name' class='mb-1 font-medium text-gray-700'>
              Name:
            </label>
            <input
              id='name'
              type='text'
              value={newPokemon().name}
              onInput={(e) => setNewPokemon({ ...newPokemon(), name: e.target.value })}
              required
              class='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400'
            />
          </div>

          <div class='flex flex-col'>
            <label for='type' class='mb-1 font-medium text-gray-700'>
              Type:
            </label>
            <input
              id='type'
              type='text'
              value={newPokemon().type}
              onInput={(e) => setNewPokemon({ ...newPokemon(), type: e.target.value })}
              placeholder='e.g. Fire/Flying'
              required
              class='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400'
            />
          </div>

          <div class='flex flex-col'>
            <label for='image' class='mb-1 font-medium text-gray-700'>
              Image URL:
            </label>
            <input
              id='image'
              type='url'
              value={newPokemon().image}
              onInput={(e) => setNewPokemon({ ...newPokemon(), image: e.target.value })}
              required
              class='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400'
            />
          </div>

          <div class='flex flex-col'>
            <label for='height' class='mb-1 font-medium text-gray-700'>
              Height (dm):
            </label>
            <input
              id='height'
              type='number'
              value={newPokemon().height}
              onInput={(e) => setNewPokemon({ ...newPokemon(), height: parseInt(e.target.value) })}
              required
              class='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400'
            />
          </div>

          <div class='flex flex-col md:col-span-1'>
            <label for='weight' class='mb-1 font-medium text-gray-700'>
              Weight (hg):
            </label>
            <input
              id='weight'
              type='number'
              value={newPokemon().weight}
              onInput={(e) => setNewPokemon({ ...newPokemon(), weight: parseInt(e.target.value) })}
              required
              class='border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400'
            />
          </div>

          <button
            type='submit'
            class='md:col-span-2 mt-4 bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-md transition-colors duration-200'
          >
            Add Pokémon
          </button>
        </form>
      </div>
    </div>
  )
}
