import { useEffect, useState } from "react"
import { Menu, Terminal, X } from "lucide-react"
import { Container } from "./Common.jsx"
import { useActiveSection } from "../hooks/useActiveSection.js"

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "architecture", label: "Architecture" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI" },
  { id: "hackathons", label: "Hackathons" },
  { id: "contact", label: "Contact" },
]

export default function Navbar({ onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(links.map((l) => l.id))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        onOpenPalette()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onOpenPalette])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#09090b]/95"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="mono flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
            <Terminal size={15} />
          </span>
          <span className="truncate">
            Mahesh Suthar <span className="text-muted">/</span>
          </span>
          <span className="hidden text-accent min-[420px]:inline">Backend Dev</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`px-3 py-2 text-sm transition-colors ${
                active === l.id ? "text-accent" : "text-ink-2 hover:text-ink"
              }`}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={onOpenPalette}
            className="mono ml-2 flex items-center gap-2 rounded-lg border border-white/10 bg-elevated px-3 py-1.5 text-xs text-ink-2 transition-colors hover:border-white/20 hover:text-ink"
          >
            ⌘K
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-ink-2 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      {open && (
        <Container className="border-t border-white/10 bg-[#09090b]/98 py-4 lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 text-sm ${
                  active === l.id ? "text-accent" : "text-ink-2 hover:text-ink"
                }`}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false)
                onOpenPalette()
              }}
              className="mono mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-elevated px-3 py-2.5 text-sm text-ink-2"
            >
              ⌘K — Command Palette
            </button>
          </nav>
        </Container>
      )}
    </header>
  )
}