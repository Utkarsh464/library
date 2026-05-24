import { motion } from 'framer-motion'
import { Instagram, ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <div className="pt-28 pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/40 font-mono mb-4">About</p>
          <h1 className="text-4xl md:text-6xl font-display leading-[1.05] tracking-tight mb-8" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Our story
          </h1>
        </motion.div>

        <div className="space-y-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            The Reading Room began as a simple idea: a quiet space where anyone could come, 
            browse, read, and discover. Not a commercial venture — just a library built for 
            the love of books and learning.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            We started with a small collection of donated books and a single shelf. Over time, 
            that shelf became a room, and that room became a growing library of over 300 titles 
            spanning fiction, science, history, technology, and more.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Today, we're more than just books. We host reading programs, digital literacy workshops, 
            author evenings, and community events. We also partner with WebGrowth to offer digital 
            resources and tools for local businesses — helping our community thrive both on and offline.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 py-10 border-y border-white/5"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            "A library is not a luxury but one of the necessities of life."
            <br />
            <span className="text-xs text-muted-foreground/40">— Henry Ward Beecher</span>
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xs text-muted-foreground/60 mb-4">Want to get involved?</p>
          <a
            href="https://ig.me/m/webgrowth.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium tracking-wider rounded-full hover:bg-white/90 transition-all group"
          >
            <Instagram size={14} /> Message us
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}
