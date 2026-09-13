import { SectionLabel } from "./overview"

const details = [
  "Item / service description",
  "Manufacturer / brand",
  "Model / part number",
  "Technical specification",
  "Quantity",
  "Required documentation",
  "Delivery / site location",
  "Required date",
  "Drawings / datasheets / photos",
]

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Send us your requirement
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
              For technical procurement, industrial supply, equipment or service
              enquiries, send the requirement with as much technical detail as
              available.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-surface p-6">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                Helpful detail to include
              </h3>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {details.map((d) => (
                  <div key={d} className="flex items-start gap-2.5">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-steel" />
                    <span className="text-sm text-foreground">{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
            <div className="grid gap-5">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field
                label="Organization"
                name="organization"
                placeholder="Company or facility"
              />
              <Field
                label="Email"
                name="email"
                type="email"
                placeholder="you@company.com"
              />
              <div>
                <label
                  htmlFor="requirement"
                  className="text-sm font-medium text-foreground"
                >
                  Requirement details
                </label>
                <textarea
                  id="requirement"
                  name="requirement"
                  rows={5}
                  placeholder="Item / service, specification, quantity, documentation, delivery location and required date."
                  className="mt-2 w-full resize-none rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-soft"
              >
                Submit requirement
              </button>
              <p className="text-xs leading-relaxed text-muted">
                Prefer email? Reach the team directly and a coordinator will
                follow up on scope, lead times and documentation.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted/70 outline-none transition-colors focus:border-accent"
      />
    </div>
  )
}
