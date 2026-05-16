import { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'



export const fadeInVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const slideUpVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const slideInLeftVariants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
}

export const slideInRightVariants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
}

export const scaleInVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

export const staggerContainerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}



export const smoothTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
}

export const easeOutTransition = {
  type: 'tween',
  duration: 0.6,
  ease: 'easeOut',
}

export const easeInOutTransition = {
  type: 'tween',
  duration: 0.6,
  ease: 'easeInOut',
}



interface AnimatedDivProps extends MotionProps {
  children: ReactNode
  className?: string
  variant?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn'
}

export const AnimatedDiv: React.FC<AnimatedDivProps> = ({
  children,
  className = '',
  variant = 'fadeIn',
  ...props
}) => {
  const variants: Record<string, any> = {
    fadeIn: fadeInVariants,
    slideUp: slideUpVariants,
    slideInLeft: slideInLeftVariants,
    slideInRight: slideInRightVariants,
    scaleIn: scaleInVariants,
  }

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={variants[variant]}
      transition={easeOutTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps extends MotionProps {
  children: ReactNode
  className?: string
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true, margin: '0px 0px -50px 0px' }}
      variants={staggerContainerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps extends MotionProps {
  children: ReactNode
  className?: string
  variant?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleIn'
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  variant = 'slideUp',
  ...props
}) => {
  const variants: Record<string, any> = {
    fadeIn: fadeInVariants,
    slideUp: slideUpVariants,
    slideInLeft: slideInLeftVariants,
    slideInRight: slideInRightVariants,
    scaleIn: scaleInVariants,
  }

  return (
    <motion.div
      variants={variants[variant]}
      transition={easeOutTransition}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
