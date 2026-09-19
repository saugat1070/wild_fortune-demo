import Button from './Button'
import { ArrowRight } from './icons'
import type { AuthMode } from './AuthModal'

export default function FinalCTA({ onAuth }: { onAuth: (mode: AuthMode) => void }) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] gold-gradient px-6 py-14 text-center text-white sm:px-12 sm:py-20 shadow-2xl shadow-purple-950/60 border border-purple-400/25">
        {/* decorative sparkles */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute left-[10%] top-6 h-3 w-3 rounded-full bg-white" />
          <div className="absolute right-[15%] top-10 h-2 w-2 rounded-full bg-white" />
          <div className="absolute bottom-8 left-[20%] h-2 w-2 rounded-full bg-white" />
          <div className="absolute bottom-12 right-[10%] h-3 w-3 rounded-full bg-white" />
        </div>
        <h2 className="relative font-display text-3xl font-black tracking-tight text-white sm:text-5xl drop-shadow-sm">
          Your first spin is on us.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-base font-medium text-white/90 sm:text-lg">
          Join thousands of players enjoying free games and real rewards. No purchase necessary —
          just pure fun.
        </p>
        <div className="relative mt-8 flex justify-center">
          <button
            onClick={() => onAuth('signup')}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-midnight shadow-xl shadow-black/25 transition-all duration-200 hover:scale-105 hover:bg-white/95 active:scale-95"
          >
            Create Free Account <ArrowRight className="h-5 w-5 text-purple" />
          </button>
        </div>
      </div>
    </section>
  )
}
