import Navigation from '../components/navigation'
import HeroSection from '../components/hero-section'
import OurStory from '../components/our-story'
import FeaturedMenu from '../components/featured-menu'
import LocationHours from '../components/location-hours'
import Footer from '../components/footer'

export const dynamic = 'force-dynamic'

export default function Homepage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <OurStory />
        <FeaturedMenu />
        <LocationHours />
      </main>
      <Footer />
    </>
  )
}