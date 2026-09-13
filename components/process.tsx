import { SectionLabel } from "./overview"

const steps = [
  {
    no: "01",
    title: "Understand",
    desc: "Review enquiry, location, quantities, drawings and service conditions.",
  },
  {
    no: "02",
    title: "Define",
    desc: "Set specification, scope boundary, schedule, terms, documentation and exclusions.",
  },
  {
    no: "03",
    title: "Source & coordinate",
    desc: "Confirm availability, approvals, suppliers, site access, personnel, tools and safety requirements.",
  },
  {
    no: "04",
    title: "Deliver & verify",
    desc: "Check items or work against accepted scope and resolve discrepancies.",
  },
  {
    no: "05",
    title: "Close out",
    desc: "Submit agreed delivery notes, service records, warranty and handover information.",
  },
]

const assurance = [
  {
    h: "Health, safety & environment",
    p: "Review activity risks, verify competence, follow client site rules, use appropriate PPE, maintain housekeeping and stop work where uncontrolled hazards exist.",
  },
  {
    h: "Quality & traceability",
    p: "Use approved specifications and identifiable products. Request certificates, inspection reports or calibration records where the scope requires them.",
  },
  {
    h: "Responsible delivery",
    p: "Plan waste handling, material storage and resource use. Protect client information and system credentials on a need-to-know basis.",
  },
  {
    h: "Project documentation",
    p: "Method statements, risk assessments, inspection plans and handover records can be prepared as required by the agreed scope.",
  },
]

export function Process() {
  return (
    <section id="process" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionLabel>Execution</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          From requirement to handover
        </h2>

        <ol className="mt-12 grid gap-4 md:grid-cols-5">
          {steps.map((s) => (
            <li
              key={s.no}
              className="relative rounded-xl border border-border bg-surface p-5"
            >
              <span className="font-display text-2xl font-bold text-accent">
                {s.no}
              </span>
              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-20">
          <SectionLabel>Assurance</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            HSE, quality &amp; procurement discipline
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {assurance.map((a) => (
              <div
                key={a.h}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <h3 className="font-display text-base font-semibold text-foreground">
                  {a.h}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {a.p}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-relaxed text-muted">
            These are operating principles and project-specific commitments;
            they are not presented as independent ISO certification unless such
            certification is formally obtained.
          </p>
        </div>
      </div>
    </section>
  )
}
