// src/api/pokemonQueryApi.ts
import { useQuery } from '@tanstack/solid-query'

// Define Pokemon interface to match the backend model
export interface Pokemon {
  id: number
  name: string
  type: string
  image: string
  height: number
  weight: number
}

// API base URLs for development and production environments
const DEV_API_URL = 'http://localhost:8080'
const PROD_API_URL = 'https://pockemeonserver.macrotech.dev'

// Choose the appropriate API URL based on the environment
// You can modify this condition based on your specific environment detection method
const API_URL = import.meta.env.DEV ? DEV_API_URL : PROD_API_URL

// Fetch all Pokemon
export const usePokemonList = () => {
  return useQuery(() => ({
    queryKey: ['pokemons'],
    queryFn: async (): Promise<Pokemon[]> => {
      const response = await fetch(`${API_URL}/pokemon`)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      return await response.json()
    },
  }))
}

// Fetch a single Pokemon by ID
export const usePokemonDetail = (id: number) => {
  return useQuery(() => ({
    queryKey: ['pokemon', id],
    queryFn: async (): Promise<Pokemon> => {
      const response = await fetch(`${API_URL}/pokemon/${id}`)
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }
      return await response.json()
    },
    enabled: !!id, // Only run the query if id is truthy
  }))
}