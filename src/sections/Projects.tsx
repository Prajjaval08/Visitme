import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionTag from '../components/SectionTag'
import { projects, type Project } from '../data/portfolio'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative rounded-2xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        project.featured
          ? 'bg-gradient-to-br from-[#0a1628] to-[#0f2040] border-accent/20 hover:border-accent/40'
          : 'bg-bg-2 border-border hover:border-accent/25'
      }`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10 flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <span className="font-mono text-xs text-slate-600 mb-2 block">{project.id}</span>
          <h3
            className={`text-lg font-semibold mb-3 leading-snug ${
              project.featured ? 'text-gradient' : 'text-white'
            }`}
          >
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-accent-purple/8 border border-accent-purple/15 text-purple-400 font-mono text-[0.68rem] px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 shrink-0">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-slate-500 hover:border-accent hover:text-accent bg-bg transition-all duration-200"
            aria-label="Live demo"
          >
            <ExternalLink size={14} />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 flex items-center justify-center border border-border rounded-lg text-slate-500 hover:border-accent hover:text-accent bg-bg transition-all duration-200"
            aria-label="GitHub"
          >
            <Github size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-10 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTag label="work" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12">
          Featured projects
        </h2>
      </motion.div>

      <div className="grid gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
