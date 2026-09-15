import { useRef, useState } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'

interface MagneticProps {
  children: ReactNode
  className?: string
  strength?: number
}

function canHover() {
  return (
    typeof window !== 'undefined' &&
    !!window.matchMedia &&
    window.matchMedia('(hover: hover)').matches
  )
}

export default function Magnetic({
  children,
  className = '',
  strength = 0.32,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const [enabled] = useState(canHover)
  const active = enabled && !reduced

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 240, damping: 17 })
  const sy = useSpring(my, { stiffness: 240, damping: 17 })

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - (r.left + r.width / 2)) * strength)
    my.set((e.clientY - (r.top + r.height / 2)) * strength)
  }

  function onPointerLeave() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`magnetic ${className}`}
      style={active ? { x: sx, y: sy } : undefined}
      onPointerMove={active ? onPointerMove : undefined}
      onPointerLeave={active ? onPointerLeave : undefined}
    >
      {children}
    </motion.div>
  )
}