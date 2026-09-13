import type { MetadataRoute } from "next"
import { siteUrl } from "@/data/site-url"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/solutions", "/solutions/technical-procurement", "/solutions/oil-gas-support", "/solutions/industrial-mro", "/solutions/electrical-instrumentation", "/solutions/hse-site-supply", "/solutions/equipment-specialist-services", "/solutions/facilities-technology", "/industries", "/how-we-work", "/hse-quality", "/about", "/leadership/babar-ali-malik", "/rfq", "/contact"]
  return routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: new Date() }))
}