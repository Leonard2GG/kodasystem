import {
  WrenchIcon,
  PlugIcon,
  RocketIcon,
  CodeIcon,
  MessageIcon,
  SearchIcon,
  MapPinIcon,
  ClockIcon,
} from './icons'

const items = [
  { label: 'Soporte técnico', icon: WrenchIcon },
  { label: 'Instalación', icon: PlugIcon },
  { label: 'Implementación', icon: RocketIcon },
  { label: 'Software a la medida', icon: CodeIcon },
  { label: 'Asesoría sin costo', icon: MessageIcon },
  { label: 'Diagnóstico transparente', icon: SearchIcon },
  { label: 'A domicilio y remoto', icon: MapPinIcon },
  { label: 'Respuesta el mismo día', icon: ClockIcon },
]

export default function Marquee() {
  const row = [...items, ...items]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span className="marquee-item" key={`${item.label}-${i}`}>
            {item.label}
            <item.icon size={14} />
          </span>
        ))}
      </div>
    </div>
  )
}