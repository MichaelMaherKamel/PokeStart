import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { MetaProvider } from '@solidjs/meta'
import './app.css'
import { QueryProvider } from './components/QueryProvider'

export default function App() {
  return (
    <MetaProvider>
      <QueryProvider>
      <Router
        root={(props) => (
          <>
           
            <Suspense>{props.children}</Suspense>
            
          </>
        )}
      >
        <FileRoutes />
      </Router>
      </QueryProvider>
    </MetaProvider>
  )
}
