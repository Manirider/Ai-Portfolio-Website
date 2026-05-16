import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SKILLS } from '../data/skills'
import { StaggerContainer, StaggerItem } from '../animations/variants'

const levelConfig = {
  expert: { width: '100%', color: 'from-blue-400 to-purple-500', label: 'Expert' },
  advanced: { width: '75%', color: 'from-blue-400 to-cyan-400', label: 'Advanced' },
  intermediate: { width: '50%', color: 'from-blue-400 to-blue-300', label: 'Intermediate' },
}

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = SKILLS.map((s) => s.category)
  const filteredSkills = selectedCategory
    ? SKILLS.filter((s) => s.category === selectedCategory)
    : SKILLS

  return (
    <section id="skills" className="relative section-padding bg-gradient-to-b from-black to-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container-custom">
        <StaggerContainer>
          {/* Section title */}
          <StaggerItem className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proficient across multiple technology stacks and domains
            </p>
          </StaggerItem>

          {/* Category filters */}
          <StaggerItem className="flex flex-wrap gap-3 justify-center mb-12">
            <motion.button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-blue-500/20 border border-blue-400/50 text-blue-300'
                  : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/30'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              All
            </motion.button>

            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-500/20 border border-blue-400/50 text-blue-300'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:border-white/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </StaggerItem>

          {/* Skills grid */}
          <div className="space-y-10">
            <AnimatePresence mode="wait">
              {filteredSkills.map((skillGroup, groupIdx) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: groupIdx * 0.08 }}
                >
                  <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                    {skillGroup.category}
                    <span className="text-xs text-gray-500 font-normal ml-auto">{skillGroup.items.length} skills</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {skillGroup.items.map((skill, itemIdx) => {
                      const level = skill.level ? levelConfig[skill.level] : levelConfig.intermediate
                      return (
                        <motion.div
                          key={skill.name}
                          className="group relative"
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: (groupIdx * 0.05) + (itemIdx * 0.03) }}
                          viewport={{ once: true }}
                        >
                          <motion.div
                            className="p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] hover:border-white/25 hover:bg-white/[0.06] transition-all"
                            whileHover={{ y: -2 }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <p className="font-medium text-white text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all">
                                {skill.name}
                              </p>
                              <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">
                                {level.label}
                              </span>
                            </div>

                            {/* Level bar */}
                            <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
                              <motion.div
                                className={`h-full rounded-full bg-gradient-to-r ${level.color}`}
                                initial={{ width: 0 }}
                                whileInView={{ width: level.width }}
                                transition={{ duration: 1, delay: 0.2 + itemIdx * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </motion.div>

                          {/* Glow on hover */}
                          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-xl blur opacity-0 group-hover:opacity-15 -z-10 transition-opacity" />
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
