import { PhoneIcon, WhatsappIcon, MapPinIcon, ArrowRightIcon } from './icons'

const services = [
  'Soporte técnico',
  'Instalación',
  'Implementación',
  'Creación de software',
]

const nav = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodo', label: 'Cómo trabajamos' },
  { href: '#casos', label: 'Soluciones' },
  { href: '#porque', label: 'Por qué nosotros' },
  { href: '#faq', label: 'Preguntas' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo.svg" alt="Koda Systems" />
            <p>
              Soluciones informáticas para pymes, cafés, comercios y cualquier
              negocio que quiera informatizar sus procesos. Tu operación nunca
              se detiene.
            </p>
            <a href="#contacto" className="card-link" style={{ marginTop: '1.1rem' }}>
              Contáctanos <ArrowRightIcon size={15} />
            </a>
          </div>

          <div>
            <h4>Servicios</h4>
            <ul>
              {services.map((s) => (
                <li key={s}>
                  <a href="#servicios">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Navegación</h4>
            <ul>
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li>
                <a href="tel:+5350306119">
                  <PhoneIcon size={15} /> +53 50306119
                </a>
              </li>
              <li>
                <a href="tel:+5356057547">
                  <PhoneIcon size={15} /> +53 56057547
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5350306119"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsappIcon size={15} /> WhatsApp
                </a>
              </li>
              <li>
                <span>
                  <MapPinIcon size={15} /> Holguín, Cuba
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Koda Systems. Todos los derechos reservados.</span>
          <span className="mono">Tu negocio nunca se detiene</span>
        </div>
      </div>
    </footer>
  )
}