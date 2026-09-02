import { ArrowDown, CircleOff, Rocket, Sparkles } from "lucide-react"
import { Container, Reveal, RevealItem, SectionHeading } from "./Common.jsx"

const thinkSteps = ["Think", "Prompt", "Build", "Understand", "Test", "Ship"]

const comparison = [
  {
    title: "Traditional Workflow",
    icon: CircleOff,
    steps: ["Idea", "Research", "Code", "Debug", "Repeat"],
    accent: "text-ink-2",
    border: "border-white/10",
  },
  {
    title: "AI-Assisted Workflow",
    icon: Sparkles,
    steps: ["Idea", "AI Agent", "Prototype", "Review", "Test", "Iterate"],
    accent: "text-accent",
    border: "border-accent/30",
  },
]

export default function PromptToProduction() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="vibe-coding"
          title="From Prompt to Production"
          description="My approach to AI-assisted development — using AI to accelerate while staying responsible for the result."
        />

        <Reveal>
          <div className="mb-10 flex flex-col items-center justify-center gap-1.5 sm:flex-row sm:flex-wrap sm:gap-2">
            {thinkSteps.map((step, i) => (
              <div
                key={step}
                className="flex flex-col items-center justify-center gap-1.5 sm:flex-row sm:gap-2"
              >
                <div className="mono rounded-lg border border-white/10 bg-elevated px-4 py-2 text-center text-xs font-medium text-ink">
                  {step}
                </div>
                {i < thinkSteps.length - 1 && (
                  <ArrowDown size={12} className="text-white/25 sm:-rotate-90" />
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {comparison.map((c, ci) => (
            <Reveal key={c.title} delay={ci * 0.1}>
              <div
                className={`h-full rounded-2xl border bg-card p-7 transition-colors hover:brightness-110 ${c.border}`}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-elevated">
                    <c.icon size={17} className={c.accent} />
                  </span>
                  <h3 className="font-semibold text-ink">{c.title}</h3>
                </div>
                <ol className="relative space-y-4">
                  {c.steps.map((step, i) => (
                    <RevealItem
                      tag="li"
                      variant="right"
                      key={step}
                      delay={i * 0.07}
                      className="flex items-center gap-3"
                    >
                      <span className="mono text-[10px] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-sm ${c.accent}`}>─</span>
                      <span className="text-sm text-ink-2">{step}</span>
                    </RevealItem>
                  ))}
                </ol>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-elevated p-6">
            <Rocket size={18} className="mt-0.5 shrink-0 text-accent" />
            <p className="text-base leading-relaxed text-ink-2">
              I don't blindly accept generated code. I use AI to accelerate implementation while
              understanding, reviewing and testing the resulting software. AI is a productivity
              tool — not a replacement for backend engineering fundamentals.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}