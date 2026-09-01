import { Container, Reveal, SectionHeading } from "./Common.jsx"
import { stackGroups, tagStyles } from "../data/technologies.js"

export default function BackendStack() {
  return (
    <section id="stack" className="border-t border-white/5 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="stack"
          title="Backend Stack"
          description="The technologies I use to build APIs, server-side applications and AI-assisted workflows."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
                <h3 className="mono mb-4 text-xs uppercase tracking-widest text-ink-2">
                  <span className="text-accent">//</span> {group.label}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-3 text-sm"
                    >
                      <span className="text-ink">{item.name}</span>
                      <span
                        className={`mono rounded border px-2 py-0.5 text-[10px] uppercase tracking-wider ${tagStyles[item.tag]}`}
                      >
                        {item.tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="mono mt-6 text-xs text-muted">
            // Labels reflect current experience — no fake percentage bars.
          </p>
        </Reveal>
      </Container>
    </section>
  )
}