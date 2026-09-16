import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion'
import Magnetic from './Magnetic'
import HeroMockup from './HeroMockup'
import { ClockIcon, ShieldCheckIcon, MapPinIcon } from './icons'
import { scrollToId } from '../lib/scroll'

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const WA_LINK = 'https://wa.me/5350306119'

const trust = [
  { icon: ClockIcon, label: 'Respuesta el mismo día' },
  { icon: ShieldCheckIcon, label: 'Asesoría sin costo' },
  { icon: MapPinIcon, label: 'A domicilio y remoto' },
]

export default function Hero() {
  const reduced = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const copyY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])

  return (
    <section ref={sectionRef} id="top" className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          variants={container}
          initial={reduced ? false : 'hidden'}
          animate="visible"
          style={!reduced ? { y: copyY } : undefined}
        >
          <motion.h1 variants={item}>
            Tu negocio, <span className="gradient-text">siempre en marcha</span>
          </motion.h1>

          <motion.p variants={item} className="hero-sub">
            Somos el aliado informático de los negocios que quieren funcionar
            sin frenos: <strong>soporte técnico</strong>,{' '}
            <strong>instalación</strong>, <strong>implementación</strong> y{' '}
            <strong>software a la medida</strong> para pymes, cafés, comercios y
            cualquier negocio que quiera informatizar sus procesos.
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <Magnetic>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Hablemos ahora
              </a>
            </Magnetic>
            <a
              href="#servicios"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('servicios')
              }}
              className="btn btn-ghost"
            >
              Ver servicios
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-trust">
            {trust.map((t) => (
              <span className="hero-trust-item" key={t.label}>
                <t.icon size={19} />
                {t.label}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="hero-contact-line">
            <span>Te respondemos hoy ·</span>
            <a href="tel:+5350306119">+53 50306119</a>
            <span>/</span>
            <a href="tel:+5356057547">+53 56057547</a>
          </motion.div>
        </motion.div>

        <div className="hero-media">
          <HeroMockup />
        </div>
      </div>

      <a
        href="#servicios"
        onClick={(e) => {
          e.preventDefault()
          scrollToId('servicios')
        }}
        className="hero-scroll"
        aria-label="Desplazarse a servicios"
      >
        <span>Desliza</span>
        <span className="line" />
      </a>
    </section>
  )
}