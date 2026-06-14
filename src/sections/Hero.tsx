import { motion } from 'framer-motion'
import { useTyped } from '../hooks/useTyped'
import { personal, typedRoles } from '../data/portfolio'

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const typed = useTyped(typedRoles)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-10 overflow-hidden"
    >
      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[100px]" />
        <div className="absolute bottom-1/3 -left-32 w-[350px] h-[350px] rounded-full bg-accent-purple/5 blur-[80px]" />
        <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] rounded-full bg-accent-cyan/4 blur-[70px]" />
        <div className="grid-bg absolute inset-0 opacity-100" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)}>
          <span className="inline-flex items-center gap-2 bg-accent/8 border border-accent/20 rounded-full px-4 py-1.5 text-xs font-mono text-accent mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.02] mb-4"
        >
          {personal.name.split(' ')[0]}
          <br />
          <span className="text-gradient">{personal.name.split(' ')[1]}.</span>
        </motion.h1>

        {/* Typed role */}
        <motion.div {...fadeUp(0.35)} className="font-mono text-lg text-slate-400 mb-6 h-7">
          &gt;&nbsp;{typed}
          <span className="animate-[blink_1s_step-end_infinite] text-accent">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          className="max-w-xl text-slate-400 text-lg leading-relaxed mb-10"
        >
          I build scalable, high-performance web applications — from pixel-perfect frontends to
          resilient backend systems. Turning complex problems into elegant solutions.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4">
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 bg-accent hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
          >
            View my work ↗
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center gap-2 border border-border text-slate-400 hover:border-accent hover:text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in touch
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          {...fadeUp(0.65)}
          className="flex gap-10 mt-14 pt-8 border-t border-border"
        >
          {personal.stats.map((s) => (
            <div key={s.label}>
              <div className="font-mono text-3xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-slate-500 mt-1 tracking-wide">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-slate-600 tracking-widest">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </motion.div>
  </section>
  )
}
 