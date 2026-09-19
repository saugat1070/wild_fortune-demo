import Button from './Button'
import { ArrowRight, Bolt, Coin, Crown, Gift, Sparkle } from './icons'
import type { AuthMode } from './AuthModal'
import HeroDashboardWidget from './HeroDashboardWidget'

const badges = [
  { icon: Sparkle, label: 'Free to Play' },
  { icon: Gift, label: 'Daily Bonuses' },
  { icon: Bolt, label: 'Fast Redemptions' },
]

export default function Hero({ onAuth }: { onAuth: (mode: AuthMode) => void }) {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24">
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="text-center lg:text-left">
          <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Free-to-play fun.
            <br />
            <span className="gold-text">Real rewards.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-white/65 sm:text-lg lg:mx-0">
            Spin premium slots, dive into fish tables, and hit jackpots — all with no purchase
            necessary. Play with Gold Coins for fun, collect Sweeps Coins, and redeem for real
            prizes.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-start lg:justify-start">
            <Button size="lg" onClick={() => onAuth('signup')} className="w-full sm:w-auto">
              Play Free Now <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="lg" className="w-full sm:w-auto" onClick={() => (window.location.hash = '#how')}>
              How It Works
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            {badges.map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-purple-400/25 bg-purple-500/10 px-3.5 py-2 text-xs font-medium text-purple-200 shadow-sm"
              >
                <b.icon className="h-4 w-4 text-purple-300" />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Mini dashboard snapshot */}
        <div className="hidden lg:flex items-center justify-center w-full">
          <HeroDashboardWidget />
        </div>
      </div>
    </section>
  )
}
