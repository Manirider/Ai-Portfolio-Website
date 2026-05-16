import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../data/experience'
import { StaggerContainer, StaggerItem } from '../animations/variants'
import { useRef, useState } from 'react'
import { SplitText } from '../components/SplitText'

function SpotlightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top } = ref.current.getBoundingClientRect()
    setPosition({ x: e.clientX - left, y: e.clientY - top })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </div>
  )
}


export function Achievements() {
  const stats = [
    { label: 'GitHub Repositories', value: '30+', icon: '💻' },
    { label: 'Certifications', value: '15+', icon: '📜' },
    { label: 'Effort Reduced', value: '60%', icon: '⚡' },
    { label: 'Ecosystems Built', value: '1+', icon: '🚀' },
  ]

  return (
    <section id="achievements" className="relative section-padding bg-gradient-to-b from-black to-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container-custom">
        <StaggerContainer>
          {/* Section title */}
          <StaggerItem className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <SplitText text="Achievements & Impact" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block" />
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Milestones and recognition across my career
            </p>
          </StaggerItem>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <SpotlightCard className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 hover:border-white/30 transition-all">
                  <motion.div
                    className="p-6 text-center"
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-3xl mb-2" aria-hidden="true">{stat.icon}</div>
                    <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">{stat.label}</p>
                  </motion.div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </div>

          {/* Achievements list */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {ACHIEVEMENTS.map((achievement, index) => (
                <StaggerItem
                  key={achievement.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SpotlightCard className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 hover:border-white/30 transition-all">
                    <motion.div
                      className="p-6"
                      whileHover={{ scale: 1.01, x: 2 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1" aria-hidden="true">
                          <motion.div
                            className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-600"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold text-white mb-1">
                            {achievement.title}
                          </h3>
                          {achievement.date && (
                            <p className="text-xs text-gray-500 mb-2">{achievement.date}</p>
                          )}
                          <p className="text-gray-300 text-sm mb-3">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </SpotlightCard>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
