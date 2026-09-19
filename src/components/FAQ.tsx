import { useState } from 'react'
import { faqs } from '../data'
import Section from './Section'
import { ChevronDown } from './icons'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Questions, answered"
      subtitle="Everything you need to know about playing and redeeming at Wild Fortune."
    >
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div
              key={f.q}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isOpen ? 'border-purple-400/50 bg-purple-500/[0.08] shadow-md shadow-purple-950/20' : 'border-purple-500/15 bg-white/[0.02]'
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-display text-base font-bold sm:text-lg">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-purple-300 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-out"
                style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-white/60">{f.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
