import Section from './Section'
import { UserPlus, Coin, Gift } from './icons'

const steps = [
  {
    icon: UserPlus,
    step: '01',
    title: 'Sign up free',
    body: 'Create your account in seconds — email and password, no purchase and no card required.',
  },
  {
    icon: Coin,
    step: '02',
    title: 'Play with Gold Coins',
    body: 'Enjoy every game just for fun with free Gold Coins. Top up daily with login bonuses and promos.',
  },
  {
    icon: Gift,
    step: '03',
    title: 'Redeem Sweeps Coins',
    body: 'Collect Sweeps Coins as you play, then redeem your winnings for real gift cards and prizes.',
  },
]

export default function HowItWorks() {
  return (
    <Section
      id="how"
      eyebrow="How It Works"
      title="Two coins. All the fun."
      subtitle="Our two-currency model keeps play free while unlocking real sweepstakes rewards."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.step}
            className="glass relative rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl gold-gradient text-white shadow-lg shadow-purple-600/30">
              <s.icon className="h-7 w-7" />
            </div>
            <h3 className="font-display text-xl font-extrabold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">{s.body}</p>
            {i < steps.length - 1 && (
              <div className="absolute right-0 top-1/2 hidden h-px w-6 translate-x-full bg-gradient-to-r from-purple-500/40 to-transparent md:block" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <CoinCard
          title="Gold Coins"
          tag="Just for fun"
          desc="The social currency for casual play. No monetary value, always free, endlessly refillable."
          from="#fbbf24"
          to="#b45309"
        />
        <CoinCard
          title="Sweeps Coins"
          tag="Real rewards"
          desc="Promotional sweepstakes entries. Win with them and redeem for real prizes once you hit the threshold."
          from="#e879f9"
          to="#7e22ce"
        />
      </div>
    </Section>
  )
}

function CoinCard({
  title,
  tag,
  desc,
  from,
  to,
}: {
  title: string
  tag: string
  desc: string
  from: string
  to: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-purple-500/20 bg-white/[0.03] p-5 shadow-sm">
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-xl font-black text-white shadow-lg shadow-purple-950/40"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        {title[0]}
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-display text-base font-extrabold">{title}</h4>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/60">
            {tag}
          </span>
        </div>
        <p className="mt-1 text-sm text-white/60">{desc}</p>
      </div>
    </div>
  )
}
