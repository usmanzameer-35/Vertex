import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { solutionDetails } from "@/data/site"

export function generateStaticParams() { return Object.keys(solutionDetails).map((slug) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const solution = solutionDetails[slug]; return solution ? { title: solution.title, description: solution.description } : {} }
export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = solutionDetails[slug]
  if (!solution) notFound()
  return <main className="border-t border-border/60"><section className="mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{solution.eyebrow}</p><h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-7xl">{solution.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{solution.description}</p><Link href="/rfq" className="mt-9 inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-[0.1em] text-background">Send an RFQ <ArrowUpRight className="size-4" /></Link></section><section className="border-y border-border/60 bg-surface/40"><div className="mx-auto grid max-w-7xl gap-px px-5 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">{solution.items.map((item, index) => <div className="border-l border-border px-6 py-5" key={item}><span className="font-mono text-sm text-steel">0{index + 1}</span><p className="mt-8 font-display text-xl font-semibold text-foreground">{item}</p></div>)}</div></section><section className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><p className="max-w-xl border-l-2 border-accent pl-5 text-sm leading-7 text-muted">Capabilities, product availability, specialist resources and delivery schedules are confirmed against individual enquiries and agreed scope.</p></section></main>
}