import { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

/**
 * Hook to track if element is in viewport
 */
export function useViewportInView(options = {}) {
  const { ref, inView, entry } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  })

  return { ref, inView, entry }
}

/**
 * Hook to track scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollPosition(currentScrollY)
      setIsScrollingDown(currentScrollY > lastScrollY.current)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { scrollPosition, isScrollingDown }
}

/**
 * Hook to detect scroll direction
 */
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
        return
      }

      setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up')
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollDirection
}

/**
 * Hook to handle window resize
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

/**
 * Hook to detect if device is mobile
 */
export function useIsMobile() {
  const { width } = useWindowSize()
  return width < 768
}

/**
 * Hook to handle mouse move (for interactive effects)
 */
export function useMouseMove() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return mousePosition
}

/**
 * Hook to debounce value changes
 */
export function useDebouncedValue<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

/**
 * Hook to detect reduced motion preference
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return prefersReducedMotion
}

/**
 * Hook to get active section during scroll
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('')
  const observerTarget = useRef<Map<string, HTMLElement>>(new Map())

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '-50% 0px -50% 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
        observerTarget.current.set(id, element)
      }
    })

    return () => {
      observerTarget.current.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [sectionIds])

  return activeSection
}
