import { useState } from 'react'
import { Section, Reveal } from './Section.jsx'

export default function FinalSection() {
  const [choice, setChoice] = useState(null)

  return (
    <Section id="final" className="bg-gradient-to-b from-blush/40 to-lavender/30 rounded-3xl text-center">
      <Reveal>
        <h2 className="font-hand text-3xl text-plum">One Last Thing...</h2>
      </Reveal>

      <Reveal delay={0.15} className="mt-6 paper-card p-6 sm:p-10 font-hand text-lg sm:text-xl leading-relaxed text-plum text-left">
        <p>I know this website can't magically fix everything.</p>
        <p className="mt-3">And I don't expect it to.</p>
        <p className="mt-3">
          I just wanted to do something ridiculously elaborate to tell you something very simple:
        </p>
        <p className="mt-3 font-bold text-rose">I'm sorry, Priya.</p>
        <p className="mt-3">For real.</p>
        <p className="mt-3">I care about you.</p>
        <p className="mt-3">I care about our friendship.</p>
        <p className="mt-3">
          And I don't want one stupid moment to become bigger than all the good things we've shared.
        </p>
        <p className="mt-3">So whenever you're ready...</p>
        <p className="mt-3">Let's stop fighting.</p>
        <p className="mt-3">Let's laugh again.</p>
        <p className="mt-3 font-bold text-rose">And let's go back to being idiots together. ❤️</p>
      </Reveal>

      {!choice && (
        <Reveal delay={0.1} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setChoice('okay')}
            className="rounded-full bg-rose px-7 py-3 font-bold text-white shadow-lg shadow-rose/30 hover:scale-105 transition-transform"
          >
            Okay ❤️
          </button>
          <button
            onClick={() => setChoice('gussa')}
            className="rounded-full bg-white px-7 py-3 font-bold text-plum shadow-lg hover:scale-105 transition-transform paper-card"
          >
            Still Gussa 😤
          </button>
        </Reveal>
      )}

      {choice === 'okay' && (
        <Reveal className="mt-8">
          <p className="font-hand text-4xl font-bold text-rose">YAAAAAAAAAY 🥹❤️</p>
          <div className="mt-3 space-y-1 text-plum">
            <p>Friendship restored.</p>
            <p>Peace has returned.</p>
            <p>I have survived.</p>
            <p>Priya has stopped trying to kill me.</p>
            <p className="font-bold">Mission accomplished.</p>
          </div>
        </Reveal>
      )}

      {choice === 'gussa' && (
        <Reveal className="mt-8">
          <p className="font-hand text-3xl font-bold text-plum">Fair enough. 🥺</p>
          <div className="mt-3 space-y-1 text-plum/80">
            <p>I'm not going anywhere as your friend.</p>
            <p>Take your time.</p>
            <p>Whenever you're ready.</p>
          </div>
          <button
            disabled
            className="mt-5 cursor-default rounded-full bg-plum/80 px-7 py-3 font-bold text-white opacity-90"
          >
            I'll wait ❤️
          </button>
        </Reveal>
      )}
    </Section>
  )
}
