import Reveal from './Reveal'
import { QuoteIcon, StarIcon } from './icons'

const testimonials = [
  {
    quote:
      'Cada vez que fallaba la caja, parábamos las ventas. Con Koda Systems el sistema simplemente funciona, y para un café eso vale oro.',
    name: 'Propietario',
    role: 'Café · Holguín',
    initial: 'C',
  },
  {
    quote:
      'Todo transparente desde el primer día: me explicaron qué pasaba, cuánto costaba y me acompañaron hasta que quedó funcionando.',
    name: 'Administradora',
    role: 'Comercio · Holguín',
    initial: 'A',
  },
  {
    quote:
      'Nos automatizaron el inventario y dejamos de perder horas contando a mano. Hoy veo los números de mi negocio en minutos.',
    name: 'Responsable',
    role: 'Despacho · Holguín',
    initial: 'R',
  },
]

export default function Testimonials() {
  return (
    <section id="opiniones" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Confianza</span>
            <h2>
              Quienes trabajan con nosotros, <span className="gradient-text">lo notan</span>
            </h2>
            <p>
              La mejor prueba de nuestro trabajo es la cercanía con la que
              atendemos cada negocio. Estas son algunas experiencias típicas de
              nuestros clientes.
            </p>
          </div>
        </Reveal>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <Reveal key={t.role} delay={i * 0.08} y={36}>
              <article className="testi">
                <div className="testi-top">
                  <span className="testi-quote">
                    <QuoteIcon size={28} />
                  </span>
                  <span className="testi-stars">
                    {Array.from({ length: 5 }).map((_, n) => (
                      <StarIcon key={n} size={14} />
                    ))}
                  </span>
                </div>
                <p>“{t.quote}”</p>
                <div className="testi-person">
                  <span className="testi-avatar">{t.initial}</span>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="testi-note">
            Puedes pedirnos referencias verificables de negocios reales cuando
            hablemos. Compartimos contactos con gusto.
          </p>
        </Reveal>
      </div>
    </section>
  )
}