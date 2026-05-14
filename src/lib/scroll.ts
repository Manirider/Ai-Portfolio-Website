// Lenis + GSAP ScrollTrigger integration
// Initializes smooth scrolling and connects GSAP ScrollTrigger to Lenis
export async function initScroll() {
  if (typeof window === 'undefined') return null

  // dynamic imports to keep bundle small and avoid SSR errors
  const [{ default: Lenis }, gsap, ScrollTriggerModule] = await Promise.all([
    import('lenis'),
    import('gsap'),
    import('gsap/ScrollTrigger'),
  ])

  const ScrollTrigger = ScrollTriggerModule.default || (gsap as any).ScrollTrigger

  try {
    if (gsap && ScrollTrigger) {
      ;(gsap as any).registerPlugin(ScrollTrigger)
    }
  } catch (err) {
    // ignore plugin registration errors
  }

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    lerp: 0.1,
    // cast options to any to avoid mismatched Lenis typings in this environment
  } as any)

  function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Connect ScrollTrigger to Lenis
  try {
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value?: number) {
        if (arguments.length && typeof value === 'number') {
          ;(lenis as any).scrollTo(value)
        }
        return window.scrollY
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
      },
      pinType: document.documentElement.style.transform ? 'transform' : 'fixed',
    })

    ScrollTrigger.addEventListener('refresh', () => (lenis as any).update())
    setTimeout(() => ScrollTrigger.refresh(), 0)
  } catch (err) {
    // If ScrollTrigger not available or scrollerProxy fails, skip
  }

  return lenis
}

export default initScroll
