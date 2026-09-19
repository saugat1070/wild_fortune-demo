import Section from './Section'
import { Shield, Bolt, Trophy } from './icons'

const flow = [
  { icon: Trophy, title: 'Win Sweeps Coins', body: 'Play your favorite games with Sweeps Coins and collect your winnings.' },
  { icon: Shield, title: 'Verify your account', body: 'A quick one-time identity check keeps every redemption safe and secure.' },
  { icon: Bolt, title: 'Get your reward', body: 'Choose a prize or gift card — most redemptions land within 1–3 business days.' },
]

const trust = [
  { label: 'Bank-grade encryption', value: '256-bit' },
  { label: 'Average redemption', value: '< 3 days' },
  { label: 'Prizes paid out', value: '$4.2M+' },
]

export default function Rewards() {
  return (
    <Section
      id="rewards"
      eyebrow="Rewards & Redemption"
      title="Fast, secure, real prizes"
      subtitle="Redeeming your winnings is simple, transparent, and protected end to end."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* 3-step flow */}
        <div className="space-y-4">
          {flow.map((f, i) => (
            <div key={f.title} className="flex items-start gap-4 rounded-2xl border border-purple-500/20 bg-white/[0.03] p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl gold-gradient text-white shadow-md shadow-purple-600/30">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-purple-300">STEP {i + 1}</span>
                  <h3 className="font-display text-lg font-extrabold">{f.title}</h3>
                </div>
                <p className="mt-1 text-sm text-white/60">{f.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* trust panel */}
        <div className="glass rounded-3xl p-8 border border-purple-500/20 shadow-xl shadow-purple-950/30">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-300 shadow-md shadow-purple-900/20">
            <Shield className="h-8 w-8" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-extrabold">Built on trust</h3>
          <p className="mt-2 text-sm text-white/60">
            Your data and prizes are protected with the same security standards used by leading
            financial institutions. No hidden fees, ever.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {trust.map((t) => (
              <div key={t.label} className="rounded-2xl border border-purple-500/20 bg-white/[0.03] p-3 text-center">
                <div className="font-display text-lg font-black gold-text">{t.value}</div>
                <div className="mt-1 text-[11px] leading-tight text-white/50">{t.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
