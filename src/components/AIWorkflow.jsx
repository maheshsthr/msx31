import { ArrowDown, BrainCircuit, CheckCircle2, FileCode2, GitBranch, HelpCircle, MessageSquareText } from "lucide-react"
import { Container, Reveal, RevealItem, SectionHeading } from "./Common.jsx"

const workflow = ["IDEA", "PLAN", "AI AGENT", "IMPLEMENT", "REVIEW", "TEST", "DEPLOY"]

const useCases = [
  { icon: FileCode2, label: "Project scaffolding" },
  { icon: GitBranch, label: "API development" },
  { icon: CheckCircle2, label: "Database schema design" },
  { icon: HelpCircle, label: "Debugging" },
  { icon: MessageSquareText, label: "Refactoring" },
  { icon: FileCode2, label: "Documentation" },
  { icon: CheckCircle2, label: "Testing" },
  { icon: BrainCircuit, label: "API integration" },
  { icon: GitBranch, label: "Rapid prototyping" },
]

export default function AIWorkflow() {
  return (
    <section id="ai" className="border-t border-white/5 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="ai-agents"
          title="I Build With AI Agents"
          description="AI agents are becoming part of my development workflow — used to explore, plan, implement, debug and ship faster."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-card/70 p-6 sm:p-7">
              <p className="text-base leading-relaxed text-ink-2">
                I use AI agents to explore ideas, generate implementation plans, write and improve
                code, debug problems, investigate documentation and accelerate application
                development.
              </p>

              <div className="mt-7 rounded-xl border border-accent/25 bg-accent/5 p-5">
                <p className="mono text-sm text-ink">
                  <span className="text-accent">&gt;</span> AI writes faster.{" "}
                  <span className="font-semibold text-ink">I still need to understand what it writes.</span>
                </p>
              </div>

              <div className="mt-7 grid grid-cols-1 gap-2 min-[400px]:grid-cols-2 sm:grid-cols-3">
                {useCases.map((u) => (
                  <div
                    key={u.label}
                    className="mono flex items-center gap-2 rounded-lg border border-white/10 bg-elevated px-3 py-2 text-[11px] text-ink-2 transition-colors hover:border-white/20"
                  >
                    <u.icon size={13} className="shrink-0 text-accent" />
                    {u.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-card/70 p-6 sm:p-7">
              <p className="mono mb-5 text-xs uppercase tracking-widest text-muted">Agent Workflow</p>
              <div className="flex flex-col items-center">
                {workflow.map((step, i) => (
                  <div key={step} className="flex flex-col items-center">
                    <RevealItem
                      variant="up-sm"
                      delay={i * 0.1}
                      className={`flex items-center gap-2.5 rounded-lg border px-4 py-2.5 ${
                        step === "AI AGENT"
                          ? "border-accent/40 bg-accent/10"
                          : "border-white/10 bg-elevated"
                      }`}
                    >
                      <span className="mono text-[10px] text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`mono text-[11px] font-medium tracking-wider ${
                          step === "AI AGENT" ? "text-accent" : "text-ink-2"
                        }`}
                      >
                        {step}
                      </span>
                    </RevealItem>
                    {i < workflow.length - 1 && <ArrowDown size={11} className="my-1 text-white/25" />}
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