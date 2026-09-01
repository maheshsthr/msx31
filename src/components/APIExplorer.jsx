import { useState } from "react"
import { motion } from "framer-motion"
import { Send, TerminalSquare } from "lucide-react"
import { Container, Reveal, SectionHeading } from "./Common.jsx"
import { apiEndpoints } from "../data/apiEndpoints.js"

const methodStyles = {
  GET: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
  POST: "bg-accent-2/15 text-accent-2 border-accent-2/30",
  PUT: "bg-amber-400/15 text-amber-300 border-amber-400/30",
  DELETE: "bg-red-400/15 text-red-300 border-red-400/30",
}

function CodeBlock({ label, data }) {
  return (
    <div className="mono overflow-hidden rounded-lg border border-white/10 bg-[#0c0c0e]">
      <p className="border-b border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted">
        {label}
      </p>
      {data === null ? (
        <p className="mono px-3 py-2 text-xs text-muted">null</p>
      ) : (
        <pre className="overflow-x-auto p-3 text-xs leading-relaxed text-ink-2">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
}

export default function APIExplorer() {
  const [selectedId, setSelectedId] = useState(apiEndpoints[0].id)
  const [sent, setSent] = useState(false)
  const [latency, setLatency] = useState(0)
  const selected = apiEndpoints.find((e) => e.id === selectedId)

  function send() {
    setLatency(Math.floor(Math.random() * 80) + 20)
    setSent(true)
  }

  return (
    <section id="api" className="border-t border-white/5 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="api-explorer"
          title="API Explorer"
          description="A simulated API client. Pick an endpoint and send a request to see the lifecycle in action."
        />

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-card">
            <div className="flex items-center gap-2 border-b border-white/10 bg-elevated px-5 py-3">
              <TerminalSquare size={15} className="shrink-0 text-ink-2" />
              <span className="mono min-w-0 truncate text-xs text-ink-2">Mahesh Suthar / API Client</span>
              <span className="mono ml-auto shrink-0 rounded bg-emerald-400/15 px-2 py-0.5 text-[10px] text-emerald-300">
                ● connected
              </span>
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="border-b border-white/10 lg:border-b-0 lg:border-r">
                <div className="flex flex-col">
                  {apiEndpoints.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => {
                        setSelectedId(e.id)
                        setSent(false)
                        setLatency(0)
                      }}
                      className={`flex items-center gap-3 border-l-2 px-5 py-3 text-left transition-colors ${
                        selectedId === e.id
                          ? "border-accent bg-accent/5"
                          : "border-transparent hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        className={`mono w-16 shrink-0 rounded border px-1.5 py-0.5 text-center text-[10px] font-semibold ${methodStyles[e.method]}`}
                      >
                        {e.method}
                      </span>
                      <span className="mono min-w-0 truncate text-xs text-ink-2">{e.endpoint}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`mono rounded border px-2 py-1 text-[11px] font-semibold ${methodStyles[selected.method]}`}
                  >
                    {selected.method}
                  </span>
                  <span className="mono min-w-0 flex-1 truncate text-sm text-ink">{selected.endpoint}</span>
                  <button
                    onClick={send}
                    className="ml-auto flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-2 px-4 py-1.5 text-xs font-semibold text-white transition-transform hover:scale-105"
                  >
                    <Send size={13} /> Send
                  </button>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink-2">{selected.description}</p>

                <div className="mt-5 space-y-3">
                  <CodeBlock label="Request Body" data={selected.requestBody} />
                  <div className="flex items-center gap-2">
                    <span
                      className={`mono text-xs font-semibold ${
                        selected.status >= 200 && selected.status < 300
                          ? "text-emerald-300"
                          : "text-red-300"
                      }`}
                    >
                      {sent ? `${selected.status} ${selected.statusText}` : "— awaiting request —"}
                    </span>
                    <motion.div
                      initial={false}
                      animate={sent ? { opacity: 1 } : { opacity: 0 }}
                      className="mono text-[10px] text-muted"
                    >
                      {sent ? `${latency} ms` : ""}
                    </motion.div>
                  </div>
                  <CodeBlock
                    label="Response"
                    data={sent ? selected.response : { message: "Press Send to fire the request…" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}