import { useEffect, useState } from 'react'
import Button from './Button'
import { Crown, Menu, Close } from './icons'
import type { AuthMode } from './AuthModal'

const navLinks = [
  { label: 'Games', href: '#games' },
  { label: 'How It Works', href: '#how' },
  { label: 'Promotions', href: '#promotions' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'FAQ', href: '#faq' },
]

export default function Header({ onAuth }: { onAuth: (mode: AuthMode) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-purple-500/20 bg-midnight/85 backdrop-blur-xl shadow-lg shadow-purple-950/20'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'h-14' : 'h-20'
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl gold-gradient text-white shadow-md shadow-purple-600/30 transition-transform group-hover:scale-105">
            <Crown className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight sm:text-xl">
            Wild<span className="gold-text"> Fortune</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" onClick={() => onAuth('login')}>
            Log In
          </Button>
          <Button size="sm" onClick={() => onAuth('signup')}>
            Play Free
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div className="fixed inset-0 top-14 z-40 bg-midnight/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="glass relative z-50 mx-3 mb-3 rounded-2xl border-white/10 p-4">
            <div className="mb-2 flex justify-end">
              <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-1 text-white/60">
                <Close className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Button variant="outline" size="md" onClick={() => { setOpen(false); onAuth('login') }}>
                Log In
              </Button>
              <Button size="md" onClick={() => { setOpen(false); onAuth('signup') }}>
                Play Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
