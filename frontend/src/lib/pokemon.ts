// src/api/pokemonApi.ts
import { query, action } from '@solidjs/router'

// Define Pokemon interface to match the backend model
export interface Pokemon {
  id: number
  name: string
  type: string
  image: string
  height: number
  weight: number
}

// API base URL for the Go backend
const API_URL = 'http://localhost:8080'

// Fetch all Pokemon
export const getAllPokemon = query(async (): Promise<Pokemon[]> => {
  'use server'
  try {
    const response = await fetch(`${API_URL}/pokemon`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Failed to fetch Pokemon:', error)
    throw error
  }
}, 'pokemons')

// Fetch a single Pokemon by ID
export const getPokemonById = query(async (id: number): Promise<Pokemon> => {
  'use server'
  try {
    const response = await fetch(`${API_URL}/pokemon/${id}`)
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Failed to fetch Pokemon #${id}:`, error)
    throw error
  }
}, 'pokemon')

// Create a new Pokemon
export const createPokemon = action(async (pokemon: Omit<Pokemon, 'id'>): Promise<Pokemon> => {
  'use server'
  try {
    const response = await fetch(`${API_URL}/pokemon`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokemon),
    })
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error('Failed to create Pokemon:', error)
    throw error
  }
})

// Update an existing Pokemon
export const updatePokemon = action(async (id: number, pokemon: Omit<Pokemon, 'id'>): Promise<Pokemon> => {
  'use server'
  try {
    const response = await fetch(`${API_URL}/pokemon/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, ...pokemon }),
    })
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return await response.json()
  } catch (error) {
    console.error(`Failed to update Pokemon #${id}:`, error)
    throw error
  }
})

// Delete a Pokemon
export const deletePokemon = action(async (id: number): Promise<void> => {
  'use server'
  try {
    const response = await fetch(`${API_URL}/pokemon/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
  } catch (error) {
    console.error(`Failed to delete Pokemon #${id}:`, error)
    throw error
  }
})
