import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export const metadata = {
  title: "Babar Ali Malik | Managing Director",
  description: "Managing Director of Vertex and an oilfield professional with more than 12 years of experience across Saudi Arabian wellsite operations.",
}

const expertise = [
  ["01", "Wellsite leadership", "Day-to-day coordination across unconventional well pads, service providers, personnel, equipment, materials and operational reporting."],
  ["02", "Hydraulic fracturing", "Multi-stage frac campaigns, pressure testing, pumping operations, pump-down perforating, milling and post-frac activity interfaces."],
  ["03", "Operations integration", "Coordination across coiled tubing, wireline, well testing, production enhancement, logistics and third-party contractors."],
  ["04", "HSE & compliance", "PTW, LOTO, JSA, toolbox talks, safety meetings, inspections, audits and field-procedure compliance."],
  ["05", "Data & performance", "Real-time acquisition, treatment monitoring, data integrity, KPI visibility, NPT reduction and operational reporting."],
  ["06", "Intervention", "Pre- and post-intervention operations, CT milling and cleanouts, wireline interfaces, diagnostics and completion support."],
] as const

const career = [
  ["2025 — PRESENT", "Well Site Coordinator", "Aramco Unconventional Project · Jafurah", "Saudi Arabia"],
  ["2022 — 2025", "Well Site Coordinator", "Halliburton · Aramco Unconventional Project", "Saudi Arabia"],
  ["2021 — 2022", "DAQ Engineer", "SLB (Schlumberger) · Unconventional Project", "Saudi Arabia"],
  ["2019 — 2021", "DAQ Engineer", "Halliburton · UR Project", "Saudi Arabia"],
  ["2017 — 2019", "DAQ Engineer", "Weatherford", "Saudi Arabia"],
  ["2014 — 2017", "DAQ Engineer / Well Site Coordinator", "Halliburton · RTC, LSTK & RTO Projects", "Saudi Arabia"],
] as const

const credentials = [
  ["IADC WellSharp", "Valid to Sep 2027"],
  ["Saudi Aramco Well Service Operator", "Certificate 11464268"],
  ["SAWCOD Training Matrix", "Halliburton Passport"],
  ["Confined Space", "FVC"],
  ["High Pressure Equipment", "FVC"],
  ["QHSE / PTW / JSA", "Qualified training"],
] as const

