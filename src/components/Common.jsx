import { motion } from "framer-motion"

export function SectionHeading({ label, title, description, id }) {
  return (
    <div className="mb-12 max-w-3xl">
      {label && (
        <p className="mono mb-3 text-xs uppercase tracking-widest text-accent">// {label}</p>
      )}
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-2 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export function Reveal({ children, delay = 0, className = "", y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function MonoBadge({ children, className = "" }) {
  return (
    <span
      className={`mono inline-flex items-center gap-2 rounded-md border border-white/10 bg-elevated px-2.5 py-1 text-[11px] uppercase tracking-wider text-ink-2 ${className}`}
    >
      {children}
    </span>
  )
}

export function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}