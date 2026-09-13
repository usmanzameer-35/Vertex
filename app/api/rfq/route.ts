import { NextResponse } from "next/server"

export async function POST(request: Request) {
	const body = await request.json().catch(() => null)
	const email = typeof body?.email === "string" ? body.email.trim() : ""
	if (!body?.name || !body?.company || !email || !body?.description) return NextResponse.json({ error: "Required fields missing" }, { status: 400 })
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Valid email required" }, { status: 400 })
	if (String(body.description).length > 10000) return NextResponse.json({ error: "Description too long" }, { status: 400 })
	return NextResponse.json({ ok: true, delivery: "not-configured" })
}
