// src/routes/index.tsx
import { Component } from 'solid-js'
import PokemonList from '~/components/PokemonList'

const Pokemons: Component = () => {
  return (
    <>
      <PokemonList />
    </>
  )
}

export default Pokemons
