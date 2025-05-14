import { Component } from 'solid-js'
import type { Pokemon } from '~/lib/pokemon'

interface PokemonDetailsProps {
  pokemon: Pokemon
}

const PokemonDetails: Component<PokemonDetailsProps> = (props) => {
  return (
    <div class='bg-white rounded-lg shadow-lg overflow-hidden'>
      <div class='bg-gray-50 p-6 flex flex-col md:flex-row items-center'>
        <img src={props.pokemon.image} alt={props.pokemon.name} class='w-48 h-48 object-contain' />

        <div class='md:ml-8 mt-4 md:mt-0 text-center md:text-left'>
          <h1 class='text-3xl font-bold'>{props.pokemon.name}</h1>
          <span class='text-gray-500 text-lg'>#{props.pokemon.id}</span>

          <div class='mt-3'>
            <span class='px-3 py-1 bg-gray-200 rounded-full inline-block'>{props.pokemon.type}</span>
          </div>
        </div>
      </div>

      <div class='p-6'>
        <h2 class='text-xl font-semibold mb-4'>Pokemon Stats</h2>
        <div class='space-y-4'>
          <div>
            <div class='flex justify-between'>
              <span class='font-medium'>Height</span>
              <span>{props.pokemon.height / 10} m</span>
            </div>
            <div class='w-full bg-gray-200 rounded-full h-2.5 mt-1'>
              <div
                class='bg-blue-600 h-2.5 rounded-full'
                style={`width: ${Math.min(100, (props.pokemon.height / 30) * 100)}%`}
              />
            </div>
          </div>

          <div>
            <div class='flex justify-between'>
              <span class='font-medium'>Weight</span>
              <span>{props.pokemon.weight / 10} kg</span>
            </div>
            <div class='w-full bg-gray-200 rounded-full h-2.5 mt-1'>
              <div
                class='bg-green-600 h-2.5 rounded-full'
                style={`width: ${Math.min(100, (props.pokemon.weight / 1000) * 100)}%`}
              />
            </div>
          </div>
        </div>
      </div>

      <div class='bg-gray-50 px-6 py-4'>
        <button
          class='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition-colors duration-300'
          onClick={() => history.back()}
        >
          Back to Pokemon List
        </button>
      </div>
    </div>
  )
}

export default PokemonDetails
