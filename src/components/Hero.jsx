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
    <div
      className="anim-entrance flex flex-col items-center"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div
        className="hero-float flex w-44 items-center justify-center gap-2 rounded-xl border border-white/10 bg-card px-4 py-2.5"
        style={{ animationDelay: `${index * 0.35}s` }}
      >
        <node.icon size={14} className={node.color} />
        <span className={`mono text-[11px] font-medium tracking-wider ${node.color}`}>
          {node.label}
        </span>
      </div>
      {index < pipeline.length - 1 && (
        <div className="flex flex-col items-center py-1.5 text-white/25">
          <ArrowDown size={12} />
        </div>
      )}
    </div>
  )
}

function heroPipeline() {
  return pipeline.map((node, i) => <FlowNode key={node.label} node={node} index={i} />)
}

export default function Hero({ onExplore }) {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.16) 0%, transparent 65%)" }}
      />
      <div
        className="pointer-events-none absolute top-24 -left-32 h-[360px] w-[360px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 65%)" }}
      />

      <Container className="relative grid gap-16 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <p
            className="anim-entrance mono mb-5 inline-flex items-center gap-2 rounded-md border border-white/10 bg-elevated px-3 py-1.5 text-[11px] tracking-wider text-ink-2"
            style={{ animationDelay: "0s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            BACKEND_DEVELOPER — NODE.JS
          </p>

          <h1
            className="anim-entrance text-4xl font-extrabold leading-[1.12] tracking-tight text-ink sm:text-5xl xl:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            {developer.heroHeading}
          </h1>

          <p
            className="anim-entrance mono mt-5 text-sm text-accent sm:text-base"
            style={{ animationDelay: "0.2s", fontFamily: "JetBrains Mono, monospace" }}
          >
            {developer.roleLine}
          </p>

          <p
            className="anim-entrance mt-5 max-w-xl text-base leading-relaxed text-ink-2"
            style={{ animationDelay: "0.3s" }}
          >
            {developer.heroDescription}
          </p>

          <p
            className="anim-entrance mt-3 max-w-xl text-sm leading-relaxed text-ink-2"
            style={{ animationDelay: "0.4s" }}
          >
            <Sparkles size={14} className="mr-1 inline text-accent" />
            {developer.heroAI}
          </p>

          <div
            className="anim-entrance mt-8 flex flex-wrap gap-3"
            style={{ animationDelay: "0.5s" }}
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
          </div>

          <div
            className="anim-fade mt-10 flex items-center gap-3 text-xs text-muted"
            style={{ animationDelay: "0.7s" }}
          >
            <GitBranch size={14} />
            <span className="mono">Ahmedabad, Gujarat, India</span>
          </div>
        </div>

        <div className="anim-scale mx-auto w-full max-w-sm" style={{ animationDelay: "0.25s" }}>
          <div className="mx-auto w-full max-w-sm rounded-2xl border border-white/10 bg-[#141416]/95 p-6 sm:max-w-md lg:max-w-none">
            <div className="mono mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4 text-xs text-ink-2">
              <span className="truncate">
                Mahesh Suthar <span className="text-muted">/</span>{" "}
                <span className="text-accent">Backend Dev</span>
              </span>
              <span className="shrink-0 text-emerald-400">— system up · port 3000</span>
            </div>
            <div className="flex flex-col items-center">{heroPipeline()}</div>
          </div>
        </div>
      </Container>
    </section>
  )
}