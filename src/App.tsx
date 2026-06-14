import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-5xl mx-auto px-0">
          <hr className="border-border" />
        </div>
        <About />
        <div className="max-w-5xl mx-auto px-0">
          <hr className="border-border" />
        </div>
        <Skills />
        <div className="max-w-5xl mx-auto px-0">
          <hr className="border-border" />
        </div>
        <Projects />
        <div className="max-w-5xl mx-auto px-0">
          <hr className="border-border" />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
