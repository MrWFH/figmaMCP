import Navbar from './components/Navbar'
import Header from './components/Header'
import TrustedBy from './components/TrustedBy'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Specs from './components/Specs'
import Testimonial from './components/Testimonial'
import HowTo from './components/HowTo'
import HeroBottom from './components/HeroBottom'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black max-w-[1280px] mx-auto">
      <Navbar />
      <main>
        <Header />
        <TrustedBy />
        <Benefits />
        <Features />
        <Specs />
        <Testimonial />
        <HowTo />
        <HeroBottom />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
