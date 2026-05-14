import { useState, useRef, useEffect, memo } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects'
import { StaggerContainer, StaggerItem } from '../animations/variants'
import ProjectModal from '../components/ProjectModal'
import { Project } from '../types'
import { SplitText } from '../components/SplitText'
import { LiquidImage } from '../components/LiquidImage'

function TiltCard({ children, onClick, onKeyDown }: { children: React.ReactNode, onClick: () => void, onKeyDown: (e: any) => void }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
    
    // Custom properties for gradient glow trail
    e.currentTarget.style.setProperty('--mx', `${mouseX}px`)
    e.currentTarget.style.setProperty('--my', `${mouseY}px`)
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(0)
    y.set(0)
    e.currentTarget.style.removeProperty('--mx')
    e.currentTarget.style.removeProperty('--my')
  }

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative h-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 overflow-hidden hover:border-white/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 cursor-pointer text-left group"
      whileHover={{
        z: 50,
        boxShadow: '0 30px 60px rgba(59, 130, 246, 0.3)'
      }}
    >
      <div style={{ left: 'var(--mx, -9999px)', top: 'var(--my, -9999px)', transform: 'translateZ(10px)' }} className="pointer-trail absolute w-64 h-64 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none mix-blend-screen">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-blue-500/40 via-purple-500/30 to-transparent blur-[40px]" />
      </div>
      <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }} className="h-full">
        {children}
      </div>
    </motion.div>
  )
}


export const Projects = memo(function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const rootRef = useRef<HTMLElement | null>(null)

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory)

  useEffect(() => {
    let cleanup: (() => void) | undefined
    let mounted = true
    ;(async () => {
      try {
        const mod = await import('../lib/gsap-effects')
        if (!mounted) return
        const fn = await mod.initProjectsEffects(rootRef.current)
        cleanup = fn as (() => void)
      } catch (e) {
        // ignore
      }
    })()
    return () => {
      mounted = false
      if (cleanup) cleanup()
    }
  }, [activeCategory])

  return (
    <section id="projects" ref={(el) => (rootRef.current = el)} className="relative section-padding bg-gradient-to-b from-black to-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container-custom">
        <StaggerContainer>
          {/* Section title */}
          <StaggerItem className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <SplitText text="Featured Projects" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block" />
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcase of my recent work across AI/ML, Web3, and full stack development
            </p>
          </StaggerItem>

          {/* Category filters */}
          <StaggerItem className="flex flex-wrap gap-3 justify-center mb-12">
            {PROJECT_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  activeCategory === cat
                    ? 'bg-blue-500/20 border border-blue-400/50 text-blue-300'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </motion.button>
            ))}
          </StaggerItem>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                  className="h-full perspective-1000"
                >
                  <TiltCard
                    onClick={() => setSelectedProject(project as Project)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        setSelectedProject(project as Project)
                      }
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-600/30 rounded-t-2xl">
                      {project.image ? (
                        <LiquidImage src={project.image} alt={project.title} />
                      ) : (
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center text-6xl opacity-20"
                          whileHover={{ scale: 1.1 }}
                        >
                          📱
                        </motion.div>
                      )}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
                      >
                        {project.links.github && (
                          <motion.a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`GitHub repository for ${project.title}`}
                          >
                            <Github size={20} />
                          </motion.a>
                        )}
                        {project.links.demo && (
                          <motion.a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Live demo for ${project.title}`}
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        )}
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                      {/* Title and category */}
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-lg font-bold text-white">{project.title}</h3>
                          {project.featured && (
                            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        {project.category && (
                          <p className="text-xs text-gray-500">{project.category}</p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-300 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Metrics */}
                      {project.metrics && (
                        <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/10">
                          {project.metrics.map((metric, i) => (
                            <div key={i} className="text-center">
                              <p className="text-xs font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
                                {metric.value}
                              </p>
                              <p className="text-xs text-gray-500">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </StaggerContainer>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  )
})
