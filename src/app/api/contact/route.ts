import { NextResponse } from "next/server";

// Réception du formulaire de contact.
// TODO (hors maquette) : envoyer la notification email à l'adresse unique définie par le client
// (ex. service transactionnel configuré via variables d'environnement Vercel).

const REQUIRED = ["name", "email", "phone", "profile", "reason", "message"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  // Honeypot : un robot remplit le champ caché, on répond "ok" sans rien traiter.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const missing = REQUIRED.filter((field) => typeof data[field] !== "string" || !String(data[field]).trim());
  if (missing.length || data.consent !== true) {
    return NextResponse.json({ ok: false, error: "missing_fields", fields: missing }, { status: 422 });
  }
  if (!EMAIL_RE.test(String(data.email))) {
    return NextResponse.json({ ok: false, error: "invalid_email", fields: ["email"] }, { status: 422 });
  }
  if (String(data.message).length > 5000) {
    return NextResponse.json({ ok: false, error: "message_too_long", fields: ["message"] }, { status: 422 });
  }

  return NextResponse.json({ ok: true });
}
