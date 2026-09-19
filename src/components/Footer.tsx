import { Crown, Shield } from './icons'

const columns = [
  { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Blog'] },
  { title: 'Support', links: ['Help Center', 'Contact', 'How to Redeem', 'Responsible Play'] },
  { title: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Sweeps Rules', 'Cookie Policy'] },
]

const socials = ['IG', 'X', 'YT', 'FB', 'TT']

export default function Footer() {
  return (
    <footer className="border-t border-purple-500/15 bg-midnight-2/70">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 group">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl gold-gradient text-white shadow-md shadow-purple-600/30 transition-transform group-hover:scale-105">
                <Crown className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight">
                Wild<span className="gold-text"> Fortune</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/55">
              A premium free-to-play social casino with real sweepstakes rewards. Play responsibly.
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold text-white/70 transition hover:border-purple-400/50 hover:text-purple-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white/80">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/55 transition hover:text-purple-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* badges */}
        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-purple-500/15 pt-8">
          {['SSL Secured', '256-bit Encryption', 'Verified Payouts', 'GeoComply'].map((b) => (
            <span
              key={b}
              className="inline-flex items-center gap-1.5 rounded-lg border border-purple-500/20 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/60"
            >
              <Shield className="h-3.5 w-3.5 text-purple-300" />
              {b}
            </span>
          ))}
        </div>

        {/* legal block */}
        <div className="mt-8 rounded-2xl border border-purple-500/15 bg-white/[0.02] p-5">
          <p className="text-xs leading-relaxed text-white/50">
            <span className="font-semibold text-white/70">No purchase necessary. Void where prohibited.</span>{' '}
            Wild Fortune is a free-to-play social casino intended for entertainment. You must be 18+
            (or the legal age in your jurisdiction) to play. Sweeps Coins are used for promotional
            sweepstakes and have no cash value until redeemed in accordance with the Sweeps Rules.
            Please play responsibly — if gambling stops being fun, take a break. Call 1-800-522-4700
            for confidential help.{' '}
            <a href="#" className="font-semibold text-purple-300 hover:underline">
              Responsible Play
            </a>
            .
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Wild Fortune. All rights reserved. This is a fictional demo
          brand.
        </p>
      </div>
    </footer>
  )
}
