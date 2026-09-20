import { useEffect, useState } from 'react'
import { Section, Reveal } from './Section.jsx'

const MESSAGES = [
  'Do NOT attempt unnecessary explanations.',
  'Snacks may help.',
  'Compliments may help.',
  'Give her some time.',
  'Actually nobody knows.',
  'Proceed carefully. 😭',
]

export default function GussaGame() {
  const [hover, setHover] = useState(null)
  const [msgIndex, setMsgIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setMsgIndex((i) => (i + 1) % MESSAGES.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <Section id="understanding">
      <Reveal className="text-center">
        <h2 className="font-hand text-4xl text-rose">Understanding Priya 101</h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
        <Reveal delay={0.1}>
          <div
            onMouseEnter={() => setHover('naraz')}
            onMouseLeave={() => setHover(null)}
            className="paper-card cursor-default p-6 text-center"
          >
            <p className="text-3xl">😒</p>
            <p className="mt-2 font-hand text-2xl font-bold text-plum">NARAZ</p>
            <p className="mt-2 h-5 text-sm font-semibold text-plum/60">
              {hover === 'naraz' ? 'Incorrect answer.' : ''}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div
            onMouseEnter={() => setHover('gussa')}
            onMouseLeave={() => setHover(null)}
            className="paper-card cursor-default p-6 text-center border-2 border-rose"
          >
            <p className="text-3xl">😤</p>
            <p className="mt-2 font-hand text-2xl font-bold text-rose">GUSSA</p>
            <p className="mt-2 h-5 text-sm font-semibold text-rose">
              {hover === 'gussa' ? 'CORRECT. PAY ATTENTION.' : ''}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3} className="mt-10 paper-card p-6 text-center">
        <p className="text-xs font-bold tracking-wide text-plum/60">CURRENT GUSSA LEVEL</p>
        <div className="mt-3 h-4 w-full overflow-hidden rounded-full bg-blush">
          <div
            className="h-full rounded-full bg-rose transition-all duration-1000"
            style={{ width: '80%' }}
          />
        </div>
        <p className="mt-1 text-sm font-bold text-rose">80%</p>
        <p className="mt-4 min-h-[1.5rem] text-plum/80 transition-opacity">{MESSAGES[msgIndex]}</p>
      </Reveal>
    </Section>
  )
}
