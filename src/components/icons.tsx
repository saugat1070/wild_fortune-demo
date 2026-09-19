import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
})

export const Crown = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 8l3.5 3L12 4l5.5 7L21 8l-1.6 10.2A1 1 0 0 1 18.4 19H5.6a1 1 0 0 1-1-.8L3 8z" />
    <path d="M9 15h6" />
  </svg>
)

export const Sparkle = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="M12 8c.7 2.3 1.7 3.3 4 4-2.3.7-3.3 1.7-4 4-.7-2.3-1.7-3.3-4-4 2.3-.7 3.3-1.7 4-4z" />
  </svg>
)

export const Coin = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5.5" />
    <path d="M12 9.5v5M10.3 12h3.4" />
  </svg>
)

export const Gift = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="9" width="18" height="12" rx="1.5" />
    <path d="M3 13h18M12 9v12" />
    <path d="M12 9S10.5 4 8 4a2 2 0 0 0 0 4h4zM12 9s1.5-5 4-5a2 2 0 0 1 0 4h-4z" />
  </svg>
)

export const Trophy = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M8 4h8v5a4 4 0 0 1-8 0V4z" />
    <path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3" />
    <path d="M12 13v3M9 20h6M10 16h4l.5 4h-5z" />
  </svg>
)

export const Shield = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const Bolt = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
)

export const UserPlus = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="9" cy="8" r="4" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M18 8v6M15 11h6" />
  </svg>
)

export const Menu = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const ChevronDown = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const ArrowRight = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Play = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="M8 5.5v13a1 1 0 0 0 1.5.9l11-6.5a1 1 0 0 0 0-1.7l-11-6.5A1 1 0 0 0 8 5.5z" />
  </svg>
)

export const Star = (props: IconProps) => (
  <svg {...base(props)} fill="currentColor" stroke="none">
    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.9L12 3.5z" />
  </svg>
)

export const Fish = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 12c3-5 9-6 13-4 2 1 4 2.5 5 4-1 1.5-3 3-5 4-4 2-10 1-13-4z" />
    <path d="M20 12c1-1 1.5-2.5 1.5-3.5M16 11h.01" />
    <path d="M6 10c1 1 1 3 0 4" />
  </svg>
)

export const Dice = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="4" y="4" width="16" height="16" rx="3" />
    <path d="M8.5 8.5h.01M15.5 8.5h.01M12 12h.01M8.5 15.5h.01M15.5 15.5h.01" strokeWidth="2.6" />
  </svg>
)

export const Slots = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="6" width="18" height="12" rx="2" />
    <path d="M9 6v12M15 6v12M6 10v4M12 10v4M18 10v4" />
  </svg>
)

export const Grid = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </svg>
)
