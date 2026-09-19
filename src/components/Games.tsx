import { useState } from 'react'
import { categories, games, type Category, type Game } from '../data'
import Button from './Button'
import { Dice, Fish, Grid, Play, Slots, Sparkle, Trophy } from './icons'
import Section from './Section'

const iconMap = { grid: Grid, slots: Slots, fish: Fish, dice: Dice, trophy: Trophy, sparkle: Sparkle }

const DEFAULT_GAME_IMG =
  'https://images.unsplash.com/photo-1574661569551-8374cd0465e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'

const tagStyles: Record<NonNullable<Game['tag']>, string> = {
  Hot: 'bg-rose-500/90 text-white shadow-sm',
  New: 'bg-purple-600/90 text-white shadow-sm',
  Jackpot: 'gold-gradient text-white shadow-sm shadow-purple-900/40',
}

export default function Games({ onPlay }: { onPlay: () => void }) {
  const [active, setActive] = useState<Category | 'All'>('All')
  const filtered = active === 'All' ? games : games.filter((g) => g.category === active)

  return (
    <Section id="games" eyebrow="The Lobby" title="Explore our games" subtitle="From glittering slots to fast-paced fish tables — new favorites drop every week.">
      {/* category tabs */}
      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        {categories.map((c) => {
          const Icon = iconMap[c.icon]
          const isActive = active === c.label
          return (
            <button
              key={c.label}
              onClick={() => setActive(c.label)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                isActive
                  ? 'border-purple-400/60 bg-purple-500/20 text-purple-200 shadow-md shadow-purple-950/40'
                  : 'border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.07] hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              {c.label}
            </button>
          )
        })}
      </div>

      {/* game grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((game) => (
          <article
            key={game.name}
            className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-navy-panel transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-950/40"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={DEFAULT_GAME_IMG}
                alt={game.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
              {game.tag && (
                <span
                  className={`absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${tagStyles[game.tag]}`}
                >
                  {game.tag}
                </span>
              )}
              {/* hover play overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-midnight/65 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                <button
                  onClick={onPlay}
                  className="flex items-center gap-2 rounded-full gold-gradient px-5 py-2.5 text-sm font-bold text-white shadow-xl shadow-purple-950/60 transition-transform duration-200 group-hover:scale-105"
                >
                  <Play className="h-4 w-4" /> Play
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 p-3">
              <div className="min-w-0">
                <h3 className="truncate font-display text-sm font-bold">{game.name}</h3>
                <p className="truncate text-xs text-white/45">{game.category}</p>
              </div>
              <span className="flex h-2 w-2 shrink-0 rounded-full bg-emerald-400" title="Live now" />
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="outline" size="lg" onClick={onPlay}>
          View all games
        </Button>
      </div>
    </Section>
  )
}
