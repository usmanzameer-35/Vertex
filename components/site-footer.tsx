import Link from "next/link"
import { company, capabilities } from "@/data/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg font-bold tracking-[0.2em] text-foreground">
                VERTEX
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
                Energy &amp; Industrial
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {company.name}
              <br />
              Technical Procurement · Industrial Supply · Field Support
            </p>
          </div>
          <div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Solutions</p><div className="mt-5 grid gap-3">{capabilities.slice(0, 4).map(([, title, , href]) => <Link className="text-sm text-muted hover:text-foreground" href={href} key={href}>{title}</Link>)}</div></div>
          <div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Company</p><div className="mt-5 grid gap-3">{[["About", "/about"], ["Leadership", "/leadership/babar-ali-malik"], ["How we work", "/how-we-work"], ["HSE & Quality", "/hse-quality"], ["Contact", "/contact"]].map(([label, href]) => <Link className="text-sm text-muted hover:text-foreground" href={href} key={href}>{label}</Link>)}</div></div>
          <div><p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent">Start an enquiry</p><div className="mt-5 grid gap-3 text-sm"><Link className="font-semibold text-foreground" href="/rfq">Send an RFQ</Link><a className="text-muted hover:text-foreground" href={company.phoneHref}>{company.phone}</a><a className="text-muted hover:text-foreground" href={company.whatsappHref}>WhatsApp Vertex</a><p className="mt-2 leading-6 text-muted">{company.address.join(", ")}</p></div></div>
        </div>
        <p className="mt-14 max-w-2xl border-l border-accent/60 pl-4 text-xs leading-6 text-muted">Capabilities, product availability, specialist resources and delivery schedules are confirmed against individual enquiries and agreed scope.</p>
        <div className="mt-10 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-accent">
            Technical requirements. Reliable sourcing. Accountable delivery.
          </p>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Vertex Energy &amp; Industrial Solutions.
          </p>
        </div>
      </div>
    </footer>
  )
}
