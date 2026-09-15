import Reveal from './Reveal'
import { MessageIcon, SearchIcon, WrenchIcon } from './icons'

const steps = [
  {
    icon: MessageIcon,
    title: 'Consulta',
    desc: 'Cuéntanos qué necesitas por teléfono o WhatsApp. Escuchamos tu situación y te orientamos de forma clara, sin costo y sin compromiso.',
  },
  {
    icon: SearchIcon,
    title: 'Diagnóstico',
    desc: 'Revisamos tu equipo, sistema o proceso para encontrar la causa real del problema y proponerte soluciones concretas, antes de tocar nada.',
  },
  {
    icon: WrenchIcon,
    title: 'Solución y respaldo',
    desc: 'Implementamos la solución y nos quedamos a tu lado para que siga funcionando. Soporte continuo cuando lo necesites, con la cercanía que te mereces.',
  },
]

export default function HowWeWork() {
  return (
    <section id="metodo" className="section alt">
      <div className="container">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Cómo trabajamos</span>
            <h2>
              Un proceso claro, <span className="gradient-text">sin sorpresas</span>
            </h2>
            <p>
              Así de simple: hablamos, diagnosticamos y resolvemos. Sin
              tecnicismos innecesarios y con la transparencia que esperas de un
              proveedor de confianza.
            </p>
          </div>
        </Reveal>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} y={36}>
              <article className="step-card">
                <div className="step-head">
                  <span className="tile">
                    <s.icon size={23} />
                  </span>
                  <span className="step-num">0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}