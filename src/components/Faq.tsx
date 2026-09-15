import { useState } from 'react'
import Reveal from './Reveal'
import { ChevronDownIcon } from './icons'

const faqs = [
  {
    q: '¿Atienden solo cafés y comercios?',
    a: 'No. Empezamos muy cerca de cafés, restaurantes y tiendas, pero hoy ayudamos a cualquier negocio que quiera informatizar sus procesos: consultorios, escuelas, academias, despachos, almacenes y más.',
  },
  {
    q: '¿Trabajan a domicilio o remoto?',
    a: 'Ambos. Según el problema, podemos atenderte en tu local para instalaciones y hardware, o de forma remota para configuraciones, sistemas y software. Tú eliges la opción más cómoda.',
  },
  {
    q: '¿Cuánto demoran en responderme?',
    a: 'El mismo día. Al escribirnos por WhatsApp o llamarnos respondemos rápido y pasamos sin costo a diagnosticar qué necesitas. Nada de esperar días por una respuesta.',
  },
  {
    q: '¿El diagnóstico tiene algún costo?',
    a: 'No. Escuchamos tu situación, revisamos y te explicamos con claridad qué ocurre y qué opciones tienes, con costos definidos antes de tocar cualquier cosa. Tú decides.',
  },
  {
    q: '¿Pueden crear el software específico para mi negocio?',
    a: 'Sí. Analizamos cómo trabajas y desarrollamos la herramienta que necesitas para organizar tu información, automatizar tareas y vender más. Pensamos en tu operación, no en soluciones genéricas.',
  },
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section alt">
      <div className="container">
        <Reveal>
          <div className="section-head center">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>
              Resolvemos tus dudas <span className="gradient-text">antes de empezar</span>
            </h2>
            <p>
              Estas son las preguntas que más nos hacen. Si tienes otra, escríbenos
              por WhatsApp y te respondemos hoy mismo.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="faq-list">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={item.q}>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {item.q}
                    <span className="faq-icon">
                      <ChevronDownIcon size={17} />
                    </span>
                  </button>
                  <div className="faq-a">
                    <div className="faq-a-inner">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}