const NAV_OFFSET = 72
const DURATION = 750

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

export function scrollToId(id: string): void {
  const el = document.getElementById(id)
  if (!el) return

  const start = window.scrollY
  const target = Math.max(
    el.getBoundingClientRect().top + start - NAV_OFFSET,
    0
  )
  const distance = target - start

  if (Math.abs(distance) < 2) {
    window.scrollTo({ top: target })
    return
  }

  let raf = 0
  const t0 = performance.now()

  const cancel = () => {
    cancelAnimationFrame(raf)
    window.removeEventListener('wheel', cancel)
    window.removeEventListener('touchstart', cancel)
  }

  window.addEventListener('wheel', cancel, { once: true })
  window.addEventListener('touchstart', cancel, { once: true })

  const step = (now: number) => {
    const p = Math.min((now - t0) / DURATION, 1)
    window.scrollTo({ top: start + distance * easeInOutCubic(p) })
    if (p < 1) {
      raf = requestAnimationFrame(step)
    } else {
      cancel()
    }
  }

  raf = requestAnimationFrame(step)
}