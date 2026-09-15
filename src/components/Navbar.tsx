import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { MenuIcon, XIcon } from './icons'
import { scrollToId } from '../lib/scroll'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#metodo', label: 'Cómo trabajamos' },
  { href: '#casos', label: 'Soluciones' },
  { href: '#porque', label: 'Por qué nosotros' },
  { href: '#faq', label: 'Preguntas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onScrollLock = () => setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('scroll', onScrollLock, { passive: true })
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('scroll', onScrollLock)
    }
  }, [open])

  const go = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setOpen(false)
    scrollToId(href.replace('#', ''))
  }

  return (
    <>
      {!reduced && (
        <motion.div className="nav-scroll" style={{ scaleX }} aria-hidden="true" />
      )}

      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <a href="#top" onClick={go('#top')} className="brand" aria-label="Koda Systems, ir al inicio">
              <img src="/logo.svg" alt="Koda Systems" />
            </a>

            <nav aria-label="Principal">
              <ul className="nav-links">
                {links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} onClick={go(l.href)}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="#contacto"
              onClick={go('#contacto')}
              className="btn btn-primary nav-cta desktop-only"
            >
              Hablemos
            </a>

            <button
              type="button"
              className="nav-burger"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              aria-controls="nav-mobile"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <XIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      <nav
        id="nav-mobile"
        className={`nav-mobile ${open ? 'is-open' : ''}`}
        aria-label="Menú móvil"
      >
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={go(l.href)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}