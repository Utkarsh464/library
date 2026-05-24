import { motion } from 'framer-motion'
import { BookOpen, Monitor, MicVocal, Building2, Instagram, ArrowRight, LucideIcon } from 'lucide-react'
import { programs } from '../data/resources'

const iconMap: Record<string, LucideIcon> = { BookOpen, Monitor, MicVocal, Building2 }

export default function Programs() {
  return (
    <div className="pt-28 pb-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/40 font-mono mb-4">Programs</p>
          <h1 className="text-4xl md:text-6xl font-display leading-[1.05] tracking-tight mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Reading rooms & events
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Beyond the shelves, we host workshops, readings, and community programs for all ages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {programs.map((program, i) => {
            const Icon = iconMap[program.icon]
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="group p-8 rounded-lg border border-white/5 hover:border-white/10 transition-all bg-white/[0.01]"
              >
                {Icon && (
                  <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:bg-white/10 transition-colors">
                    <Icon size={16} className="text-muted-foreground/70" />
                  </div>
                )}
                <h3 className="text-lg font-display text-foreground mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {program.title}
                </h3>
                <p className="text-xs text-muted-foreground/60 leading-relaxed">{program.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Business Resources note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-6 rounded-lg border border-white/5 bg-white/[0.01]"
        >
          <div className="flex items-start gap-4">
            <Building2 size={20} className="text-muted-foreground/30 shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-display text-foreground mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Business Resources Program
              </h3>
              <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-2xl">
                Our Business Resources Program, in partnership with WebGrowth, offers local businesses 
                access to custom digital tools — including websites, dashboards, and analytics platforms. 
                If you run a business in our community, we can help you build your digital presence.
              </p>
              <a
                href="https://ig.me/m/webgrowth.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-3"
              >
                <Instagram size={12} /> Learn more
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
