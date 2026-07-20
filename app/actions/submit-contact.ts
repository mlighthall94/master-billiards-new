"use server"

import { Resend } from "resend"
import { persistLead } from "@/lib/persist-lead"

export interface ContactSubmission {
  name: string
  email: string
  phone: string
  message: string
}

type SubmitResult = { ok: true } | { ok: false; error: string }

// Where contact form messages are delivered.
const CONTACT_TO_EMAIL = "kendra@masterbilliards.co"

export async function submitContact(data: ContactSubmission): Promise<SubmitResult> {
  // Server-side validation
  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    return { ok: false, error: "Name, email, and message are required." }
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  })

  // Track whether the message was captured by any channel.
  let captured = false

  // --- Durable backup first (most reliable) ---
  const backupUrl = await persistLead("contact", {
    Name: data.name.trim(),
    Email: data.email.trim(),
    Phone: data.phone?.trim() || "",
    Message: data.message.trim(),
    "Submitted At": submittedAt,
  })
  if (backupUrl) captured = true

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    console.error("[v0] Missing RESEND_API_KEY")
    // The message is still safely stored if the durable backup succeeded.
    return captured
      ? { ok: true }
      : { ok: false, error: "Could not send your message. Please call us instead." }
  }

  // Resend can only send "from" a VERIFIED domain (masterbilliards.co). Only honor
  // a configured sender on that domain; otherwise always use the known-good address.
  const VERIFIED_FROM = "Master Billiards <quotes@masterbilliards.co>"
  const configuredFrom = process.env.QUOTE_FROM_EMAIL?.trim()
  const isVerifiedDomainFrom = /@([a-z0-9-]+\.)*masterbilliards\.co>?\s*$/i.test(configuredFrom || "")
  const fromEmail = configuredFrom && isVerifiedDomainFrom ? configuredFrom : VERIFIED_FROM

  const rows: [string, string][] = [
    ["Name", data.name.trim()],
    ["Email", data.email.trim()],
    ["Phone", data.phone?.trim() || ""],
    ["Message", data.message.trim()],
    ["Submitted At", submittedAt],
  ]

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color: #111;">New Contact Message</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${rows
          .filter(([, v]) => v)
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 30%; vertical-align: top;">${label}</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #111; white-space: pre-wrap;">${value}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `

  try {
    const resend = new Resend(resendKey)
    const payload = {
      from: fromEmail,
      to: CONTACT_TO_EMAIL,
      replyTo: data.email.trim() || undefined,
      subject: `New Contact Message — ${data.name.trim()}`,
      html,
    }

    // Resend returns { error } rather than throwing. Check and retry once.
    let { error } = await resend.emails.send(payload)
    if (error) {
      console.error("[v0] Resend contact email error (attempt 1):", error)
      await new Promise((r) => setTimeout(r, 400))
      ;({ error } = await resend.emails.send(payload))
      if (error) console.error("[v0] Resend contact email error (attempt 2):", error)
    }
    if (!error) captured = true
  } catch (err) {
    console.error("[v0] Resend contact email threw:", err)
  }

  // Success as long as the message was captured somewhere (email or backup).
  if (!captured) {
    return { ok: false, error: "Could not send your message. Please call us instead." }
  }

  return { ok: true }
}
