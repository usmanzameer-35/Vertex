import { SectionLabel } from "./overview"

const markets = [
  {
    no: "01",
    title: "Oil & Gas",
    desc: "Operators, service companies and contractors.",
  },
  {
    no: "02",
    title: "Industrial & Manufacturing",
    desc: "Factories, production facilities and maintenance teams.",
  },
  {
    no: "03",
    title: "EPC & Engineering",
    desc: "Technical sourcing, equipment coordination and supply packages.",
  },
  {
    no: "04",
    title: "Workshops & Maintenance",
    desc: "Tools, components, consumables and equipment requirements.",
  },
  {
    no: "05",
    title: "Commercial & Warehousing",
    desc: "Facilities, technology and maintenance requirements.",
  },
  {
    no: "06",
    title: "Education & Institutions",
    desc: "CCTV, networking, IT, HVAC and electrical requirements.",
  },
  {
    no: "07",
    title: "Government & Public Sector",
    desc: "Eligible supply and service opportunities subject to applicable procurement requirements.",
  },
]

export function Markets() {
  return (
    <section id="markets" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionLabel>Markets</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Industries we serve
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((m) => (
            <div
              key={m.no}
              className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-steel/50"
            >
              <span className="font-mono text-sm text-steel">{m.no}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-foreground">
                {m.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
