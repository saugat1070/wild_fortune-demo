import type { Game } from '../data'
import { Coin, Crown, Dice, Fish, Slots, Sparkle } from './icons'

const glyphMap = {
  slots: Slots,
  fish: Fish,
  dice: Dice,
  coin: Coin,
  sparkle: Sparkle,
  crown: Crown,
}

/** Original, generated placeholder artwork for a game — no third-party assets. */
export default function GameArt({ game }: { game: Game }) {
  const Glyph = glyphMap[game.glyph]
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: `radial-gradient(120% 120% at 20% 15%, ${game.from} 0%, ${game.to} 70%)` }}
    >
      {/* soft light burst */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/25 blur-2xl" />
      {/* decorative concentric rings */}
      <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 200 160" preserveAspectRatio="none">
        <circle cx="100" cy="80" r="70" fill="none" stroke="white" strokeWidth="0.6" />
        <circle cx="100" cy="80" r="52" fill="none" stroke="white" strokeWidth="0.6" />
        <circle cx="100" cy="80" r="34" fill="none" stroke="white" strokeWidth="0.6" />
      </svg>
      {/* scattered sparkles */}
      <div className="absolute left-4 top-5 h-1.5 w-1.5 rounded-full bg-white/80" />
      <div className="absolute right-8 top-10 h-1 w-1 rounded-full bg-white/70" />
      <div className="absolute bottom-6 left-10 h-1 w-1 rounded-full bg-white/60" />
      {/* central emblem */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/30 bg-black/20 backdrop-blur-sm">
          <Glyph className="h-10 w-10 text-white drop-shadow" />
        </div>
      </div>
    </div>
  )
}
