import { useState } from 'react'
import { motion } from 'framer-motion'
import { SKILLS } from '../data/skills'
import { StaggerContainer, StaggerItem } from '../animations/variants'

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
          <div className="space-y-8">
            {filteredSkills.map((skillGroup, groupIdx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: groupIdx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-6 text-white">{skillGroup.category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skillGroup.items.map((skill, itemIdx) => (
                    <motion.div
                      key={skill.name}
                      className="group relative"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (groupIdx * 0.1) + (itemIdx * 0.03) }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 text-center cursor-pointer hover:border-white/30 hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.1, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-2xl mb-2">
                          {skill.level === 'expert' && '⭐⭐⭐'}
                          {skill.level === 'advanced' && '⭐⭐'}
                          {skill.level === 'intermediate' && '⭐'}
                          {!skill.level && '◆'}
                        </div>
                        <p className="font-medium text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                          {skill.name}
                        </p>
                        {skill.level && (
                          <p className="text-xs text-gray-500 mt-2 capitalize">{skill.level}</p>
                        )}
                      </motion.div>

                      {/* Glow on hover */}
                      <motion.div
                        className="absolute -inset-2 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-xl blur opacity-0 group-hover:opacity-20 -z-10 transition-opacity"
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 0.2 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
