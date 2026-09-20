import { Section, Reveal } from './Section.jsx'

export default function ApologyLetter() {
  return (
    <Section id="sorry">
      <Reveal className="text-center">
        <h2 className="font-hand text-3xl text-plum">First things first...</h2>
        <p className="mt-2 font-hand text-5xl font-bold text-rose">I'm Sorry. ❤️</p>
      </Reveal>

      <Reveal delay={0.15} className="mt-6 text-center text-plum/80 space-y-1">
        <p>Not the casual "sorry sorry".</p>
        <p>Not the "okay fine sorry".</p>
        <p>Not the "sorry but..."</p>
        <p className="font-bold text-plum">An actual sorry.</p>
      </Reveal>

      <Reveal delay={0.3} className="mt-8 paper-card p-8 sm:p-10 font-hand text-xl sm:text-2xl leading-relaxed text-plum">
        <p>Priya,</p>
        <p className="mt-4">
          I know you're angry, and honestly I understand why.
        </p>
        <p className="mt-4">
          I don't want to make excuses or turn this into a courtroom defence.
        </p>
        <p className="mt-4">I just want to say that I'm genuinely sorry.</p>
        <p className="mt-4">
          I never wanted to hurt you, upset you, or make you feel bad.
        </p>
        <p className="mt-4">
          And yes, I know putting an entire website together to apologise is slightly ridiculous.
        </p>
        <p className="mt-4">
          But apparently this is what happens when I am given access to HTML, CSS and JavaScript while feeling guilty.
        </p>
        <p className="mt-4">So here we are.</p>
        <p className="mt-4 font-bold text-rose">I'm sorry. ❤️</p>
      </Reveal>
    </Section>
  )
}
