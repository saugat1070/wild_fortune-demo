import { useEffect, useRef, useState } from 'react'
import { Coin, Crown, Gift, Sparkle } from './icons'

// ── Recent wins feed ─────────────────────────────────────────────────────────

const WINS = [
  { icon: '🎰', label: 'Slot Jackpot', amount: '+500 SC', color: '#c084fc' },
  { icon: '🐟', label: 'Fish Table', amount: '+1,200 GC', color: '#fbbf24' },
  { icon: '🃏', label: 'Blackjack', amount: '+350 SC', color: '#a855f7' },
  { icon: '🎲', label: 'Lucky Dice', amount: '+80 SC', color: '#e879f9' },
  { icon: '👑', label: 'Crown Bonus', amount: '+2,500 GC', color: '#f59e0b' },
  { icon: '🌟', label: 'Daily Login', amount: '+100 SC', color: '#34d399' },
]

// ── Progress ring ─────────────────────────────────────────────────────────────

function ProgressRing({ pct, size = 72, stroke = 6 }: { pct: number; size?: number; stroke?: number }) {
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const dash = circ * pct
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={stroke} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke="url(#ringGold)" strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circ}`}
        style={{ transition: 'stroke-dasharray 1.2s cubic-bezier(.4,0,.2,1)' }}
      />
      <defs>
        <linearGradient id="ringGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f0abfc" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  )
}

// ── Animated counter ──────────────────────────────────────────────────────────

function AnimCounter({ to, duration = 1400 }: { to: number; duration?: number }) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let raf: number
    function tick(now: number) {
      const t = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - t, 3)
      setVal(Math.round(ease * to))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])
  return <>{val.toLocaleString()}</>
}

// ── Main widget ───────────────────────────────────────────────────────────────

export default function HeroDashboardWidget() {
  const [winIdx, setWinIdx] = useState(0)
  const [rewardPct] = useState(0.68)

  // cycle wins ticker
  useEffect(() => {
    const id = setInterval(() => setWinIdx((i) => (i + 1) % WINS.length), 2400)
    return () => clearInterval(id)
  }, [])

  const win = WINS[winIdx]

  return (
    <div className="relative mx-auto w-full max-w-[380px] select-none">
      <div className="relative flex flex-col gap-3">

        {/* ── Balance chips row ── */}
        <div className="grid grid-cols-2 gap-3">
          <BalanceChip
            icon={<Coin className="h-5 w-5 text-amber-400" />}
            label="Gold Coins"
            value={<AnimCounter to={124500} />}
            suffix="GC"
            accent="#fbbf24"
          />
          <BalanceChip
            icon={<Crown className="h-5 w-5 text-purple-300" />}
            label="Sweeps Coins"
            value={<AnimCounter to={3820} />}
            suffix="SC"
            accent="#c084fc"
          />
        </div>

        {/* ── Main card: next reward ── */}
        <div className="rounded-2xl border border-purple-500/20 bg-white/[0.04] p-4 backdrop-blur-sm shadow-xl shadow-purple-950/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-white/45">Next Reward</p>
              <p className="mt-1 font-display text-xl font-bold text-white">$25 Prize</p>
              <p className="mt-0.5 text-xs text-white/55">
                <span className="font-semibold text-purple-300">3,820</span> / 5,000 SC collected
              </p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${rewardPct * 100}%`,
                    background: 'linear-gradient(90deg, #9333ea, #c084fc)',
                    transition: 'width 1.4s cubic-bezier(.4,0,.2,1)',
                  }}
                />
              </div>
              <p className="mt-1.5 text-[11px] text-white/40">1,180 SC to go · Redeem anytime</p>
            </div>
            <div className="relative ml-4 shrink-0">
              <ProgressRing pct={rewardPct} size={76} stroke={6} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-sm font-bold text-purple-300">68%</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Recent wins ticker ── */}
        <div className="flex items-center gap-3 rounded-xl border border-purple-500/20 bg-white/[0.04] px-3.5 py-2.5 backdrop-blur-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-base">
            {win.icon}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-white/75">{win.label}</p>
            <p className="text-[11px] text-white/40">Just now · You won</p>
          </div>
          <span className="shrink-0 font-display text-sm font-bold" style={{ color: win.color }}>
            {win.amount}
          </span>
        </div>

        {/* ── Bonus streak + daily login row ── */}
        <div className="grid grid-cols-2 gap-3">
          <MiniStatCard
            icon={<Sparkle className="h-4 w-4 text-amber-400" />}
            label="Win Streak"
            value="7 days"
            sub="Personal best 🔥"
          />
          <MiniStatCard
            icon={<Gift className="h-4 w-4 text-purple-300" />}
            label="Daily Bonus"
            value="Ready!"
            sub="Claim your coins"
            pulse
          />
        </div>

      </div>
    </div>
  )
}

// ── Sub-components ────────────────────────────────────────────────────────────

function BalanceChip({
  icon, label, value, suffix, accent,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
  suffix: string
  accent: string
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-sm">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{label}</span>
      </div>
      <p className="mt-1.5 font-display text-lg font-bold leading-none" style={{ color: accent }}>
        <span className="tabular-nums">{value}</span>
        <span className="ml-1 text-xs font-semibold opacity-60">{suffix}</span>
      </p>
    </div>
  )
}

function MiniStatCard({
  icon, label, value, sub, pulse = false,
}: {
  icon: React.ReactNode
  label: string
  value: string
  sub: string
  pulse?: boolean
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-purple-500/15 bg-white/[0.04] p-3 backdrop-blur-sm">
      {pulse && (
        <span className="absolute right-2 top-2 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-400" />
        </span>
      )}
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/45">{label}</span>
      </div>
      <p className="mt-1 font-display text-base font-bold text-white">{value}</p>
      <p className="text-[11px] text-white/40">{sub}</p>
    </div>
  )
}
