import { Palette, ExternalLink } from 'lucide-react'
import { Section, Reveal } from './Section.jsx'

export default function DoodleHunt() {
  return (
    <Section id="doodles">
      <Reveal className="text-center">
        <h2 className="font-hand text-3xl text-plum">Okay, enough emotional drama.</h2>
        <p className="font-hand text-5xl font-bold text-rose">Let's play something. 🎨</p>
        <p className="mt-2 text-plum/70">Priya's Doodle Hunt</p>
      </Reveal>

      <Reveal delay={0.15} className="mt-8 paper-card p-6 sm:p-10 text-center">
        <p className="text-xs font-bold tracking-wide text-plum/50">TODAY'S CHALLENGE FOR PRIYA:</p>
        <p className="mt-3 font-hand text-2xl text-plum">
          "Draw something that represents how gussa you are with me."
        </p>
        <p className="mt-3 text-rose">Difficulty: ⭐⭐⭐⭐⭐</p>
        <p className="mt-1 text-sm text-plum/60">Expected result: probably a giant angry face.</p>

        <a
          href="https://quickdraw.withgoogle.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose px-7 py-3 font-bold text-white shadow-lg shadow-rose/30 hover:scale-105 transition-transform"
        >
          <Palette size={18} /> ACCEPT CHALLENGE 🎨
        </a>

        <p className="mt-4 text-sm text-plum/60">
          Draw something in 20 seconds and let Google's AI try to guess it.
        </p>
        <p className="text-sm text-plum/60">
          If Google guesses your drawing correctly, you're officially smarter than me.
        </p>
        <p className="text-sm text-plum/60">If Google can't guess it... blame Google. 😂</p>

        <a
          href="https://www.google.com/logos/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-plum underline decoration-rose/40 underline-offset-4 hover:text-rose"
        >
          Explore More Google Doodles ✨ <ExternalLink size={14} />
        </a>
      </Reveal>
    </Section>
  )
}
