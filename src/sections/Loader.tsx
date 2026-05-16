import { useEffect } from 'react'
import { motion } from 'framer-motion'

export function Loader() {
  useEffect(() => {
    
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const loadingBarVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        delay: 0.5,
      },
    },
  }

  const glowVariants = {
    animate: {
      boxShadow: [
        '0 0 20px rgba(59, 130, 246, 0.5)',
        '0 0 40px rgba(59, 130, 246, 0.8)',
        '0 0 20px rgba(59, 130, 246, 0.5)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <motion.div 
      className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      key="loader"
    >
      
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      
      <motion.div
        className="relative z-10 text-center"
      >
        
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
            variants={glowVariants}
            animate="animate"
          >
            <span className="text-3xl font-bold text-white" aria-hidden="true">MS</span>
          </motion.div>
        </motion.div>

        
        <motion.div variants={itemVariants} className="mb-3">
          <h1 className="text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Manikanta
            </span>
          </h1>
        </motion.div>

        
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-gray-400 text-lg">Crafting the future with code</p>
        </motion.div>

        
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4"
        >
          <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full origin-left"
              variants={loadingBarVariants}
              initial="initial"
              animate="animate"
            />
          </div>

          
          <motion.p
            className="text-sm text-gray-500 font-medium"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            aria-live="polite"
          >
            Loading experience...
          </motion.p>
        </motion.div>
      </motion.div>

      
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          animate={{
            x: [0, (i * 47) % 200 - 100],
            y: [0, (i * 83) % 200 - 100],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            left: `${(i * 31) % 100}%`,
            top: `${(i * 73) % 100}%`,
          }}
          aria-hidden="true"
        />
      ))}
    </motion.div>
  )
}
