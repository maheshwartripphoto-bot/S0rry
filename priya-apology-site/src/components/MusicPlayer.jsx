import { useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'

// No audio file is bundled by default — drop one at /public/soundtrack.mp3
// and this button will play/pause it. Until then the button is a friendly no-op.
export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (playing) {
      audio.pause()
      setPlaying(false)
    } else {
      audio.play().catch(() => {})
      setPlaying(true)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-30">
      <audio ref={audioRef} src="/soundtrack.mp3" loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Pause our soundtrack' : 'Play our soundtrack'}
        className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-sm font-bold text-plum shadow-lg backdrop-blur hover:scale-105 transition-transform"
      >
        {playing ? <Pause size={16} /> : <Music size={16} />}
        {playing ? 'Pause' : 'Play our soundtrack'}
      </button>
    </div>
  )
}
