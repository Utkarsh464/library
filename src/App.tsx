import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedPage from './components/AnimatedPage'
import Home from './pages/Home'
import Programs from './pages/Programs'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <video
        autoPlay loop muted playsInline preload="auto"
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      <div className="fixed inset-0 z-[1] bg-background/50" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <AnimatedPage key={location.pathname}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </AnimatedPage>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  )
}
