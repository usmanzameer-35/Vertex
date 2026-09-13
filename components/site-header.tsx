"use client"

import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import Link from "next/link"

const links = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/how-we-work", label: "How we work" },
  { href: "/hse-quality", label: "HSE & Quality" },
  { href: "/about", label: "About" },
  { href: "/leadership/babar-ali-malik", label: "Leadership" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Vertex home">
          <span className="grid size-9 place-items-center border border-accent/60 text-sm font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-background">V</span>
          <span>
            <span className="block font-display text-base font-bold tracking-[0.24em] text-foreground">VERTEX</span>
            <span className="hidden text-[9px] font-medium uppercase tracking-[0.22em] text-muted sm:block">Energy &amp; Industrial Solutions</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-muted transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/rfq"
            className="inline-flex items-center gap-2 border border-accent bg-accent px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-background transition-colors hover:bg-accent-soft"
          >
            Send an RFQ
            <ArrowUpRight className="size-4" />
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="border border-border p-2 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/rfq"
              onClick={() => setOpen(false)}
              className="rounded-full bg-accent px-4 py-2 text-center text-sm font-semibold text-background"
            >
              Send an RFQ
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
