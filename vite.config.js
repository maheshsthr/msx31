import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'

function assistantDevPlugin() {
  let handler = null
  return {
    name: "portfolio-assistant-dev",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== "POST" || !req.url?.startsWith("/api/assistant")) {
          return next()
        }
        try {
          const env = loadEnv("development", process.cwd(), "")
          for (const key of Object.keys(env)) {
            if (!(key in process.env)) process.env[key] = env[key]
          }
          if (!handler) handler = (await import("./api/assistant.js")).default

          let bodyRaw = ""
          req.on("data", (chunk) => (bodyRaw += chunk))
          req.on("end", async () => {
            res.status = (code) => {
              res.statusCode = code
              return res
            }
            res.json = (obj) => {
              if (!res.headersSent) res.setHeader("Content-Type", "application/json")
              res.end(JSON.stringify(obj))
            }
            try {
              await handler({ method: "POST", body: bodyRaw }, res)
            } catch (error) {
              res.status(500).json({ ok: false, error: String(error?.message || error) })
            }
          })
        } catch (error) {
          res.statusCode = 500
          res.setHeader("Content-Type", "application/json")
          res.end(JSON.stringify({ ok: false, error: String(error?.message || error) }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), assistantDevPlugin()],
})