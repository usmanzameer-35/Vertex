"use client"

import Image from "next/image"
import { useState } from "react"

const entries = [
  ["Oil & Gas", "Field environments where specification, readiness and coordination protect continuity.", "/oil-gas-field.png"],
  ["Oilfield Service Companies", "Technical requirements aligned across operational interfaces and delivery constraints.", "/equipment-coordination.png"],
  ["EPC & Engineering", "Defined packages supported by disciplined technical and commercial review.", "/technical-procurement.png"],
  ["Industrial & Manufacturing", "Maintenance-critical components and equipment matched to operating context.", "/industrial-mro.png"],
  ["Workshops & Maintenance", "Mechanical detail, consumables and tools sourced against the requirement.", "/industrial-mro.png"],
  ["Commercial & Institutional Facilities", "Practical facility and technology requirements coordinated clearly.", "/instrumentation.png"],
  ["Government & Public Sector", "Eligible opportunities approached through applicable procurement requirements.", "/industrial-hero.png"],
] as const

export function IndustryExplorer({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0)
  return <div className={`industry-explorer ${compact ? "mt-12" : "mt-16"}`}>
    <div className="industry-nav" role="tablist" aria-label="Industries">
      {entries.map(([title], index) => <button key={title} role="tab" aria-selected={active === index} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} className={active === index ? "active" : ""}><span>0{index + 1}</span>{title}</button>)}
    </div>
    <div className="industry-visual" aria-live="polite">
      {entries.map(([title, description, src], index) => <div key={title} className={`industry-frame ${active === index ? "active" : ""}`} aria-hidden={active !== index}><Image src={src} alt="" fill sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" /><div className="industry-caption"><p className="font-display text-2xl font-semibold sm:text-3xl">{title}</p><p className="mt-3 max-w-md text-sm leading-6 text-white/70">{description}</p></div></div>)}
    </div>
  </div>
}
