"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/leadership/babar-ali-malik", label: "Leadership" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-lg font-bold tracking-[0.2em] text-foreground">
            VERTEX
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-muted sm:inline">
            Energy &amp; Industrial
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/rfq"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent-soft"
          >
            Send an RFQ
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/rfq"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-background"
            >
              Send an RFQ
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
