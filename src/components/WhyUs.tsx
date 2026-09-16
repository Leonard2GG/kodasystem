import Reveal from './Reveal'
import { CheckIcon } from './icons'

const WA_LINK = 'https://wa.me/5350306119'

const reasons = [
  {
    num: '01',
    title: 'Atención directa',
    desc: 'Hablas con quien te atiende, no con un call center. Entendemos tu negocio porque trabajamos en tu entorno y conocemos tu realidad.',
  },
  {
    num: '02',
    title: 'Transparencia total',
    desc: 'Te explicamos qué ocurre y qué conviene hacer, con opciones y costos claros antes de empezar. Nada de letra pequeña ni sorpresas.',
  },
  {
    num: '03',
    title: 'Soluciones a tu medida',
    desc: 'Cada negocio es distinto: adaptamos soporte, instalaciones y software a tu operación y a tu presupuesto, sin paquetes genéricos.',
  },
  {
    num: '04',
    title: 'Continuidad garantizada',
    desc: 'Trabajamos para que tu negocio siga vendiendo y operando: mínimo tiempo caído, prevención constante y respaldo cuando más lo necesitas.',
  },
]

const points = [
  'Soporte a domicilio y remoto',
  'Instalación y configuración de equipos',
  'Software hecho para tu negocio',
  'Diagnóstico transparente antes de actuar',
  'Precios claros y sin sorpresas',
  'Asesoría sin costo ni compromiso',
]

export default function WhyUs() {
  return (
    <section id="porque" className="section alt">
      <div className="container">
        <div className="why-grid">
          <Reveal>
            <div className="why-copy">
              <span className="eyebrow">Por qué Koda Systems</span>
              <h2>
                Confianza y cercanía en{' '}
                <span className="gradient-text">cada solución</span>
              </h2>
              <p>
                No somos un proveedor lejano que aparece y desaparece. Somos el
                equipo al que le importa que tu negocio funcione hoy, mañana y
                siempre. Por eso trabajamos cerca de ti, explicamos todo y nos
                hacemos responsables del resultado.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Empezar una conversación
              </a>
            </div>
          </Reveal>

          <div className="why-list">
            {reasons.map((r, i) => (
              <Reveal key={r.num} delay={i * 0.07} x={30}>
                <article className="why-card">
                  <span className="num">{r.num}</span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="check-panel">
            <h3>Con Koda Systems, todo lo que necesitas en un solo lugar:</h3>
            <div className="check-grid">
              {points.map((p) => (
                <span className="check-item" key={p}>
                  <CheckIcon size={18} />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}