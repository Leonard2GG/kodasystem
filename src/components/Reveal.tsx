import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  delay?: number
  y?: number
  x?: number
}

export default function Reveal({ children, delay = 0, y = 28, x = 0, ...rest }: RevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y, x }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-64px' }}
      transition={{ duration: 0.75, delay, ease: 'easeOut' }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}