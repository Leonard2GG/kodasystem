import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { WrenchIcon, PlugIcon, RocketIcon, CodeIcon, ArrowRightIcon } from './icons'

const WA_LINK = 'https://wa.me/5350306119'

const services = [
  {
    icon: WrenchIcon,
    num: '01',
    title: 'Soporte técnico',
    desc: 'Cuida la salud informática de tu negocio: soporte a domicilio y remoto, reparaciones, mantenimiento y prevención. Nos ocupamos de que una falla no se convierta en un día de ventas perdido.',
    tags: ['A domicilio', 'Remoto', 'Mantenimiento'],
  },
  {
    icon: PlugIcon,
    num: '02',
    title: 'Instalación',
    desc: 'Equipos, impresoras, sistemas operativos y periféricos configurados y probados. Llegas, enciendes y trabajas.',
    tags: ['Equipos', 'Impresoras', 'Periféricos'],
  },
  {
    icon: RocketIcon,
    num: '03',
    title: 'Implementación',
    desc: 'Sistemas y soluciones que se adaptan a cómo trabajas, con acompañamiento durante todo el proceso para que nada quede a medias.',
    tags: ['Sistemas', 'POS', 'Acompañamiento'],
  },
  {
    icon: CodeIcon,
    num: '04',
    title: 'Creación de software',
    desc: 'Desarrollamos software a la medida para automatizar tareas, organizar tu información y vender más. Tú piensas el proceso; nosotros lo convertimos en tu herramienta de trabajo.',
    tags: ['Inventario', 'Ventas', 'Automatización'],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Servicios</span>
            <h2>
              Tu tecnología, <span className="gradient-text">a punto</span> en
              todo momento
            </h2>
            <p>
              Todo lo que tu negocio necesita para no perder tiempo, ventas ni
              clientes por culpa de la informática. Tú te enfocas en crecer;
              nosotros nos encargamos de que todo funcione.
            </p>
          </div>
        </Reveal>

        <div className="bento-grid">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={(i % 2) * 0.08} y={36}>
              <TiltCard>
                <article className="bento">
                  <span className="bento-num">{s.num}</span>
                  <div className="tile">
                    <s.icon size={26} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="bento-tags">
                    {s.tags.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    Hablemos de esto <ArrowRightIcon size={16} />
                  </a>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}