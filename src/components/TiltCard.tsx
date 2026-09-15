import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import type { PointerEvent, ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  max?: number
}

const springs = { stiffness: 260, damping: 26 }

function canHover() {
  return (
    typeof window !== 'undefined' &&
    !!window.matchMedia &&
    window.matchMedia('(hover: hover)').matches
  )
}

export default function TiltCard({ children, className = '', max = 7 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const [enabled] = useState(canHover)
  const active = enabled && !reduced

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), springs)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), springs)

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    px.set(x)
    py.set(y)
    el.style.setProperty('--gx', `${(x * 100).toFixed(1)}%`)
    el.style.setProperty('--gy', `${((y * 0.6 + 0.15) * 100).toFixed(1)}%`)
  }

  function onPointerLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt ${className}`}
      style={active ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
      onPointerMove={active ? onPointerMove : undefined}
      onPointerLeave={active ? onPointerLeave : undefined}
    >
      {children}
      <span className="tilt-glare" aria-hidden="true" />
    </motion.div>
  )
}