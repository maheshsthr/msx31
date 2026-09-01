import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, Database, KeyRound, Link2, ListFilter, RefreshCw, ShieldCheck } from "lucide-react"
import { Container, Reveal, SectionHeading } from "./Common.jsx"

const schema = [
  { table: "USERS", relations: ["1:N — Projects", "1:N — Sessions", "N:1 — Roles"], color: "text-accent" },
  { table: "PROJECTS", relations: ["1:N — Tasks", "1:N — Comments", "N:1 — Users"], color: "text-accent-2" },
  { table: "TASKS", relations: ["N:1 — Projects"], color: "text-emerald-300" },
]

const concepts = [
  { icon: Link2, title: "Relations", body: "Defining how models connect — one-to-many, many-to-many." },
  { icon: KeyRound, title: "Models", body: "Structured representations of the data an app stores." },
  { icon: ListFilter, title: "CRUD", body: "Create, read, update and delete operations over data." },
  { icon: RefreshCw, title: "Migrations", body: "Versioned, reversible schema changes that stay in sync." },
  { icon: Database, title: "Queries", body: "Fetching and combining data the application needs." },
  { icon: ShieldCheck, title: "Data Integrity", body: "Constraints and relations that keep data consistent." },
]

export default function DatabaseSection() {
  const reduce = useReducedMotion()

  return (
    <section id="database" className="border-t border-white/5 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="database"
          title="Data Has a Structure"
          description="PostgreSQL + Prisma as the primary data stack — because good applications need thoughtful data models."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-card/70 p-6 sm:p-7">
              <p className="mono mb-6 text-[10px] uppercase tracking-widest text-muted">
                Schema — relational model
              </p>
              <div className="flex flex-col items-center">
                {schema.map((node, i) => (
                  <div key={node.table} className="flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex w-64 flex-col rounded-xl border border-white/10 bg-elevated px-5 py-3"
                    >
                      <span className={`mono text-xs font-semibold tracking-wider ${node.color}`}>
                        ┌ {node.table} ┐
                      </span>
                      <ul className="mono mt-2 space-y-1 text-[10px] text-muted">
                        {node.relations.map((r) => (
                          <li key={r}>↳ {r}</li>
                        ))}
                      </ul>
                    </motion.div>
                    {i < schema.length - 1 && (
                      <div className="flex flex-col items-center py-1.5">
                        {!reduce && (
                          <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-6 w-px bg-accent/50"
                          />
                        )}
                        <ArrowDown size={11} className="text-white/25" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {concepts.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.05}>
                  <div className="h-full rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-white/20">
                    <c.icon size={17} className="text-accent" />
                    <h4 className="mt-3 text-sm font-semibold text-ink">{c.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-2">{c.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}