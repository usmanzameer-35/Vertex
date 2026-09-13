import { SectionLabel } from "./overview"

const services = [
  {
    no: "01",
    kicker: "Core Service",
    title: "Oil & gas support",
    lead: "Supporting field requirements from enquiry to execution.",
    groups: [
      {
        h: "Operations coordination",
        p: "Well-site interfaces, activity tracking, equipment-readiness follow-up, daily reporting, site moves and coordination between intervention, wireline, pumping and logistics teams.",
      },
      {
        h: "Technical sourcing",
        p: "Valves, fittings, industrial hoses, adapters, seals, tools, pressure-control accessories and related consumables matched to service conditions and documentation needs.",
      },
      {
        h: "Specialist interfaces",
        p: "Coordination of suitable third-party rental, inspection, maintenance and specialist providers where required.",
      },
      {
        h: "Scope control",
        p: "Safety-critical execution remains subject to technical review, competent personnel, approved procedures and client requirements.",
      },
    ],
  },
  {
    no: "02",
    kicker: "Core Service",
    title: "Technical procurement & industrial supply",
    lead: "Specification-led sourcing for maintenance teams, workshops, contractors and operating facilities.",
    groups: [
      {
        h: "Mechanical & MRO",
        p: "Valves, pipe fittings, fasteners, gaskets, seals, hoses, bearings, workshop tools and maintenance consumables.",
      },
      {
        h: "Electrical & site",
        p: "Cables, cable management, lighting, electrical components, PPE and site consumables.",
      },
      {
        h: "Equipment",
        p: "Pumps, generators, compressors, lifting equipment, construction equipment and transport.",
      },
      {
        h: "Procurement assurance",
        p: "Quotations identify brand, model or part number, quantity, specification, origin, availability, lead time, warranty and documentation. Alternatives are disclosed for client approval.",
      },
    ],
  },
  {
    no: "03",
    kicker: "Core Service",
    title: "Equipment & specialist coordination",
    lead: "Asset-light coordination of appropriate third-party equipment and specialist capability.",
    groups: [
      {
        h: "Equipment enquiries",
        p: "Pumps, generators, compressors, lifting and construction equipment, transport and industrial equipment requirements.",
      },
      {
        h: "Offer controls",
        p: "Availability, certification, operator provision, mobilization, execution responsibility and commercial responsibility clarified up front.",
      },
      {
        h: "Appropriate assignment",
        p: "Technical execution is assigned only to parties appropriate to the scope and client requirements.",
      },
      {
        h: "Honest positioning",
        p: "Vertex coordinates the commercial and operational interface without overstating ownership or specialist capability.",
      },
    ],
  },
  {
    no: "04",
    kicker: "Supporting Division",
    title: "Facilities & technology solutions",
    lead: "Supporting the infrastructure behind industrial, commercial and institutional operations.",
    groups: [
      {
        h: "CCTV & security",
        p: "Site surveys, coverage planning, IP cameras, NVR/storage, access control, attendance systems, readers, controllers and gate interfaces.",
      },
      {
        h: "Networking & connectivity",
        p: "Structured cabling, switches, routers, wireless access points, point-to-point connectivity and network accessories.",
      },
      {
        h: "IT support",
        p: "Workstations, printers, network accessories, setup, troubleshooting, maintenance, asset documentation and configuration records.",
      },
      {
        h: "HVAC & facilities",
        p: "AC assessment, installation coordination, preventive maintenance, servicing, ductwork, minor M&E maintenance and breakdown support.",
      },
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <SectionLabel>Services</SectionLabel>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Three core services, one supporting division
        </h2>

        <div className="mt-14 space-y-6">
          {services.map((s) => (
            <div
              key={s.no}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
                <div className="lg:w-72 lg:shrink-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-4xl font-bold text-accent">
                      {s.no}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                      {s.kicker}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {s.lead}
                  </p>
                </div>

                <div className="grid flex-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                  {s.groups.map((g) => (
                    <div key={g.h} className="bg-surface-2 p-5">
                      <h4 className="text-sm font-semibold text-foreground">
                        {g.h}
                      </h4>
                      <p className="mt-2 text-[13px] leading-relaxed text-muted">
                        {g.p}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
