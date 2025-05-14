// src/components/QueryProvider.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { ParentProps } from 'solid-js'

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
})

export function QueryProvider(props: ParentProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  )
}