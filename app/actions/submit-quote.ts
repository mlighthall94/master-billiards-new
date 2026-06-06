"use server"

import { Resend } from "resend"

export interface QuoteSubmission {
  services: string[]
  tableSize: string
  clothGrade: string
  clothColor: string
  moveType: string
  accessType: string
  name: string
  phone: string
  email: string
  address: string
  notes: string
}

type SubmitResult = { ok: true } | { ok: false; error: string }

// Label maps so emails/records are human-readable rather than slugs
const serviceLabels: Record<string, string> = {
  recovering: "Recovering",
  relocation: "Relocation",
  repair: "Repair",
  leveling: "Leveling",
  refinishing: "Refinishing",
  "full-restoration": "Full Restoration",
}

function pretty(value: string) {
  if (!value) return ""
  return value
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

export async function submitQuote(data: QuoteSubmission): Promise<SubmitResult> {
  // Basic server-side validation
  if (!data.name?.trim() || !data.phone?.trim()) {
    return { ok: false, error: "Name and phone are required." }
  }
  if (!data.services || data.services.length === 0) {
    return { ok: false, error: "Please select at least one service." }
  }

  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
    dateStyle: "medium",
    timeStyle: "short",
  })

  const servicesReadable = data.services.map((s) => serviceLabels[s] ?? pretty(s)).join(", ")

  const fields = {
    Name: data.name.trim(),
    Phone: data.phone.trim(),
    Email: data.email?.trim() || "",
    Services: servicesReadable,
    "Table Size": pretty(data.tableSize),
    "Cloth Grade": pretty(data.clothGrade),
    "Cloth Color": pretty(data.clothColor),
    "Move Type": pretty(data.moveType),
    "Access Type": pretty(data.accessType),
    "Service Address": data.address?.trim() || "",
    Notes: data.notes?.trim() || "",
    "Submitted At": submittedAt,
  }

  // --- 1. Store in Airtable ---
  const airtableToken = process.env.AIRTABLE_API_KEY
  const airtableBaseId = process.env.AIRTABLE_BASE_ID
  const airtableTable = process.env.AIRTABLE_TABLE_NAME || "Leads"

  if (airtableToken && airtableBaseId) {
    try {
      const res = await fetch(
        `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(airtableTable)}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${airtableToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ records: [{ fields }], typecast: true }),
        },
      )

      if (!res.ok) {
        const body = await res.text()
        console.error("[v0] Airtable error:", res.status, body)
      }
    } catch (err) {
      console.error("[v0] Airtable request failed:", err)
    }
  } else {
    console.error("[v0] Missing AIRTABLE_API_KEY or AIRTABLE_BASE_ID")
  }

  // --- 2. Email the business ---
  const resendKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.QUOTE_NOTIFY_EMAIL
  const fromEmail = process.env.QUOTE_FROM_EMAIL || "Master Billiards <onboarding@resend.dev>"

  if (resendKey && notifyEmail) {
    try {
      const resend = new Resend(resendKey)

      const rows: [string, string][] = [
        ["Name", fields.Name],
        ["Phone", fields.Phone],
        ["Email", fields.Email],
        ["Services", fields.Services],
        ["Table Size", fields["Table Size"]],
        ["Cloth Grade", fields["Cloth Grade"]],
        ["Cloth Color", fields["Cloth Color"]],
        ["Move Type", fields["Move Type"]],
        ["Access Type", fields["Access Type"]],
        ["Service Address", fields["Service Address"]],
        ["Notes", fields.Notes],
        ["Submitted At", fields["Submitted At"]],
      ]

      const html = `
        <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto;">
          <h2 style="color: #111;">New Quote Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            ${rows
              .filter(([, v]) => v)
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding: 8px 12px; border-bottom: 1px solid #eee; font-weight: bold; color: #555; width: 40%;">${label}</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #eee; color: #111;">${value}</td>
              </tr>`,
              )
              .join("")}
          </table>
        </div>
      `

      await resend.emails.send({
        from: fromEmail,
        to: notifyEmail,
        replyTo: fields.Email || undefined,
        subject: `New Quote Request — ${fields.Name} (${fields.Services})`,
        html,
      })
    } catch (err) {
      console.error("[v0] Resend email failed:", err)
    }
  } else {
    console.error("[v0] Missing RESEND_API_KEY or QUOTE_NOTIFY_EMAIL")
  }

  return { ok: true }
}
