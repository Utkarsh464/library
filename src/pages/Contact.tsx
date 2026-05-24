import { motion } from 'framer-motion'
import { Instagram, ArrowRight, BookOpen, Clock, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="pt-28 pb-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/40 font-mono mb-4">Contact</p>
          <h1 className="text-4xl md:text-6xl font-display leading-[1.05] tracking-tight mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Visit the library
          </h1>
          <p className="text-muted-foreground text-sm max-w-md">
            We're here for the community. Reach out anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Clock size={16} className="text-muted-foreground/30 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-1">Hours</h3>
                <p className="text-xs text-muted-foreground/50">Monday – Saturday: 10 AM – 8 PM</p>
                <p className="text-xs text-muted-foreground/50">Sunday: 11 AM – 6 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={16} className="text-muted-foreground/30 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-1">Location</h3>
                <p className="text-xs text-muted-foreground/50">Serving the community online.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram size={16} className="text-muted-foreground/30 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-xs tracking-widest uppercase text-muted-foreground/60 mb-1">Social</h3>
                <a
                  href="https://ig.me/m/webgrowth.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  @webgrowth.in
                </a>
                <p className="text-[10px] text-muted-foreground/30 mt-0.5">Quickest way to reach us</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 md:p-8 rounded-xl border border-white/10 bg-white/[0.02] text-center"
          >
            <BookOpen size={28} className="text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
              Have a question, suggestion, or just want to say hello? Send us a message on Instagram.
            </p>
            <a
              href="https://ig.me/m/webgrowth.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-background text-sm font-medium tracking-wider rounded-full hover:bg-white/90 transition-all group"
            >
              <Instagram size={16} />
              Message @webgrowth.in
              <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="text-[10px] text-muted-foreground/30 mt-4">
              The Reading Room is managed by WebGrowth
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
