export type Category = 'Slots' | 'Fish Tables' | 'Table Games' | 'Jackpots' | 'New Releases'

export interface Game {
  name: string
  category: Category
  tag?: 'Hot' | 'New' | 'Jackpot'
  from: string
  to: string
  glyph: 'slots' | 'fish' | 'dice' | 'coin' | 'sparkle' | 'crown'
}

export const games: Game[] = [
  { name: 'Golden Pharaoh', category: 'Slots', tag: 'Hot', from: '#c9962c', to: '#5b2ea6', glyph: 'slots' },
  { name: 'Neon Koi Rush', category: 'Fish Tables', tag: 'Hot', from: '#7b3ff2', to: '#0e7490', glyph: 'fish' },
  { name: 'Velvet Blackjack', category: 'Table Games', from: '#166534', to: '#0b0d1a', glyph: 'dice' },
  { name: 'Sultan of Spins', category: 'Slots', tag: 'New', from: '#b8891f', to: '#7b1fa2', glyph: 'slots' },
  { name: 'Mega Fortune Vault', category: 'Jackpots', tag: 'Jackpot', from: '#d4af37', to: '#a3115a', glyph: 'crown' },
  { name: 'Deep Sea Bounty', category: 'Fish Tables', from: '#0891b2', to: '#1e1b4b', glyph: 'fish' },
  { name: 'Diamond Roulette', category: 'Table Games', tag: 'Hot', from: '#9333ea', to: '#111827', glyph: 'dice' },
  { name: 'Cosmic Cascade', category: 'Slots', tag: 'New', from: '#6d28d9', to: '#db2777', glyph: 'sparkle' },
  { name: 'Royal Reels 777', category: 'Jackpots', tag: 'Jackpot', from: '#eab308', to: '#7c2d12', glyph: 'coin' },
  { name: 'Pearl Hunter', category: 'Fish Tables', tag: 'New', from: '#14b8a6', to: '#312e81', glyph: 'fish' },
  { name: 'Emerald Baccarat', category: 'Table Games', from: '#059669', to: '#0b0d1a', glyph: 'dice' },
  { name: 'Starlit Jackpot', category: 'Slots', tag: 'Hot', from: '#f59e0b', to: '#4c1d95', glyph: 'sparkle' },
]

export const categories: { label: Category | 'All'; icon: 'grid' | 'slots' | 'fish' | 'dice' | 'trophy' | 'sparkle' }[] = [
  { label: 'All', icon: 'grid' },
  { label: 'Slots', icon: 'slots' },
  { label: 'Fish Tables', icon: 'fish' },
  { label: 'Table Games', icon: 'dice' },
  { label: 'Jackpots', icon: 'trophy' },
  { label: 'New Releases', icon: 'sparkle' },
]

export const winners = [
  { user: 'Mia****23', game: 'Mega Fortune Vault', amount: '$4,820' },
  { user: 'Jae****l', game: 'Golden Pharaoh', amount: '$1,240' },
  { user: 'Rho****88', game: 'Royal Reels 777', amount: '$9,150' },
  { user: 'Kim****z', game: 'Neon Koi Rush', amount: '$620' },
  { user: 'Devo****', game: 'Starlit Jackpot', amount: '$3,410' },
  { user: 'Ana****7', game: 'Diamond Roulette', amount: '$2,090' },
  { user: 'Tru****x', game: 'Pearl Hunter', amount: '$1,775' },
  { user: 'Lux****42', game: 'Cosmic Cascade', amount: '$5,300' },
]

export const testimonials = [
  {
    quote:
      "I redeemed my first Sweeps Coins in under two days. Zero pressure to ever pay — the daily bonus alone keeps me coming back.",
    name: 'Priya Nadeau',
    role: 'Player since 2024',
    from: '#7b3ff2',
    to: '#d4af37',
  },
  {
    quote:
      'The fish tables are gorgeous and the redemptions are legit fast. Got my gift card the same week I hit my threshold.',
    name: 'Marcus Rowe',
    role: 'VIP Gold member',
    from: '#0891b2',
    to: '#7b3ff2',
  },
  {
    quote:
      'Finally a social casino that feels premium without asking for my card up front. Free to play actually means free here.',
    name: 'Sofia Delgado',
    role: 'Player since 2023',
    from: '#d4af37',
    to: '#a3115a',
  },
  {
    quote:
      'Love the two-currency system once it clicked. Gold Coins for fun, Sweeps Coins for the real rewards. Simple and fair.',
    name: 'Theo Bergman',
    role: 'VIP Platinum member',
    from: '#059669',
    to: '#6d28d9',
  },
]

export const faqs = [
  {
    q: 'Is Wild Fortune really free to play?',
    a: 'Yes. Creating an account and playing is completely free. No purchase is ever necessary to play or to redeem prizes. You receive Gold Coins and Sweeps Coins through free daily bonuses, promotions, and mail-in requests.',
  },
  {
    q: 'What is the difference between Gold Coins and Sweeps Coins?',
    a: 'Gold Coins are for casual, just-for-fun play and carry no monetary value. Sweeps Coins are our promotional sweepstakes entries — when you play games with Sweeps Coins and win, those winnings can be redeemed for real rewards once you meet the minimum threshold.',
  },
  {
    q: 'How do I redeem my Sweeps Coins for rewards?',
    a: 'Once you reach the redemption minimum, head to your Rewards dashboard, choose a prize or gift card, and confirm your verified account details. Most redemptions are reviewed and processed within 1–3 business days.',
  },
  {
    q: 'Which regions are eligible to play?',
    a: 'Wild Fortune is available in most of the United States and Canada, excluding a small number of restricted jurisdictions. Void where prohibited. You must be 18 or older (or the legal age in your jurisdiction) to participate.',
  },
  {
    q: 'How do I earn more Sweeps Coins without paying?',
    a: 'Log in daily for bonus drops, complete promotions, refer friends, climb VIP tiers, and use our free postal mail-in method. There are always no-cost ways to keep playing.',
  },
  {
    q: 'Is my account and information secure?',
    a: 'Absolutely. We use bank-grade encryption, secure identity verification for redemptions, and never sell your personal data. Responsible play tools are available in your account settings at any time.',
  },
  {
    q: 'Can I set responsible play limits?',
    a: 'Yes. You can set session reminders, cool-off periods, and self-exclusion directly from your profile. We are committed to a fun, healthy experience for every player.',
  },
]
