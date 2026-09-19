import React, { useState, useEffect } from 'react'
import Footer from './Footer'

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconTrophy({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4a2 2 0 0 1-2-2V5h4" /><path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
      <path d="M6 3h12v8a6 6 0 0 1-12 0V3Z" /><path d="M9 21h6" /><path d="M12 17v4" />
    </svg>
  )
}
function IconGamepad({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <line x1="6" y1="12" x2="10" y2="12" /><line x1="8" y1="10" x2="8" y2="14" />
      <circle cx="15" cy="11" r=".5" fill="currentColor" /><circle cx="17" cy="13" r=".5" fill="currentColor" />
      <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Z" />
    </svg>
  )
}
function IconCrown({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 18h18l-3-9-4.5 5L12 6l-1.5 8L6 9l-3 9Z" />
    </svg>
  )
}
function IconWallet({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 7H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z" />
      <path d="M16 13h.01" /><path d="M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2" />
    </svg>
  )
}
function IconSupport({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 18.72a9.09 9.09 0 0 1-4.6 1.28 9 9 0 1 1 8.09-5" />
      <path d="M13 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" /><path d="M12 13v2" />
    </svg>
  )
}
function IconPlus({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
function IconArrowDown({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="m8 12 4 4 4-4" /><line x1="12" y1="8" x2="12" y2="16" />
    </svg>
  )
}
function IconSend({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" />
    </svg>
  )
}
function IconEye({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
function IconBell({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}
function IconLogout({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}
function IconGift({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" rx="1" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" />
    </svg>
  )
}
function IconStar({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
    </svg>
  )
}
function IconRefresh({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  )
}
function IconActivity({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}
function IconFire({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
    </svg>
  )
}
function IconUser({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  )
}
function IconDownload({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}
function IconPhone({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  )
}
function IconChat({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  )
}
function IconCopy({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}
function IconUsers({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

// ── Types ─────────────────────────────────────────────────────────────────────

type Tab = 'rewards' | 'games' | 'lobby' | 'wallets' | 'support'

interface DashboardProps {
  username: string
  onLogout: () => void
}

// ── Spin Wheel ────────────────────────────────────────────────────────────────

const WHEEL_SEGMENTS = [
  { label: '$0.10', color: '#f5f0e0' },
  { label: '$0.20', color: '#e8d5b0' },
  { label: '$0.30', color: '#f5f0e0' },
  { label: '20% bonus', color: '#e8d5b0' },
  { label: 'Better luck', color: '#f5f0e0' },
  { label: '30% bonus', color: '#e8d5b0' },
  { label: '$1.00', color: '#f5f0e0' },
  { label: '50% bonus', color: '#e8d5b0' },
]

function SpinWheel() {
  const [rotation, setRotation] = useState(0)
  const [spinning, setSpinning] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const spin = () => {
    if (spinning) return
    setSpinning(true)
    setResult(null)
    const spins = 5 + Math.random() * 3
    const deg = spins * 360 + Math.random() * 360
    setRotation((r) => r + deg)
    setTimeout(() => {
      setSpinning(false)
      const segIdx = Math.floor(((rotation + deg) % 360) / (360 / WHEEL_SEGMENTS.length))
      setResult(WHEEL_SEGMENTS[segIdx % WHEEL_SEGMENTS.length].label)
    }, 3000)
  }

  const total = WHEEL_SEGMENTS.length
  const angle = 360 / total
  const cx = 120, cy = 120, r = 110

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: 240, height: 240 }}>
        {/* pointer */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 z-10">
          <div className="w-0 h-0" style={{ borderLeft: '10px solid transparent', borderRight: '10px solid transparent', borderTop: '22px solid #f0b429' }} />
        </div>
        <svg
          width="240" height="240" viewBox="0 0 240 240"
          style={{ transition: spinning ? 'transform 3s cubic-bezier(0.17,0.67,0.12,0.99)' : 'none', transform: `rotate(${rotation}deg)`, transformOrigin: 'center' }}
        >
          {WHEEL_SEGMENTS.map((seg, i) => {
            const startA = (i * angle - 90) * (Math.PI / 180)
            const endA = ((i + 1) * angle - 90) * (Math.PI / 180)
            const x1 = cx + r * Math.cos(startA)
            const y1 = cy + r * Math.sin(startA)
            const x2 = cx + r * Math.cos(endA)
            const y2 = cy + r * Math.sin(endA)
            const midA = (startA + endA) / 2
            const tx = cx + (r * 0.65) * Math.cos(midA)
            const ty = cy + (r * 0.65) * Math.sin(midA)
            return (
              <g key={i}>
                <path
                  d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`}
                  fill={seg.color}
                  stroke="#c8a96e"
                  strokeWidth="1"
                />
                <text
                  x={tx} y={ty}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  transform={`rotate(${i * angle + angle / 2}, ${tx}, ${ty})`}
                  fontSize="9"
                  fontWeight="700"
                  fontFamily="Inter, sans-serif"
                  fill="#4a2c00"
                >
                  {seg.label}
                </text>
              </g>
            )
          })}
          {/* center circle */}
          <circle cx={cx} cy={cy} r="22" fill="#17091f" stroke="#f0b429" strokeWidth="3" />
          <circle cx={cx} cy={cy} r="14" fill="#f0b429" opacity="0.2" />
        </svg>
      </div>

      {result && (
        <div className="text-center px-4 py-2 rounded-xl bg-gold/10 border border-gold/30 text-gold font-bold text-sm">
          You landed on: {result}!
        </div>
      )}

      <p className="text-xs text-white/40 text-center px-4">
        Add your date of birth and state before receiving Freeplay.
      </p>

      <button
        onClick={spin}
        disabled={spinning}
        className="w-full flex items-center justify-center gap-2 gold-gradient text-white font-bold py-3.5 rounded-xl text-sm disabled:opacity-60 transition-opacity shadow-md shadow-purple-600/30"
      >
        <IconRefresh className={`h-4 w-4 ${spinning ? 'animate-spin' : ''}`} />
        {spinning ? 'Spinning…' : 'Spin'}
      </button>
    </div>
  )
}

// ── Tab: Rewards ──────────────────────────────────────────────────────────────

function RewardsTab({ username }: { username: string }) {
  return (
    <div className="space-y-4 pb-6">
      {/* Full wallet dashboard: credit card + Top players + Refer & Earn */}
      <LobbyTab username={username} />

      {/* Daily Spin */}
      <div className="rounded-2xl bg-navy-panel border border-white/8 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
          <IconGift className="h-4 w-4 text-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Daily Rewards</span>
        </div>
        <div className="p-4">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Daily Spin</p>
          <h3 className="text-center font-display text-xl font-extrabold mb-4">Ready to spin?</h3>
          <SpinWheel />
        </div>
      </div>

      {/* Achievements */}
      <div className="rounded-2xl bg-navy-panel border border-white/8 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
          <IconGift className="h-4 w-4 text-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Rewards</span>
        </div>
        <div className="p-4">
          <h3 className="font-display text-lg font-extrabold mb-3">Achievements</h3>
          <div className="space-y-2">
            {[
              { label: 'First Deposit', desc: 'Make your first deposit to earn $2 Freeplay', done: false },
              { label: 'Verified Member', desc: 'Verify phone number for $5 Freeplay', done: false },
              { label: 'Daily Login', desc: 'Log in 7 days in a row', done: false },
            ].map((a) => (
              <div key={a.label} className="flex items-start gap-3 rounded-xl bg-white/4 border border-white/6 px-3 py-2.5">
                <div className={`mt-0.5 h-4 w-4 rounded-full shrink-0 flex items-center justify-center text-xs ${a.done ? 'gold-gradient text-white shadow-sm' : 'border border-white/20'}`}>
                  {a.done && '✓'}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{a.label}</p>
                  <p className="text-xs text-white/45">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Tab: Games ────────────────────────────────────────────────────────────────

const TOP_PLAYERS = [
  { rank: 1, name: 'brandonvaughn8720', amount: '$40.00', freeplay: '$10.00 freeplay' },
  { rank: 2, name: 'lindasmith6028', amount: '$30.00', freeplay: '$7.50 freeplay' },
  { rank: 3, name: 'narissabanks1470', amount: '$20.00', freeplay: '$5.00 freeplay' },
  { rank: 4, name: 'Wadadummi', amount: '$20.00', freeplay: null },
  { rank: 5, name: 'samrttagan2598', amount: '$10.00', freeplay: null },
]

function TopPlayersCard() {
  return (
    <div className="rounded-2xl bg-navy-panel border border-white/8 overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
        <IconTrophy className="h-4 w-4 text-gold" />
        <span className="text-sm font-semibold text-white/80">Top players</span>
      </div>
      <div className="divide-y divide-white/5">
        {TOP_PLAYERS.map((p) => (
          <div key={p.rank} className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3 min-w-0">
              <span className={`text-xs font-bold w-5 text-center shrink-0 ${p.rank <= 3 ? 'text-gold' : 'text-white/40'}`}>
                #{p.rank}
              </span>
              <span className="text-sm text-white/80 truncate">{p.name}</span>
            </div>
            <div className="flex flex-col items-end gap-0.5 shrink-0 pl-2">
              <span className="text-sm font-bold text-white">{p.amount}</span>
              {p.freeplay && (
                <span className="text-[10px] font-semibold text-gold bg-gold/10 border border-gold/20 rounded-full px-2 py-0.5">
                  {p.freeplay}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReferEarnCard({ username = '' }: { username?: string }) {
  const code = (username || 'PLAYER').slice(0, 6).toUpperCase().padEnd(6, 'X')
  const link = `https://wildfortune.com/signup?ref=${code}`
  const [copied, setCopied] = useState<'code' | 'link' | null>(null)

  const copy = (value: string, which: 'code' | 'link') => {
    navigator.clipboard?.writeText(value).catch(() => {})
    setCopied(which)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div
      className="rounded-2xl border border-purple-500/20 overflow-hidden shadow-lg shadow-purple-950/30"
      style={{ background: 'radial-gradient(120% 90% at 50% 0%, rgba(168,85,247,0.18), rgba(147,51,234,0.08) 45%, rgba(20,9,43,0.8) 100%)' }}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
        <div className="flex items-center gap-2">
          <IconGift className="h-4 w-4 text-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Refer &amp; Earn</span>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-white/45">
          <IconUsers className="h-4 w-4" />0 referred
        </span>
      </div>
      <div className="p-4 space-y-3">
        <p className="text-sm text-white/55">
          Share your code with friends. You earn freeplay after they load money into a game.
        </p>

        {/* Your code */}
        <div className="rounded-xl border border-white/10 bg-black/25 px-4 py-3 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">Your code</p>
            <p className="font-display text-2xl font-extrabold tracking-[0.35em] gold-text truncate">{code}</p>
          </div>
          <button
            onClick={() => copy(code, 'code')}
            className="h-10 w-10 shrink-0 rounded-lg bg-white/6 hover:bg-white/12 border border-white/10 flex items-center justify-center text-white/70 transition-colors"
            aria-label="Copy referral code"
          >
            <IconCopy className="h-4 w-4" />
          </button>
        </div>

        {/* Link */}
        <div className="rounded-xl border border-white/10 bg-black/25 pl-4 pr-1.5 py-1.5 flex items-center gap-2">
          <span className="text-xs text-white/45 truncate flex-1">{link}</span>
          <button
            onClick={() => copy(link, 'link')}
            className="shrink-0 gold-gradient text-white font-bold text-xs px-3.5 py-2 rounded-lg hover:opacity-90 transition-opacity shadow-sm shadow-purple-600/30"
          >
            {copied === 'link' ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  )
}

const ALL_GAMES = [
  { name: 'GameVault', badge: '30% bonus', bg: 'from-slate-700 to-slate-900' },
  { name: 'FireKirin', badge: '30% bonus', bg: 'from-purple-900 to-indigo-900' },
  { name: 'RiverSweeps', badge: '30% bonus', bg: 'from-purple-900 to-violet-950' },
  { name: 'Cash Frenzy', badge: '20% bonus', bg: 'from-rose-900 to-red-900' },
  { name: 'Orion Stars', badge: 'Hot', bg: 'from-amber-800 to-orange-900' },
  { name: 'Juwa', badge: 'New', bg: 'from-emerald-900 to-teal-900' },
]

function GamesGrid() {
  return (
    <div className="rounded-2xl bg-navy-panel border border-white/8 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/8">
        <div className="flex items-center gap-2">
          <IconGamepad className="h-4 w-4 text-gold" />
          <span className="font-display text-base font-bold">Games</span>
        </div>
        <button className="text-xs text-gold font-semibold hover:underline">View all</button>
      </div>
      <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {ALL_GAMES.map((g) => (
          <div key={g.name} className="group rounded-xl overflow-hidden border border-white/10 bg-white/4">
            <div className={`relative h-24 sm:h-28 bg-gradient-to-br ${g.bg} flex items-center justify-center`}>
              <span className="absolute top-2 left-2 bg-purple/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                {g.badge}
              </span>
              <IconGamepad className="h-8 w-8 text-white/25 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex items-center justify-between gap-2 px-3 py-2.5">
              <span className="text-sm font-semibold text-white truncate">{g.name}</span>
              <button className="shrink-0 gold-gradient text-white text-xs font-bold px-3 py-1.5 rounded-full hover:opacity-90 transition-opacity shadow-sm shadow-purple-600/30">
                Play
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function IconHeart({ className = '', filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  )
}

const DEFAULT_GAME_IMG =
  'https://images.unsplash.com/photo-1574661569551-8374cd0465e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'

const GAME_LIBRARY = [
  { name: 'Ultra Panda', desc: 'Pandas, fish kings and lucky 7s — three game modes in one bamboo-fueled lobby.', rtp: '96.3%', bonus: '30% bonus' },
  { name: 'Milky Ways', desc: 'Galactic gem cascades across cosmic reels. Collect the constellation jackpot.', rtp: '96.2%', bonus: '30% bonus' },
  { name: 'Vblink', desc: "The dapper millionaire's lounge. Diamond pickups, cash showers, high-roller bonuses.", rtp: '96.4%', bonus: '30% bonus' },
  { name: 'YOLO', desc: 'You only live once — go big on YOLO 777. Royal-crown jackpots and rapid-fire rounds.', rtp: '96.0%', bonus: '50% bonus' },
  { name: 'Orion Stars', desc: 'A neon galaxy of fish hunts and reel spins. Chase the supernova multiplier.', rtp: '96.1%', bonus: '30% bonus' },
  { name: 'Panda Master', desc: 'Master the bamboo reels. Stacked wilds and golden panda free spins await.', rtp: '95.9%', bonus: '30% bonus' },
  { name: 'Juwa', desc: 'A vibrant arcade of slots and fish tables. Daily missions and combo payouts.', rtp: '96.2%', bonus: '30% bonus' },
  { name: 'Golden Dragon', desc: 'Ancient treasure reels guarded by dragons. Trigger the fortune wheel.', rtp: '96.5%', bonus: '30% bonus' },
  { name: 'Fire Kirin', desc: 'Legendary fish-hunting arcade. Cannon up and land the mythic Kirin.', rtp: '96.0%', bonus: '30% bonus' },
  { name: 'Cash Frenzy', desc: 'Fast, frenzied reels with a Vegas heartbeat. Hourly free coins and jackpots.', rtp: '95.8%', bonus: '20% bonus' },
]

const RECENT_GAMES = [
  { name: 'Ultra Panda', when: '2m ago', result: '+$4.50', win: true },
  { name: 'YOLO', when: '18m ago', result: '-$2.00', win: false },
  { name: 'Fire Kirin', when: '1h ago', result: '+$12.75', win: true },
  { name: 'Milky Ways', when: '3h ago', result: '+$1.20', win: true },
  { name: 'Cash Frenzy', when: 'Yesterday', result: '-$5.00', win: false },
]

function GameCard({
  game,
  fav,
  onToggleFav,
}: {
  game: (typeof GAME_LIBRARY)[number]
  fav: boolean
  onToggleFav: () => void
}) {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden bg-navy-panel border border-white/8 hover:border-gold/40 transition-colors">
      <div className="relative h-40 overflow-hidden">
        <img
          src={DEFAULT_GAME_IMG}
          alt={game.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
        <button
          onClick={onToggleFav}
          aria-label={fav ? 'Remove from favourites' : 'Add to favourites'}
          className={`absolute top-2.5 left-2.5 h-8 w-8 rounded-full flex items-center justify-center backdrop-blur-md transition-colors ${
            fav ? 'bg-gold/90 text-midnight' : 'bg-black/45 text-white/80 hover:text-white'
          }`}
        >
          <IconHeart className="h-4 w-4" filled={fav} />
        </button>
        <span className="absolute top-2.5 right-2.5 bg-white/90 text-midnight text-[10px] font-bold px-2.5 py-1 rounded-full">
          {game.bonus}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3 className="font-display text-lg font-extrabold mb-1.5">{game.name}</h3>
        <p className="text-xs text-white/45 leading-relaxed mb-4 flex-1">{game.desc}</p>
        <div className="flex items-center justify-between border-t border-white/6 pt-3">
          <span className="text-xs text-white/40">RTP {game.rtp}</span>
          <button className="text-xs font-bold gold-text hover:opacity-80 transition-opacity">Play →</button>
        </div>
      </div>
    </div>
  )
}

function GamesTab() {
  const [favs, setFavs] = useState<Set<string>>(new Set())
  const [filter, setFilter] = useState<'all' | 'favourites'>('all')

  const toggleFav = (name: string) =>
    setFavs((prev) => {
      const next = new Set(prev)
      next.has(name) ? next.delete(name) : next.add(name)
      return next
    })

  const visible = filter === 'all' ? GAME_LIBRARY : GAME_LIBRARY.filter((g) => favs.has(g.name))

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-2">Game Library</p>
        <h2 className="font-display text-4xl lg:text-6xl font-extrabold tracking-tight">Pick your reels.</h2>
      </div>

      {/* Filter tabs */}
      <div className="inline-flex items-center gap-1 rounded-full bg-navy-panel border border-white/10 p-1">
        <button
          onClick={() => setFilter('all')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            filter === 'all' ? 'gold-gradient text-white shadow-md shadow-purple-950/40' : 'text-white/60 hover:text-white'
          }`}
        >
          All games
          <span className={`text-[11px] font-bold rounded-full px-1.5 py-0.5 ${filter === 'all' ? 'bg-white/20' : 'bg-white/10'}`}>
            {GAME_LIBRARY.length}
          </span>
        </button>
        <button
          onClick={() => setFilter('favourites')}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            filter === 'favourites' ? 'gold-gradient text-white shadow-md shadow-purple-950/40' : 'text-white/60 hover:text-white'
          }`}
        >
          <IconHeart className="h-4 w-4" filled={filter === 'favourites'} />
          Favourites
          <span className={`text-[11px] font-bold rounded-full px-1.5 py-0.5 ${filter === 'favourites' ? 'bg-white/20' : 'bg-white/10'}`}>
            {favs.size}
          </span>
        </button>
      </div>

      {/* Game grid */}
      {visible.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {visible.map((g) => (
            <GameCard key={g.name} game={g} fav={favs.has(g.name)} onToggleFav={() => toggleFav(g.name)} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl bg-navy-panel border border-white/8 px-4 py-12 text-center">
          <p className="text-sm text-white/40">No favourites yet — tap the heart on a game to save it here.</p>
        </div>
      )}

      {/* Recent activity */}
      <div className="rounded-2xl bg-navy-panel border border-white/8 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
          <IconActivity className="h-4 w-4 text-gold" />
          <span className="text-sm font-semibold text-white/80">Recent activity</span>
        </div>
        <div className="divide-y divide-white/5">
          {RECENT_GAMES.map((r, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3">
              <img src={DEFAULT_GAME_IMG} alt="" className="h-10 w-10 rounded-lg object-cover shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white truncate">{r.name}</p>
                <p className="text-xs text-white/40">Played {r.when}</p>
              </div>
              <span className={`text-sm font-bold ${r.win ? 'text-emerald-400' : 'text-white/45'}`}>{r.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Shared: Wallet card ───────────────────────────────────────────────────────

function IconClock({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" />
    </svg>
  )
}

const PAYMENT_METHODS = [
  { id: 'card', name: 'Debit / Credit Card', desc: 'Visa, Mastercard, Amex', badge: '💳', tone: 'from-sky-500/30 to-blue-600/20' },
  { id: 'cashapp', name: 'Cash App', desc: 'Instant transfer', badge: '$', tone: 'from-emerald-500/30 to-green-600/20' },
  { id: 'chime', name: 'Chime', desc: 'Bank transfer', badge: '🟢', tone: 'from-lime-500/30 to-emerald-600/20' },
  { id: 'paypal', name: 'PayPal', desc: 'Pay with your balance', badge: '🅿️', tone: 'from-indigo-500/30 to-blue-700/20' },
  { id: 'apple', name: 'Apple Pay', desc: 'Fast & secure', badge: '', tone: 'from-white/20 to-white/5' },
  { id: 'btc', name: 'Bitcoin', desc: 'Crypto deposit', badge: '₿', tone: 'from-amber-500/30 to-orange-600/20' },
]

const QUICK_AMOUNTS = [10, 25, 50, 100, 250, 500]

function AddMoneyModal({ onClose }: { onClose: () => void }) {
  const [amount, setAmount] = useState(25)
  const [method, setMethod] = useState<string | null>(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-md max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-navy-panel border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="p-8 text-center">
            <div className="mx-auto mb-4 h-14 w-14 rounded-full gold-gradient text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-purple-600/40">✓</div>
            <h3 className="font-display text-xl font-extrabold mb-1">Request submitted</h3>
            <p className="text-sm text-white/50 mb-6">
              Your ${amount.toFixed(2)} deposit via {PAYMENT_METHODS.find((m) => m.id === method)?.name} is pending review.
            </p>
            <button onClick={onClose} className="w-full gold-gradient text-white font-bold py-3 rounded-xl text-sm hover:opacity-90 transition-opacity shadow-md shadow-purple-600/30">
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 sticky top-0 bg-navy-panel">
              <h3 className="font-display text-lg font-extrabold">Add money</h3>
              <button onClick={onClose} className="h-8 w-8 rounded-full border border-white/15 text-white/60 hover:text-white flex items-center justify-center" aria-label="Close">
                ✕
              </button>
            </div>

            <div className="p-5 space-y-5">
              {/* Amount */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Amount</p>
                <div className="flex items-center gap-2 rounded-xl border border-white/12 bg-black/25 px-4 py-3 mb-3">
                  <span className="font-display text-2xl font-extrabold text-gold">$</span>
                  <input
                    type="number"
                    min={1}
                    value={amount}
                    onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-transparent font-display text-2xl font-extrabold text-white outline-none"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {QUICK_AMOUNTS.map((a) => (
                    <button
                      key={a}
                      onClick={() => setAmount(a)}
                      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                        amount === a ? 'gold-gradient text-white shadow-sm' : 'bg-white/6 text-white/70 hover:bg-white/12'
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment methods */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2">Payment method</p>
                <div className="space-y-2">
                  {PAYMENT_METHODS.map((m) => {
                    const active = method === m.id
                    return (
                      <button
                        key={m.id}
                        onClick={() => setMethod(m.id)}
                        className={`w-full flex items-center gap-3 rounded-xl border px-3 py-3 text-left transition-colors ${
                          active ? 'border-purple-400 bg-purple-500/15' : 'border-white/8 bg-white/4 hover:bg-white/8'
                        }`}
                      >
                        <span className={`h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br ${m.tone} border border-white/10 flex items-center justify-center text-lg`}>
                          {m.badge || ''}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="block text-sm font-semibold text-white">{m.name}</span>
                          <span className="block text-xs text-white/45">{m.desc}</span>
                        </span>
                        <span className={`h-4 w-4 rounded-full border shrink-0 flex items-center justify-center text-[10px] ${active ? 'gold-gradient text-white border-transparent shadow-sm' : 'border-white/25'}`}>
                          {active && '✓'}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <button
                disabled={!method || amount <= 0}
                onClick={() => setDone(true)}
                className="w-full gold-gradient text-white font-bold py-3.5 rounded-xl text-sm disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity shadow-md shadow-purple-600/30"
              >
                {method && amount > 0 ? `Deposit $${amount.toFixed(2)}` : 'Select an amount & method'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function WalletCard({ username }: { username: string }) {
  const [balanceVisible, setBalanceVisible] = useState(true)
  const [addOpen, setAddOpen] = useState(false)

  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <div className="rounded-2xl border border-gold/25 overflow-hidden" style={{ background: 'linear-gradient(135deg, #200c2e 0%, #291035 100%)' }}>
      <div className="p-5 lg:p-8 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
            {greeting}, {username}
          </p>

          <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">Wallet Balance</p>
          <div className="flex items-center gap-2 mb-3">
            <IconWallet className="h-6 w-6 lg:h-7 lg:w-7 text-gold/60" />
            <span className="font-display text-4xl lg:text-5xl font-extrabold gold-text">
              {balanceVisible ? '$0.00' : '••••'}
            </span>
            <button
              onClick={() => setBalanceVisible(!balanceVisible)}
              className="ml-1 text-white/40 hover:text-white/70 transition-colors"
              aria-label="Toggle balance visibility"
            >
              <IconEye className="h-4 w-4" />
            </button>
          </div>

          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 mb-5">
            <span className="text-xs text-white/50">Freeplay</span>
            <span className="text-xs font-bold text-gold">$0.00</span>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-3">
            <button
              onClick={() => setAddOpen(true)}
              className="flex items-center justify-center gap-2 gold-gradient text-white font-bold py-3.5 px-6 rounded-full text-sm hover:opacity-90 transition-opacity shadow-md shadow-purple-600/30"
            >
              <IconPlus className="h-4 w-4" />
              Add money
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/6 hover:bg-white/10 border border-white/10 text-white font-semibold py-3.5 px-6 rounded-full text-sm transition-colors">
              <IconArrowDown className="h-4 w-4" />
              Withdraw money
            </button>
            <button className="flex items-center justify-center gap-2 border border-emerald-400/30 bg-emerald-400/10 hover:bg-emerald-400/20 text-emerald-300 font-semibold py-3.5 px-6 rounded-full text-sm transition-colors">
              <IconSend className="h-4 w-4" />
              Send to friend
            </button>
          </div>
        </div>

        {/* Slot machine digits (desktop) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0 self-center">
          {[7, 7, 7].map((n, i) => (
            <div
              key={i}
              className="flex h-24 w-20 items-center justify-center rounded-xl border border-gold/40 bg-black/25 font-display text-4xl font-extrabold gold-text"
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {addOpen && <AddMoneyModal onClose={() => setAddOpen(false)} />}
    </div>
  )
}

// ── Tab: Lobby (Wallet Home) ──────────────────────────────────────────────────

function LobbyTab({ username }: { username: string }) {
  return (
    <div className="space-y-4 pb-6">
      {/* Club Notice */}
      <div className="rounded-2xl bg-navy-panel border border-white/8 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
          <IconBell className="h-4 w-4 text-gold" />
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Club Notice</span>
        </div>
        <div className="px-4 py-3 space-y-2">
          <p className="text-xs text-white/50">Watch this space for Wild Fortune updates.</p>
          <div className="rounded-xl bg-white/4 border border-white/6 px-3 py-2.5">
            <p className="text-xs font-bold uppercase tracking-wide text-white mb-0.5">New Chime for Deposit</p>
            <p className="text-xs text-white/45">New Chime for Deposit — please check properly and confirm payment.</p>
          </div>
        </div>
      </div>

      {/* Wallet + side cards */}
      <div className="grid gap-4 lg:grid-cols-3 lg:items-start">
      {/* Left column: wallet + games */}
      <div className="lg:col-span-2 space-y-4">
      <WalletCard username={username} />

      {/* Games grid fills the space under the wallet card */}
      <GamesGrid />
      </div>

        {/* Right column: Top players + Refer & Earn */}
        <div className="space-y-4">
          <TopPlayersCard />
          <ReferEarnCard username={username} />
        </div>
      </div>

      {/* Verify banner */}
      <div
        className="rounded-2xl border border-purple-400/25 px-4 lg:px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4 shadow-lg shadow-purple-950/20"
        style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.18), rgba(147,51,234,0.08))' }}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div
            className="h-11 w-11 rounded-full flex items-center justify-center shrink-0 text-white shadow-md shadow-purple-900/30"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
          >
            <IconPhone className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm lg:text-base font-bold text-white">Verify your number and claim $5 Freeplay</p>
            <p className="text-xs text-white/50">Freeplay loads into games only. It is not wallet cash.</p>
          </div>
        </div>
        <button className="gold-gradient text-white font-bold text-sm px-6 py-2.5 rounded-full shrink-0 w-full sm:w-auto hover:opacity-90 transition-opacity shadow-md shadow-purple-600/30">
          Verify
        </button>
      </div>
    </div>
  )
}

// ── Tab: Wallets ──────────────────────────────────────────────────────────────

function WalletsTab({ username }: { username: string }) {
  const stats = [
    { label: 'Approved added', value: '$0.00', Icon: IconWallet, tone: 'text-emerald-400' },
    { label: 'Approved withdrawn', value: '$0.00', Icon: IconArrowDown, tone: 'text-gold' },
    { label: 'Pending reviews', value: '0', Icon: IconClock, tone: 'text-white' },
  ]

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-2">Wallet</p>
          <h2 className="font-display text-3xl lg:text-5xl font-extrabold tracking-tight">Manage your money</h2>
        </div>
        <button className="flex items-center gap-2 shrink-0 rounded-full bg-navy-panel border border-white/10 text-white/80 hover:text-white hover:border-white/25 text-sm font-semibold px-4 py-2 transition-colors">
          <IconRefresh className="h-4 w-4" />
          <span className="hidden sm:inline">Refresh</span>
        </button>
      </div>

      {/* Wallet card */}
      <WalletCard username={username} />

      {/* Stat cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(({ label, value, Icon, tone }) => (
          <div key={label} className="rounded-2xl bg-navy-panel border border-white/8 p-5">
            <Icon className="h-5 w-5 text-white/40 mb-3" />
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-1">{label}</p>
            <p className={`font-display text-2xl font-extrabold ${tone}`}>{value}</p>
          </div>
        ))}
      </div>

      <p className="text-xs text-white/40 leading-relaxed">
        After 15 days without signing in or using the website, your website cash wallet and freeplay balances expire and
        become zero. Your game balances stay unchanged.
      </p>

      {/* Wallet history */}
      <div className="rounded-2xl bg-navy-panel border border-white/8 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
          <IconWallet className="h-4 w-4 text-gold" />
          <span className="font-display text-base font-bold">Wallet history</span>
        </div>
        <div className="p-4">
          <div className="rounded-xl border border-dashed border-white/12 py-12 text-center">
            <p className="text-sm text-white/35">No wallet activity yet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Tab: Support ──────────────────────────────────────────────────────────────

function SupportTab() {
  return (
    <div className="space-y-4 pb-6">
      <div className="rounded-2xl bg-navy-panel border border-white/8 p-5 space-y-4">
        <h3 className="font-display text-lg font-extrabold">Help & Support</h3>
        {[
          { q: 'How do I claim my welcome bonus?', a: 'After signing up, visit the Rewards tab and spin the daily wheel. Your welcome bonus is automatically added.' },
          { q: 'How do withdrawals work?', a: 'Go to the Wallets tab, add a payment method, then use "Withdraw money" from the Lobby tab.' },
          { q: 'Is Wild Fortune free to play?', a: 'Yes! Wild Fortune is completely free to play. You can use Freeplay credits to win sweepstakes prizes.' },
        ].map((item) => (
          <div key={item.q} className="rounded-xl bg-white/4 border border-white/6 px-4 py-3">
            <p className="text-sm font-semibold text-white mb-1">{item.q}</p>
            <p className="text-xs text-white/50">{item.a}</p>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-navy-panel border border-white/8 p-5 text-center">
        <p className="text-sm text-white/60 mb-3">Need more help? Contact our support team.</p>
        <button className="inline-flex items-center gap-2 bg-purple/20 border border-purple-soft/30 text-purple-soft font-semibold px-5 py-2.5 rounded-xl text-sm hover:bg-purple/30 transition-colors">
          <IconSupport className="h-4 w-4" />
          Chat with support
        </button>
      </div>
    </div>
  )
}

// ── Live Wins Ticker ──────────────────────────────────────────────────────────

const LIVE_WINS = [
  'Daniel K wins $1,200 on Cash Frenzy',
  'Maria T wins $850 on FireKirin',
  'James R wins $2,400 on GameVault',
  'Lisa P wins $640 on RiverSweeps',
  'Kevin M wins $1,100 on Cash Frenzy',
]

function LiveTicker() {
  const [idx, setIdx] = useState(0)

  return (
    <div className="flex items-center gap-3 rounded-full bg-black/40 border border-white/8 px-3 py-2 text-xs overflow-hidden">
      <span className="shrink-0 gold-gradient text-white font-extrabold text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full shadow-sm shadow-purple-600/30">
        Live Wins
      </span>
      <span
        key={idx}
        className="text-white/70 truncate cursor-pointer"
        onClick={() => setIdx((i) => (i + 1) % LIVE_WINS.length)}
      >
        {LIVE_WINS[idx]}
      </span>
    </div>
  )
}

// ── Dashboard Shell ───────────────────────────────────────────────────────────

const TABS: { id: Tab; label: string; Icon: (p: { className?: string }) => React.ReactElement }[] = [
  { id: 'rewards', label: 'Rewards', Icon: IconGift },
  { id: 'games', label: 'Games', Icon: IconGamepad },
  { id: 'lobby', label: 'Lobby', Icon: IconCrown },
  { id: 'wallets', label: 'Wallets', Icon: IconWallet },
  { id: 'support', label: 'Support', Icon: IconSupport },
]

export default function Dashboard({ username, onLogout }: DashboardProps) {
  const [tab, setTab] = useState<Tab>('rewards')

  return (
    <div className="flex flex-col min-h-screen bg-midnight">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-midnight/95 backdrop-blur-md border-b border-purple-500/20">
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between px-4 lg:px-8 py-3">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl gold-gradient text-white shadow-md shadow-purple-600/30">
              <IconCrown className="h-4 w-4" />
            </span>
            <span className="font-display text-base lg:text-lg font-extrabold tracking-tight">
              Wild<span className="gold-text"> Fortune</span>
            </span>
          </div>

          {/* Center nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-white/70">
            <button onClick={() => setTab('games')} className="hover:text-white transition-colors">Games</button>
            <button onClick={() => setTab('games')} className="hover:text-white transition-colors">Leaderboard</button>
          </nav>

          <div className="flex items-center gap-2 lg:gap-3">
            <button className="hidden lg:inline-flex items-center gap-2 gold-gradient text-white font-bold text-sm px-4 py-2 rounded-full hover:opacity-90 transition-opacity shadow-md shadow-purple-600/30">
              <IconDownload className="h-4 w-4" />
              Download now
            </button>

            {/* User chip: pill on desktop, avatar on mobile */}
            <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/15 pl-1 pr-4 py-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-full gold-gradient text-white font-bold text-sm shadow-sm shadow-purple-600/30">
                {username.charAt(0).toUpperCase()}
              </span>
              <span className="text-sm font-semibold text-white">{username}</span>
            </div>
            <button
              className="lg:hidden h-8 w-8 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Account"
            >
              <IconUser className="h-4 w-4" />
            </button>

            <button
              onClick={onLogout}
              className="h-8 w-8 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-rose-400 hover:border-rose-400/40 transition-colors"
              aria-label="Log out"
            >
              <IconLogout className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 mx-auto w-full max-w-6xl px-4 lg:px-8 pt-4 pb-28 lg:pb-32">
        <LiveTicker />
        <div className="mt-4">
          {tab === 'lobby' && <LobbyTab username={username} />}
          {tab === 'rewards' && <RewardsTab username={username} />}
          {tab === 'games' && <GamesTab />}
          {tab === 'wallets' && <WalletsTab username={username} />}
          {tab === 'support' && <SupportTab />}
        </div>
      </main>

      <Footer />

      {/* Bottom nav — full-width bar on mobile, floating pill on desktop */}
      <nav className="fixed bottom-0 lg:bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[480px] lg:w-auto z-40">
        <div className="flex items-end justify-around lg:justify-center gap-1 lg:gap-8 bg-midnight/95 backdrop-blur-lg border-t border-white/10 lg:border lg:rounded-full lg:shadow-2xl px-2 lg:px-6 pt-2 pb-3 lg:py-3">
          {TABS.map(({ id, label, Icon }) => {
            const active = tab === id
            const isLobby = id === 'lobby'
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                className="flex flex-col items-center gap-0.5 flex-1 lg:flex-none py-1 transition-all"
                aria-label={label}
                aria-current={active ? 'page' : undefined}
              >
                {isLobby ? (
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${active ? 'gold-gradient text-white shadow-lg shadow-purple-600/30' : 'border border-white/20 text-white/50'}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                ) : (
                  <Icon className={`h-5 w-5 transition-colors ${active ? 'text-gold' : 'text-white/40'}`} />
                )}
                {!isLobby && (
                  <span className={`text-[10px] font-semibold transition-colors ${active ? 'text-gold' : 'text-white/35'}`}>
                    {label}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </nav>

      {/* Message us bubble (desktop) */}
      <button className="hidden lg:inline-flex fixed bottom-6 left-6 z-40 items-center gap-2 gold-gradient text-white font-bold text-sm px-4 py-2.5 rounded-full shadow-lg shadow-purple-950/40 hover:opacity-90 transition-opacity">
        <IconChat className="h-4 w-4" />
        Message us
      </button>
    </div>
  )
}
