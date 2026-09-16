import './Langues.css'

function Langues() {
  return (
    <section id="langues">
    <div className="sec-h rev">
    <div className="stag">Langues &amp; Centres d'Intérêts</div>
    <h2 className="stit">Ouverture <em>sur le monde</em></h2>
    </div>

    <div className="human-langs rev">
    <div className="hl-card">
    <div className="hl-flag">
    <img alt="Drapeau France" src="https://flagcdn.com/fr.svg"/>
    </div>
    <div>
    <div className="hl-name">Français</div>
    <div className="hl-lvl">Langue maternelle</div>
    </div>
    </div>
    <div className="hl-card">
    <div className="hl-flag">
    <img alt="Drapeau Tunisie" src="https://flagcdn.com/tn.svg"/>
    </div>
    <div>
    <div className="hl-name">Arabe</div>
    <div className="hl-lvl">C1 · Courant</div>
    </div>
    </div>
    <div className="hl-card">
    <div className="hl-flag">
    <img alt="Drapeau Royaume-Uni" src="https://flagcdn.com/gb.svg"/>
    </div>
    <div>
    <div className="hl-name">Anglais</div>
    <div className="hl-lvl">B2 · Avancé</div>
    <div className="hl-sub">Auto-apprentissage</div>
    </div>
    </div>
    <div className="hl-card">
    <div className="hl-flag">
    <img alt="Drapeau Espagne" src="https://flagcdn.com/es.svg"/>
    </div>
    <div>
    <div className="hl-name">Espagnol</div>
    <div className="hl-lvl">B2 · Avancé</div>
    <div className="hl-sub">Auto-apprentissage</div>
    </div>
    </div>
    </div>

    <div className="sec-sub rev">
    <div className="stag-sm">Associations</div>
    </div>
    <div className="bandes-wrap rev">
    <div className="sk-bande">
    <div className="sk-bande-head">
    <span className="sk-bande-ico">🤲</span>
    <span className="sk-bande-cat">Face Sud Provence - Bouche du Rhône</span>
    </div>
    <div className="sk-bande-tags">
    <span className="sk-tag-b">Bénévole</span>
    <span className="sk-tag-b">2025 · En cours </span>
    <span className="sk-tag-b">Accompagnement collectif</span>
    </div>
    </div>
    <div className="sk-bande">
    <div className="sk-bande-head">
    <span className="sk-bande-ico">🤲</span>
    <span className="sk-bande-cat">JeVeuxAider - FranceGouv</span>
    </div>
    <div className="sk-bande-tags">
    <span className="sk-tag-b">Bénévole </span>
    <span className="sk-tag-b">2025 · En cours </span>
    <span className="sk-tag-b">Engagement citoyen en ligne</span>
    </div>
    </div>
    </div>

    <div className="sec-sub rev">
    <div className="stag-sm">Centres d'intérêts</div>
    </div>
    <div className="irow rev">
    <div className="ichip"><span>📚</span> Lecture &amp; actualités</div>
    <div className="ichip"><span>🏋️</span> Sport &amp; fitness</div>
    <div className="ichip"><span>🌍</span> Langues &amp; cultures</div>
    </div>
    </section>
  )
}

export default Langues
