"use client"

import { useState } from "react"
import { Upload, ArrowUpRight } from "lucide-react"

export function RFQForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle")
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    const form = event.currentTarget
    const response = await fetch("/api/rfq", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(form))) })
    setStatus(response.ok ? "idle" : "error")
    if (response.ok) form.reset()
  }
  return <form className="grid gap-6 border border-border bg-surface p-6 sm:p-8" onSubmit={submit}>
    <div className="grid gap-5 sm:grid-cols-2">{[["Full name", "name", "text"], ["Company", "company", "text"], ["Business email", "email", "email"], ["Phone / WhatsApp", "phone", "tel"]].map(([label, name, type]) => <label className="text-sm font-medium text-foreground" key={name}>{label}<input className="mt-2 w-full border border-border bg-surface-2 px-4 py-3 text-sm outline-none transition focus:border-accent" name={name} type={type} required /></label>)}</div>
    <div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-medium text-foreground">Job title<input className="mt-2 w-full border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent" name="jobTitle" /></label><label className="text-sm font-medium text-foreground">Industry<select className="mt-2 w-full border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent" name="industry"><option>Energy & Oilfield</option><option>Industrial & Manufacturing</option><option>Infrastructure & Commercial</option><option>Public Sector</option><option>Other</option></select></label></div>
    <label className="text-sm font-medium text-foreground">Requirement type<select className="mt-2 w-full border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent" name="type"><option>Technical Procurement</option><option>Oil & Gas Support</option><option>Industrial MRO</option><option>Electrical & Instrumentation</option><option>HSE / Safety Products</option><option>Equipment</option><option>Specialist Service</option><option>Facilities & Technology</option><option>Other</option></select></label>
    <label className="text-sm font-medium text-foreground">Item / service description<textarea className="mt-2 min-h-32 w-full border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent" name="description" required /></label>
    <div className="grid gap-5 sm:grid-cols-2">{[["Manufacturer / Brand", "manufacturer"], ["Model / Part number", "partNumber"], ["Quantity", "quantity"], ["Delivery / site location", "location"], ["Required date", "requiredDate"], ["Required documentation / certification", "documentation"]].map(([label, name]) => <label className="text-sm font-medium text-foreground" key={name}>{label}<input className="mt-2 w-full border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent" name={name} /></label>)}</div>
    <label className="flex cursor-pointer items-center gap-3 border border-dashed border-border bg-surface-2 px-4 py-5 text-sm text-muted hover:border-accent"><Upload className="size-5 text-accent" /><span>Attach RFQ, BOQ, datasheet, drawing or photograph<span className="mt-1 block text-xs">PDF, JPG, PNG, DOC, DOCX, XLS or XLSX</span></span><input className="sr-only" type="file" name="attachment" accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx" /></label>
    <label className="text-sm font-medium text-foreground">Additional notes<textarea className="mt-2 min-h-24 w-full border border-border bg-surface-2 px-4 py-3 text-sm outline-none focus:border-accent" name="notes" /></label>
    {status === "error" && <p className="border-l-2 border-red-400 pl-4 text-sm text-red-200">The enquiry could not be prepared. Please call or WhatsApp Vertex directly.</p>}
    <button className="inline-flex w-fit items-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-background disabled:opacity-60" disabled={status === "loading"} type="submit">{status === "loading" ? "Preparing..." : "Prepare enquiry"}<ArrowUpRight className="size-4" /></button>
    <p className="text-xs leading-6 text-muted">This form validates and prepares your requirement. Email or CRM delivery is not configured yet; after preparing the enquiry, please continue via WhatsApp for a real response.</p>
  </form>
}