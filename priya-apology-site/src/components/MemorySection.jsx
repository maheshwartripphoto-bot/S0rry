import { Section, Reveal } from './Section.jsx'

const MEMORIES = [
  'Our stupid conversations.',
  'Random jokes.',
  'Unnecessary arguments.',
  'Random fights.',
  'Random laughter.',
  'Completely pointless conversations that somehow lasted forever.',
  'The good memories.',
  'The weird memories.',
  'The moments that somehow became funny later.',
]

export default function MemorySection() {
  return (
    <Section id="memories">
      <Reveal className="text-center">
        <h2 className="font-hand text-4xl text-rose">Things I Don't Want To Lose</h2>
      </Reveal>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {MEMORIES.map((m, i) => (
          <Reveal key={m} delay={i * 0.05}>
            <span className="paper-card inline-block px-4 py-2 text-sm font-semibold text-plum rotate-[-1deg] even:rotate-[1deg]">
              {m}
            </span>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-10 text-center">
        <p className="font-hand text-3xl font-bold text-plum">
          I don't want one bad moment to erase all of that.
        </p>
      </Reveal>
    </Section>
  )
}
