import { useState } from 'react'
import { Section, Reveal } from './Section.jsx'

const COMPLIMENTS = [
  "You're genuinely one of the cutest people I know.",
  'Your smile is dangerous.',
  "You're somehow 50% adorable and 50% terrifying.",
  "You're annoying.",
  "Unfortunately, you're also lovable.",
  '10/10 personality.',
  '11/10 friendship.',
  '100/10 Priya.',
]

export default function ChaosSection() {
  const [dismissed, setDismissed] = useState(false)

  return (
    <Section id="chaos">
      <Reveal className="text-center">
        <h2 className="font-hand text-4xl text-rose">Things I Need To Admit</h2>
      </Reveal>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {COMPLIMENTS.map((c, i) => (
          <Reveal key={c} delay={i * 0.05}>
            <div className="paper-card p-4 text-center text-plum text-sm font-semibold">{c}</div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4} className="mt-6 text-center paper-card p-5">
        <p className="text-plum/80">
          And yes, you look ridiculously good when you're dressed up. Don't let that inflate your ego. 😂
        </p>
      </Reveal>

      {/* Visually distinct divider before the goofy friend-only section */}
      <div className="mt-16 flex items-center gap-3 text-plum/40">
        <div className="h-px flex-1 bg-plum/20" />
        <span className="text-xs font-bold tracking-widest">FROM: YOUR IDIOT FRIEND</span>
        <div className="h-px flex-1 bg-plum/20" />
      </div>

      <Reveal delay={0.1} className="mt-8 paper-card p-6 sm:p-8 text-center border-2 border-dashed border-peach bg-peach/20">
        <h3 className="font-hand text-3xl text-rose">OKAY, NOW MY VERY IMPORTANT CONTRIBUTION...</h3>
        <p className="mt-4 font-bold text-plum">Nice boobs, by the way. 😂</p>
        <p className="mt-2 text-plum/70 text-sm">Yes. I said it. No. I am not taking it back.</p>

        <p className="mt-6 font-hand text-3xl text-rose">Chalegi mere saath bra lene? 😭</p>
        <p className="mt-2 text-sm text-plum/70">
          Because apparently being your friend comes with unexpected shopping responsibilities.
        </p>

        <div className="mt-6 mx-auto max-w-xs space-y-1 text-left text-sm">
          <p className="flex justify-between"><span>Normal friendship:</span> <span>✅</span></p>
          <p className="flex justify-between"><span>Emotional support:</span> <span>✅</span></p>
          <p className="flex justify-between"><span>Listening to rants:</span> <span>✅</span></p>
          <p className="flex justify-between"><span>Making you laugh:</span> <span>✅</span></p>
          <p className="flex justify-between"><span>Bra-shopping assistant:</span> <span>Apparently yes. 😭</span></p>
        </div>

        <div className="mt-4 space-y-0.5 text-sm text-plum/70">
          <p>Moral support: 100%</p>
          <p>Fashion expertise: questionable.</p>
          <p>Decision-making ability: absolutely not.</p>
        </div>

        <p className="mt-6 text-plum/60 text-sm">Okay, enough nonsense. Back to the apology. 🥺</p>

        {!dismissed ? (
          <button
            onClick={() => setDismissed(true)}
            className="mt-4 rounded-full bg-plum px-6 py-2.5 text-sm font-bold text-white hover:scale-105 transition-transform"
          >
            I'M DONE WITH THIS IDIOT 🙄
          </button>
        ) : (
          <p className="mt-4 font-hand text-xl text-rose">Fair. I deserved that.</p>
        )}
      </Reveal>
    </Section>
  )
}
