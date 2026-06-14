import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#"
        onClick={(e) => scrollTo(e, '#hero')}
        className="font-mono text-accent text-sm tracking-widest hover:text-accent-cyan transition-colors"
      >
        _portfolio
      </a>

      <ul className="hidden md:flex gap-8">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className={`font-mono text-xs tracking-widest transition-colors relative group ${
                active === l.href ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                  active === l.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          </li>
        ))}
      </ul>

      <a
        href="mailto:alex.mercer@dev.io"
        className="hidden md:inline-flex items-center gap-2 text-xs font-mono border border-border text-slate-400 hover:border-accent hover:text-white px-4 py-2 rounded-lg transition-all duration-200"
      >
        Hire me ↗
      </a>
    </motion.nav>
  )
}
