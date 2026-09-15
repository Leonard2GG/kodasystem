import Reveal from './Reveal'

const stats = [
  {
    meta: 'Respuesta',
    value: 'Mismo día',
    accent: 'día',
    label: 'Escribes y respondemos rápido. Sin esperas ni formularios eternos.',
  },
  {
    meta: 'Proceso',
    value: '3 pasos',
    accent: 'pasos',
    label: 'Consulta, diagnóstico y solución. Simple y transparente.',
  },
  {
    meta: 'Cobertura',
    value: 'Todo-en-uno',
    accent: 'uno',
    label: 'Soporte, instalación, implementación y software bajo un mismo techo.',
  },
  {
    meta: 'Confianza',
    value: '100%',
    accent: '',
    label: 'Explicamos cada cosa y definimos los costos antes de empezar.',
  },
]

export default function Stats() {
  return (
    <section className="stats" aria-label="Nuestras ventajas en cifras">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat" key={s.value}>
              <Reveal delay={i * 0.06}>
                <span className="stat-meta">{s.meta}</span>
                <div className="stat-value">
                  {s.accent ? (
                    <>
                      {s.value.replace(s.accent, '')}
                      <span className="stat-accent">{s.accent}</span>
                    </>
                  ) : (
                    s.value
                  )}
                </div>
                <p className="stat-label">{s.label}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}