import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vertex Energy & Industrial Solutions | Technical Procurement & Field Support",
  description:
    "A field-informed business platform connecting technical requirements with reliable sourcing, specialist coordination and accountable delivery. Technical procurement, industrial supply and field support across Pakistan.",
  keywords: [
    "technical procurement",
    "industrial supply",
    "oil and gas support",
    "field support",
    "equipment coordination",
    "Pakistan",
  ],
  openGraph: {
    title: "Vertex Energy & Industrial Solutions",
    description:
      "Technical requirements. Reliable sourcing. Accountable delivery.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0c10",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body>{children}</body>
    </html>
  )
}
