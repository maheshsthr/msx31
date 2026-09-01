import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Command, Search } from "lucide-react"

const commands = [
  { cmd: "about", label: "About", target: "#about" },
  { cmd: "stack", label: "Backend Stack", target: "#stack" },
  { cmd: "projects", label: "Projects", target: "#projects" },
  { cmd: "architecture", label: "Architecture", target: "#architecture" },
  { cmd: "api", label: "API Explorer", target: "#api" },
  { cmd: "database", label: "Database", target: "#database" },
  { cmd: "ai", label: "AI Agents", target: "#ai" },
  { cmd: "hackathons", label: "Hackathons", target: "#hackathons" },
  { cmd: "github", label: "GitHub", target: "#github" },
  { cmd: "contact", label: "Contact", target: "#contact" },
]

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (open) {
      const onKey = (e) => e.key === "Escape" && onClose()
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }
  }, [open, onClose])

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => {
        document.getElementById("cmd-input")?.focus()
        setQuery("")
      }, 50)
      return () => clearTimeout(t)
    }
  }, [open])

  const results = useMemo(() => {
    if (!query.trim()) return commands
    return commands.filter((c) =>
      `${c.cmd} ${c.label}`.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  function go(target) {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 px-4 pt-[18vh] backdrop-blur-sm"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-card shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <Search size={16} className="shrink-0 text-muted" />
              <input
                id="cmd-input"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command — e.g. projects, architecture…"
                className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
              />
              <span className="mono rounded border border-white/10 bg-elevated px-1.5 py-0.5 text-[10px] text-muted">
                ESC
              </span>
            </div>

            <div className="max-h-72 overflow-y-auto p-2">
              {results.map((c, i) => (
                <button
                  key={c.cmd}
                  onClick={() => go(c.target)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-accent/10"
                >
                  <span className="mono flex h-6 w-6 items-center justify-center rounded border border-white/10 bg-elevated text-[10px] text-accent">
                    ⌘
                  </span>
                  <span className="mono text-xs text-ink">{c.cmd}</span>
                  <span className="ml-1 text-sm text-ink-2">{c.label}</span>
                  {i === 0 && <ArrowRight size={13} className="ml-auto text-muted" />}
                </button>
              ))}
              {results.length === 0 && (
                <p className="mono px-3 py-6 text-center text-xs text-muted">
                  no_command_found — try 'projects' or 'api'
                </p>
              )}
            </div>

            <div className="mono flex items-center gap-4 border-t border-white/10 bg-elevated px-5 py-2.5 text-[10px] text-muted">
              <span className="flex items-center gap-1">
                <Command size={11} /> K
              </span>
              <span>open palette</span>
              <span>↑ ↓</span>
              <span>navigate</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}