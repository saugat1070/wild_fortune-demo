import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WinnersTicker from './components/WinnersTicker'
import Games from './components/Games'
import HowItWorks from './components/HowItWorks'
import Promotions from './components/Promotions'
import Rewards from './components/Rewards'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import MobilePlayBar from './components/MobilePlayBar'
import AuthModal, { type AuthMode } from './components/AuthModal'
import Dashboard from './components/Dashboard'

export default function App() {
  const [authMode, setAuthMode] = useState<AuthMode | null>(null)
  const [authedUser, setAuthedUser] = useState<string | null>(null)

  if (authedUser) {
    return <Dashboard username={authedUser} onLogout={() => setAuthedUser(null)} />
  }

  return (
    <div className="min-h-screen bg-midnight text-white">
      <Header onAuth={setAuthMode} />

      <main>
        <Hero onAuth={setAuthMode} />
        <WinnersTicker />
        <Games onPlay={() => setAuthMode('signup')} />
        <HowItWorks />
        <Promotions onAuth={setAuthMode} />
        <Rewards />
        <Testimonials />
        <FAQ />
        <FinalCTA onAuth={setAuthMode} />
      </main>

      <Footer />

      {/* bottom padding so mobile play bar never covers footer content */}
      <div className="h-20 lg:hidden" aria-hidden="true" />

      <MobilePlayBar onAuth={setAuthMode} />
      <AuthModal
        mode={authMode}
        onClose={() => setAuthMode(null)}
        onSwitch={setAuthMode}
        onSuccess={(username) => {
          setAuthMode(null)
          setAuthedUser(username)
        }}
      />
    </div>
  )
}
