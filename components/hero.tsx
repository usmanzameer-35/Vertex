import { ArrowUpRight, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden border-b border-border/70">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-industrial.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/10" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(215,169,75,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(215,169,75,.18)_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="mx-auto grid min-h-[720px] max-w-7xl items-end gap-12 px-5 pb-20 pt-36 sm:pt-44 lg:grid-cols-[1fr_280px] lg:px-8 lg:pb-28">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Energy &amp; Industrial Solutions
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.98] tracking-tight text-foreground sm:text-7xl lg:text-[86px]">
          Technical requirements.<br />
          <span className="text-accent">Reliable sourcing.</span><br />
          Accountable delivery.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Vertex supports energy and industrial organisations with specification-led procurement, industrial supply, oilfield support and specialist-service coordination.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            href="/rfq"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-background transition-colors hover:bg-accent-soft"
          >
            Send an RFQ
            <ArrowUpRight className="size-4" />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-accent"
          >
            Explore capabilities
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
          {[
            { k: "Technical", v: "Procurement" },
            { k: "Industrial", v: "Supply" },
            { k: "Field", v: "Support" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted">
                {s.k}
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
        <aside className="hidden border-l border-accent/40 pl-6 lg:block">
          <div className="font-display text-5xl font-bold text-accent">01</div>
          <p className="mt-4 text-xs uppercase leading-6 tracking-[0.18em] text-muted">From requirement<br />to delivery</p>
          <div className="mt-8 h-px w-16 bg-accent" />
          <p className="mt-5 text-sm leading-6 text-muted">A disciplined interface for technical scope, supply and field coordination.</p>
        </aside>
      </div>
    </section>
  )
}
