import { CalendarDays, CheckCheck, Trophy } from "lucide-react"
import { Container, Reveal, SectionHeading } from "./Common.jsx"
import { hackathonJourney } from "../data/hackathons.js"

export default function Hackathons() {
  const { finalist, participated } = hackathonJourney

  return (
    <section id="hackathons" className="border-t border-white/5 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="hackathons"
          title="Hackathon Journey"
          description="Turning ideas into working systems under a deadline — and having fun doing it."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-accent/40 bg-accent/10">
            <div className="p-7 sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="mono inline-flex items-center gap-1.5 rounded-md bg-accent-2 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  <Trophy size={12} /> Finalist
                </span>
                <span className="mono rounded border border-white/15 bg-elevated px-2 py-1 text-xs text-ink-2">
                  {finalist.year}
                </span>
                <h3 className="text-xl font-bold text-ink sm:text-2xl">{finalist.name}</h3>
              </div>

              <p className="mt-3 text-sm text-ink-2">{finalist.role}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {finalist.focus.map((t) => (
                  <span
                    key={t}
                    className="mono rounded border border-white/10 bg-elevated px-2 py-1 text-[10px] uppercase tracking-wider text-ink-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mono mb-3 mt-10 flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
            <CheckCheck size={14} className="text-accent" /> Participated
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {participated.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-white/25">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <CalendarDays size={16} />
                  </span>
                  <div className="min-w-0">
                    <h4 className="break-words text-sm font-semibold text-ink">{h.name}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{h.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}