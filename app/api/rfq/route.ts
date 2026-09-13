import { NextResponse } from "next/server"
export async function POST(request: Request) { const body = await request.json().catch(() => null); if (!body?.name || !body?.company || !body?.email || !body?.description) return NextResponse.json({ error: "Required fields missing" }, { status: 400 }); return NextResponse.json({ ok: true, delivery: "not-configured" }) }
