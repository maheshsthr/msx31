import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Cpu, Database, Network, ShieldCheck, Router, Layers, Table2 } from "lucide-react"
import { Container, Reveal, SectionHeading } from "./Common.jsx"

const layers = [
  {
    label: "HTTP REQUEST",
    icon: Network,
    active: "text-accent",
    detail: "The entry point — a request from a client to the server.",
  },
  {
    label: "ROUTER",
    icon: Router,
    active: "text-accent",
    detail: "Determines which endpoint should handle the request.",
  },
  {
    label: "MIDDLEWARE",
    icon: ShieldCheck,
    active: "text-accent",
    detail: "Handles cross-cutting concerns such as authentication, validation and request processing.",
  },
  {
    label: "CONTROLLER",
    icon: Layers,
    active: "text-accent",
    detail: "Receives the request, validates input and coordinates the response.",
  },
  {
    label: "BUSINESS LOGIC",
    icon: Cpu,
    active: "text-accent",
    detail: "Contains the actual application rules.",
  },
  {
    label: "PRISMA ORM",
    icon: Database,
    active: "text-accent",
    detail: "Provides type-safe database access.",
  },
  {
    label: "POSTGRESQL",
    icon: Table2,
    active: "text-accent",
    detail: "Stores persistent application data.",
  },
  {
    label: "RESPONSE",
    icon: ArrowDown,
    active: "text-emerald-400",
    detail: "The server serializes the result and sends it back to the client.",
  },
]

export default function Architecture() {
  const [active, setActive] = useState(1)

  return (
    <section id="architecture" className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="architecture"
          title="What Happens Behind the Request?"
          description="Hover over each layer to see what happens as a request travels through the system."
        />
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-card/70 p-5 sm:p-6">
              <div className="flex flex-col items-center">
                {layers.map((layer, i) => (
                  <div key={layer.label} className="flex flex-col items-center">
                    <motion.button
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      whileHover={{ scale: 1.03 }}
                      onClick={() => setActive(i)}
                      aria-label={`View details for ${layer.label}`}
                      className={`flex w-56 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 transition-colors sm:w-60 ${
                        active === i
                          ? "border-accent/50 bg-accent/10"
                          : "border-white/10 bg-card hover:border-white/25"
                      }`}
                    >
                      <layer.icon size={14} className={active === i ? layer.active : "text-ink-2"} />
                      <span
                        className={`mono text-[11px] font-medium tracking-wider ${
                          active === i ? layer.active : "text-ink-2"
                        }`}
                      >
                        {layer.label}
                      </span>
                    </motion.button>
                    {i < layers.length - 1 && (
                      <ArrowDown size={12} className="my-1 text-white/25" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:sticky lg:top-24">
            <div className="rounded-2xl border border-white/10 bg-elevated p-7 sm:p-8">
              <p className="mono mb-2 text-xs uppercase tracking-widest text-muted">Layer Detail</p>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <LayerIcon icon={layers[active].icon} />
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink">{layers[active].label}</h3>
                <p className="mt-3 leading-relaxed text-ink-2">{layers[active].detail}</p>
              </motion.div>
              <div className="mono mt-6 border-t border-white/10 pt-4 text-[11px] text-muted">
                {String(active + 1).padStart(2, "0")} / {layers.length} — Request lifecycle
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function LayerIcon({ icon: Icon }) {
  return <Icon size={20} />
}