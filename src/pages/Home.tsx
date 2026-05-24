import { motion } from 'framer-motion'
import { Instagram, ArrowRight, BookOpen, Clock, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const SECTIONS = [
  {
    id: 'about',
    label: 'About',
    title: 'A space for slow reading',
    body: 'The Reading Room is a community library built for the love of books and learning. We started with a single shelf of donated books; today we hold over 300 titles across nine categories.',
    link: '/about',
    linkText: 'Read our story',
  },
  {
    id: 'programs',
    label: 'Programs',
    title: 'Beyond the shelves',
    body: 'We host reading programs, digital literacy workshops, author evenings, and offer digital tools for local businesses in partnership with WebGrowth. There is always something happening here.',
    link: '/programs',
    linkText: 'See all programs',
  },
  {
    id: 'visit',
    label: 'Visit',
    title: 'Everyone is welcome',
    body: 'No membership fees. No forms. Just come in, browse, and read. Open six days a week, with evening hours for those who work during the day.',
    link: '/contact',
    linkText: 'Get directions',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.25em] uppercase text-foreground/60 font-medium mb-6"
          >
            A Community Library for Curious Minds
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92] tracking-[-0.03em] font-normal"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            The Reading
            <br />
            <em className="not-italic text-foreground/50">Room</em>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-16 h-px bg-foreground/20 mx-auto my-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg text-foreground/65 max-w-2xl mx-auto leading-relaxed"
          >
            A quiet space for reading, learning, and discovery. Browse our collection
            of books, join a program, or just sit and read — everyone is welcome here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/programs"
              className="group inline-flex items-center gap-3 px-8 py-3.5 bg-foreground text-background text-sm font-medium tracking-wider rounded-full hover:bg-white/90 transition-all shadow-lg"
            >
              Explore Programs
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors tracking-wider underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/40"
            >
              About the library
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-6 text-xs tracking-[0.2em] uppercase text-foreground/40 font-mono"
        >
          <span className="flex items-center gap-1.5"><BookOpen size={12} /> 300+ Titles</span>
          <span className="w-1 h-1 rounded-full bg-foreground/10" />
          <span className="flex items-center gap-1.5"><Clock size={12} /> 10 AM – 8 PM</span>
          <span className="w-1 h-1 rounded-full bg-foreground/10" />
          <span className="flex items-center gap-1.5"><MapPin size={12} /> Open to All</span>
        </motion.div>
      </section>

      {/* Content sections — pure typography, no cards */}
      {SECTIONS.map((section, i) => (
        <section
          key={section.id}
          className={`py-32 md:py-40 ${i > 0 ? 'border-t border-foreground/10' : ''}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="text-xs tracking-[0.25em] uppercase text-foreground/40 font-mono mb-6"
              >
                {section.label}
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.05] tracking-tight mb-8"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {section.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base md:text-lg text-foreground/65 leading-relaxed max-w-2xl mb-8"
              >
                {section.body}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <Link
                  to={section.link}
                  className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-foreground transition-colors underline underline-offset-4 decoration-foreground/20 hover:decoration-foreground/40"
                >
                  {section.linkText} <ArrowRight size={12} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 border-t border-foreground/10 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-foreground/40 font-mono mb-4">Connect</p>
            <h2 className="text-3xl md:text-5xl font-display leading-[1.1] tracking-tight mb-6" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Have a question?
            </h2>
            <p className="text-base md:text-lg text-foreground/65 leading-relaxed max-w-xl mx-auto mb-10">
              Looking for a specific title? Want to volunteer or suggest a program?
              Send us a message — we'd love to hear from you.
            </p>
            <a
              href="https://ig.me/m/webgrowth.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background text-sm font-medium tracking-wider rounded-full hover:bg-white/90 transition-all shadow-lg group"
            >
              <Instagram size={18} />
              Message us
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
