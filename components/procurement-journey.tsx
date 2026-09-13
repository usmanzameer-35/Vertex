"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

const stages = [
  ["01", "Requirement", "RFQ, BOQ, drawing, datasheet, part number or operating problem."],
  ["02", "Technical review", "Application, service conditions, location, quantity and acceptance criteria."],
  ["03", "Specification", "A clear scope with documentation, responsibilities, schedule and exclusions."],
  ["04", "Sourcing", "Suitable suppliers, products, specialists, availability and alternatives."],
  ["05", "Commercial offer", "Transparent brand, model, lead time, warranty and documentation details."],
  ["06", "Coordination", "Procurement, logistics, site needs and specialist interfaces aligned."],
  ["07", "Delivery", "The accepted scope checked against the requirement and discrepancies identified."],
  ["08", "Handover", "Agreed delivery notes, service records, certificates and follow-up information."],
] as const

export function ProcurementJourney() {
  const [active, setActive] = useState(0)
  const current = stages[active]

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div className="lg:sticky lg:top-32 lg:self-start">
        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-steel">
          <span>Vertex procurement track</span>
          <span>{current[0]} / 08</span>
        </div>
        <div className="mt-6 h-px bg-[#cad4d5]">
          <div className="h-px bg-steel transition-all duration-500" style={{ width: `${((active + 1) / stages.length) * 100}%` }} />
        </div>
        <div className="mt-12 min-h-64">
          <p className="font-mono text-6xl font-bold text-[#b7c4c5]">{current[0]}</p>
          <h3 className="mt-4 font-display text-4xl font-bold leading-none text-ink sm:text-5xl">{current[1]}</h3>
          <p className="mt-5 max-w-sm text-base leading-7 text-muted-ink">{current[2]}</p>
        </div>
        <div className="flex items-center gap-3 text-sm font-semibold text-ink">
          <Check className="size-4 text-steel" />
          <span>Scope stays visible at every stage.</span>
        </div>
      </div>
      <ol className="grid gap-2">
        {stages.map(([number, title, description], index) => (
          <li key={number}>
            <button type="button" onClick={() => setActive(index)} className={`group grid w-full grid-cols-[48px_1fr_auto] items-center gap-4 border-b border-[#cad4d5] py-5 text-left transition-colors ${active === index ? "text-ink" : "text-muted-ink hover:text-ink"}`} aria-current={active === index ? "step" : undefined}>
              <span className={`font-mono text-sm ${active === index ? "text-steel" : "text-[#9aa9aa]"}`}>{number}</span>
              <span className="font-display text-xl font-semibold sm:text-2xl">{title}</span>
              <ArrowRight className={`size-5 transition-transform ${active === index ? "translate-x-1 text-accent" : "text-[#9aa9aa]"}`} />
            </button>
          </li>
        ))}
      </ol>
    </div>
  )
}
