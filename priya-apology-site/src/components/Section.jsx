import { motion } from 'framer-motion'

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`mx-auto max-w-3xl px-4 py-16 sm:py-24 ${className}`}>
      {children}
    </section>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
