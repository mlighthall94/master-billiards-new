"use server"

import { Resend } from "resend"

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

  const resendKey = process.env.RESEND_API_KEY
  if (!resendKey) {
    console.error("[v0] Missing RESEND_API_KEY")
    return { ok: false, error: "Email is not configured. Please try again later." }
  }

  // Resend can only send "from" a verified domain. masterbilliards.co is verified.
  const VERIFIED_FROM = "Master Billiards <quotes@masterbilliards.co>"
  const configuredFrom = process.env.QUOTE_FROM_EMAIL?.trim()
  const isFreeMailFrom = /@(gmail|yahoo|hotmail|outlook|live|msn|icloud|me|aol)\.[a-z.]+>?\s*$/i.test(
    configuredFrom || "",
  )
  const fromEmail = configuredFrom && !isFreeMailFrom ? configuredFrom : VERIFIED_FROM

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  })

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
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: CONTACT_TO_EMAIL,
      replyTo: data.email.trim() || undefined,
      subject: `New Contact Message — ${data.name.trim()}`,
      html,
    })

    if (error) {
      console.error("[v0] Resend contact email failed:", error)
      return { ok: false, error: "Could not send your message. Please try again." }
    }
  } catch (err) {
    console.error("[v0] Resend contact email threw:", err)
    return { ok: false, error: "Could not send your message. Please try again." }
  }

  return { ok: true }
}
