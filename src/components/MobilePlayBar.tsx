import Button from './Button'
import { Sparkle } from './icons'
import type { AuthMode } from './AuthModal'

export default function MobilePlayBar({ onAuth }: { onAuth: (mode: AuthMode) => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-purple-500/20 bg-midnight/90 p-3 backdrop-blur-xl lg:hidden shadow-lg shadow-purple-950/40">
      <Button size="lg" className="w-full" onClick={() => onAuth('signup')}>
        <Sparkle className="h-5 w-5" /> Play Free
      </Button>
    </div>
  )
}
