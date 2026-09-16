import './About.css'

function About() {
  return (
<section id="about">
    <div className="sec-h rev">
    <div className="stag">À propos</div>
    <h2 className="stit">Qui suis-je <em>?</em></h2>
    </div>
  <div className="ag">
  <div className="at rev">
    <p>
                Étudiante en <strong>2ème année de Bachelor Informatique</strong> à La Plateforme, 
                je me forme au développement web et je développe mes compétences dans la création de sites 
                et d’applications web.
              </p>
    <p>
                Mon parcours professionnel m’a permis de développer mon autonomie, ma capacité d’adaptation 
                et mon sens de l’organisation. J’ai également appris à travailler en équipe et à m’investir 
                pleinement dans les missions qui me sont confiées.
              </p>
    <p>
                Aujourd’hui, je souhaite me consacrer au développement web, mettre mes compétences en pratique 
                à travers des projets concrets et continuer à progresser dans ce domaine.
              </p>
      <div className="ilist">
        <span className="ipill">🎂 23 ans</span>
        <span className="ipill">✉ skatniines@gmail.com</span>
        <span className="ipill">📞 06 11 89 65 44</span>
        <span className="ipill">🚗 Permis B · Véhiculée</span>
        <span className="ipill">📍 Vitrolles, 13127</span>
      </div>
    </div>
    </div>
</section>
  )
}

export default About
