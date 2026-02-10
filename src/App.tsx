
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Showreel from './components/Showreel'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Showreel />
      <Projects />
      <Skills />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
