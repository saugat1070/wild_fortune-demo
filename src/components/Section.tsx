import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  children: ReactNode
  className?: string
  center?: boolean
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  center = true,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <div className={`mb-10 ${center ? 'mx-auto max-w-2xl text-center' : ''}`}>
            {eyebrow && (
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] gold-text">
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 text-base text-white/60 sm:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
