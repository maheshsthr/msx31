import { Mail, MapPin } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "./BrandIcons.jsx"
import { Container, Reveal } from "./Common.jsx"
import { developer } from "../data/developer.js"

export default function Contact() {
  const links = [
    { icon: GithubIcon, label: "GitHub", href: developer.github },
    { icon: LinkedinIcon, label: "LinkedIn", href: developer.linkedin },
    { icon: Mail, label: "Email", href: `mailto:${developer.email}` },
  ]

  return (
    <section id="contact" className="border-t border-white/5 py-20 sm:py-24">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-card p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <p className="mono mb-3 flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-accent">
                <span className="h-px w-8 bg-accent" /> contact
              </p>
              <h2 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
                Let's Build the Backend.
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink-2">
                Have an interesting idea, backend challenge or product you'd like to build? Let's
                talk.
              </p>
              <div className="mt-3 flex items-center gap-2 text-sm text-ink-2">
                <MapPin size={15} className="text-muted" />
                Ahmedabad, Gujarat, India
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-elevated px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-white/25"
                  >
                    <l.icon size={16} className="text-accent" />
                    {l.label}
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mono grid gap-2.5">
                <p className="flex items-center gap-2 text-xs text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  open_to_hackathons · internships · freelance
                </p>
                <div className="rounded-xl border border-white/10 bg-bg p-6">
                  <pre className="text-xs leading-relaxed text-ink-2">
{`POST /api/contact
{
  "who": "you",
  "what": "a backend + AI idea",
  "why": "let's build it"
}

→ 202 Connected`}
                  </pre>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}