import { useEffect, useState } from "react"
import { BookMarked, GitBranch, Languages, Star } from "lucide-react"
import { GithubIcon } from "./BrandIcons.jsx"
import { Container, MonoBadge, Reveal, SectionHeading } from "./Common.jsx"
import { developer } from "../data/developer.js"

export default function GitHubSection() {
  const [repos, setRepos] = useState([])
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${developer.githubUsername}/repos?sort=updated&per_page=4`
        )
        if (!res.ok) throw new Error(res.statusText)
        const data = await res.json()
        if (!cancelled) {
          setRepos(
            data.map((r) => ({
              name: r.name,
              description: r.description,
              language: r.language,
              stars: r.stargazers_count,
              url: r.html_url,
            }))
          )
        }
      } catch {
        if (!cancelled) setFailed(true)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="github" className="border-t border-white/5 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="github"
          title="Code in Public"
          description="Backend projects, experiments and AI-assisted builds — published on GitHub."
        />

        <Reveal>
          <a
            href={developer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/25"
          >
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <GithubIcon size={22} />
              </span>
              <div>
                <p className="text-lg font-bold text-ink">{developer.name}</p>
                <p className="mono text-sm text-ink-2">@{developer.githubUsername}</p>
              </div>
            </div>
            <MonoBadge className="hidden sm:inline-flex">view_profile →</MonoBadge>
          </a>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {!failed &&
            repos.map((repo, i) => (
              <Reveal key={repo.name} delay={i * 0.06}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 transition-colors hover:border-white/25"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <BookMarked size={14} className="text-accent" />
                    <span className="truncate">{repo.name}</span>
                  </span>
                  <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-ink-2">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-[11px] text-muted">
                    {repo.language && (
                      <>
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        <span className="mono">{repo.language}</span>
                      </>
                    )}
                    <span className="mono ml-auto flex items-center gap-1">
                      <Star size={11} /> {repo.stars}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
        </div>

        {failed && (
          <Reveal>
            <div className="mt-6 rounded-2xl border border-white/10 bg-card p-7">
              <p className="flex items-center gap-2 text-sm text-ink-2">
                <Languages size={16} className="text-accent" />
                GitHub API is unreachable right now — the profile link above is always available.
              </p>
            </div>
          </Reveal>
        )}

        {!failed && repos.length === 0 && (
          <Reveal>
            <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-card p-7">
              <GitBranch size={16} className="text-accent" />
              <p className="text-sm text-ink-2">Loading repositories…</p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  )
}