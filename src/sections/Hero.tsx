import { useEffect, useRef, useState, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail, LucideIcon } from 'lucide-react'
import { ROLE_TITLES, SOCIAL_LINKS } from '../constants'
import Scene3D from '../components/Scene3D'
import { MagneticButton } from '../components/MagneticButton'

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

  return (
    <section
      id="home"
      ref={(el) => { rootRef.current = el }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero introduction"
    >
      <Scene3D />

      {/* Content */}
      <div className="container-custom relative z-10 pt-20 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center pointer-events-auto">
          {/* Greeting */}
          <motion.p
            className="text-gray-300 text-base sm:text-lg mb-4 font-medium tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Welcome to the future
          </motion.p>

          {/* Main heading */}
          <motion.div
            className="space-y-2 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-grotesk tracking-tighter drop-shadow-2xl">
              <span className="block mb-3 text-white">
                I&apos;m{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-xl">
                  Manikanta
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Rotating role with AnimatePresence */}
          <div className="mb-8 h-12 sm:h-16 md:h-20 flex items-center justify-center drop-shadow-lg" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentRole}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-gradient-to-r from-blue-300 to-purple-500 bg-clip-text"
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
            className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 drop-shadow-md backdrop-blur-sm bg-black/10 p-4 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Building cinematic, ultra-performant AI & Web3 platforms at FAANG standards. 
            Welcome to my production-grade immersive 3D portfolio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <MagneticButton>
              <motion.a
                href="#projects"
                className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-700 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] transition-all relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                id="hero-cta-projects"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Explore Projects
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </motion.a>
            </MagneticButton>

            <MagneticButton>
              <motion.a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                id="hero-cta-resume"
              >
                <Download size={20} aria-hidden="true" />
                Resume
              </motion.a>
            </MagneticButton>
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
                  className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-white/40 hover:bg-white/20 transition-all hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                  id={`hero-social-${link.icon}`}
                >
                  {Icon && <Icon size={24} />}
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 pointer-events-auto"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs tracking-widest uppercase text-gray-400 drop-shadow-md">Scroll to explore</p>
          <div className="w-6 h-10 border border-gray-400 rounded-full flex items-start justify-center p-2 opacity-50 backdrop-blur-sm">
            <motion.div
              className="w-1 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
})
