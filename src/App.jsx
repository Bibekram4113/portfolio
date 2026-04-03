import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Lenis } from 'lenis'

// Components
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Preloader from './components/Preloader'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Publication from './sections/Publication'
import Certifications from './sections/Certifications'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Cursor />
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Publication />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </>
  )
}

export default App
