export async function initModalEffects(modalContent: HTMLElement | null) {
  if (!modalContent || typeof window === 'undefined') return

  const { gsap } = await import('gsap/all').then((m) => ({ gsap: (m as any).gsap || (m as any).default || m }))

  let ctx: any = null
  try {
    ctx = (gsap as any).context?.(() => {}, modalContent)
  } catch (e) {
    ctx = null
  }

  const border = modalContent.querySelector('.modal-border') as SVGGeometryElement | null
  if (border) {
    try {
      const len = (border as any).getTotalLength?.() || 400
      ;(border as any).style.strokeDasharray = `${len}`
      ;(border as any).style.strokeDashoffset = `${len}`
      gsap.to(border, { strokeDashoffset: 0, duration: 0.75, ease: 'power2.out' })
    } catch (e) {}
  }

  const preview = modalContent.querySelector('.modal-preview') as HTMLElement | null
  if (preview) {
    try {
      const ScrollTriggerModule = await import('gsap/ScrollTrigger')
      const ScrollTrigger = (ScrollTriggerModule as any).default || (gsap as any).ScrollTrigger
      try {
        gsap.registerPlugin(ScrollTrigger)
      } catch (e) {}

      gsap.to(preview, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: modalContent,
          scroller: modalContent,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
        },
      })
    } catch (e) {}
  }

  
  const timelineItems = Array.from(modalContent.querySelectorAll('.modal-timeline .timeline-item')) as HTMLElement[]
  if (timelineItems.length) {
    try {
      const ScrollTriggerModule = await import('gsap/ScrollTrigger')
      const ScrollTrigger = (ScrollTriggerModule as any).default || (gsap as any).ScrollTrigger
      try { gsap.registerPlugin(ScrollTrigger) } catch (e) {}

      gsap.fromTo(
        timelineItems,
        { y: 24, opacity: 0, autoAlpha: 0 },
        {
          y: 0,
          opacity: 1,
          autoAlpha: 1,
          stagger: 0.08,
          ease: 'power2.out',
          duration: 0.6,
          scrollTrigger: {
            trigger: modalContent.querySelector('.modal-timeline'),
            scroller: modalContent,
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: false,
            toggleActions: 'play none none reverse',
          },
        }
      )
    } catch (e) {}
  }

  return () => {
    try {
      if (border) gsap.killTweensOf(border)
      if ((gsap as any).ScrollTrigger) (gsap as any).ScrollTrigger.getAll()?.forEach((t: any) => t.kill())
    } catch (e) {}
    try {
      if (ctx) ctx.revert()
    } catch (e) {}
  }
}

export default { initModalEffects }
