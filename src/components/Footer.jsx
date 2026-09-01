import { Heart } from "lucide-react"
import { GithubIcon } from "./BrandIcons.jsx"
import { Container } from "./Common.jsx"
import { developer } from "../data/developer.js"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="mono text-xs text-ink-2">
          Mahesh Suthar <span className="text-muted">/</span>{" "}
          <span className="text-accent">Backend Dev</span>
        </p>
        <p className="mono flex items-center gap-1.5 text-xs text-muted">
          built with <Heart size={11} className="text-accent" /> node.js · express · prisma · ai
          agents
        </p>
        <a
          href={developer.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-ink-2 transition-colors hover:text-ink"
        >
          <GithubIcon size={15} />
        </a>
      </Container>
    </footer>
  )
}