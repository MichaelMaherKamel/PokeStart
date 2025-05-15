import Header from '~/components/Header'
import Footer from '~/components/Footer'
import { JSX } from 'solid-js'

// The proper way to define a layout component in SolidStart
export default function PokemonsLayout(props: { children: JSX.Element }) {
  return (
    <div class="min-h-svh">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}