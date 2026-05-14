import { useEffect, useRef, useCallback, memo } from 'react'
import { motion } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'
import { Project } from '../types'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default memo(function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null)
  const previousActiveRef = useRef<HTMLElement | null>(null)

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  // Focus management & Escape key
  useEffect(() => {
    if (!project) return

    previousActiveRef.current = document.activeElement as HTMLElement | null

    // Focus the close button inside modal
    requestAnimationFrame(() => {
      const closeBtn = modalRef.current?.querySelector<HTMLElement>('[data-modal-close]')
      closeBtn?.focus()
    })

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
        return
      }

      // Trap focus inside modal
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    // Lock body scroll
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      // Restore focus
      try { previousActiveRef.current?.focus() } catch (_e) { /* noop */ }
    }
  }, [project, handleClose])

  // GSAP border animation (progressive enhancement)
  useEffect(() => {
    if (!project || !modalRef.current) return
    let cleanup: (() => void) | undefined

    ;(async () => {
      try {
        const mod = await import('../lib/gsap-modal-effects')
        const fn = await mod.initModalEffects(modalRef.current)
        cleanup = fn as (() => void) | undefined
      } catch (_e) {
        // GSAP optional — modal works without it
      }
    })()

    return () => { if (cleanup) cleanup() }
  }, [project])

  if (!project) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

      {/* Modal Content */}
      <motion.div
        ref={modalRef}
        className="relative z-10 max-w-4xl w-full bg-gradient-to-br from-gray-900/95 to-gray-950/95 rounded-2xl border border-white/10 overflow-hidden shadow-2xl max-h-[85vh] flex flex-col"
        initial={{ y: 40, opacity: 0, scale: 0.97 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 20, opacity: 0, scale: 0.97 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* SVG border decoration */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <rect className="modal-border" x="1" y="1" width="98" height="98" rx="6" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
        </svg>

        {/* Header with close button */}
        <div className="flex items-start justify-between gap-4 p-6 md:p-8 pb-0">
          <div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
            {project.category && (
              <p className="text-sm text-gray-400 mt-1">{project.category}</p>
            )}
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                id="modal-link-demo"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Live Demo
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-300 hover:text-white transition-colors"
                id="modal-link-github"
              >
                <Github size={14} aria-hidden="true" />
                Code
              </a>
            )}
            <button
              onClick={handleClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              aria-label="Close dialog"
              data-modal-close
              id="modal-close-btn"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="p-6 md:p-8 pt-4 overflow-y-auto flex-1" id="modal-desc">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Preview image */}
            <div className="modal-preview h-48 sm:h-60 bg-gradient-to-br from-blue-600/20 to-purple-600/10 rounded-lg flex items-center justify-center overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl text-white/20" aria-hidden="true">
                  📱
                </div>
              )}
            </div>

            {/* Details */}
            <div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {project.longDescription || project.description}
              </p>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Metrics */}
              {project.metrics && project.metrics.length > 0 && (
                <div className="mt-6 grid grid-cols-3 gap-4" aria-label="Project metrics">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="text-center p-2 rounded-lg bg-white/3">
                      <p className="font-bold text-base sm:text-lg text-white">{m.value}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 md:p-8 pt-0 flex justify-end">
          <button
            onClick={handleClose}
            className="px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors text-sm font-medium border border-white/10"
            id="modal-footer-close"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
})
