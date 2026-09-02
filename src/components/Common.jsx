import { useEffect, useRef, useState } from "react"

export function SectionHeading({ label, title, description, id }) {
  return (
    <div className="mb-10 max-w-3xl">
      {label && (
        <p className="mono mb-3 flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {label}
        </p>
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
      { rootMargin: "0px 0px 400px 0px", threshold: 0.01 }
    )
    io.observe(el)

    // iOS Safari can fail to fire the IntersectionObserver callback for elements
    // that are already inside the viewport when the page loads, leaving content
    // invisible until the user scrolls. Fall back to a direct geometry check.
    const check = () => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight + 400 && rect.bottom > -400) {
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

export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, inView] = useInViewOnce()
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`reveal-wrap reveal-up ${inView ? "reveal-in" : "reveal-ready"} ${className ?? ""}`}
    >
      {children}
    </div>
  )
}

export function RevealItem({ children, className = "", delay = 0, tag = "div", variant = "up-sm" }) {
  const [ref, inView] = useInViewOnce()
  const Tag = tag
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`reveal-wrap reveal-${variant} ${inView ? "reveal-in" : "reveal-ready"} ${className ?? ""}`}
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