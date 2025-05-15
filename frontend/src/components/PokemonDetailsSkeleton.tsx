// PokemonDetailsSkeleton.tsx
export default function PokemonDetailsSkeleton() {
  return (
    <div class='bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-700 text-white max-w-full sm:max-w-md md:max-w-full mx-auto animate-pulse'>
      {/* Header Section with Type Background */}
      <div class='p-3 sm:p-6 flex flex-col md:flex-row items-center bg-gray-700 bg-opacity-20'>
        {/* Pokemon Image Skeleton */}
        <div class='rounded-full bg-gray-900 bg-opacity-40 p-2 sm:p-4 flex items-center justify-center'>
          <div class='w-32 h-32 sm:w-40 md:w-48 sm:h-40 md:h-48 rounded-full bg-gray-700'></div>
        </div>
       
        {/* Pokemon Info Skeleton */}
        <div class='md:ml-8 mt-4 md:mt-0 text-center md:text-left w-full md:w-auto'>
          {/* Name Skeleton */}
          <div class='h-8 sm:h-10 md:h-12 w-48 mx-auto md:mx-0 bg-gray-700 rounded-lg'></div>
         
          {/* ID Number Skeleton */}
          <div class='h-5 w-20 mx-auto md:mx-0 mt-2 bg-gray-700 rounded'></div>
         
          {/* Type Tags Skeleton */}
          <div class='mt-2 sm:mt-4 flex flex-wrap gap-1 sm:gap-2 justify-center md:justify-start'>
            <div class='h-7 w-20 rounded-full bg-gray-700'></div>
            <div class='h-7 w-16 rounded-full bg-gray-700'></div>
          </div>
        </div>
      </div>
     
      {/* Stats Section Skeleton */}
      <div class='p-3 sm:p-6 bg-gray-900 bg-opacity-40'>
        {/* Section Title Skeleton */}
        <div class='h-6 sm:h-7 w-40 bg-gray-700 rounded mb-3 sm:mb-6 pb-2'></div>
       
        {/* Stats Skeleton */}
        <div class='space-y-3 sm:space-y-6'>
          {/* Height Stat */}
          <div>
            <div class='flex justify-between mb-1 sm:mb-2'>
              <div class='h-5 w-16 bg-gray-700 rounded'></div>
              <div class='h-5 w-12 bg-gray-700 rounded'></div>
            </div>
            <div class='w-full bg-gray-700 rounded-full h-2 sm:h-3'>
              <div class='bg-gray-600 h-2 sm:h-3 rounded-full' style='width: 40%'></div>
            </div>
          </div>
         
          {/* Weight Stat */}
          <div>
            <div class='flex justify-between mb-1 sm:mb-2'>
              <div class='h-5 w-16 bg-gray-700 rounded'></div>
              <div class='h-5 w-12 bg-gray-700 rounded'></div>
            </div>
            <div class='w-full bg-gray-700 rounded-full h-2 sm:h-3'>
              <div class='bg-gray-600 h-2 sm:h-3 rounded-full' style='width: 65%'></div>
            </div>
          </div>
        </div>
      </div>
     
      {/* Button Section Skeleton */}
      <div class='bg-gray-900 px-3 sm:px-6 py-3 sm:py-4 flex justify-center items-center'>
        <div class='h-8 sm:h-10 w-40 rounded-md bg-gray-700'></div>
      </div>
    </div>
  )
}