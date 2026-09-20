import { motion } from 'framer-motion'
import { Section, Reveal } from './Section.jsx'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Section id="home" className="text-center pt-20 sm:pt-28">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="font-hand text-6xl sm:text-7xl font-bold text-rose"
      >
        PRIYA. 🥺
      </motion.h1>

      <Reveal delay={0.2} className="mt-6 space-y-1 text-lg text-plum">
        <p>Before you say anything...</p>
        <p className="font-bold">I KNOW.</p>
      </Reveal>

      <Reveal delay={0.4}>
        <h2 className="mt-6 font-hand text-4xl sm:text-5xl text-rose">I MESSED UP.</h2>
      </Reveal>

      <Reveal delay={0.55} className="mt-10 paper-card mx-auto max-w-md p-6 sm:p-8">
        <p className="text-xs font-bold tracking-wide text-plum/60">IMPORTANT CORRECTION 📢</p>
        <p className="mt-3 text-2xl">
          <span className="line-through decoration-rose decoration-4 text-plum/50">NARAZ ❌</span>
        </p>
        <p className="mt-1 font-hand text-4xl font-bold text-rose">GUSSA 😤</p>
        <p className="mt-4 text-sm text-plum/80">
          Apparently there is a very important difference.
          <br />
          Noted. Very carefully noted.
        </p>
      </Reveal>

      <Reveal delay={0.7} className="mt-10">
        <button
          onClick={() => scrollTo('sorry')}
          className="rounded-full bg-rose px-7 py-3 font-bold text-white shadow-lg shadow-rose/30 hover:scale-105 transition-transform"
        >
          Okay, let's discuss my punishment →
        </button>
      </Reveal>
    </Section>
  )
}
