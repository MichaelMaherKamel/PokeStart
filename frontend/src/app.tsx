import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { MetaProvider } from '@solidjs/meta'
import './app.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  return (
    <MetaProvider>
      <Router
        root={(props) => (
          <>
            <Header />
            <Suspense>{props.children}</Suspense>
            <Footer />
          </>
        )}
      >
        <FileRoutes />
      </Router>
    </MetaProvider>
  )
}
