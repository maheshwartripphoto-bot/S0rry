import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import { Section, Reveal } from './Section.jsx'

const STAGE_MESSAGES = ['Okay...', 'Okay...', "I think we're getting somewhere. 🥹❤️"]

export default function HeartGame() {
  const [taps, setTaps] = useState(0)
  const size = Math.min(70 + taps * 8, 220)
  const stage = Math.min(Math.floor(taps / 3), STAGE_MESSAGES.length - 1)
  const showConfetti = taps >= 9

  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 24 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.6,
        emoji: ['❤️', '🎉', '✨'][i % 3],
      })),
    [showConfetti]
  )

  return (
    <Section id="heart-game" className="text-center relative overflow-hidden">
      <Reveal>
        <h2 className="font-hand text-3xl font-bold text-plum">Tap the heart if we're okay ❤️</h2>
      </Reveal>

      <div className="mt-10 flex justify-center">
        <motion.button
          onClick={() => setTaps((t) => t + 1)}
          whileTap={{ scale: 0.9 }}
          aria-label="Tap the heart"
          className="flex items-center justify-center"
        >
          <Heart
            style={{ width: size, height: size, transition: 'width 0.25s, height 0.25s' }}
            className="fill-rose text-rose drop-shadow-lg"
          />
        </motion.button>
      </div>

      {taps > 0 && (
        <p className="mt-6 font-hand text-2xl text-plum">{STAGE_MESSAGES[stage]}</p>
      )}

      <AnimatePresence>
        {showConfetti && (
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {confettiPieces.map((p) => (
              <motion.span
                key={p.id}
                initial={{ y: -20, opacity: 1 }}
                animate={{ y: 400, opacity: 0 }}
                transition={{ duration: 2.2, delay: p.delay, repeat: Infinity }}
                style={{ position: 'absolute', left: `${p.left}%`, top: 0, fontSize: 20 }}
              >
                {p.emoji}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>
    </Section>
  )
}
