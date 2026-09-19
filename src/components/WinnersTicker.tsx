import { winners } from '../data'
import { Trophy } from './icons'

export default function WinnersTicker() {
  const items = [...winners, ...winners]
  return (
    <div className="relative border-y border-purple-500/15 bg-purple-950/20 py-3">
      <div className="marquee-pause overflow-hidden">
        <div className="animate-marquee flex w-max items-center gap-4">
          {items.map((w, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-purple-500/20 bg-white/[0.04] px-4 py-1.5 shadow-sm"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20 text-purple-300">
                <Trophy className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm text-white/70">
                <span className="font-semibold text-white">{w.user}</span> won{' '}
                <span className="font-bold gold-text">{w.amount}</span> on {w.game}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-midnight to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-midnight to-transparent" />
    </div>
  )
}
