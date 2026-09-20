import { AnimatePresence, motion } from 'framer-motion'

export default function EasterEggToast({ message }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-16 z-50 flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            className="paper-card pointer-events-auto max-w-sm px-5 py-3 text-center font-semibold text-plum"
          >
            {message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
