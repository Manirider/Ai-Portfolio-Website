
export async function initHeroEffects(root: HTMLElement | null) {
  if (!root || typeof window === 'undefined') return

  const [{ gsap }, ScrollTriggerModule] = await Promise.all([
    import('gsap/all').then((m) => ({ gsap: m.gsap || (m as any).default || m })),
    import('gsap/ScrollTrigger'),
  ])

  const ScrollTrigger = (ScrollTriggerModule as any).default || (gsap as any).ScrollTrigger
  try {
    gsap.registerPlugin(ScrollTrigger)
  } catch (e) {}

  const blobs = Array.from(root.querySelectorAll('.hero-blob')) as HTMLElement[]
  const spotlight = root.querySelector('.hero-spotlight') as HTMLElement | null

  
  blobs.forEach((blob, i) => {
    gsap.to(blob, {
      y: (i % 2 === 0 ? -80 : 80),
      x: (i % 2 === 0 ? 40 : -40),
      rotation: (i % 2 === 0 ? 2 : -2),
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.6,
      },
    })
  })

  
  if (spotlight) {
    gsap.to(spotlight, {
      scale: 1.05,
      opacity: 0.9,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: root,
        start: 'top center',
        end: 'bottom top',
        scrub: 0.8,
      },
    })
  }

  return () => {
    try {
      ScrollTrigger.getAll().forEach((t: any) => t.kill())
    } catch (e) {}
  }
}

export async function initProjectsEffects(root: HTMLElement | null) {
  if (!root || typeof window === 'undefined') return

  const [{ gsap }, ScrollTriggerModule] = await Promise.all([
    import('gsap/all').then((m) => ({ gsap: m.gsap || (m as any).default || m })),
    import('gsap/ScrollTrigger'),
  ])

  const ScrollTrigger = (ScrollTriggerModule as any).default || (gsap as any).ScrollTrigger
  try {
    gsap.registerPlugin(ScrollTrigger)
  } catch (e) {}

  const cards = Array.from(root.querySelectorAll('.project-card')) as HTMLElement[]

  gsap.fromTo(
    cards,
    { y: 40, opacity: 0, scale: 0.98 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.08,
      ease: 'power2.out',
      duration: 0.8,
      scrollTrigger: {
        trigger: root,
        start: 'top 80%',
        end: 'bottom 60%',
        scrub: false,
        toggleActions: 'play none none reverse',
      },
    }
  )

  
  return () => {
    try {
      ScrollTrigger.getAll().forEach((t: any) => t.kill())
    } catch (e) {}
  }
}

export default { initHeroEffects, initProjectsEffects }
