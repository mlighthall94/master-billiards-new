import "server-only"
import { put } from "@vercel/blob"

/**
 * Durable, never-lose-a-lead storage.
 *
 * Every quote/contact submission is written to Blob storage as a JSON file
 * BEFORE we attempt any third-party delivery (email, Airtable). Blob is a
 * first-party Vercel integration and is the most reliable link in the chain,
 * so even if Resend or Airtable are misconfigured or down, the lead is safely
 * captured and can always be recovered.
 *
 * Returns the public Blob URL on success, or null on failure (never throws).
 */
export async function persistLead(
  kind: "quote" | "contact",
  payload: Record<string, unknown>,
): Promise<string | null> {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.error("[v0] persistLead: BLOB_READ_WRITE_TOKEN missing — cannot save lead")
      return null
    }

    const name = String(payload.name ?? payload.Name ?? "lead")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")

    const now = new Date()
    // Sortable UTC timestamp so leads list chronologically in the Blob dashboard.
    const stamp = now.toISOString().replace(/[:.]/g, "-")

    const record = {
      kind,
      receivedAt: now.toISOString(),
      ...payload,
    }

    const blob = await put(
      `leads/${kind}/${stamp}-${name || "lead"}.json`,
      JSON.stringify(record, null, 2),
      {
        access: "public",
        contentType: "application/json",
        addRandomSuffix: true,
      },
    )

    return blob.url
  } catch (err) {
    console.error("[v0] persistLead failed:", err)
    return null
  }
}
