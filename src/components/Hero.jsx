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

function FlowNode({ node, index, total }) {
  return (
    <div key={node.label} className="flex flex-col items-center lg:min-w-0 lg:flex-1 lg:flex-row">
      <div
        className="hero-float flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-elevated px-4 py-2.5 lg:w-auto lg:min-w-[130px]"
        style={{ animationDelay: `${index * 0.15}s` }}
      >
        <node.icon size={14} className={node.color} />
        <span className={`mono text-[11px] font-medium tracking-wider ${node.color}`}>
          {node.label}
        </span>
      </div>
      {index < total - 1 && (
        <ArrowDown size={12} className="my-1 text-white/25 lg:mx-1 lg:my-0 lg:shrink-0 lg:-rotate-90" />
      )}
    </div>
  )
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
      <div className="pointer-events-none absolute -top-32 right-0 h-[480px] w-[480px] rounded-full bg-accent/10" />
      <div className="pointer-events-none absolute top-24 -left-32 h-[360px] w-[360px] rounded-full bg-accent-2/10" />

      <Container className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="anim-entrance mono mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-elevated px-4 py-1.5 text-[11px] tracking-wider text-ink-2"
            style={{ animationDelay: "0s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            BACKEND_DEVELOPER — NODE.JS
          </p>

          <h1
            className="anim-entrance text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl xl:text-6xl"
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
            className="anim-entrance mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-2"
            style={{ animationDelay: "0.3s" }}
          >
            {developer.heroDescription}
          </p>

          <p
            className="anim-entrance mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-2"
            style={{ animationDelay: "0.4s" }}
          >
            <Sparkles size={14} className="mr-1 inline text-accent" />
            {developer.heroAI}
          </p>

          <div
            className="anim-entrance mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "0.5s" }}
          >
            <button
              onClick={onExplore}
              className="rounded-lg bg-accent-2 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
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
        </div>

        <div className="anim-fade relative mx-auto mt-16 max-w-5xl" style={{ animationDelay: "0.7s" }}>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card/90">
            <div className="mono flex items-center justify-between gap-3 border-b border-white/10 px-5 py-3.5 text-xs text-ink-2 sm:px-6">
              <span className="truncate">
                Mahesh Suthar <span className="text-muted">/</span>{" "}
                <span className="text-accent">Backend Dev</span>
              </span>
              <span className="shrink-0 text-emerald-400">— system up · port 3000</span>
            </div>

            <div className="px-5 py-8 sm:px-8">
              <div className="flex flex-col items-center gap-1 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                {pipeline.map((node, i) => (
                  <FlowNode key={node.label} node={node} index={i} total={pipeline.length} />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 border-t border-white/10 px-5 py-3 text-xs text-muted sm:px-6">
              <GitBranch size={14} />
              <span className="mono">{developer.location}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}