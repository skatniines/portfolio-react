import './Skills.css'

function Skills() {
  return (
    <section id="skills">

      <div className="sec-h rev">
        <div className="stag">Compétences</div>
        <h2 className="stit">
          Mes <em>technologies</em>
        </h2>
      </div>

      <p className="skills-intro rev">
        Chaque technologie joue un rôle précis dans la création d'un site ou d'une application :
        structure, design, interaction, logique métier, serveur ou base de données.
      </p>

{/* TECHNOLOGIES AVANCÉES */}
      <div className="skills-level-group rev">
        <div className="slg-label">
          <span className="slg-dot avance"></span>
          Avancé
        </div>

        <div className="slg-cards">

{/* HTML */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">🌐</span>
              <div>
                <div className="lang-name">HTML</div>
                <div className="lang-level avance">Avancé</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à créer la <strong>structure d'une page web</strong> :
              titres, paragraphes, images, formulaires, sections et liens.
            </p>
          </div>

{/* CSS */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">🎨</span>
              <div>
                <div className="lang-name">CSS</div>
                <div className="lang-level avance">Avancé</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à gérer le <strong>design et la mise en forme</strong> :
              couleurs, espacements, animations, responsive et disposition.
            </p>
          </div>

{/* MySQL */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">🗄️</span>
              <div>
                <div className="lang-name">MySQL</div>
                <div className="lang-level avance">Avancé</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à <strong>stocker, organiser et interroger les données</strong>
              d'une application : utilisateurs, messages, produits, commandes.
            </p>
          </div>

{/* PHP */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">🐘</span>
              <div>
                <div className="lang-name">PHP</div>
                <div className="lang-level avance">Avancé</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à développer la <strong>logique côté serveur</strong> :
              formulaires, sessions, pages dynamiques et connexion à la base de données.
            </p>
          </div>

{/* SQLite */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">🪶</span>
              <div>
                <div className="lang-name">SQLite</div>
                <div className="lang-level avance">Avancé</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à utiliser une <strong>base de données légère</strong>,
              pratique pour des petits projets, tests ou applications locales.
            </p>
          </div>

{/* Apache */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">🖥️</span>
              <div>
                <div className="lang-name">Apache</div>
                <div className="lang-level avance">Avancé</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à faire tourner un <strong>serveur web</strong>,
              héberger des sites et gérer certaines requêtes côté serveur.
            </p>
          </div>

{/* React */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">⚛️</span>
              <div>
                <div className="lang-name">React</div>
                <div className="lang-level avance">Avancé</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à construire des <strong>interfaces web modernes en composants</strong>,
              dynamiques, réutilisables et organisées.
            </p>
          </div>

{/* Vite */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">⚡</span>
              <div>
                <div className="lang-name">Vite</div>
                <div className="lang-level avance">Avancé</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à <strong>créer et lancer des projets web modernes</strong>
              avec un environnement de développement rapide.
            </p>
          </div>

        </div>
      </div>

{/* TECHNOLOGIES INTERMÉDIAIRES */}
      <div className="skills-level-group rev">
        <div className="slg-label">
          <span className="slg-dot intermediaire"></span>
          Intermédiaire
        </div>

        <div className="slg-cards">

{/* JavaScript */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">⚡</span>
              <div>
                <div className="lang-name">JavaScript</div>
                <div className="lang-level intermediaire">Intermédiaire</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à rendre un site <strong>interactif et dynamique</strong> :
              boutons, menus, formulaires, animations et logique côté navigateur.
            </p>
          </div>

        </div>
      </div>

{/* TECHNOLOGIES DÉBUTANTES */}
      <div className="skills-level-group rev">
        <div className="slg-label">
          <span className="slg-dot debutant"></span>
          Débutant
        </div>

        <div className="slg-cards">

{/* Python */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">🐍</span>
              <div>
                <div className="lang-name">Python</div>
                <div className="lang-level debutant">Débutant</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à créer des <strong>scripts, automatisations et applications</strong>,
              mais aussi du back-end selon les projets.
            </p>
          </div>

{/* Node.js */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">🟢</span>
              <div>
                <div className="lang-name">Node.js</div>
                <div className="lang-level debutant">Débutant</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à exécuter du <strong>JavaScript côté serveur</strong>,
              créer des API et gérer des outils de projet.
            </p>
          </div>

{/* Langage C */}
          <div className="lang-card modern">
            <div className="lang-top">
              <span className="lang-icon">⚙️</span>
              <div>
                <div className="lang-name">Langage C</div>
                <div className="lang-level debutant">Débutant</div>
              </div>
            </div>
            <p className="lang-desc">
              Sert à comprendre la <strong>programmation bas niveau</strong>,
              la mémoire et les fondements du développement.
            </p>
          </div>

        </div>
      </div>

{/* OUTILS */}
      <div className="bandes-wrap rev">

        <div className="sk-bande">
          <div className="sk-bande-head">
            <span className="sk-bande-ico">🛠</span>
            <span className="sk-bande-cat">Outils dev</span>
          </div>

          <div className="sk-bande-tags">
            <span className="sk-tag-b">WordPress</span>
            <span className="sk-tag-b">GitHub</span>
            <span className="sk-tag-b">Visual Studio Code</span>
            <span className="sk-tag-b">Figma</span>
            <span className="sk-tag-b">Excalidraw</span>
            <span className="sk-tag-b">Trello</span>
            <span className="sk-tag-b">Notion</span>
            <span className="sk-tag-b">Lucidchart</span>
            <span className="sk-tag-b">CMS</span>
          </div>
        </div>

        <div className="sk-bande">
          <div className="sk-bande-head">
            <span className="sk-bande-ico">🎨</span>
            <span className="sk-bande-cat">Design &amp; Créa</span>
          </div>

          <div className="sk-bande-tags">
            <span className="sk-tag-b">Canva</span>
            <span className="sk-tag-b">Figma</span>
            <span className="sk-tag-b">Excalidraw</span>
            <span className="sk-tag-b">Photoshop</span>
            <span className="sk-tag-b">Illustrator</span>
            <span className="sk-tag-b">Maquettage</span>
            <span className="sk-tag-b">Wireframe</span>
            <span className="sk-tag-b">PAO</span>
            <span className="sk-tag-b">Office 365</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills