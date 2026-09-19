import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'gold' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
}

const sizes: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-7 py-3.5',
}

const variants: Record<Variant, string> = {
  gold: 'gold-gradient text-white font-bold hover:brightness-110 shadow-lg shadow-purple-900/30 active:scale-[0.98]',
  outline:
    'bg-transparent text-purple-300 font-semibold border border-purple-400/60 hover:border-purple-400 hover:bg-purple-500/15 active:scale-[0.98]',
  ghost: 'bg-white/5 text-white font-semibold border border-white/10 hover:bg-white/10 hover:border-purple-400/30 active:scale-[0.98]',
}

export default function Button({
  variant = 'gold',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight disabled:opacity-60 ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
