import './Skills.css'

function SoftSkills() {
  return (
    <section id="softskills">
      <div className="sec-h rev">
      <h2 className="stit">Mes <em>Qualités</em></h2>
    </div>
    
    <div className="bandes-wrap rev">
      <div className="sk-bande">
      <div className="sk-bande-head">
      <span className="sk-bande-ico">🤝</span>
      <span className="sk-bande-cat">Soft Skills</span>
    </div>
    
    <div className="sk-bande-tags">
      <span className="sk-tag-b">Autonomie</span>
      <span className="sk-tag-b">Travail en équipe</span>
      <span className="sk-tag-b">Organisation</span>
      <span className="sk-tag-b">Communication</span>
      <span className="sk-tag-b">Implication</span>
      <span className="sk-tag-b">Adaptabilité</span>
     <span className="sk-tag-b">Gestion de projet</span>
    </div>
    </div>
    </div>
    </section>
  )
}

export default SoftSkills
