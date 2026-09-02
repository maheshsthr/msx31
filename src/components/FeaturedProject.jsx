import { ArrowDown, Database, KeyRound, Layout, Lock, Plug, Rocket, Server, Table2 } from "lucide-react"
import { Container, Reveal, RevealItem, SectionHeading } from "./Common.jsx"
import { featuredProject } from "../data/projects.js"

const flow = [
  { label: "Frontend", icon: Layout, color: "text-ink-2" },
  { label: "REST API", icon: Plug, color: "text-accent-2" },
  { label: "Express", icon: Server, color: "text-ink" },
  { label: "Authentication", icon: Lock, color: "text-accent" },
  { label: "Business Logic", icon: Database, color: "text-ink-2" },
  { label: "Prisma", icon: Table2, color: "text-accent" },
  { label: "PostgreSQL", icon: Database, color: "text-emerald-300" },
]

const sections = [
  {
    key: "problem",
    title: "Problem",
    icon: Rocket,
  },
  {
    key: "architecture",
    title: "Architecture",
    icon: Layout,
  },
  {
    key: "apiDesign",
    title: "API Design",
    icon: Plug,
  },
  {
    key: "databaseDesign",
    title: "Database Design",
    icon: Table2,
  },
  {
    key: "authentication",
    title: "Authentication",
    icon: Lock,
  },
  {
    key: "businessLogic",
    title: "Business Logic",
    icon: Database,
  },
  {
    key: "aiIntegration",
    title: "AI Integration",
    icon: KeyRound,
  },
  {
    key: "deployment",
    title: "Deployment",
    icon: Rocket,
  },
]

export default function FeaturedProject() {
  const data = featuredProject

  return (
    <section id="featured" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="featured"
          title={`Featured Backend Project`}
          description="A mini technical case study — how a full request travels from the frontend down to the database."
        />

        <div className="grid gap-8 lg:grid-cols-[340px_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-card/70 p-6 sm:sticky sm:top-24">
              <p className="mono mb-4 text-[10px] uppercase tracking-widest text-muted">
                Request Flow
              </p>
              <div className="flex flex-col items-center">
                {flow.map((node, i) => (
                  <div key={node.label} className="flex flex-col items-center">
                    <RevealItem
                      variant="scale"
                      delay={i * 0.06}
                      className="flex w-full min-w-[200px] items-center justify-center gap-2 rounded-lg border border-white/10 bg-elevated px-4 py-2.5"
                    >
                      <node.icon size={13} className={node.color} />
                      <span className={`mono text-[11px] tracking-wider ${node.color}`}>{node.label}</span>
                    </RevealItem>
                    {i < flow.length - 1 && <ArrowDown size={11} className="my-1 text-white/25" />}
                  </div>
                ))}
              </div>

              <div className="mono mt-6 space-y-2 border-t border-white/10 pt-4 text-[11px] text-ink-2">
                <p>{data.name}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {data.stack.map((t) => (
                    <span key={t} className="rounded border border-white/10 bg-elevated px-2 py-0.5 text-[10px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-card p-7 sm:p-8">
              <p className="text-base leading-relaxed text-ink-2">{data.tagline}</p>
              <div className="mt-8 grid gap-4">
                {sections.map((s) => (
                  <div
                    key={s.key}
                    className="rounded-xl border border-white/10 bg-elevated p-5 transition-colors hover:border-white/20"
                  >
                    <div className="flex items-center gap-2.5">
                      <s.icon size={16} className="text-accent" />
                      <h4 className="mono text-sm font-semibold text-ink">{s.title}</h4>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-2">
                      {data.sections[s.key].body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}