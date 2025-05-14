import { Title, Meta } from '@solidjs/meta'
import { HeroSection } from '~/components/Home/Hero/HeroSection'
import { FeaturedPokemonSection } from '~/components/Home/Featured/FeaturedPokemonSection'
import { AppFeaturesSection } from '~/components/Home/Features/AppFeaturesSection'

export default function Home() {
  return (
    <div class='home-page'>
      <Title>PokéStart - Your Pokémon Adventure Begins Here</Title>
      <Meta
        name='description'
        content='Explore the world of Pokémon with PokéStart. Find featured Pokémon, track your collection, and discover new favorites.'
      />
      <Meta name='keywords' content='Pokemon, PokéStart, Pokedex, Pokemon collection' />
      <Meta property='og:title' content='PokéStart - Pokémon Adventure' />
      <Meta
        property='og:description'
        content='Start your Pokémon journey with PokéStart'
      />
      <Meta property='og:type' content='website' />
      <Meta name='twitter:card' content='summary_large_image' />

      {/* Hero Section */}
      <HeroSection />

      {/* Featured Pokémon */}
      <FeaturedPokemonSection />

      {/* App Features */}
      <AppFeaturesSection />
    </div>
  )
}
