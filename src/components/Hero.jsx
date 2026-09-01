import { motion } from "framer-motion"
import { ArrowDown, Database, GitBranch, Server, Sparkles, Workflow, Zap } from "lucide-react"
import { Container } from "./Common.jsx"
import { developer } from "../data/developer.js"

const pipeline = [
  { label: "CLIENT", icon: ArrowDown, color: "text-ink-2" },
  { label: "EXPRESS API", icon: Server, color: "text-accent-2" },
  { label: "BUSINESS LOGIC", icon: Workflow, color: "text-ink" },
  { label: "PRISMA", icon: Database, color: "text-accent" },
  { label: "POSTGRESQL", icon: Database, color: "text-emerald-300" },
  { label: "RESPONSE", icon: Zap, color: "text-ink-2" },
]

function FlowNode({ node, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15, duration: 0.45, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          delay: index * 0.35,
          ease: "easeInOut",
        }}
        className="flex w-44 items-center justify-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-2.5"
      >
        <node.icon size={14} className={node.color} />
        <span className={`mono text-[11px] font-medium tracking-wider ${node.color}`}>
          {node.label}
        </span>
      </motion.div>
      {index < pipeline.length - 1 && (
        <div className="flex flex-col items-center py-1.5 text-white/25">
          <ArrowDown size={12} />
        </div>
      )}
    </motion.div>
  )
}

function heroPipeline() {
  return pipeline.map((node, i) => <FlowNode key={node.label} node={node} index={i} />)
}

export default function Hero({ onExplore }) {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-24 -left-32 h-[360px] w-[360px] rounded-full bg-accent-2/5 blur-[120px]" />

      <Container className="relative grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mono mb-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-elevated px-3 py-1.5 text-[11px] tracking-wider text-ink-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            BACKEND_DEVELOPER — NODE.JS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl xl:text-6xl"
          >
            {developer.heroHeading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mono mt-5 text-sm text-accent sm:text-base"
            style={{ fontFamily: "JetBrains Mono, monospace" }}
          >
            {developer.roleLine}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-ink-2"
          >
            {developer.heroDescription}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3 max-w-xl text-sm leading-relaxed text-ink-2"
          >
            <Sparkles size={14} className="mr-1 inline text-accent" />
            {developer.heroAI}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={onExplore}
              className="rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
            >
              Explore My Projects
            </button>
            <a
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 bg-elevated px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-white/25 hover:text-ink"
            >
              View GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex items-center gap-3 text-xs text-muted"
          >
            <GitBranch size={14} />
            <span className="mono">Ahmedabad, Gujarat, India</span>
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-card/80 p-6 backdrop-blur-sm sm:max-w-md lg:max-w-none"
          >
            <div className="mono mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4 text-xs text-ink-2">
              <span className="truncate">
                Mahesh Suthar <span className="text-muted">/</span>{" "}
                <span className="text-accent">Backend Dev</span>
              </span>
              <span className="shrink-0 text-emerald-400">— system up · port 3000</span>
            </div>
            <div className="flex flex-col items-center">{heroPipeline()}</div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}