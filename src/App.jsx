import { useCallback, useState } from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import BackendStack from "./components/BackendStack.jsx"
import Architecture from "./components/Architecture.jsx"
import AIWorkflow from "./components/AIWorkflow.jsx"
import PromptToProduction from "./components/PromptToProduction.jsx"
import Projects from "./components/Projects.jsx"
import FeaturedProject from "./components/FeaturedProject.jsx"
import APIExplorer from "./components/APIExplorer.jsx"
import DatabaseSection from "./components/DatabaseSection.jsx"
import Hackathons from "./components/Hackathons.jsx"
import Philosophy from "./components/Philosophy.jsx"
import GitHubSection from "./components/GitHubSection.jsx"
import PortfolioAssistant from "./components/PortfolioAssistant.jsx"
import CommandPalette from "./components/CommandPalette.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  const openPalette = useCallback(() => setPaletteOpen(true), [])
  const closePalette = useCallback(() => setPaletteOpen(false), [])

  return (
    <div className="min-h-screen overflow-x-hidden bg-bg text-ink">
      <Navbar onOpenPalette={openPalette} />
      <main>
        <Hero
          onExplore={() =>
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <About />
        <BackendStack />
        <Architecture />
        <AIWorkflow />
        <PromptToProduction />
        <Projects />
        <FeaturedProject />
        <APIExplorer />
        <DatabaseSection />
        <Hackathons />
        <Philosophy />
        <GitHubSection />
        <PortfolioAssistant />
        <Contact />
      </main>
      <Footer />
      <CommandPalette open={paletteOpen} onClose={closePalette} />
    </div>
  )
}

export default App