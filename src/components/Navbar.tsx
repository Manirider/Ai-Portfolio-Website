import { useState, useEffect, useCallback, memo } from 'react'
import { Menu, X, Github, Linkedin, Mail, LucideIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants'
import { useScrollPosition, useActiveSection } from '../hooks'
import { cn } from '../utils/helpers'

const socialIcons: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
}

export const Navbar = memo(function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollPosition } = useScrollPosition()
  const activeSection = useActiveSection(['hero', 'about', 'skills', 'experience', 'projects', 'contact'])

  useEffect(() => {
    setIsScrolled(scrollPosition > 50)
  }, [scrollPosition])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])
  const closeMenu = useCallback(() => setIsOpen(false), [])

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300',
          isScrolled
            ? 'backdrop-blur-md bg-black/60 border-b border-white/10'
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="#hero"
                className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
                onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
                aria-label="Go to top"
                id="nav-logo"
              >
                MS
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2" role="menubar">
              {NAV_ITEMS.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md',
                    activeSection === item.id
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  )}
                  whileHover={{ y: -1 }}
                  role="menuitem"
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                      layoutId="navbar-underline"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIcons[link.icon]
                return (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors rounded-md"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                    id={`nav-social-${link.icon}`}
                  >
                    {Icon && <Icon size={18} />}
                  </motion.a>
                )
              })}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium hover:shadow-glow transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                id="nav-resume-btn"
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              onClick={toggleMenu}
              whileTap={{ scale: 0.95 }}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              id="mobile-menu-toggle"
            >
              {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 pt-16 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Menu Content */}
            <motion.div
              className="relative bg-black/95 border-b border-white/10 p-6 space-y-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              role="menu"
            >
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'block w-full text-left py-3 px-4 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium',
                    activeSection === item.id && 'text-blue-400 bg-blue-500/10'
                  )}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  role="menuitem"
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </motion.button>
              ))}

              <div className="flex gap-4 pt-4 border-t border-white/10">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = socialIcons[link.icon]
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white transition-colors rounded-md"
                      aria-label={link.label}
                    >
                      {Icon && <Icon size={20} />}
                    </a>
                  )
                })}
              </div>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium mt-4"
                id="mobile-resume-btn"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})
