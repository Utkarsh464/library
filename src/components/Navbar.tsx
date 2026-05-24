import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, Menu, X, Instagram } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Programs', path: '/programs' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <nav className={`transition-all duration-500 ${
        scrolled ? 'bg-background/85 backdrop-blur-xl shadow-lg shadow-black/20' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <BookOpen size={18} className="text-foreground/60 group-hover:text-foreground transition-colors" />
            <span className="text-xl tracking-tight text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
              The Reading Room
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide transition-colors ${
                  pathname === item.path ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <a
            href="https://ig.me/m/webgrowth.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium tracking-wider rounded-full hover:bg-white/90 transition-all shadow-lg"
          >
            <Instagram size={14} /> Message Us
          </a>

          <button
            className="md:hidden text-foreground relative z-[60]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[280px] bg-background border-l border-foreground/10 flex flex-col"
            >
              <div className="flex-1 flex flex-col justify-center px-8 gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-3 text-lg font-display tracking-wide transition-colors ${
                        pathname === item.path ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'
                      }`}
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {item.label}
                    </Link>
                    <span className="block h-px bg-foreground/5" />
                  </motion.div>
                ))}
              </div>
              <div className="px-8 pb-10">
                <a
                  href="https://ig.me/m/webgrowth.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-foreground text-background text-sm font-medium tracking-wider rounded-full hover:bg-white/90 transition-all"
                >
                  <Instagram size={14} /> Message Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
