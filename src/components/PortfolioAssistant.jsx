import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, MessageSquare, Send, Sparkles, User } from "lucide-react"
import { Container, Reveal, SectionHeading } from "./Common.jsx"
import { findAnswer } from "../data/assistantKnowledge.js"

const suggestions = [
  "What backend technologies does Mahesh use?",
  "What is his database stack?",
  "How does he use AI agents?",
  "What projects has he built?",
]

export default function PortfolioAssistant() {
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi — I'm the portfolio assistant. Ask me about Mahesh's stack, database, projects, or how he uses AI agents.",
    },
  ])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [live, setLive] = useState(false)
  const [apiDown, setApiDown] = useState(false)
  const boxRef = useRef(null)

  useEffect(() => {
    const box = boxRef.current
    if (box) box.scrollTop = box.scrollHeight
  }, [messages, typing])

  async function ask(text) {
    if (!text.trim()) return
    setMessages((m) => [...m, { role: "user", text }])
    setInput("")
    setTyping(true)

    const fallback = () => {
      setApiDown(true)
      setMessages((m) => [...m, { role: "bot", text: findAnswer(text) }])
    }

    try {
      const ctrl = new AbortController()
      const timer = setTimeout(() => ctrl.abort(), 20000)
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
        signal: ctrl.signal,
      })
      clearTimeout(timer)
      const data = await res.json().catch(() => null)
      if (res.ok && data?.answer) {
        setLive(true)
        setApiDown(false)
        setMessages((m) => [...m, { role: "bot", text: data.answer }])
      } else {
        fallback()
      }
    } catch {
      fallback()
    } finally {
      setTyping(false)
    }
  }

  return (
    <section id="assistant" className="border-t border-white/5 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="portfolio-assistant"
          title="Ask My Portfolio"
          description="A real AI assistant (OpenRouter) that answers only from portfolio data — routed through a serverless proxy so no API key ever reaches the browser. Falls back to a local mock if the API is unavailable."
        />

        <Reveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-card">
            <div className="flex items-center gap-2 border-b border-white/10 bg-elevated px-5 py-3">
              <Sparkles size={15} className="text-accent" />
              <span className="mono text-xs text-ink-2">portfolio-assistant</span>
              <span className="mono ml-auto shrink-0 rounded border px-2 py-0.5 text-[10px]">
                {live ? (
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> openrouter · live
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-ink-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted" /> local knowledge base
                  </span>
                )}
              </span>
            </div>

            {apiDown && (
              <div className="border-t border-amber-400/20 bg-amber-400/5 px-5 py-3">
                <p className="mono text-[11px] leading-relaxed text-amber-200/80">
                  Live AI unreachable — showing answers from the local knowledge base. To enable
                  real answers, make sure OPENROUTER_API_KEY is set on the server and the site is
                  served with the Vercel function (api/assistant.js). Use `vercel dev` locally.
                </p>
              </div>
            )}

            <div ref={boxRef} className="flex h-80 flex-col gap-3 overflow-y-auto p-5">
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={`${m.role}-${i}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.role === "bot" && (
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
                        <Bot size={14} />
                      </span>
                    )}
                    <div
                      className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-accent to-accent-2 text-white"
                          : "border border-white/10 bg-elevated text-ink-2"
                      }`}
                    >
                      {m.text}
                    </div>
                    {m.role === "user" && (
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 text-ink-2">
                        <User size={14} />
                      </span>
                    )}
                  </motion.div>
                ))}
                {typing && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2.5"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-accent">
                      <Bot size={14} />
                    </span>
                    <div className="flex gap-1 rounded-xl border border-white/10 bg-elevated px-4 py-2.5">
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="h-1.5 w-1.5 rounded-full bg-ink-2"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                        className="h-1.5 w-1.5 rounded-full bg-ink-2"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                        className="h-1.5 w-1.5 rounded-full bg-ink-2"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t border-white/10 p-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => ask(s)}
                    className="mono rounded-lg border border-white/10 bg-elevated px-2.5 py-1 text-[10px] text-ink-2 transition-colors hover:border-accent/40 hover:text-ink"
                  >
                    {s}
                  </button>
                ))}
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  ask(input)
                }}
                className="flex items-center gap-2"
              >
                <MessageSquare size={16} className="shrink-0 text-muted" />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Mahesh's backend stack…"
                  aria-label="Ask the portfolio assistant"
                  className="w-full bg-transparent text-sm text-ink placeholder:text-muted focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-accent to-accent-2 text-white transition-transform hover:scale-105"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}