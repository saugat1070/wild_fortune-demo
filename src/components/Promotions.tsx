import Section from './Section'
import Button from './Button'
import { Gift, Sparkle, Crown } from './icons'
import type { AuthMode } from './AuthModal'

const vipTiers = ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond']

export default function Promotions({ onAuth }: { onAuth: (mode: AuthMode) => void }) {
  const currentTier = 2 // Gold
  const progress = 68 // % toward next tier

  return (
    <Section
      id="promotions"
      eyebrow="Promotions"
      title="Bonuses that keep on giving"
      subtitle="Claim free coins every day and climb the VIP ladder for richer rewards."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Daily login */}
        <div className="glass rounded-3xl p-7">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
            <Sparkle className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-gold">Daily login bonus</span>
          <h3 className="mt-1 font-display text-2xl font-extrabold">Free coins every day</h3>
          <p className="mt-2 text-sm text-white/60">
            Log in daily to grab your streak bonus — the longer your streak, the bigger the drop.
          </p>
          <div className="mt-5 flex gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7].map((d) => (
              <div
                key={d}
                className={`flex h-9 flex-1 items-center justify-center rounded-lg text-xs font-bold ${
                  d <= 4 ? 'gold-gradient text-white font-bold shadow-md shadow-purple-600/30' : 'border border-white/10 bg-white/5 text-white/40'
                }`}
              >
                {d}
              </div>
            ))}
          </div>
          <Button className="mt-5 w-full" onClick={() => onAuth('signup')}>
            Claim daily bonus
          </Button>
        </div>

        {/* Welcome bonus */}
        <div className="rounded-3xl border border-purple-400/30 bg-navy-panel p-7 shadow-xl shadow-purple-950/40">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl gold-gradient text-white shadow-md shadow-purple-600/30">
            <Gift className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-gold">Welcome bonus</span>
          <h3 className="mt-1 font-display text-2xl font-extrabold">
            10,000 Gold Coins <span className="gold-text">+ 2 Sweeps Coins</span>
          </h3>
          <p className="mt-2 text-sm text-white/70">
            New players get a stacked welcome package the moment their free account is created.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {['Instant credit on sign up', 'No purchase necessary', 'Ready to play immediately'].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20 text-xs text-gold">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <Button className="mt-5 w-full" size="lg" onClick={() => onAuth('signup')}>
            Claim welcome bonus
          </Button>
        </div>

        {/* VIP */}
        <div className="glass rounded-3xl p-7">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-purple/20 text-purple-soft">
            <Crown className="h-6 w-6" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-purple-soft">VIP levels</span>
          <h3 className="mt-1 font-display text-2xl font-extrabold">Level up your rewards</h3>
          <p className="mt-2 text-sm text-white/60">
            Every game you play earns VIP points. Higher tiers unlock bigger bonuses and faster redemptions.
          </p>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="font-semibold text-gold">{vipTiers[currentTier]}</span>
              <span className="text-white/50">{vipTiers[currentTier + 1]}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full gold-gradient transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-white/50">{progress}% to {vipTiers[currentTier + 1]} — keep playing!</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {vipTiers.map((t, i) => (
              <span
                key={t}
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                  i <= currentTier ? 'bg-gold/15 text-gold' : 'bg-white/5 text-white/35'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
