import {useReveal} from './hooks/useReveal'
import Bubbles from './components/Bubbles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Education from './components/Education'
import Services from './components/Services'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  useReveal()
  return <>
    <Bubbles/>
    <Navbar/>
    <main>
      <Hero/><Marquee/><About/><Skills/><Projects/><Certificates/>
      <Services/><Experience/><Education/><Contact/>
    </main>
    <Footer/>
  </>
}
