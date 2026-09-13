import { NextResponse } from "next/server"

const attempts = new Map<string, { count: number; reset: number }>()
const allowedTypes = new Set(["application/pdf","image/jpeg","image/png","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"])

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local"
  const now = Date.now(); const entry = attempts.get(ip)
  if (entry && entry.reset > now && entry.count >= 5) return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  attempts.set(ip, !entry || entry.reset <= now ? { count: 1, reset: now + 60000 } : { ...entry, count: entry.count + 1 })
  const body = await request.formData().catch(() => null)
  if (!body) return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
  const value = (key: string) => String(body.get(key) || "").trim()
  const email=value("email"), description=value("description")
  if (!value("name") || !value("company") || !email || !description) return NextResponse.json({ error: "Required fields missing" }, { status: 400 })
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Valid email required" }, { status: 400 })
  if (description.length > 10000) return NextResponse.json({ error: "Description too long" }, { status: 400 })
  const attachment = body.get("attachment")
  if (attachment instanceof File && attachment.size) {
    if (attachment.size > 10 * 1024 * 1024) return NextResponse.json({ error: "Attachment too large" }, { status: 400 })
    if (!allowedTypes.has(attachment.type)) return NextResponse.json({ error: "Attachment type not allowed" }, { status: 400 })
  }
  return NextResponse.json({ error: "Online delivery is not configured. Please continue via WhatsApp or phone." }, { status: 503 })
}
