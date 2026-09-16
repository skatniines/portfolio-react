import './Formations.css'

function Formations() {
  return (
    <section id="formations">
      <div className="sec-h rev">
        <div className="stag">Formations</div>
       <h2 className="stit">Ma <em>formation</em></h2>
      </div>
        <div className="tl-wrap">
          <div className="tl-line" div=""></div>

    <div className="tl-item">
      <div className="tl-year-col"><span className="tl-year">2026 – 2028</span></div>
        <div className="tl-dot encours"></div>
      <div className="tl-branch"></div>
        <div className="tl-card">
        <span className="tl-badge badge-encours">En cours</span>
        <div className="tl-card-title">Bachelor Informatique — 2ème &amp; 3ème année</div>
      <div className="tl-card-school">La Plateforme - Marseille </div>
      <p className="tl-card-desc">Développement d’applications web en PHP, SQL et programmation orientée objet (POO).
                                Conception d’interfaces utilisateur et gestion de bases de données SQL / NoSQL.
                                Développement Full Stack avec React.js, Express.js et MongoDB.</p>
    </div>
    </div>

    <div className="tl-item">
      <div className="tl-year-col"><span className="tl-year">2025 – 2026</span></div>
        <div className="tl-dot diplome"></div>
          <div className="tl-branch"></div>
    <div className="tl-card">
      <span className="tl-badge badge-diplome">1ère année validée</span>
      <div className="tl-card-title">Bachelor Informatique — 1ère année</div>
      <div className="tl-card-school">Institut G4 · Marseille</div>
      <p className="tl-card-desc">HTML, CSS, PHP, SQL, JavaScript, CMS, Langage C, PAO, SEO/SEA.</p>
    </div>
    </div>

    <div className="tl-item">
      <div className="tl-year-col"><span className="tl-year">2024 – 2025</span></div>
        <div className="tl-dot alt"></div>
        <div className="tl-branch"></div>
    <div className="tl-card">
      <span className="tl-badge badge-alt">Alternance</span>
      <div className="tl-card-title">BTS SAM</div>
      <div className="tl-card-school">M2S Formation · Vitrolles · (alternance chez SNEF)</div>
      <p className="tl-card-desc">Support à l'action managériale. Gestion administrative, communication professionnelle, organisation et coordination d'équipe.</p>
    </div>
    </div>

    <div className="tl-item">
      <div className="tl-year-col"><span className="tl-year">2018 – 2021</span></div>
      <div className="tl-dot diplome"></div>
      <div className="tl-branch"></div>
    <div className="tl-card">
      <span className="tl-badge badge-diplome">Diplômée</span>
      <div className="tl-card-title">Baccalauréat Général</div>
      <div className="tl-card-school">Lycée Pierre Mendès France · Vitrolles</div>
    <p className="tl-card-desc">Obtention du baccalauréat général.</p>
    </div>
    </div>
    </div>
    </section>
  )
}

export default Formations
