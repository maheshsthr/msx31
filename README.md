# Mahesh Suthar — Backend Developer Portfolio

A premium, modern, highly interactive developer portfolio for a backend-focused developer who builds APIs, server-side applications, database-driven systems and AI-powered applications using AI agents.

Built with **React + Vite + Tailwind CSS + Framer Motion + Lucide React**.

The visual design follows `theme.md` (single source of truth for colors, typography, spacing, radius, components and design tokens).

## Stack

- **React 19** + **Vite**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** — subtle, purposeful animations with `prefers-reduced-motion` support
- **Lucide React** — consistent technical icons

## AI Portfolio Assistant (Ask My Portfolio)

The assistant answers from portfolio data only. It calls a Vercel serverless function at
`api/assistant.js`, which uses **OpenRouter** (model configurable, default `openai/gpt-4o-mini`)
with a strict, portfolio-scoped system prompt. The API key never reaches the browser.

**This project uses a Vercel Functions setup.** The static frontend still builds with Vite, but
the assistant must run on Vercel (or `vercel dev` locally):

```bash
npm install -g vercel   # once
vercel dev              # runs frontend + serverless function locally, loads .env
```

Set these env vars (locally via `.env` — gitignored — and in the Vercel dashboard):

```text
OPENROUTER_API_KEY=sk-or-v1-...
OPENROUTER_MODEL=openai/gpt-4o-mini   # optional
```

If the API key is missing or the request fails, the frontend automatically falls back to the
built-in local mock knowledge base — the site keeps working either way.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server (mock assistant only)
vercel dev       # dev server + real AI assistant
npm run build    # production build
npm run preview  # preview production build
npm run lint     # oxlint
```

## Structure

```text
src/
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── About
│   ├── BackendStack
│   ├── Architecture
│   ├── AIWorkflow
│   ├── PromptToProduction
│   ├── Projects
│   ├── ProjectCard
│   ├── FeaturedProject
│   ├── APIExplorer
│   ├── DatabaseSection
│   ├── Hackathons
│   ├── Philosophy
│   ├── GitHubSection
│   ├── PortfolioAssistant
│   ├── CommandPalette
│   ├── Contact
│   ├── Footer
│   └── Common (SectionHeading, Reveal, Container, MonoBadge)
├── data/
│   ├── developer.js
│   ├── technologies.js
│   ├── projects.js
│   ├── hackathons.js
│   └── apiEndpoints.js
├── hooks/
│   └── useActiveSection.js
└── App.jsx
```

## Placeholders

Some details intentionally use placeholders rather than invented facts:

- Email, LinkedIn, Resume: `[YOUR_EMAIL]`, `[YOUR_LINKEDIN_URL]`, `[YOUR_RESUME_URL]`
- Project details: `[PROJECT_n_NAME]`, `[PROJECT_n_DESCRIPTION]`, etc. — replace in `src/data/projects.js`
- GitHub username / profile are wired to real data in `src/data/developer.js`

## Notes

- No fake achievements, companies, statistics or testimonials.
- The GitHub section fetches real repo data from the public GitHub API and degrades gracefully.
- The assistant uses OpenRouter through a serverless proxy — no API keys are exposed in the browser, and it falls back to a local mock when the API is unavailable.