import { Heart, Star, Cloud, Sparkles } from 'lucide-react'

const ITEMS = [
  { Icon: Heart, top: '8%', left: '6%', size: 22, delay: 0, color: '#f3a6bf' },
  { Icon: Star, top: '18%', left: '85%', size: 18, delay: 1, color: '#f6c66b' },
  { Icon: Cloud, top: '30%', left: '12%', size: 30, delay: 2, color: '#cfe3ff' },
  { Icon: Sparkles, top: '55%', left: '90%', size: 20, delay: 0.5, color: '#c9b6f2' },
  { Icon: Heart, top: '70%', left: '4%', size: 16, delay: 1.5, color: '#f3a6bf' },
  { Icon: Star, top: '85%', left: '80%', size: 22, delay: 2.5, color: '#f6c66b' },
  { Icon: Cloud, top: '5%', left: '45%', size: 26, delay: 1.2, color: '#cfe3ff' },
]

export default function FloatingDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {ITEMS.map(({ Icon, top, left, size, delay, color }, i) => (
        <Icon
          key={i}
          className="absolute animate-floatSlow opacity-40"
          style={{ top, left, width: size, height: size, color, animationDelay: `${delay}s` }}
        />
      ))}
    </div>
  )
}
