import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-6 px-6 md:px-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono text-slate-600">
        <span>designed & built by {personal.name}</span>
        <span>© {year} · all rights reserved</span>
      </div>
    </footer>
  )
}
