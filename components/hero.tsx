import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="/hero-industrial.png"
          alt=""
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
          <span className="h-px w-8 bg-accent" />
          Company Profile 2026 · Pakistan
        </div>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Technical requirements,
          <br />
          <span className="text-accent">reliably sourced</span> and
          accountably delivered.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Vertex Energy &amp; Industrial Solutions is a field-informed platform
          connecting energy, industrial and commercial operations with technical
          procurement, industrial supply, specialist coordination and field
          support.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-soft"
          >
            Send us your requirement
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-muted"
          >
            Explore services
          </a>
        </div>

        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-8">
          {[
            { k: "Technical", v: "Procurement" },
            { k: "Industrial", v: "Supply" },
            { k: "Field", v: "Support" },
          ].map((s) => (
            <div key={s.v}>
              <div className="text-xs uppercase tracking-[0.2em] text-muted">
                {s.k}
              </div>
              <div className="mt-1 font-display text-lg font-semibold text-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
