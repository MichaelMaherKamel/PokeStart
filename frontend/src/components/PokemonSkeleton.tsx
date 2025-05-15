import { For } from 'solid-js'

export function PokemonSkeleton() {
  // Create an array of 16 items to render 16 skeleton cards
  const skeletons = Array(16).fill(0);
 
  return (
    <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center'>
      <For each={skeletons}>
        {(_) => (
          <div class="relative w-40 h-40">
            {/* Pokeball Design With Enhanced Animations */}
            <div class='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-60 pointer-events-none'>
              <div class='absolute top-0 left-0 w-full h-1/2 bg-red-500 rounded-t-full animate-pulse'></div>
              <div class='absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-b-full animate-pulse'></div>
              <div class='absolute top-1/2 left-0 w-full h-2 bg-gray-800 transform -translate-y-1/2'></div>
              <div class='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-3 border-gray-800 rounded-full animate-ping opacity-75'></div>
            </div>
          </div>
        )}
      </For>
    </div>
  )
}