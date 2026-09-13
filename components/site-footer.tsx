export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
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
              Vertex Energy &amp; Industrial Solutions (Pvt.) Ltd.
              <br />
              Technical Procurement · Industrial Supply · Field Support
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
            <span className="col-span-2 text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
              Contact
            </span>
            <span className="text-muted">Contact</span>
            <span className="text-foreground">Babar Ali Malik</span>
            <span className="text-muted">Location</span>
            <span className="text-foreground">Pakistan</span>
            <span className="text-muted">Details</span>
            <span className="text-foreground">To be confirmed</span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-accent">
            Technical requirements. Reliable sourcing. Accountable delivery.
          </p>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Vertex Energy &amp; Industrial
            Solutions. Company Profile 2026.
          </p>
        </div>
      </div>
    </footer>
  )
}
