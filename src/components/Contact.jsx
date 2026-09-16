import './Contact.css'

function Contact() {
  return (
    <section id="contact">
    <div className="cta-wrap rev">
    <div className="cta-grid-deco"></div>
    <div className="cta-big">Prêts à <em>collaborer ?</em></div>
    <p className="cta-sub">
              Disponible pour une alternance dès maintenant sur Marseille et ses environs.
              N'hésitez pas à me contacter, je réponds rapidement.
            </p>
    <div className="cta-links">
    <a className="c-link" href="mailto:skatniines@gmail.com">✉ skatniines@gmail.com</a>
    <a className="c-link" href="tel:0611896544">📞 06 11 89 65 44</a>
    <a className="c-link" href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">💼 LinkedIn</a>
    <a className="c-link" download href="/cv/cvInesSkatni.pdf">⬇ Télécharger le CV</a>
    </div>
    </div>
    </section>
  )
}

export default Contact
