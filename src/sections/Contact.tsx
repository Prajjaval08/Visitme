import { useState, useRef, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle, XCircle } from 'lucide-react'
import SectionTag from '../components/SectionTag'
import { personal } from '../data/portfolio'

// ✏️  Replace these with your real EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

type Status = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  const socialLinks = [
    { href: personal.social.github, icon: Github, label: 'GitHub' },
    { href: personal.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: personal.social.twitter, icon: Twitter, label: 'Twitter / X' },
  ]

  const inputClass =
    'w-full bg-bg border border-border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-accent transition-colors duration-200'

  return (
    <section id="contact" className="py-24 px-6 md:px-10 max-w-5xl mx-auto pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <SectionTag label="let's talk" />
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Got a project<br />in mind?
        </h2>
        <p className="text-slate-400 text-[0.95rem] max-w-md leading-relaxed mb-12">
          I'm open to freelance work, full-time roles, and interesting collaborations. Drop me a
          message and I'll get back within 24 hours.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Contact form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="from_name" type="text" placeholder="Your name" required className={inputClass} />
            <input name="reply_to" type="email" placeholder="your@email.com" required className={inputClass} />
          </div>
          <input name="subject" type="text" placeholder="Subject" required className={inputClass} />
          <textarea
            name="message"
            rows={5}
            placeholder="Tell me about your project..."
            required
            className={`${inputClass} resize-none`}
          />

          <button
            type="submit"
            disabled={status === 'sending' || status === 'success'}
            className="w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
          >
            {status === 'sending' ? (
              <>Sending...</>
            ) : status === 'success' ? (
              <><CheckCircle size={16} /> Message sent!</>
            ) : (
              <><Send size={14} /> Send message</>
            )}
          </button>

          {status === 'error' && (
            <p className="flex items-center gap-2 text-red-400 text-sm">
              <XCircle size={14} /> Something went wrong. Try emailing directly.
            </p>
          )}
        </motion.form>

        {/* Sidebar info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-3 bg-bg-2 border border-border rounded-xl px-5 py-4 text-sm text-slate-400 hover:border-accent hover:text-white transition-all duration-200 group"
          >
            <Mail size={16} className="text-accent group-hover:scale-110 transition-transform" />
            <span className="font-mono text-xs">{personal.email}</span>
          </a>

          <div className="space-y-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-bg-2 border border-border rounded-xl px-5 py-4 text-sm text-slate-400 hover:border-accent hover:text-white transition-all duration-200 group"
              >
                <Icon size={15} className="text-slate-500 group-hover:text-accent transition-colors" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          <div className="bg-bg-2 border border-border rounded-xl p-5">
            <p className="font-mono text-xs text-accent-cyan mb-1">Response time</p>
            <p className="text-white font-semibold">Within 24 hours</p>
            <p className="text-slate-500 text-xs mt-1">Mon – Fri, 9am – 6pm IST</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
