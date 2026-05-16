import { useState, useEffect, lazy, Suspense } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Loader } from './sections/Loader'
import { Navbar } from './components/Navbar'
import { Hero } from './sections/Hero'

// Lazy load below-the-fold sections for better LCP
const About = lazy(() => import('./sections/About').then(m => ({ default: m.About })))
const Skills = lazy(() => import('./sections/Skills').then(m => ({ default: m.Skills })))
const Experience = lazy(() => import('./sections/Experience').then(m => ({ default: m.Experience })))
const Projects = lazy(() => import('./sections/Projects').then(m => ({ default: m.Projects })))
const Achievements = lazy(() => import('./sections/Achievements').then(m => ({ default: m.Achievements })))
const Contact = lazy(() => import('./sections/Contact').then(m => ({ default: m.Contact })))
const Footer = lazy(() => import('./sections/Footer').then(m => ({ default: m.Footer })))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            key="main-content"
            className="min-h-screen bg-black text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Navbar />
            <main>
              <Hero />
              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Achievements />
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App

