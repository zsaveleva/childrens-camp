import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Sessions from '@/components/sections/Sessions'
import Advantages from '@/components/sections/Advantages'
import Accommodation from '@/components/sections/Accommodation'
import Activities from '@/components/sections/Activities'
import Safety from '@/components/sections/Safety'
import Team from '@/components/sections/Team'
import Gallery from '@/components/sections/Gallery'
import Reviews from '@/components/sections/Reviews'
import FAQ from '@/components/sections/FAQ'
import Contacts from '@/components/sections/Contacts'
import CTA from '@/components/sections/CTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Gallery />
      <About />
      <Sessions />
      <Advantages />
      <Accommodation />
      <Activities />
      <Safety />
      <Team />
      <Reviews />
      <FAQ />
      <Contacts />
      <CTA />
    </main>
  )
}
