// src/lib/pokemon.server.ts

import { query } from "@solidjs/router";


// Define Pokemon interface to match the backend model
export interface Pokemon {
  id: number;
  name: string;
  type: string;
  image: string;
  height: number;
  weight: number;
}

// API URLs setup
const DEV_API_URL = 'http://localhost:8080';
const PROD_API_URL = 'https://pockemeonserver.macrotech.dev';
const isDev = () => {
  if (typeof window === 'undefined') {
    return process.env.NODE_ENV === 'development';
  }
  return (
    import.meta.env.DEV === true ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  );
};
const API_URL = isDev() ? DEV_API_URL : PROD_API_URL;

// Helper function to simulate delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Create the query functions with the original names
export const fetchPokemons = query(
  async () => {
    'use server';
    try {
      // Uncomment if you want the delay
      // await delay(1000);
      
      const response = await fetch(`${API_URL}/pokemon`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json() as Pokemon[];
    } catch (error) {
      console.error("Failed to fetch pokemon:", error);
      throw error;
    }
  },
  "pokemonList" // Cache key,
);

export const fetchPokemonById = query(
  async (id: number) => {
    'use server';
    try {
      if (!id) throw new Error('Pokemon ID is required');
      
      // Uncomment if you want the delay
      // await delay(1000);
      
      const response = await fetch(`${API_URL}/pokemon/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json() as Pokemon;
    } catch (error) {
      console.error(`Failed to fetch pokemon with id ${id}:`, error);
      throw error;
    }
  },
  "pokemonById" // Cache key
);