import { A } from '@solidjs/router';
import { Component } from 'solid-js'
import type { Pokemon } from '~/lib/pokemon'

interface PokemonDetailsProps {
  pokemon: Pokemon
}

const PokemonDetails: Component<PokemonDetailsProps> = (props) => {
  // Function to get appropriate background color based on Pokemon type
  const getTypeColor = (type: string) => {
    const typeColors: Record<string, string> = {
      normal: 'bg-gray-400',
      fire: 'bg-red-500',
      water: 'bg-blue-500',
      electric: 'bg-yellow-400',
      grass: 'bg-green-500',
      ice: 'bg-blue-300',
      fighting: 'bg-red-600',
      poison: 'bg-purple-500',
      ground: 'bg-yellow-600',
      flying: 'bg-indigo-300',
      psychic: 'bg-pink-500',
      bug: 'bg-green-400',
      rock: 'bg-yellow-700',
      ghost: 'bg-purple-700',
      dragon: 'bg-indigo-600',
      dark: 'bg-gray-800',
      steel: 'bg-gray-500',
      fairy: 'bg-pink-300',
    };
   
    // Split types and get the first one
    const mainType = type.toLowerCase().split('/')[0].trim();
    return typeColors[mainType] || 'bg-gray-400';
  };

  return (
    <div class='bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 text-white max-w-full sm:max-w-md md:max-w-full mx-auto'>
      <div class={`p-3 sm:p-6 flex flex-col md:flex-row items-center ${getTypeColor(props.pokemon.type)} bg-opacity-20`}>
        <div class='rounded-full bg-gray-900 bg-opacity-40 p-2 sm:p-4 flex items-center justify-center'>
          <img src={props.pokemon.image} alt={props.pokemon.name} class='w-32 h-32 sm:w-40 md:w-48 sm:h-40 md:h-48 object-contain' />
        </div>
        <div class='md:ml-8 mt-4 md:mt-0 text-center md:text-left'>
          <h1 class='text-2xl sm:text-3xl md:text-4xl font-bold'>{props.pokemon.name}</h1>
          <span class='text-gray-300 text-base sm:text-lg'>#{props.pokemon.id}</span>
          <div class='mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2 justify-center md:justify-start'>
            {props.pokemon.type.split('/').map((type) => (
              <span class={`px-2 sm:px-4 py-1 rounded-full text-white text-sm sm:text-base ${getTypeColor(type)} font-medium`}>
                {type.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>
     
      <div class='p-3 sm:p-6 bg-gray-900 bg-opacity-40'>
        <h2 class='text-lg sm:text-xl font-semibold mb-3 sm:mb-6 border-b border-gray-700 pb-2'>Pokemon Stats</h2>
        <div class='space-y-3 sm:space-y-6'>
          <div>
            <div class='flex justify-between mb-1 sm:mb-2'>
              <span class='font-medium text-gray-300'>Height</span>
              <span class='text-white font-bold'>{props.pokemon.height / 10} m</span>
            </div>
            <div class='w-full bg-gray-700 rounded-full h-2 sm:h-3'>
              <div
                class='bg-blue-500 h-2 sm:h-3 rounded-full transition-all duration-500'
                style={`width: ${Math.min(100, (props.pokemon.height / 30) * 100)}%`}
              />
            </div>
          </div>
         
          <div>
            <div class='flex justify-between mb-1 sm:mb-2'>
              <span class='font-medium text-gray-300'>Weight</span>
              <span class='text-white font-bold'>{props.pokemon.weight / 10} kg</span>
            </div>
            <div class='w-full bg-gray-700 rounded-full h-2 sm:h-3'>
              <div
                class='bg-green-500 h-2 sm:h-3 rounded-full transition-all duration-500'
                style={`width: ${Math.min(100, (props.pokemon.weight / 1000) * 100)}%`}
              />
            </div>
          </div>
        </div>
      </div>
     
      <div class='bg-gray-900 px-3 sm:px-6 py-3 sm:py-4 flex justify-center items-center'>
        <A
          class='bg-red-600 hover:bg-red-700 text-white py-1 sm:py-2 px-4 sm:px-6 rounded-md transition-colors duration-300 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'
         href='/pokemons'
        >
          Back to Pokemon List
        </A>
      </div>
    </div>
  )
}

export default PokemonDetails