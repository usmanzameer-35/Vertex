import { Flame, ClipboardCheck, Wrench, Network, MonitorCog } from "lucide-react"

const pillars = [
  {
    icon: Flame,
    title: "Oil & Gas Support",
    desc: "Field and operational coordination for defined oilfield requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Procurement",
    desc: "Specification-led sourcing of industrial and oilfield products.",
  },
  {
    icon: Wrench,
    title: "Industrial Supply",
    desc: "Mechanical, electrical, MRO, safety and site requirements.",
  },
  {
    icon: Network,
    title: "Specialist Coordination",
    desc: "Third-party equipment, rental, inspection and technical services.",
  },
  {
    icon: MonitorCog,
    title: "Facilities & Technology",
    desc: "CCTV, networking, IT, HVAC and defined maintenance solutions.",
  },
]

export function Overview() {
  return (
    <section className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionLabel>Company Overview</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Practical support for demanding operations
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Our approach begins with understanding the requirement — operating
          environment, specification, quantities, delivery location,
          documentation, acceptance criteria and timeline — before defining the
          sourcing or service solution.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group relative rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent/40">
                  <p.icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-muted">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
      <span className="h-px w-8 bg-accent" />
      {children}
    </div>
  )
}
