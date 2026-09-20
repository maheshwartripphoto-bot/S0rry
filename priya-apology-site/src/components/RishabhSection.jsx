import { Section, Reveal } from './Section.jsx'

export default function RishabhSection() {
  return (
    <Section id="rishabh" className="bg-babyblue/30 rounded-3xl">
      <Reveal className="text-center">
        <h2 className="font-hand text-4xl font-bold text-plum">Okay, now something actually important. ❤️</h2>
      </Reveal>

      <Reveal delay={0.15} className="mt-8 paper-card p-6 sm:p-10">
        <p className="text-xs font-bold tracking-wide text-plum/50">ABOUT RISHABH...</p>
        <div className="mt-4 font-hand text-lg sm:text-xl leading-relaxed text-plum space-y-3">
          <p>Priya, I know sometimes you get scared that you might lose Rishabh.</p>
          <p>And as your friend, I just want you to breathe for a second.</p>
          <p className="font-bold text-rose">From everything I've seen, Rishabh really cares about you. ❤️</p>
          <p>He's not going anywhere that I can tell.</p>
          <p>You don't have to spend every moment worrying about losing him.</p>
          <p>Relationships have fights. People get gussa. Things get complicated sometimes.</p>
          <p>But one bad moment doesn't automatically mean you're going to lose someone you love.</p>
          <p>So please don't let your fear make everything feel worse than it actually is.</p>
          <p>Take a breath. Talk when you're ready.</p>
          <p>And remember: Rishabh is still Rishabh, and as far as I can tell, that hasn't changed. ❤️</p>
        </div>
      </Reveal>

      <Reveal delay={0.25} className="mt-6 paper-card p-6 text-center">
        <p className="text-xs font-bold tracking-wide text-plum/50">PRIYA'S ANTI-OVERTHINKING CARD</p>
        <div className="mt-3 space-y-1 text-plum">
          <p className="font-bold">Rishabh isn't showing signs of disappearing.</p>
          <p>You don't need to panic.</p>
          <p>Breathe. 🫂</p>
          <p>One fight isn't the whole relationship.</p>
        </div>
        <p className="mt-4 text-sm text-plum/60">
          Now stop overthinking before I have to build version 2 of this website. 😭
        </p>
      </Reveal>

      <Reveal delay={0.3} className="mt-8 paper-card p-6 sm:p-8 text-center bg-lavender/40">
        <p className="text-xs font-bold tracking-wide text-plum/50">PUBLIC SERVICE ANNOUNCEMENT 📢</p>
        <p className="mt-2 font-hand text-4xl font-bold text-rose">Rishabh is YOURS. ❤️</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-plum/80 text-left max-w-sm mx-auto">
          <p>Priority: Priya.</p>
          <p>Customer support: Priya.</p>
          <p>Complaints department: Priya.</p>
          <p>Final authority: Priya.</p>
          <p>Replacement department: CLOSED.</p>
          <p>Transfer department: NOT AVAILABLE.</p>
        </div>
        <p className="mt-4 font-bold text-plum">Please stop worrying. 🫂</p>
        <p className="mt-2 text-xs text-plum/50">
          *This website is not legally responsible for relationship decisions. 😂
        </p>
      </Reveal>
    </Section>
  )
}
