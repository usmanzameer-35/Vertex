import { SectionLabel } from "./overview"

const factors = [
  "Specification",
  "Availability",
  "Documentation",
  "Delivery",
  "Readiness",
]

const principles = [
  {
    title: "Clear requirements",
    desc: "Define what is needed before sourcing or mobilization.",
  },
  {
    title: "Transparent offers",
    desc: "Clarify scope, lead times, responsibilities and exclusions.",
  },
  {
    title: "Accountable delivery",
    desc: "Coordinate suppliers, site needs and handover around the accepted scope.",
  },
]

export function WhyVertex() {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionLabel>Why Vertex</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Field understanding behind the commercial process
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Industrial procurement is not simply about finding a product. The
          wrong material, connection, rating, specification or documentation can
          cause rejection, delay, additional cost or operational disruption.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {factors.map((f, i) => (
            <div
              key={f}
              className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2"
            >
              <span className="font-mono text-xs text-accent">0{i + 1}</span>
              <span className="text-sm text-foreground">{f}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="bg-surface p-6">
              <h3 className="font-display text-base font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-3xl border-l-2 border-accent/60 pl-4 text-sm leading-relaxed text-muted">
          The professional foundation behind Vertex includes oil and gas
          experience beginning in 2014 across data acquisition engineering,
          well-site coordination, hydraulic fracturing interfaces, intervention
          activities, wireline, equipment readiness, site moves, operational
          reporting and HSE coordination.
        </p>
      </div>
    </section>
  )
}
