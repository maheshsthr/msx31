export const projects = [
  {
    id: "mfgx31",
    name: "MFGx31",
    tagline: "Industry & Department Management System — a multi-tenant SaaS for running manufacturing operations.",
    problem:
      "Factory and business owners juggle employees, machinery, resources, events, documents and transfers between departments — all scattered across spreadsheets and chat threads.",
    solution:
      "A multi-tenant SaaS workspace. Each business signs up, creates their own organization, adds departments and manages everything inside a fully isolated data scope.",
    architecture:
      "Client → REST API → business logic → PostgreSQL, with multi-tenant isolation scoping every query to the signed-in organization.",
    backendStack: "Node.js · JavaScript",
    database: "PostgreSQL · Multi-tenant",
    features: [
      "Multi-tenant sign-up → organization → departments flow",
      "Employee, machinery, resource, event and document records",
      "Transfers between internal departments",
      "Monochrome, premium dashboard UI",
      "MVP excludes sales, payroll, finance and production tracking",
    ],
    aiUsage: "Developed with AI-assisted workflow — an AI agent used to scaffold, build and debug faster, with the resulting code reviewed and shipped by me.",
    github: "https://github.com/maheshsthr/mfgx31",
    live: "https://mfgx31.vercel.app",
  },
  {
    id: "globetrotter",
    name: "GlobeTrotter",
    tagline: "A unified trip workspace — discover, plan, budget and share trips in one place.",
    problem:
      "Planning a trip means juggling ten browser tabs, screenshots, spreadsheets and group chats. No single place where destinations, day plans, budgets and bookings live together.",
    solution:
      "One trip workspace: discover curated destinations, compose day-by-day itineraries with drag-and-drop activities, track a tier-based budget and share finished trips with a community.",
    architecture:
      "Client → server-validated business logic → PostgreSQL, with strict row-level ownership enforced at the database (Supabase RLS) so users only touch their own trips.",
    backendStack: "TypeScript · Supabase",
    database: "PostgreSQL · Row-Level Security",
    features: [
      "Curated destination catalog with trending, popular and regional filters",
      "Per-day itinerary cards with reorder and duplicate day/stop support",
      "Autosaved draft state — no losing work on refresh",
      "Tier-based budget setup (budget / moderate / premium / custom)",
      "Share-trip flow with a public snapshot card",
    ],
    aiUsage: "",
    github: "https://github.com/shubham-997800/globetrotter",
    live: "",
  },
  {
    id: "deadline-guardian",
    name: "Deadline Guardian AI",
    tagline: "Predict deadline risks before they slip — AI-powered action plans for every task.",
    problem:
      "Deadlines slip because risk is noticed too late. Tasks pile up and there's no early warning, no prioritization and no plan for what to do next.",
    solution:
      "Every task is auto-analyzed with a risk score and level, an AI chat assistant helps prioritize and plan, and a day-by-day action plan is generated proportional to the remaining time.",
    architecture:
      "React frontend → Express REST API → MongoDB (Atlas), with JWT authentication (bcrypt-hashed passwords) and AI features served by Groq AI (Llama 3.3 70B) via an OpenAI-compatible API.",
    backendStack: "Express · REST API",
    database: "MongoDB Atlas · Mongoose",
    features: [
      "Smart dashboard — real-time stats, upcoming deadlines and productivity score",
      "AI risk analysis on every task — score (0–95%), level and reason",
      "AI-generated day-by-day action plans proportional to remaining time",
      "AI chat assistant — prioritize, check progress or plan the schedule",
      "Full task management with auto-reanalysis",
      "JWT authentication (7-day tokens) with bcrypt password hashing",
    ],
    aiUsage: "Groq AI (Llama 3.3 70B) powers the risk analysis, action plans and the chat assistant via an OpenAI-compatible API.",
    github: "https://github.com/maheshsthr/deadline-guardian",
    live: "https://ms-deadlineguardian.vercel.app",
  },
  {
    id: "nexcampus",
    name: "NexCAMPUS",
    tagline: "A campus platform for colleges — notices, events, complaints, gallery, lost & found and study material behind one Express API.",
    problem:
      "Campus life is scattered across notice boards, group chats and separate tools for notices, events, complaints and study material.",
    solution:
      "A single Express REST API serving multiple campus modules — auth, notices, events, complaints, gallery, lost & found, study materials and a dashboard — consumed by a React frontend.",
    architecture:
      "React frontend → Express REST API → MongoDB (Mongoose), with JWT middleware protecting routes, centralized error handling, multer + Cloudinary for uploads and a dedicated Gemini AI controller.",
    backendStack: "Express · REST API",
    database: "MongoDB · Mongoose",
    features: [
      "JWT authentication with bcryptjs password hashing",
      "Notices, events, gallery, complaint, lost & found and study-material modules",
      "Role-protected routes via custom auth middleware",
      "File uploads handled with multer + Cloudinary",
      "express-validator input validation and a centralized error handler",
      "AI controller powered by Google Gemini",
    ],
    aiUsage: "Google Gemini (via @google/generative-ai) is wired through a dedicated AI controller for AI features in the campus flow.",
    github: "https://github.com/maheshsthr/NexCAMPUS",
    live: "",
  },
]

export const featuredProject = {
  name: "MFGx31 — Department Management System",
  tagline:
    "A multi-tenant backend serving isolated organizations — every request scoped to the signed-in business, from authentication down to PostgreSQL.",
  stack: ["JavaScript", "Node.js", "REST API", "PostgreSQL", "Multi-tenant", "Vercel"],
  architectureFlow: [
    { label: "Frontend", detail: "Dashboard UI that consumes the REST API." },
    { label: "REST API", detail: "Stateless contract between client and server." },
    { label: "Server", detail: "Node.js backend handling routes, middleware and controllers." },
    { label: "Authentication", detail: "Users sign up, create a business organization and authenticate into it." },
    { label: "Business Logic", detail: "Org-scoped rules — departments, resources, documents and transfers." },
    { label: "Data Layer", detail: "Type-safe, guarded access to application data." },
    { label: "PostgreSQL", detail: "Relational database with organization-scoped rows (PL/pgSQL in the repo)." },
  ],
  sections: {
    problem: {
      title: "Problem",
      body: "Manufacturing and industrial business owners run employees, machinery, resources, events, documents and department transfers across spreadsheets and chat threads — with no single place to manage the operation.",
    },
    architecture: {
      title: "Architecture",
      body: "A multi-tenant SaaS. Every sign-up creates an organization; departments and all records live inside a fully isolated data scope so one business can never see another's data.",
    },
    apiDesign: {
      title: "API Design",
      body: "REST endpoints for organizations, departments, employees, machinery, resources, events, documents and transfers — plan and contracts evolving with the app (see repository).",
    },
    databaseDesign: {
      title: "Database Design",
      body: "PostgreSQL, with PL/pgSQL code in the repository — relational schema organized around organizations and departments, kept isolated per tenant.",
    },
    authentication: {
      title: "Authentication",
      body: "Organization-based access: users sign up, join or create a business, and operate strictly within that organization's scope.",
    },
    businessLogic: {
      title: "Business Logic",
      body: "Department transfers, machinery and resource records, event and document management — all flowing into an organization-scoped data layer.",
    },
    aiIntegration: {
      title: "AI Integration",
      body: "Built with an AI-assisted workflow: an AI agent helped scaffold, implement and debug, while every change was reviewed, tested and shipped by me.",
    },
    deployment: {
      title: "Deployment",
      body: "Live at mfgx31.vercel.app, with source on github.com/maheshsthr/mfgx31.",
    },
  },
}