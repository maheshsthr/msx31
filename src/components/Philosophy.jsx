import { Code2, Database, FileCode2, Hammer, Sparkles } from "lucide-react"
import { Container, Reveal, SectionHeading } from "./Common.jsx"

const principles = [
  {
    icon: Code2,
    title: "APIs Are Contracts",
    body: "A good API should be predictable and easy to consume — consistent responses, clear status codes and honest errors.",
    key: "api-contracts",
  },
  {
    icon: Database,
    title: "Data Comes First",
    body: "Good applications need thoughtful data models. Schema decisions ripple through every feature that comes after.",
    key: "data-first",
  },
  {
    icon: FileCode2,
    title: "Understand the Abstraction",
    body: "Using Prisma is useful, but understanding what happens underneath — the queries, the joins, the indexes — matters.",
    key: "understand-abstraction",
  },
  {
    icon: Sparkles,
    title: "AI Is a Tool",
    body: "AI can accelerate implementation, but the developer remains responsible for the result. Understand what it writes.",
    key: "ai-tool",
  },
  {
    icon: Hammer,
    title: "Build Real Things",
    body: "Projects are where concepts become engineering experience. Tutorials teach; shipping teaches more.",
    key: "build-real-things",
  },
]

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="philosophy"
          title="How I Think About Backend Development"
          description="The principles that guide how I design APIs, model data and work with AI."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
          {principles.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.05}>
              <div className="group flex gap-5 rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20 sm:p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <p.icon size={20} />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-ink-2">{p.body}</p>
                </div>
                <span className="mono ml-auto hidden text-[11px] text-muted lg:block">
                  #{String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}