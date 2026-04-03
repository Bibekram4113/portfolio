import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="navbar-logo">
        BR<span className="logo-symbol">◈</span>
      </div>

      <ul className="nav-links">
        <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
        <li><a href="#skills" className="nav-link" onClick={() => scrollToSection('skills')}>Skills</a></li>
        <li><a href="#experience" className="nav-link" onClick={() => scrollToSection('experience')}>Experience</a></li>
        <li><a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a></li>
        <li><a href="#research" className="nav-link" onClick={() => scrollToSection('research')}>Research</a></li>
        <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
      </ul>

      <div className="status-badge">
        <span className="status-dot"></span>
        OPEN TO WORK
      </div>
    </nav>
  )
}
