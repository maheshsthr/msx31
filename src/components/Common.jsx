import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function SectionHeading({ label, title, description, id }) {
  return (
    <div className="mb-12 max-w-3xl">
      {label && (
        <p className="mono mb-3 text-xs uppercase tracking-widest text-accent">// {label}</p>
      )}
      <h2
        id={id}
        className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-2 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}

export function useInViewOnce() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setInView(true)
      return
    }
    if (typeof IntersectionObserver === "undefined") {
      setInView(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            io.disconnect()
            break
          }
        }
      },
      { threshold: 0.1 }
    )
    io.observe(el)

    // iOS Safari can fail to fire the IntersectionObserver callback for elements
    // that are already inside the viewport when the page loads, leaving content
    // invisible until the user scrolls. Fall back to a direct geometry check.
    const check = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setInView(true)
        io.disconnect()
        window.removeEventListener("scroll", check)
        window.removeEventListener("resize", check)
      }
    }
    const raf = requestAnimationFrame(check)
    const timer = setTimeout(check, 300)
    window.addEventListener("scroll", check, { passive: true })
    window.addEventListener("resize", check)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      clearTimeout(timer)
      window.removeEventListener("scroll", check)
      window.removeEventListener("resize", check)
    }
  }, [])

  return [ref, inView]
}

export function Reveal({ children, delay = 0, className = "", y = 24 }) {
  const [ref, inView] = useInViewOnce()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className = "",
  initial = { opacity: 0 },
  to = { opacity: 1 },
  delay = 0,
  tag = "div",
}) {
  const [ref, inView] = useInViewOnce()
  const Tag = motion[tag]
  return (
    <Tag
      ref={ref}
      initial={initial}
      animate={inView ? to : initial}
      transition={{ duration: 0.4, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </Tag>
  )
}

export function MonoBadge({ children, className = "" }) {
  return (
    <span
      className={`mono inline-flex items-center gap-2 rounded-md border border-white/10 bg-elevated px-2.5 py-1 text-[11px] uppercase tracking-wider text-ink-2 ${className}`}
    >
      {children}
    </span>
  )
}

export function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>
}
