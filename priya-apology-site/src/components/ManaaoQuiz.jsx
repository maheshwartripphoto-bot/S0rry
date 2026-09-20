import { useState } from 'react'
import { Section, Reveal } from './Section.jsx'

const Q1_OPTIONS = ['🍫 Chocolate', '🍕 Food', '😂 Make me laugh', '🫂 Proper apology', '😶 Give me some time', '👀 Something else']
const Q2_OPTIONS = ['A. Talk normally', 'B. Say sorry 17 times', 'C. Bring food', 'D. Let Priya decide', 'E. Combination of everything']
const Q4_OPTIONS = ['Say sorry properly.', 'Make me laugh.', 'Talk to me.', 'Give me some time.', 'Make it up to me.', 'Other.']

function ChoiceGrid({ options, selected, onSelect }) {
  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors ${
            selected === opt ? 'bg-rose text-white' : 'bg-white text-plum hover:bg-blush'
          } paper-card`}
        >
          {opt}
        </button>
      ))}
    </div>
  )
}

function gussaLabel(v) {
  if (v <= 5) return 'Peace has returned 🕊️'
  if (v < 60) return 'Still dangerous 😐'
  return 'RUN. 😭'
}

export default function ManaaoQuiz() {
  const [q1, setQ1] = useState(null)
  const [q2, setQ2] = useState(null)
  const [q3, setQ3] = useState(50)
  const [q4, setQ4] = useState(null)
  const [otherText, setOtherText] = useState('')
  const [showPlan, setShowPlan] = useState(false)

  const allAnswered = q1 && q2 && q4

  return (
    <Section id="manaao">
      <Reveal className="text-center">
        <h2 className="font-hand text-3xl text-plum">Okay, serious question.</h2>
        <p className="font-hand text-5xl font-bold text-rose">HOW DO I MANAA YOU?</p>
        <p className="mt-2 text-plum/70">Because clearly I need instructions.</p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 paper-card p-6 sm:p-8">
        <p className="font-bold text-plum">1. What would reduce your gussa by at least 10%?</p>
        <ChoiceGrid options={Q1_OPTIONS} selected={q1} onSelect={setQ1} />
        {q1 && <p className="mt-3 text-sm font-semibold text-rose">Noted.</p>}
      </Reveal>

      <Reveal delay={0.15} className="mt-6 paper-card p-6 sm:p-8">
        <p className="font-bold text-plum">2. What's the correct apology strategy?</p>
        <ChoiceGrid options={Q2_OPTIONS} selected={q2} onSelect={setQ2} />
        {q2 && (
          <p className="mt-3 text-sm font-semibold text-rose">
            Excellent. The Priya Manual is slowly being decoded.
          </p>
        )}
      </Reveal>

      <Reveal delay={0.2} className="mt-6 paper-card p-6 sm:p-8">
        <p className="font-bold text-plum">3. How much gussa is left?</p>
        <input
          type="range"
          min="0"
          max="100"
          value={q3}
          onChange={(e) => setQ3(Number(e.target.value))}
          className="mt-4 w-full accent-rose"
          aria-label="Gussa level slider"
        />
        <div className="mt-2 flex justify-between text-xs text-plum/60">
          <span>0%</span>
          <span>100%</span>
        </div>
        <p className="mt-3 text-center font-hand text-2xl font-bold text-rose">{q3}%</p>
        <p className="text-center text-sm text-plum/70">{gussaLabel(q3)}</p>
      </Reveal>

      <Reveal delay={0.25} className="mt-6 paper-card p-6 sm:p-8">
        <p className="font-bold text-plum">4. What do you actually want from me right now?</p>
        <ChoiceGrid options={Q4_OPTIONS} selected={q4} onSelect={setQ4} />
        {q4 === 'Other.' && (
          <div className="mt-4">
            <p className="text-sm font-semibold text-rose">Okay, tell me. I'm listening.</p>
            <textarea
              value={otherText}
              onChange={(e) => setOtherText(e.target.value)}
              placeholder="(this stays right here, nothing is submitted anywhere)"
              className="mt-2 w-full rounded-xl border border-rose/20 p-3 text-sm text-plum focus:outline-none focus:ring-2 focus:ring-rose"
              rows={3}
            />
          </div>
        )}
      </Reveal>

      {allAnswered && (
        <Reveal delay={0.1} className="mt-8 text-center">
          <button
            onClick={() => setShowPlan(true)}
            className="rounded-full bg-rose px-7 py-3 font-bold text-white shadow-lg shadow-rose/30 hover:scale-105 transition-transform"
          >
            Generate Priya's Official Manaao Plan™
          </button>
        </Reveal>
      )}

      {showPlan && (
        <Reveal className="mt-8 paper-card p-6 sm:p-8 text-center">
          <p className="text-xs font-bold tracking-wide text-plum/60">
            According to highly questionable scientific research...
          </p>
          <ol className="mt-4 list-decimal list-inside space-y-1 text-left text-plum mx-auto max-w-sm">
            <li>Apologise properly.</li>
            <li>Bring chocolate.</li>
            <li>Make Priya laugh.</li>
            <li>Don't argue.</li>
            <li>Give her time if she wants it.</li>
            <li>Never repeat the mistake.</li>
          </ol>
          <p className="mt-4 text-sm text-plum/70">Seems reasonable.</p>
          <p className="text-sm text-plum/70">
            Approved by the International Council of People Who Are Currently In Trouble.
          </p>
          <button
            onClick={() => document.getElementById('court')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-6 rounded-full bg-plum px-6 py-2.5 font-bold text-white hover:scale-105 transition-transform"
          >
            Accept My Punishment 🥲
          </button>
        </Reveal>
      )}
    </Section>
  )
}
