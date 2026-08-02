<div id="progress-bar"></div>
import { useEffect } from "react";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AnimatedBackground from './components/AnimatedBackground'
import ScrollProgress from './components/ScrollProgress'
import useScrollReveal from './hooks/useScrollReveal'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

// App is just an assembly line: each section is its own module,
// so reordering the page or removing a section means editing this
// one list, not digging through a 500-line file.
export default function App() {
  useScrollReveal()

  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
