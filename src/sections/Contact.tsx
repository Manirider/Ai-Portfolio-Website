import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageSquare } from 'lucide-react'
import { StaggerContainer, StaggerItem } from '../animations/variants'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="relative section-padding bg-gradient-to-b from-black to-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container-custom">
        <StaggerContainer>
          {/* Section title */}
          <StaggerItem className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-grotesk mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Get in Touch
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Let&apos;s collaborate and build something amazing together
            </p>
          </StaggerItem>

          {/* Contact options and form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Contact methods */}
            <StaggerItem className="lg:col-span-1 space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'manikanta@example.com',
                  href: 'mailto:manikanta@example.com',
                },
                {
                  icon: MessageSquare,
                  label: 'Message',
                  value: 'Available for projects',
                  href: '#contact-form',
                },
              ].map((method, i) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={i}
                    href={method.href}
                    className="p-4 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 hover:border-white/30 hover:bg-white/10 transition-all group"
                    whileHover={{ scale: 1.05, x: 4 }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm font-semibold text-white">{method.label}</p>
                        <p className="text-xs text-gray-400">{method.value}</p>
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </StaggerItem>

            {/* Contact form */}
            <StaggerItem className="lg:col-span-2">
              <motion.form
                id="contact-form"
                onSubmit={handleSubmit}
                className="p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 space-y-4"
                whileHover={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                {/* Name input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Email input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Message input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="Tell me about your project..."
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-glow transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        ⏳
                      </motion.span>
                      Sending...
                    </>
                  ) : submitted ? (
                    <>
                      <span>✓</span>
                      Message sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}
