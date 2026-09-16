import './Experience.css'

import leclercVitrolles from '../assets/images/entreprises/leclercVitrolles.png'
import snefAix from '../assets/images/entreprises/snefAix.png'
import classcrous from '../assets/images/entreprises/classcrous.png'
import eniVitrolles from '../assets/images/entreprises/eniVitrolles.png'
import aromazone from '../assets/images/entreprises/aromazone.png'
import oysho from '../assets/images/entreprises/oysho.png'
import utile from '../assets/images/entreprises/utile.png'
import yoopala from '../assets/images/entreprises/yoopala.png'
import leclercMarignane from '../assets/images/entreprises/leclercMarignane.jpg'
import boulangerie from '../assets/images/entreprises/boulangerie.png'
import carrefour from '../assets/images/entreprises/carrefour.png'

function Experience() {
  return (
    <section id="experience">

      <div className="sec-h rev">
        <div className="stag">Expériences</div>
        <h2 className="stit">
          Mon <em>parcours</em>
        </h2>
      </div>

      <div className="exp-grid">

{/* Carrefour Vitrolles - 2026 */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={carrefour} alt="Carrefour Vitrolles" />
            <div className="exp-date-badge">Janv. 2026</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">CDI étudiant (en cours)</div>
            <div className="exp-role">Hôtesse de caisse</div>
            <div className="exp-company">Carrefour · Vitrolles</div>

            <ul className="exp-tasks">
              <li>Encaissement et gestion des transactions clients</li>
              <li>Accueil et orientation de la clientèle</li>
              <li>Gestion des files d'attente et fluidité du passage en caisse</li>
              <li>Vigilance, propreté et entretien de l'espace de travail</li>
            </ul>
          </div>
        </div>

{/* SNEF */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={snefAix} alt="SNEF Tertiaire" />
            <div className="exp-date-badge">Déc. 2024 – Juil. 2025</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">Alternance · 8 mois</div>
            <div className="exp-role">
              Assistante administrative &amp; comptabilité
            </div>
            <div className="exp-company">
              SNEF Tertiaire · Aix-en-Provence
            </div>

            <ul className="exp-tasks">
              <li>Utilisation de progiciels métier</li>
              <li>Élaboration de factures et notes de frais</li>
              <li>Archivage et gestion documentaire</li>
              <li>Accueil téléphonique et orientation</li>
            </ul>
          </div>
        </div>

{/* Class'route */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={classcrous} alt="Class'route Marignane" />
            <div className="exp-date-badge">Juin. 2024</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">Intérimaire</div>
            <div className="exp-role">Employée polyvalente</div>
            <div className="exp-company">Class'route · Marignane</div>

            <ul className="exp-tasks">
              <li>Accueil et service clients en restauration rapide</li>
              <li>Préparation des commandes dans le respect des normes d'hygiène</li>
              <li>Gestion de la caisse et approvisionnement</li>
              <li>Maintien de la propreté et conformité des espaces</li>
            </ul>
          </div>
        </div>

{/* Carrefour Vitrolles - 2023/2024 */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={carrefour} alt="Carrefour Vitrolles" />
            <div className="exp-date-badge">Déc. 2023 – Mai. 2024</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">CDD · 6 mois</div>
            <div className="exp-role">Hôtesse de caisse</div>
            <div className="exp-company">Carrefour · Vitrolles</div>

            <ul className="exp-tasks">
              <li>Encaissement et gestion des transactions clients</li>
              <li>Accueil et orientation de la clientèle</li>
              <li>Gestion des files d'attente et fluidité du passage en caisse</li>
              <li>Vigilance, propreté et entretien de l'espace de travail</li>
            </ul>
          </div>
        </div>

{/* ENI */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={eniVitrolles} alt="ENI Vitrolles" />
            <div className="exp-date-badge">Juin. 2023 – Août. 2023</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">CDD · 3 mois</div>
            <div className="exp-role">Employée polyvalente</div>
            <div className="exp-company">ENI · Vitrolles</div>

            <ul className="exp-tasks">
              <li>Accueil et service clients en station</li>
              <li>Gestion de la caisse et approvisionnement</li>
              <li>Préparation de commandes</li>
              <li>Entretien et propreté de l'espace de vente</li>
            </ul>
          </div>
        </div>

{/* Aromazone */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={aromazone} alt="Aromazone Aix-en-Provence" />
            <div className="exp-date-badge">Oct. 2023</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">Intérimaire</div>
            <div className="exp-role">Consultante beauté</div>
            <div className="exp-company">
              Aromazone · Aix-en-Provence
            </div>

            <ul className="exp-tasks">
              <li>Conseil personnalisé sur les produits cosmétiques et naturels</li>
              <li>Vente et accompagnement des clients en boutique</li>
              <li>Animation du rayon et mise en valeur des produits</li>
              <li>Fidélisation de la clientèle et suivi des besoins</li>
            </ul>
          </div>
        </div>

{/* Oysho */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={oysho} alt="Oysho Aix-en-Provence" />
            <div className="exp-date-badge">Nov. 2023</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">Intérimaire</div>
            <div className="exp-role">Conseillère en prêt-à-porter</div>
            <div className="exp-company">Oysho · Aix-en-Provence</div>

            <ul className="exp-tasks">
              <li>Accueil et conseil client en boutique</li>
              <li>Vente et accompagnement dans le choix des articles</li>
              <li>Gestion de la caisse</li>
              <li>Mise en valeur des produits en magasin</li>
            </ul>
          </div>
        </div>

{/* Utile */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={utile} alt="Utile Vitrolles" />
            <div className="exp-date-badge">Sept. 2023</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">Intérimaire</div>
            <div className="exp-role">Employée libre-service</div>
            <div className="exp-company">Utile · Vitrolles</div>

            <ul className="exp-tasks">
              <li>Mise en rayon des produits</li>
              <li>Gestion de la caisse</li>
              <li>Rangement et organisation des stocks</li>
              <li>Veille à la bonne présentation de l'espace de vente</li>
            </ul>
          </div>
        </div>

{/* Leclerc Vitrolles */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={leclercVitrolles} alt="Leclerc Vitrolles" />
            <div className="exp-date-badge">Sept. 2022 – Janv. 2023</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">CDI étudiant · 5 mois</div>
            <div className="exp-role">Hôtesse de caisse</div>
            <div className="exp-company">Leclerc · Vitrolles</div>

            <ul className="exp-tasks">
              <li>Encaissement et gestion des transactions clients</li>
              <li>Accueil et orientation de la clientèle</li>
              <li>Gestion des files d'attente et fluidité du passage en caisse</li>
              <li>Entretien et propreté de l'espace de vente</li>
            </ul>
          </div>
        </div>

{/* Yoopala */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={yoopala} alt="Yoopala Vitrolles" />
            <div className="exp-date-badge">Sept. 2022 – Oct. 2022</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">CDD · 4 mois</div>
            <div className="exp-role">Garde d'enfants</div>
            <div className="exp-company">Yoopala · Vitrolles</div>

            <ul className="exp-tasks">
              <li>Garde d’enfants à domicile</li>
              <li>Aide à la toilette et au coucher</li>
              <li>Respect des consignes des parents</li>
              <li>Activités ludiques et éducatives</li>
            </ul>
          </div>
        </div>

{/* Leclerc Marignane */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={leclercMarignane} alt="Leclerc Marignane" />
            <div className="exp-date-badge">Août. 2022 – Sept. 2022</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">CDI étudiant · 1 mois</div>
            <div className="exp-role">Employée libre-service</div>
            <div className="exp-company">Leclerc · Marignane</div>

            <ul className="exp-tasks">
              <li>Facing et mise en valeur des produits</li>
              <li>Orientation et accueil des clients</li>
              <li>Gestion des stocks et approvisionnement</li>
              <li>Mise en place et organisation des rayons</li>
            </ul>
          </div>
        </div>

{/* Boulangerie */}
        <div className="exp-card">
          <div className="exp-photo">
            <img src={boulangerie} alt="Boulangerie Vitrolles" />
            <div className="exp-date-badge">Août. 2022</div>
          </div>

          <div className="exp-body">
            <div className="exp-contract">Intérimaire</div>
            <div className="exp-role">Hôtesse de caisse</div>
            <div className="exp-company">Boulangerie · Vitrolles</div>

            <ul className="exp-tasks">
              <li>Encaissement</li>
              <li>Vente de viennoiseries et pâtisseries</li>
              <li>Gestion des files d'attente</li>
              <li>Respect des règles d'hygiène</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience