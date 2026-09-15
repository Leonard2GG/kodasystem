import { WhatsappIcon } from './icons'

const WA_LINK = 'https://wa.me/5350306119'

export default function WhatsAppFab() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Escríbenos por WhatsApp"
    >
      <span className="wa-label">¿Hablamos?</span>
      <WhatsappIcon size={28} />
    </a>
  )
}