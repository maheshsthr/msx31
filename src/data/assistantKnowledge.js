const knowledge = [
  {
    keywords: ["technolog", "stack", "use", "tools", "skills"],
    answer:
      "Mahesh works primarily with JavaScript and Node.js, building REST APIs with Express, Prisma, MongoDB and PostgreSQL. For daily dev tooling: Git, GitHub, npm, Postman, VS Code and Vercel. Skill labels are honest — Comfortable, Learning and Exploring — no fake proficiency bars.",
  },
  {
    keywords: ["database", "data", "postgres", "postgresql", "sql", "mongo", "mongodb", "mongoose", "schema"],
    answer:
      "Primary database stack is PostgreSQL (relational) alongside MongoDB with Mongoose. Prisma ORM is used for type-safe access. His view: data models come first — good applications need thoughtful database design.",
  },
  {
    keywords: ["ai", "agent", "agents", "prompt", "prompting", "vibe", "generative", "llm", "groq", "gemini", "chatgpt"],
    answer:
      "Mahesh uses AI agents to scaffold projects, plan, write and review code, debug, refactor and ship faster. He says: 'AI writes faster. I still need to understand what it writes.' AI integrations so far: Groq (Llama 3.3 70B) in Deadline Guardian AI and Google Gemini in NexCAMPUS.",
  },
  {
    keywords: ["project", "projects", "built", "build", "made", "mfgx31", "globetrotter", "deadline", "guardian", "nexcampus"],
    answer:
      "Projects: 1) MFGx31 — multi-tenant SaaS for manufacturing operations (Node.js + PostgreSQL, live at mfgx31.vercel.app). 2) GlobeTrotter — trip planning workspace (TypeScript + Supabase RLS). 3) Deadline Guardian AI — AI deadline-risk planner (Express + MongoDB + Groq AI, live at ms-deadlineguardian.vercel.app). 4) NexCAMPUS — campus platform backend (Express + MongoDB + JWT + Gemini).",
  },
  {
    keywords: ["architect", "architecture", "request", "request flow", "flow", "layer", "router", "middleware", "controller", "endpoint", "lifecycle"],
    answer:
      "A request flows: HTTP Request → Router → Middleware → Controller → Business Logic → Prisma ORM → PostgreSQL → Response. Each layer has a hoverable card in the Architecture section of this page.",
  },
  {
    keywords: ["express", "node", "node.js", "runtime", "javascript", "js"],
    answer:
      "Node.js + Express is the core backend runtime, used for REST APIs, routing, middleware and error handling. Honest label: Comfortable with Node.js and REST APIs; Express is still marked Learning.",
  },
  {
    keywords: ["prisma", "orm"],
    answer:
      "Prisma ORM provides type-safe database access to PostgreSQL. Honest label: Learning — he understands what's underneath and is actively using it.",
  },
  {
    keywords: ["auth", "authentication", "authorization", "jwt", "login", "password", "bcrypt", "token", "register", "session"],
    answer:
      "Backend auth is covered with JWT-based flows and bcrypt password hashing (used in Deadline Guardian AI and NexCAMPUS). Honest label: Learning — authentication and authorization are still comfort-level Learning/Exploring on the stack list.",
  },
  {
    keywords: ["hackathon", "hackathons", "odoo", "sih", "smart india", "vibe2ship", "kaggle", "isro", "antrix", "psb", "finalist", "competition"],
    answer:
      "Hackathon journey: Finalist at Odoo Hackathon 2026 (Backend Developer / AI-Assisted Builder). Also participated in SIH 2026, Vibe2ship, Kaggle VibeCoding Hackathon, ISRO Bharatiya Antrix Hackathon and PSB IIT Hyderabad CyberSecurity.",
  },
  {
    keywords: ["github", "code", "repo", "repository", "public", "open source"],
    answer:
      "Code is published on GitHub at github.com/maheshsthr — MFGx31, Deadline Guardian AI and NexCAMPUS among others. The GitHub section of this page pulls live repos when reachable.",
  },
  {
    keywords: ["contact", "email", "hire", "reach", "job", "intern", "internship", "freelance", "startup", "linkedin"],
    answer:
      "To reach Mahesh, use the GitHub, LinkedIn and Email buttons in the Contact section. He's working toward hackathons, internships, startups and freelance backend work. (Email and LinkedIn links are placeholders until you fill in your real URLs.)",
  },
  {
    keywords: ["location", "where", "live", "ahmedabad", "gujarat", "india"],
    answer:
      "Mahesh is based in Ahmedabad, Gujarat, India.",
  },
  {
    keywords: ["hello", "hi", "hey", "yo", "namaste", "who", "about", "introduce", "yourself", "mahesh", "name"],
    answer:
      "Hey! I'm Mahesh Suthar's portfolio assistant. Ask me about his backend stack, database choices, projects, hackathons, architecture or how he uses AI agents — all answered from this portfolio's data.",
  },
  {
    keywords: ["philosophy", "think", "principles", "api contracts", "data first", "abstraction"],
    answer:
      "His backend philosophy: APIs are contracts, data comes first, understand the abstraction (Prisma is useful but knowing what's underneath matters), AI is a tool, and you learn by building real things.",
  },
  {
    keywords: ["api explorer", "explorer", "api client", "postman", "endpoints", "get ", " post ", " put ", " delete "],
    answer:
      "There's an interactive API Explorer on this page — pick an endpoint like GET /api/users or POST /api/auth/login, hit Send and see the request body, response and status code (mock data).",
  },
]

export function findAnswer(question) {
  const text = ` ${question.toLowerCase()} `

  const scored = knowledge
    .map((k) => {
      let score = 0
      for (const word of k.keywords) if (text.includes(word)) score += 1
      return { k, score }
    })
    .sort((a, b) => b.score - a.score)

  if (scored[0].score > 0) return scored[0].k.answer

  return (
    "I don't have that in the portfolio data. I can answer about: technologies & stack, database stack, AI agents, projects, architecture, authentication, hackathons, GitHub, API Explorer or contact info — e.g. 'What is his database stack?' or pick a suggestion below."
  )
}