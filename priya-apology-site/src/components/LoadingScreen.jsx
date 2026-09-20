import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const MESSAGES = [
  'Collecting courage...',
  'Checking what I did wrong...',
  'Preparing snacks...',
  'Consulting the friendship department...',
  'Calculating Priya\u2019s gussa level...',
  'Searching for a way to make Priya smile...',
]

export default function LoadingScreen({ onEnter }) {
  const [index, setIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (index >= MESSAGES.length - 1) {
      const t = setTimeout(() => setDone(true), 900)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setIndex((i) => i + 1), 750)
    return () => clearTimeout(t)
  }, [index])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-blush via-lavender to-babyblue px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-hand text-3xl sm:text-4xl text-plum mb-6"
      >
        Preparing Priya's Extremely Serious Apology...
      </motion.h1>

      <div className="h-8 relative w-full max-w-md">
        <AnimatePresence mode="wait">
          {!done ? (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-rose font-semibold"
            >
              {MESSAGES[index]}
            </motion.p>
          ) : (
            <motion.p
              key="ready"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-hand text-2xl text-plum"
            >
              Okay. We're ready. 🥺
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {done && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onEnter}
            className="mt-8 rounded-full bg-rose px-8 py-3 font-bold text-white shadow-lg shadow-rose/30"
          >
            ENTER AT YOUR OWN RISK →
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
