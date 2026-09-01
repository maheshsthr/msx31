import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, ChevronDown, Database, ExternalLink, Network, ServerCog, Sparkles } from "lucide-react"
import { GithubIcon } from "./BrandIcons.jsx"

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false)
  const showAi = Boolean(project.aiUsage)
  const showLive = Boolean(project.live)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
      className="rounded-2xl border border-white/10 bg-card transition-colors hover:border-white/20"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <div className="min-w-0">
          <p className="mono text-[10px] uppercase tracking-widest text-muted">
            Project {index + 1}
          </p>
          <h3 className="mt-1.5 break-words font-bold tracking-tight text-ink">{project.name}</h3>
          <p className="mt-2 break-words text-sm leading-relaxed text-ink-2">
            {project.tagline}
          </p>
        </div>
        <ChevronDown
          size={18}
          className={`mt-1 shrink-0 text-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div className="flex flex-wrap gap-2 px-6 pb-4">
        {project.backendStack && (
          <span className="mono inline-flex items-center gap-1 rounded border border-white/10 bg-elevated px-2 py-0.5 text-[10px] uppercase tracking-wider text-ink-2">
            <ServerCog size={11} className="text-accent" /> {project.backendStack}
          </span>
        )}
        {project.database && (
          <span className="mono inline-flex items-center gap-1 rounded border border-white/10 bg-elevated px-2 py-0.5 text-[10px] uppercase tracking-wider text-ink-2">
            <Database size={11} className="text-accent" /> {project.database}
          </span>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 border-t border-white/10 px-6 py-5">
              <DetailRow icon={BookOpen} label="Problem" value={project.problem} />
              <DetailRow icon={Network} label="Solution" value={project.solution} />
              <DetailRow icon={Database} label="Architecture" value={project.architecture} />
              <div className="space-y-1.5">
                <p className="mono text-[11px] uppercase tracking-wider text-muted">Features</p>
                {project.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-ink-2">
                    <span className="mono mt-0.5 text-accent">→</span>
                    <span className="break-words">{f}</span>
                  </div>
                ))}
              </div>
              {showAi && <DetailRow icon={Sparkles} label="AI Usage" value={project.aiUsage} />}
              <div className="flex flex-wrap gap-3 pt-1">
                {project.github &&
                  project.github.startsWith("http") && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-elevated px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-white/25"
                    >
                      <GithubIcon size={15} /> GitHub
                    </a>
                  )}
                {showLive && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-elevated px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-white/25"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-2.5">
      <Icon size={15} className="mt-0.5 shrink-0 text-accent" />
      <p className="text-sm leading-relaxed text-ink-2">
        <span className="mono mr-2 text-[11px] uppercase tracking-wider text-muted">{label}:</span>
        <span className="break-words">{value}</span>
      </p>
    </div>
  )
}