import { motion } from 'framer-motion'
import { TIMELINE_ITEMS } from '../data/experience'
import { StaggerContainer, StaggerItem } from '../animations/variants'
import { DataStream } from '../components/DataStream'
import { SplitText } from '../components/SplitText'

export function Experience() {
  return (
    <section id="experience" className="relative section-padding bg-gradient-to-b from-black via-black to-black overflow-hidden">
      {/* Background */}
      <DataStream />
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px]" />
      </div>

      <div className="container-custom">
        <StaggerContainer>
          {/* Section title */}
          <StaggerItem className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <SplitText text="Experience & Timeline" className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent inline-block" />
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My journey through education, experience, and achievements
            </p>
          </StaggerItem>

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent shadow-[0_0_15px_rgba(59,130,246,0.3)]" />

            {/* Timeline items */}
            <div className="space-y-12">
              {TIMELINE_ITEMS.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4">
                    <motion.div
                      className="w-full h-full rounded-full border-2 border-blue-400 bg-black"
                      whileInView={{
                        boxShadow: ['0 0 0 0 rgba(59, 130, 246, 0.7)', '0 0 0 8px rgba(59, 130, 246, 0)'],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Content */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
                    <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
                      <motion.div
                        className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 hover:border-white/30 hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.02, y: -4 }}
                      >
                        {/* Date */}
                        <div className={`flex items-center gap-2 mb-3 md:justify-end ${index % 2 !== 0 ? 'md:justify-start' : ''}`}>
                          <span className={`text-sm font-semibold ${
                            item.type === 'education'
                              ? 'text-blue-400'
                              : item.type === 'experience'
                              ? 'text-purple-400'
                              : 'text-pink-400'
                          }`}>
                            {item.date}
                            {item.dateEnd && ` - ${item.dateEnd}`}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>

                        {/* Organization */}
                        <p className="text-sm text-gray-400 mb-3">{item.organization}</p>

                        {/* Description */}
                        <p className="text-gray-300 text-sm mb-3">{item.description}</p>

                        {/* Details */}
                        {item.details && (
                          <ul className={`space-y-2 text-left ${index % 2 === 0 ? 'md:text-right inline-block' : ''}`}>
                            {item.details.map((detail, i) => (
                              <li key={i} className={`text-xs text-gray-400 flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <span className="text-blue-400 mt-1">▸</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
