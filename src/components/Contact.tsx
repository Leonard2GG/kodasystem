import Reveal from './Reveal'
import Magnetic from './Magnetic'
import { PhoneIcon, WhatsappIcon } from './icons'

const PHONES = [
  { label: '+53 50306119', href: 'tel:+5350306119' },
  { label: '+53 56057547', href: 'tel:+5356057547' },
]

const WA_LINK = 'https://wa.me/5350306119'

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="contact-stage">
          <Reveal y={36}>
            <div className="contact-card">
              <div className="contact-card-inner">
                <span className="eyebrow">Contacto directo</span>
                <h2 className="contact-title">
                  Hablemos de tu negocio
                </h2>
                <p className="contact-lead">
                  Cuéntanos qué necesitas y te orientamos el mismo día, sin
                  costo ni compromiso.
                </p>

                <div className="contact-actions">
                  <Magnetic>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wa btn-lg"
                    >
                      <WhatsappIcon size={20} /> WhatsApp directo
                    </a>
                  </Magnetic>
                  <a href={PHONES[0].href} className="btn btn-ghost btn-lg">
                    <PhoneIcon size={18} /> Llamar ahora
                  </a>
                </div>

                <div className="contact-phones">
                  <span>Teléfonos:</span>
                  <a href={PHONES[0].href}>
                    <PhoneIcon size={15} /> {PHONES[0].label}
                  </a>
                  <span className="sep">·</span>
                  <a href={PHONES[1].href}>
                    <PhoneIcon size={15} /> {PHONES[1].label}
                  </a>
                </div>

                <p className="contact-foot">
                  Sin costo · Sin compromiso · Diagnóstico gratis. Te
                  respondemos hoy.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}