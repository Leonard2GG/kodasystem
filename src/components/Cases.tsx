import Reveal from './Reveal'
import { WrenchIcon, StoreIcon, RocketIcon } from './icons'

const cases = [
  {
    icon: StoreIcon,
    num: '01',
    glyph: 'POS',
    grad: 'g1',
    title: 'Café con sistema de ventas',
    desc: 'Punto de venta, facturación e inventario integrados para que el café atienda sin colas, sin errores de caja y con los números siempre al día.',
    tags: ['Implementación', 'POS'],
  },
  {
    icon: RocketIcon,
    num: '02',
    glyph: 'INV',
    grad: 'g2',
    title: 'Comercio con inventario digital',
    desc: 'Control de entradas, salidas y stock en tiempo real. Cada producto sabe dónde está, qué se vende más y qué falta por reponer.',
    tags: ['Software a la medida', 'Inventario'],
  },
  {
    icon: WrenchIcon,
    num: '03',
    glyph: 'FLUJO',
    grad: 'g3',
    title: 'Negocio con procesos automatizados',
    desc: 'Eliminamos tareas repetitivas y unificamos la información para decidir con datos, no con suposiciones. Menos papeleo, más operación.',
    tags: ['Automatización', 'Consultoría'],
  },
]

export default function Cases() {
  return (
    <section id="casos" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Soluciones que ofrecemos</span>
            <h2>
              Ejemplos de lo que <span className="gradient-text">resolvemos</span>
            </h2>
            <p>
              Así ayudamos a negocios como el tuyo a vender más y operar sin
              tropiezos. Cada proyecto es distinto, pero el objetivo siempre es
              el mismo: que tu operación no se detenga.
            </p>
          </div>
        </Reveal>

        <div className="cases-grid">
          {cases.map((c, i) => (
            <Reveal key={c.num} delay={i * 0.08} y={36}>
              <article className="case">
                <div className={`case-thumb ${c.grad}`}>
                  <span className="case-num">{c.num}</span>
                  <span className="case-glyph">{c.glyph}</span>
                  <c.icon size={30} className="case-icon" />
                </div>
                <div className="case-body">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="case-tags">
                    {c.tags.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}