import { Link } from 'react-router-dom'
import { Instagram, BookOpen } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-4 gap-10 mb-10">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} className="text-foreground/50" />
              <span className="text-base font-display text-foreground" style={{ fontFamily: "'Instrument Serif', serif" }}>
                The Reading Room
              </span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed max-w-sm">
              A community library for curious minds. Open to all. Free to explore.
            </p>
            <p className="text-xs text-foreground/40 mt-4">
              Built by WebGrowth
            </p>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-foreground/50 mb-4 font-medium">Explore</p>
            <div className="flex flex-col gap-2.5">
              <Link to="/programs" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Programs</Link>
              <Link to="/about" className="text-sm text-foreground/60 hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-foreground/60 hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs tracking-wider uppercase text-foreground/50 mb-4 font-medium">Connect</p>
            <a
              href="https://ig.me/m/webgrowth.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              <Instagram size={14} /> @webgrowth.in
            </a>
            <p className="text-xs text-foreground/40 mt-2">DM for inquiries</p>
          </div>
        </div>
        <div className="pt-8 border-t border-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/40">
            &copy; {new Date().getFullYear()} The Reading Room. A WebGrowth project.
          </p>
          <p className="text-xs text-foreground/40">
            Open to all, free to explore
          </p>
        </div>
      </div>
    </footer>
  )
}
