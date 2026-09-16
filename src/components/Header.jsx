import { useEffect, useState } from 'react'
import './Header.css'
import logo from '../assets/images/logo 2.png'

function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = document.querySelectorAll('section[id]')
      let current = 'hero'

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top
        if (top <= 140) current = section.id
      })

      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme((current) => current === 'dark' ? 'light' : 'dark')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="hdr-logo" onClick={closeMenu}>
        <img src={logo} alt="Logo Inès Skatni" />
      </a>

      <nav className={`hdr-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#hero" className={activeSection === 'hero' ? 'on' : ''} onClick={closeMenu}>Accueil</a>
        <a href="#about" className={activeSection === 'about' ? 'on' : ''} onClick={closeMenu}>À propos</a>
        <a href="#skills" className={activeSection === 'skills' ? 'on' : ''} onClick={closeMenu}>Compétences</a>
        <a href="#experience" className={activeSection === 'experience' ? 'on' : ''} onClick={closeMenu}>Expériences</a>
        <a href="#formations" className={activeSection === 'formations' ? 'on' : ''} onClick={closeMenu}>Formation</a>
        <a href="#langues" className={activeSection === 'langues' ? 'on' : ''} onClick={closeMenu}>Langues</a>
        <a href="#contact" className={activeSection === 'contact' ? 'on' : ''} onClick={closeMenu}>Contact</a>
      </nav>

      <div className="hdr-right">
        <button id="themeBtn" type="button" aria-label="Changer le thème" onClick={toggleTheme}>
          <span className="ico">{theme === 'dark' ? '☀️' : '🌙'}</span>
          <span>{theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
        </button>

        <button
          id="menuBtn"
          type="button"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
