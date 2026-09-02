import { Container, SectionHeading } from "./Common.jsx"
import ProjectCard from "./ProjectCard.jsx"
import { projects } from "../data/projects.js"
import { developer } from "../data/developer.js"

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/5 bg-bg-2 py-20 sm:py-24">
      <Container>
        <SectionHeading
          label="projects"
          title="Backend-Focused Projects"
          description="Technical case studies focused on architecture, APIs, databases and AI-assisted development. New projects are being added as they're built on GitHub."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
        <p className="mono mt-8 text-xs text-muted">
          // More work in progress on{" "}
          <a
            href={developer.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            GitHub
          </a>
        </p>
      </Container>
    </section>
  )
}