import { useState } from 'react'
import { testimonials } from '../data'
import Section from './Section'
import { Star, ChevronDown } from './icons'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const go = (dir: number) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
  const t = testimonials[index]

  return (
    <Section
      eyebrow="Player Love"
      title="What our players say"
      subtitle="Real players, real rewards, real fun."
    >
      <div className="relative mx-auto max-w-3xl">
        <div className="glass rounded-3xl p-8 text-center sm:p-12">
          <div className="mb-5 flex justify-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5" />
            ))}
          </div>
          <blockquote className="font-display text-xl font-bold leading-relaxed sm:text-2xl">
            “{t.quote}”
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-black text-white shadow-md shadow-purple-900/40"
              style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
            >
              {t.name[0]}
            </div>
            <div className="text-left">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-white/50">{t.role}</div>
            </div>
          </div>
        </div>

        {/* controls */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-400/50 hover:text-purple-300"
          >
            <ChevronDown className="h-5 w-5 rotate-90" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 gold-gradient shadow-sm shadow-purple-500/40' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
          <button
            aria-label="Next testimonial"
            onClick={() => go(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-400/50 hover:text-purple-300"
          >
            <ChevronDown className="h-5 w-5 -rotate-90" />
          </button>
        </div>
      </div>
    </Section>
  )
}
