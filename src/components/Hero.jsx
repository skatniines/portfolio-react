import { useEffect, useState } from 'react'
import './Hero.css'
import photo from '../assets/images/photo_profil.png'

function Hero() {
  const phrases = [
    'Développeuse Web',
    'Étudiante Bachelor Informatique',
    'En recherche d’alternance',
    'Passionnée par le web',
  ]

  const [phraseIndex, setPhraseIndex] = useState(0)
  const [text, setText] = useState(phrases[0])
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    const speed = deleting ? 45 : 85

    const timer = setTimeout(() => {
      if (!deleting) {
        const nextText = currentPhrase.slice(0, text.length + 1)
        setText(nextText)

        if (nextText === currentPhrase) {
          setDeleting(true)
        }
      } else {
        const nextText = currentPhrase.slice(0, text.length - 1)
        setText(nextText)

        if (nextText === '') {
          setDeleting(false)
          setPhraseIndex((index) => (index + 1) % phrases.length)
        }
      }
    }, text === currentPhrase && !deleting ? 1600 : speed)

    return () => clearTimeout(timer)
  }, [text, deleting, phraseIndex])

  return (
    <section id="hero">
      <div className="hl">
        <div className="kicker">
          <span className="kline"></span>
          Portfolio · Développeuse Web
        </div>

        <h1 className="hname">
          <span className="l1">Inès</span>
          <span className="l2">SKATNI</span>
        </h1>

        <p className="hrole">
          <strong><span id="typingText">{text}</span></strong>
          &nbsp;·&nbsp; Marseille
        </p>

        <p className="hdesc">
          Je ne cherche pas simplement une opportunité : je souhaite mettre mes compétences en développement web 
          à l’épreuve de projets concrets et continuer à apprendre. 
          Curieuse, autonome et impliquée, je suis toujours prête à relever de nouveaux défis.
        </p>

        <div className="hbtns">
          <a href="mailto:skatniines@gmail.com" className="btn-fill">✉ Me contacter</a>
          <a href="#experience" className="btn-ghost">↓ Mon parcours</a>
        </div>
        </div>{/*fermeture de .h1*/}

      <div className="hero-vis">
        <div className="prof-frame">
          <div className="inner">
            <img src={photo} alt="Photo de Inès Skatni" />
          </div>
        </div>

        <div className="status-badge">
          <div className="status-dot"></div>
          Disponible · Recherche alternance
        </div>

        <div className="hero-stats">
          <div className="hstat">
            <div className="hstat-n">2e année</div>
            <div className="hstat-l">Formation</div>
          </div>

          <div className="hstat">
            <div className="hstat-n">Web</div>
            <div className="hstat-l">Domaine</div>
          </div>

          <div className="hstat">
            <div className="hstat-n">4</div>
            <div className="hstat-l">Langues</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
