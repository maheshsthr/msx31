export const stackGroups = [
  {
    id: "runtime",
    label: "Runtime",
    items: [
      { name: "Node.js", tag: "Comfortable" },
      { name: "JavaScript", tag: "Comfortable" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Express.js", tag: "Learning" },
      { name: "REST APIs", tag: "Comfortable" },
      { name: "Middleware", tag: "Exploring" },
      { name: "Routing", tag: "Comfortable" },
      { name: "Error Handling", tag: "Learning" },
      { name: "Authentication", tag: "Learning" },
      { name: "Authorization", tag: "Exploring" },
    ],
  },
  {
    id: "database",
    label: "Database",
    items: [
      { name: "PostgreSQL", tag: "Comfortable" },
      { name: "Prisma ORM", tag: "Learning" },
      { name: "MongoDB", tag: "Learning" },
      { name: "Mongoose", tag: "Exploring" },
    ],
  },
  {
    id: "development",
    label: "Development",
    items: [
      { name: "Git", tag: "Comfortable" },
      { name: "GitHub", tag: "Comfortable" },
      { name: "npm", tag: "Learning" },
      { name: "Postman", tag: "Comfortable" },
      { name: "VS Code", tag: "Comfortable" },
      { name: "Vercel", tag: "Comfortable" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    items: [
      { name: "AI Agents", tag: "Comfortable" },
      { name: "Generative AI", tag: "Comfortable" },
      { name: "Prompt Engineering", tag: "Comfortable" },
      { name: "AI-assisted coding", tag: "Comfortable" },
      { name: "AI API integration", tag: "Learning" },
      { name: "Agentic workflows", tag: "Exploring" },
    ],
  },
]

export const tagStyles = {
  Comfortable: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  Learning: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  Exploring: "border-fuchsia-400/30 bg-fuchsia-400/10 text-fuchsia-300",
}