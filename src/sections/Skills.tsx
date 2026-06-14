import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import SectionTag from '../components/SectionTag'
import { skillGroups, skillBars } from '../data/portfolio'

function SkillBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const fill = el.querySelector<HTMLElement>('.fill')
            if (fill) fill.style.width = value + '%'
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, delay])

  return (
    <div ref={barRef} className="mb-5 last:mb-0">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-slate-300">{label}</span>
        <span className="font-mono text-xs text-slate-500">{value}%</span>
      </div>
      <div className="h-1 bg-border rounded-full overflow-hidden">
        <div
          className="fill h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: '0%',
            background: 'linear-gradient(90deg, #3b82f6, #06b6d4)',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTag label="expertise" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Skills & tech</h2>
        <p className="text-slate-400 text-[0.95rem] max-w-lg leading-relaxed mb-12">
          My toolkit spans the full development lifecycle — from interactive frontends to distributed
          backend systems and cloud infrastructure.
        </p>
      </motion.div>

      {/* Skill tag groups */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: gi * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="bg-bg-2 border border-border rounded-xl p-5 hover:border-accent/30 hover:-translate-y-1 transition-all duration-200"
          >
            <p className="font-mono text-[0.65rem] text-accent-cyan tracking-widest uppercase mb-4">
              {group.title}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-accent/6 border border-accent/12 text-slate-400 hover:bg-accent/15 hover:text-slate-200 hover:border-accent/30 text-xs px-2.5 py-1 rounded-md transition-all duration-150 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skill bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="bg-bg-2 border border-border rounded-xl p-6 max-w-lg"
      >
        {skillBars.map((bar, i) => (
          <SkillBar key={bar.label} label={bar.label} value={bar.value} delay={i * 150} />
        ))}
      </motion.div>
    </section>
  )
}
