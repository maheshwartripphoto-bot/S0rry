import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'sorry', label: 'Sorry' },
  { id: 'manaao', label: 'Manaao Me' },
  { id: 'rishabh', label: 'Rishabh' },
  { id: 'chaos', label: 'Chaos' },
  { id: 'doodles', label: 'Doodles' },
  { id: 'memories', label: 'Memories' },
  { id: 'final', label: 'Final' },
]

export default function Nav({ onLogoClick }) {
  const [open, setOpen] = useState(false)

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 border-b border-rose/10 bg-white/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <button
          onClick={onLogoClick}
          className="font-hand text-2xl font-bold text-rose"
          aria-label="Secret logo, click me a few times"
        >
          Priya 🥺
        </button>

        <ul className="hidden gap-5 text-sm font-semibold text-plum md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button onClick={() => go(l.id)} className="hover:text-rose transition-colors">
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-plum"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-rose/10 bg-white/95 px-4 py-3 md:hidden">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="w-full rounded-lg py-2 text-left font-semibold text-plum hover:bg-blush"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