export default function LeadershipPage() {
  return <main className="bg-paper text-ink">
    <section className="relative isolate flex min-h-[min(900px,100svh)] items-end overflow-hidden bg-ink text-white">
      <Image src="/oil-gas-field.png" alt="Unconventional oilfield operations at sunrise" fill priority sizes="100vw" className="-z-10 object-cover opacity-55" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#071522_0%,rgba(7,21,34,.92)_46%,rgba(7,21,34,.2)_100%)]" /><div className="technical-grid absolute inset-0 -z-10 opacity-25" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 pb-20 pt-40 lg:grid-cols-[1fr_300px] lg:px-8 lg:pb-28">
        <div><p className="eyebrow-light"><span className="technical-line h-px w-12 bg-accent" /> Managing Director · Vertex</p><h1 className="mt-8 max-w-5xl font-display text-[clamp(3.8rem,8vw,8.3rem)] font-bold leading-[.86] tracking-[-.055em]"><span className="headline-mask"><span>Babar Ali</span></span><span className="headline-mask text-accent"><span>Malik.</span></span></h1><p className="mt-9 max-w-2xl text-lg leading-8 text-white/72">An oilfield professional whose career has progressed from real-time data acquisition to the coordination of complex, multi-service wellsite operations in Saudi Arabia.</p><Link href="#career" className="button-line-light mt-10">Trace the experience <ArrowDownRight className="size-4" /></Link></div>
        <aside className="self-end border-l border-white/25 pl-6"><p className="font-mono text-5xl font-bold text-accent">12+</p><p className="mt-2 text-xs uppercase leading-6 tracking-[.18em] text-white/55">Years of field<br />experience</p><div className="my-8 h-px bg-white/20" /><p className="font-mono text-xs text-accent">DAQ → COORDINATION</p><p className="mt-4 text-sm leading-6 text-white/60">A career built from the operational data outward—to safety, people, equipment, interfaces and delivery.</p></aside>
      </div>
    </section>

    <section className="overflow-hidden bg-paper"><div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8"><Reveal><div className="grid gap-12 lg:grid-cols-[.65fr_1.35fr]"><p className="eyebrow-dark self-start"><span className="h-px w-12 bg-accent" /> Leadership foundation</p><h2 className="font-display text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[.9] tracking-[-.05em]">Field context informs<br /><span className="text-steel">commercial discipline.</span></h2></div></Reveal><div className="mt-16 grid gap-px bg-[#cad4d5] md:grid-cols-3">{expertise.map(([number,title,text],index)=><Reveal delay={index*70} key={number} className="bg-paper"><article className="group min-h-72 p-7 sm:p-9"><span className="font-mono text-sm text-steel">{number}</span><h3 className="mt-16 font-display text-2xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-ink">{text}</p></article></Reveal>)}</div></div></section>

    <section id="career" className="bg-ink text-white"><div className="mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8"><Reveal><p className="eyebrow-light"><span className="h-px w-12 bg-accent" /> Career progression</p><h2 className="mt-7 max-w-4xl font-display text-5xl font-bold leading-[.9] sm:text-7xl">From acquisition systems<br /><span className="text-accent">to operational leadership.</span></h2></Reveal><div className="mt-16 border-t border-white/20">{career.map(([year,role,company,place],index)=><Reveal delay={index*55} key={`${year}-${company}`}><div className="grid gap-5 border-b border-white/15 py-8 md:grid-cols-[180px_1fr_140px] md:items-start"><p className="font-mono text-xs text-accent">{year}</p><div><h3 className="font-display text-2xl font-semibold">{role}</h3><p className="mt-2 text-sm text-white/55">{company}</p></div><p className="text-sm text-white/45 md:text-right">{place}</p></div></Reveal>)}</div></div></section>

    <section className="bg-paper"><div className="mx-auto grid max-w-7xl gap-16 px-5 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-32"><Reveal><p className="eyebrow-dark"><span className="h-px w-12 bg-steel" /> Credentials</p><h2 className="mt-7 font-display text-5xl font-bold leading-[.92]">Training for<br />high-consequence<br /><span className="text-steel">operations.</span></h2><p className="mt-7 max-w-md leading-7 text-muted-ink">BBA from Iqra University Islamabad, supported by well-control, well-service and QHSE training relevant to oilfield operations.</p></Reveal><div className="border-t border-[#cad4d5]">{credentials.map(([name,detail],index)=><Reveal delay={index*50} key={name}><div className="flex items-center justify-between gap-6 border-b border-[#cad4d5] py-6"><div><span className="mr-5 font-mono text-xs text-steel">0{index+1}</span><span className="font-display text-lg font-semibold">{name}</span></div><span className="text-right text-xs text-muted-ink">{detail}</span></div></Reveal>)}</div></div></section>

    <section className="relative overflow-hidden bg-steel text-white"><Image src="/equipment-coordination.png" alt="" fill sizes="100vw" className="object-cover opacity-20 mix-blend-luminosity" /><div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8"><Reveal><p className="eyebrow-light"><span className="h-px w-12 bg-accent" /> The Vertex connection</p><h2 className="mt-7 max-w-5xl font-display text-5xl font-bold leading-[.9] sm:text-7xl">Experience that understands<br /><span className="text-accent">what the requirement affects.</span></h2><p className="mt-8 max-w-2xl text-base leading-8 text-white/70">Equipment readiness, specification accuracy, service interfaces, HSE controls, logistics and documentation are not abstract line items. They shape the continuity and quality of field execution.</p><Link href="/rfq" className="button-primary mt-10">Discuss a requirement <ArrowUpRight className="size-4" /></Link></Reveal></div></section>

    <section className="bg-ink"><div className="mx-auto max-w-7xl px-5 py-12 lg:px-8"><p className="max-w-3xl border-l border-accent pl-5 text-xs leading-6 text-white/45">Career history and credentials shown are attributed to Babar Ali Malik’s individual professional background. They do not represent Vertex clients, contracts, partnerships, approvals or endorsements.</p></div></section>
  </main>
}
