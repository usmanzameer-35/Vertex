import { SectionLabel } from "./overview"

const exposure = [
  "Hydraulic fracturing coordination",
  "Pre- and post-intervention activities",
  "Wireline interfaces",
  "Site moves & equipment readiness",
  "Daily operational reporting",
  "HSE coordination",
  "Saudi unconventional operations",
  "Multi-service field environments",
]

export function Leadership() {
  return (
    <section id="leadership" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionLabel>Leadership</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Professional foundation
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="flex size-16 items-center justify-center rounded-full border border-accent/40 bg-surface-2 font-display text-xl font-bold text-accent">
              BM
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold text-foreground">
              Babar Ali Malik
            </h3>
            <p className="mt-1 text-sm text-accent">
              Oil &amp; Gas Operational Experience · Since 2014
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Professional background in data acquisition engineering and
              well-site coordination across conventional and unconventional oil
              and gas activities, including assignments involving major
              international service companies through employment or manpower
              arrangements.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-8">
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Relevant exposure
            </h4>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {exposure.map((e) => (
                <div key={e} className="flex items-start gap-2.5">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">
          Organizations and activities referenced above relate to individual
          professional experience and are not represented as Vertex clients,
          contracts, endorsements or completed company projects.
        </p>
      </div>
    </section>
  )
}
