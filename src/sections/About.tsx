import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem } from '../animations/variants'
import { SplitText } from '../components/SplitText'
import { TechCloud } from '../components/TechCloud'

export function About() {
  return (
    <section id="about" className="relative section-padding bg-gradient-to-b from-black via-black to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container-custom">
        <StaggerContainer>
          {/* Section title */}
          <StaggerItem className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A passionate engineer building intelligent systems
            </p>
          </StaggerItem>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <StaggerItem>
              <motion.div
                className="relative group h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                {/* 3D Tech Cloud */}
                <TechCloud />
                
                {/* Decorative background glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-[100px] rounded-full" />
              </motion.div>
            </StaggerItem>

            {/* Right: Content */}
            <StaggerItem className="space-y-6">
              {/* Bio */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Engineer & Problem Solver</h3>
                <SplitText
                  text="With a passion for building intelligent systems, I specialize in crafting solutions that combine cutting-edge AI/ML with robust software engineering principles. My journey has taken me through research, startups, and large-scale production systems."
                  className="text-gray-300 leading-relaxed mb-4"
                  delay={0.2}
                />
                <SplitText
                  text="I believe in writing clean, maintainable code and designing systems that scale. Whether it's training transformers, optimizing ML pipelines, or building full-stack applications, I approach every challenge with curiosity and precision."
                  className="text-gray-300 leading-relaxed"
                  delay={0.6}
                />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Projects', value: '20+' },
                  { label: 'Experience', value: '5yrs' },
                  { label: 'Languages', value: '8+' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    className="p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-center hover:bg-white/10 hover:border-white/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Key values */}
              <div className="space-y-3 pt-4">
                {[
                  'Passionate about AI/ML and emerging technologies',
                  'Focused on building scalable and maintainable systems',
                  'Strong advocate for clean code and best practices',
                  'Always learning and staying updated with tech trends',
                ].map((value, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-blue-400 mt-1 group-hover:scale-125 transition-transform">✓</span>
                    <span className="text-gray-300">{value}</span>
                  </motion.div>
                ))}
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
