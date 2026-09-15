const WEEK: { d: string; h: number }[] = [
  { d: 'L', h: 42 },
  { d: 'M', h: 58 },
  { d: 'X', h: 38 },
  { d: 'J', h: 74 },
  { d: 'V', h: 62 },
  { d: 'S', h: 88 },
  { d: 'D', h: 96 },
]

const SALES = [
  { label: 'Café con leche', price: '$180' },
  { label: 'Desayuno turista', price: '$540' },
  { label: 'Bocadito + café', price: '$260' },
]

function Kpi({ label, value, trend, tone }: { label: string; value: string; trend?: string; tone?: string }) {
  return (
    <div className="kpi">
      <span className="kpi-label">{label}</span>
      <strong>{value}</strong>
      {trend && <em className={tone === 'ok' ? 'ok' : 'up'}>{trend}</em>}
    </div>
  )
}

export default function HeroMockup() {
  return (
    <div className="mockup" aria-hidden="true">
      <div className="mockup-tilt">
        <div className="mockup-screen">
          <div className="mockup-bar">
            <span className="mockup-dots">
              <i />
              <i />
              <i />
            </span>
            <span className="mockup-url">kodasystems.app/caja</span>
          </div>

          <div className="mockup-body">
            <aside className="mockup-side">
              <span className="mockup-logo">K</span>
              <ul>
                <li className="is-active">Caja</li>
                <li>Productos</li>
                <li>Ventas</li>
                <li>Clientes</li>
                <li>Reportes</li>
              </ul>
            </aside>

            <div className="mockup-main">
              <header className="mockup-head">
                <div>
                  <strong>Buenos días, Koda 👋</strong>
                  <span>Café Central · Holguín</span>
                </div>
                <span className="mockup-badge">
                  <i /> En línea
                </span>
              </header>

              <div className="mockup-kpis">
                <Kpi label="Caja del día" value="$12,400" trend="+18%" />
                <Kpi label="Ventas hoy" value="84" trend="+12%" />
                <Kpi label="Tickets abiertos" value="2" tone="ok" trend="resueltos" />
              </div>

              <div className="mockup-split">
                <div className="mockup-chart">
                  <span className="ch-label">Ventas de la semana</span>
                  <div className="bars">
                    {WEEK.map((b, i) => (
                      <div className="bar-wrap" key={b.d + i}>
                        <i className={i === WEEK.length - 1 ? 'is-today' : ''} style={{ height: `${b.h}%` }} />
                        <span>{b.d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mockup-list">
                  <span className="ch-label">Últimas ventas</span>
                  <ul>
                    {SALES.map((s) => (
                      <li key={s.label}>
                        <span>{s.label}</span>
                        <b>{s.price}</b>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mockup-base">
          <span className="mockup-notch" />
        </div>
      </div>
    </div>
  )
}