import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Server-only client using the SERVICE ROLE key. This file runs exclusively
// on the server (Route Handler) — the key is never sent to the browser.
// Do NOT reuse this client in any client component.
function getServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY environment variables."
    );
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "name, email and message are required" },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Payload too large" }, { status: 400 });
  }

  try {
    const supabase = getServiceClient();
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, email, message });

    if (error) {
      console.error("[api/contact] insert error:", error.message);
      return NextResponse.json(
        { error: "Failed to save message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/contact] unexpected error:", err);
    return NextResponse.json(
      { error: "Server misconfiguration" },
      { status: 500 }
    );
  }
}
