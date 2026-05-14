import { useEffect, useRef, useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, LucideIcon } from 'lucide-react'
import { ROLE_TITLES, SOCIAL_LINKS } from '../constants'

const socialIconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export const Hero = memo(function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLE_TITLES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    let cleanup: (() => void) | undefined
    let mounted = true
    ;(async () => {
      try {
        const mod = await import('../lib/gsap-effects')
        if (!mounted) return
        const fn = await mod.initHeroEffects(rootRef.current)
        cleanup = fn as (() => void) | undefined
      } catch (_e) {
        // graceful fallback — GSAP is optional
      }
    })()
    return () => {
      mounted = false
      if (cleanup) cleanup()
    }
  }, [])

  return (
    <section
      id="hero"
      ref={(el) => { rootRef.current = el }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      aria-label="Hero introduction"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Gradient mesh blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="hero-blob absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob gpu-accelerated" />
          <div className="hero-blob absolute top-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 gpu-accelerated" />
          <div className="hero-blob absolute -bottom-8 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-pink-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 gpu-accelerated" />
        </div>

        {/* Animated grid */}
        <div className="absolute inset-0 bg-grid opacity-10" />

        {/* Glow effect */}
        <motion.div
          className="hero-spotlight absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full gpu-accelerated"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent rounded-full filter blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            className="text-gray-400 text-base sm:text-lg mb-4 font-medium"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Welcome to my digital space
          </motion.p>

          {/* Main heading */}
          <motion.div
            className="space-y-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-grotesk tracking-tight">
              <span className="block mb-3">
                I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Manikanta
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Rotating role with AnimatePresence */}
          <div className="mb-8 h-12 sm:h-16 md:h-20 flex items-center justify-center" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {ROLE_TITLES[currentRole]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Crafting intelligent solutions at the intersection of AI, ML, and modern software engineering.
            Specialized in building scalable systems that push the boundaries of technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.a
              href="#projects"
              className="group px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="hero-cta-projects"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-lg border border-white/20 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="hero-cta-resume"
            >
              <Download size={20} aria-hidden="true" />
              Resume
            </motion.a>
          </motion.div>

          {/* Social Links — proper icons */}
          <motion.div
            className="flex gap-4 sm:gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            {SOCIAL_LINKS.map((link) => {
              const Icon = socialIconMap[link.icon]
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                  id={`hero-social-${link.icon}`}
                >
                  {Icon && <Icon size={20} />}
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-500">Scroll to explore</p>
          <div className="w-6 h-10 border border-gray-500 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-gray-500 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
})
