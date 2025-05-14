// src/routes/index.tsx
import { type RouteDefinition } from '@solidjs/router'
import { Component } from 'solid-js'
import PokemonList from '~/components/PokemonList'

// Preload the Pokemon data when navigating to this route
// export const route = {
//   preload: () => getAllPokemon(),
// } satisfies RouteDefinition

const Pokemons: Component = () => {
  return (
    <>
      <PokemonList />
    </>
  )
}

export default Pokemons
