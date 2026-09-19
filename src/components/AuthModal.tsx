import { useEffect, useState } from 'react'
import Button from './Button'
import { Close, Crown } from './icons'

export type AuthMode = 'signup' | 'login'

interface AuthModalProps {
  mode: AuthMode | null
  onClose: () => void
  onSwitch: (mode: AuthMode) => void
  onSuccess?: (username: string) => void
}

export default function AuthModal({ mode, onClose, onSwitch, onSuccess }: AuthModalProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ageOk, setAgeOk] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    if (mode) {
      setSubmitted(false)
      setError('')
      const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
      window.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
      return () => {
        window.removeEventListener('keydown', onKey)
        document.body.style.overflow = ''
      }
    }
  }, [mode, onClose])

  if (!mode) return null
  const isSignup = mode === 'signup'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSignup && !ageOk) {
      setError('Please confirm you are of legal age to continue.')
      return
    }
    setError('')
    setSubmitted(true)
    // derive a display username from the email
    const username = email.split('@')[0].toUpperCase().replace(/[^A-Z0-9]/g, '') || 'PLAYER'
    setTimeout(() => onSuccess?.(username), 1200)
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={isSignup ? 'Create free account' : 'Log in'}
    >
      <div
        className="absolute inset-0 bg-midnight/80 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="glass relative w-full max-w-md rounded-t-3xl border-purple-500/20 p-7 sm:rounded-3xl shadow-2xl shadow-purple-950/50">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-white/60 transition hover:bg-white/10 hover:text-white"
        >
          <Close className="h-5 w-5" />
        </button>

        <div className="mb-6 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl gold-gradient text-white shadow-md shadow-purple-600/30">
            <Crown className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight">
            Wild<span className="gold-text"> Fortune</span>
          </span>
        </div>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full gold-gradient text-white text-2xl shadow-lg shadow-purple-600/40">
              ✓
            </div>
            <h3 className="font-display text-xl font-extrabold">
              {isSignup ? "You're in! 🎉" : 'Welcome back!'}
            </h3>
            <p className="mt-2 text-sm text-white/60">
              {isSignup
                ? 'Your free account is ready. Claim your welcome bonus and start playing.'
                : 'This is a demo — no real session was created.'}
            </p>
            <Button className="mt-6 w-full" size="lg" onClick={onClose}>
              Start playing
            </Button>
          </div>
        ) : (
          <>
            <h2 className="font-display text-2xl font-extrabold">
              {isSignup ? 'Create your free account' : 'Log in to play'}
            </h2>
            <p className="mt-1 text-sm text-white/55">
              {isSignup
                ? 'No purchase necessary. Claim daily bonuses instantly.'
                : 'Pick up right where you left off.'}
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <Field
                label="Email"
                type="email"
                required
                value={email}
                autoComplete="email"
                placeholder="you@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Field
                label="Password"
                type="password"
                required
                minLength={6}
                value={password}
                autoComplete={isSignup ? 'new-password' : 'current-password'}
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />

              {isSignup && (
                <label className="flex cursor-pointer items-start gap-3 text-sm text-white/70">
                  <input
                    type="checkbox"
                    checked={ageOk}
                    onChange={(e) => setAgeOk(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-purple-500"
                  />
                  <span>
                    I confirm I am 18+ (or the legal age in my jurisdiction) and agree to the Terms &
                    Sweeps Rules.
                  </span>
                </label>
              )}

              {error && <p className="text-sm text-rose-400">{error}</p>}

              <Button type="submit" size="lg" className="w-full">
                {isSignup ? 'Create Free Account' : 'Log In'}
              </Button>
            </form>

            <p className="mt-5 text-center text-sm text-white/55">
              {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => onSwitch(isSignup ? 'login' : 'signup')}
                className="font-semibold text-purple-300 hover:text-purple-200 hover:underline"
              >
                {isSignup ? 'Log in' : 'Sign up free'}
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-white/50">
        {label}
      </span>
      <input
        {...props}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-gold/60 focus:bg-white/[0.07] focus:ring-2 focus:ring-gold/25"
      />
    </label>
  )
}
