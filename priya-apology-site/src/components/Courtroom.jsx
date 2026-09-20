import { useState } from 'react'
import { Section, Reveal } from './Section.jsx'

export default function Courtroom() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <Section id="court">
      <Reveal className="text-center">
        <h2 className="font-hand text-4xl font-bold text-rose">THE PEOPLE VS. ME</h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-8 paper-card p-6 sm:p-8 space-y-3">
        <p><span className="font-bold text-plum">Defendant:</span> Me.</p>
        <p><span className="font-bold text-plum">Judge:</span> Priya 👩‍⚖️</p>
        <div>
          <p className="font-bold text-plum">Charges:</p>
          <ul className="mt-1 list-disc list-inside text-plum/80 space-y-0.5">
            <li>Making Priya gussa.</li>
            <li>Being stupid.</li>
            <li>Not understanding the difference between naraz and gussa.</li>
            <li>Thinking an apology website would save me.</li>
          </ul>
        </div>
        <p><span className="font-bold text-plum">Defence lawyer:</span> Currently unavailable.</p>
        <p><span className="font-bold text-plum">Evidence:</span> Unfortunately overwhelming.</p>
        <p><span className="font-bold text-plum">Verdict:</span> To be decided by Priya.</p>
      </Reveal>

      <Reveal delay={0.2} className="mt-6 text-center">
        {!submitted ? (
          <button
            onClick={() => setSubmitted(true)}
            className="rounded-full bg-rose px-7 py-3 font-bold text-white shadow-lg shadow-rose/30 hover:scale-105 transition-transform"
          >
            Submit myself to the court →
          </button>
        ) : (
          <p className="font-hand text-2xl text-plum">The court has been notified. Awaiting judgement. 😌</p>
        )}
      </Reveal>
    </Section>
  )
}
