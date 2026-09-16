import './App.css'
import { useEffect } from 'react'
import Background from './components/Background.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import SoftSkills from './components/SoftSkills.jsx'
import Experience from './components/Experience.jsx'
import Formations from './components/Formations.jsx'
import Langues from './components/Langues.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.rev')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis')
        }
      })
    }, { threshold: 0.12 })

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Background />
      <Header />

      <main className="wrap">
        <Hero />
        <About />
        <Skills />
        <SoftSkills />
        <Experience />
        <Formations />
        <Langues />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
