import { useEffect, useRef, useState } from 'react'
import { Heart } from 'lucide-react'

import LoadingScreen from './components/LoadingScreen.jsx'
import Nav from './components/Nav.jsx'
import FloatingDecor from './components/FloatingDecor.jsx'
import Hero from './components/Hero.jsx'
import ApologyLetter from './components/ApologyLetter.jsx'
import GussaGame from './components/GussaGame.jsx'
import ManaaoQuiz from './components/ManaaoQuiz.jsx'
import Courtroom from './components/Courtroom.jsx'
import RishabhSection from './components/RishabhSection.jsx'
import ChaosSection from './components/ChaosSection.jsx'
import DoNotClick from './components/DoNotClick.jsx'
import MemorySection from './components/MemorySection.jsx'
import DoodleHunt from './components/DoodleHunt.jsx'
import HeartGame from './components/HeartGame.jsx'
import FinalSection from './components/FinalSection.jsx'
import Footer from './components/Footer.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import EasterEggToast from './components/EasterEggToast.jsx'

export default function App() {
  const [entered, setEntered] = useState(false)
  const [toast, setToast] = useState(null)
  const [heartFound, setHeartFound] = useState(false)
  const logoClicks = useRef(0)
  const toastTimer = useRef(null)

  const flash = (message, duration = 2600) => {
    setToast(message)
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), duration)
  }

  const handleLogoClick = () => {
    logoClicks.current += 1
    if (logoClicks.current === 5) {
      flash("SECRET MESSAGE UNLOCKED 🔓 — You're actually really special to me. (Don't let this inflate your ego though.)", 4000)
      logoClicks.current = 0
    }
  }

  useEffect(() => {
    const onKey = (e) => {
      if (!entered) return
      if (e.key.toLowerCase() === 'p') {
        flash('PRIYA DETECTED. GUSSA MONITORING ACTIVATED. 😭')
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [entered])

  if (!entered) {
    return <LoadingScreen onEnter={() => setEntered(true)} />
  }

  return (
    <div className="relative min-h-screen">
      <FloatingDecor />
      <EasterEggToast message={toast} />
      <Nav onLogoClick={handleLogoClick} />

      <main>
        <Hero />
        <ApologyLetter />
        <GussaGame />
        <ManaaoQuiz />
        <Courtroom />
        <RishabhSection />
        <ChaosSection />
        <DoNotClick />
        <MemorySection />
        <DoodleHunt />
        <HeartGame />

        {/* Easter egg: click the floating heart */}
        <div className="flex justify-center py-6">
          <button
            onClick={() => setHeartFound((v) => !v)}
            aria-label="A floating heart, maybe click it"
            className="flex items-center gap-2 rounded-full px-4 py-2 text-rose hover:scale-110 transition-transform"
          >
            <Heart className={heartFound ? 'fill-rose' : ''} />
            {heartFound && <span className="font-hand text-xl font-bold">❤️ PRIYA ❤️</span>}
          </button>
        </div>

        <FinalSection />
      </main>

      <Footer />
      <MusicPlayer />
    </div>
  )
}
