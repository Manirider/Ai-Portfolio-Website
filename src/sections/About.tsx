import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem } from '../animations/variants'
import { SplitText } from '../components/SplitText'

export function About() {
  return (
    <section id="about" className="relative section-padding bg-gradient-to-b from-black via-black to-black overflow-hidden">
      
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container-custom">
        <StaggerContainer>
          
          <StaggerItem className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Engineering intelligent products with AI, MLOps, and Web3.
            </p>
          </StaggerItem>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <StaggerItem>
              <motion.div
                className="relative group h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                
                <motion.div
                  className="relative rounded-2xl p-[3px] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="rounded-2xl overflow-hidden bg-black">
                    <img
                      src="/profile.png"
                      alt="Manikanta Suryasai Sunkara"
                      className="w-full max-w-[400px] h-auto object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                </motion.div>
                
                
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-[80px] rounded-full" />
              </motion.div>
            </StaggerItem>

            
            <StaggerItem className="space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI/ML Engineer & Full Stack Developer</h3>
                <SplitText
                  text="I am an AI/ML Engineer and Full Stack Developer focused on building production-grade intelligent systems, scalable backend architectures, and immersive digital experiences. My work spans across AI/ML, MLOps, Full Stack Development, Blockchain, and Enterprise Automation systems."
                  className="text-gray-300 leading-relaxed mb-4"
                  delay={0.2}
                />
                <SplitText
                  text="Currently pursuing B.Tech in AI & ML at Aditya College, I actively build real-world systems involving NLP, MLOps pipelines, semantic search, smart contract security, and decentralized governance platforms. I enjoy combining engineering, system design, and product thinking to create impactful software solutions that feel modern, scalable, and user-centric."
                  className="text-gray-300 leading-relaxed"
                  delay={0.6}
                />
              </div>

              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'GitHub Repos', value: '30+' },
                  { label: 'Certifications', value: '15+' },
                  { label: 'Languages', value: '6+' },
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

              
              <div className="space-y-3 pt-4">
                {[
                  'Building AI-powered systems with scalable engineering',
                  'Core EDC member mentoring juniors and startup ideas',
                  'Awarded for Smart Transportation Prototype',
                  'Developing "Life OS" startup ecosystem',
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
