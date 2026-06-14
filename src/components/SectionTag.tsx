interface Props { label: string }

export default function SectionTag({ label }: Props) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-6 h-px bg-accent-cyan" />
      <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">{label}</span>
    </div>
  )
}
