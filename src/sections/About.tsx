import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import SectionTag from '../components/SectionTag'
import { personal } from '../data/portfolio'

const infoRows = [
  { label: 'Name', value: personal.name },
  { label: 'Role', value: personal.role },
  { label: 'Location', value: personal.location },
  { label: 'Experience', value: personal.experience },
  { label: 'Education', value: personal.education },
  { label: 'Availability', value: personal.availability, green: true },
]

export default function About() {
  const ref = useScrollReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} className="py-24 px-6 md:px-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTag label="background" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">About me</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          {personal.bio.map((para, i) => (
            <p key={i} className="text-slate-400 leading-relaxed text-[0.95rem]">
              {para}
            </p>
          ))}

          <div className="flex gap-4 pt-4">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs border border-border text-slate-400 hover:border-accent hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              GitHub ↗
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs border border-border text-slate-400 hover:border-accent hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              LinkedIn ↗
            </a>
              <a
              href={personal.social.leetcode}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs border border-border text-slate-400 hover:border-accent hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
            >
              Leetcode ↗
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="bg-bg-2 border border-border rounded-2xl overflow-hidden"
        >
          {infoRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex justify-between items-center px-5 py-3.5 text-sm ${
                i < infoRows.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <span className="text-slate-500">{row.label}</span>
              <span
                className={`font-mono text-xs ${
                  row.green ? 'text-green-400' : 'text-slate-300'
                }`}
              >
                {row.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
