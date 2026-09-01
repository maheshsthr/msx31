import { Code2, Database, Puzzle, TerminalSquare } from "lucide-react"
import { Container, MonoBadge, Reveal, SectionHeading } from "./Common.jsx"

const points = [
  {
    icon: Code2,
    title: "APIs & Business Logic",
    body: "Designing predictable REST APIs and the application rules that run behind them.",
  },
  {
    icon: Database,
    title: "Data Models",
    body: "Working with Prisma and PostgreSQL to model data that stays consistent and reliable.",
  },
  {
    icon: Puzzle,
    title: "Systems, Not Screens",
    body: "Earning experience building the parts of an application users never see.",
  },
  {
    icon: TerminalSquare,
    title: "Learn by Building",
    body: "Preferring real applications over tutorials as the way to learn backend engineering.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="about"
          title="I Build More Than Endpoints"
          description="Understanding how applications work behind the interface — and building the systems that power them."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-card p-7 sm:p-8">
              <p className="text-base leading-relaxed text-ink-2 sm:text-lg">
                My focus is backend development — designing APIs, handling business logic, working
                with databases and building the systems that power modern applications.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-2 sm:text-lg">
                I work primarily with JavaScript, Node.js, Express and Prisma, while exploring AI
                agents and AI-assisted development to accelerate the process of turning ideas into
                working software.
              </p>
              <p className="mt-5 text-base leading-relaxed text-ink-2 sm:text-lg">
                I prefer learning by building real applications rather than only following
                tutorials.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <MonoBadge>Node.js</MonoBadge>
                <MonoBadge>Express</MonoBadge>
                <MonoBadge>Prisma</MonoBadge>
                <MonoBadge>PostgreSQL</MonoBadge>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-white/20">
                  <p.icon size={20} className="text-accent" />
                  <h3 className="mt-3 font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}