import { Resend } from "resend"

const AIRTABLE_API_KEY = process.env.TEST_AIRTABLE_API_KEY
const AIRTABLE_BASE_ID = process.env.TEST_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || "MB Leads"
const RESEND_API_KEY = process.env.TEST_RESEND_API_KEY
const NOTIFY = process.env.QUOTE_NOTIFY_EMAIL || "23kendramorasse@gmail.com"
const FROM = process.env.QUOTE_FROM_EMAIL || "onboarding@resend.dev"

const sample = {
  name: "TEST — Master Billiards",
  phone: "(603) 555-0123",
  email: "test@example.com",
  services: "Recover / New Cloth",
  tableSize: "8 ft",
  clothGrade: "Championship Tour Edition",
  clothColor: "Tournament Blue",
  moveType: "",
  accessType: "",
  address: "369 NH-108, Somersworth, NH 03878",
  notes: "This is an automated test submission from v0. Safe to delete.",
}

async function run() {
  // 1. Airtable
  console.log("[v0] Testing Airtable...")
  const at = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        typecast: true,
        records: [
          {
            fields: {
              Name: sample.name,
              Phone: sample.phone,
              Email: sample.email,
              Services: sample.services,
              "Table Size": sample.tableSize,
              "Cloth Grade": sample.clothGrade,
              "Cloth Color": sample.clothColor,
              "Move Type": sample.moveType,
              "Access Type": sample.accessType,
              "Service Address": sample.address,
              Notes: sample.notes,
              "Submitted At": new Date().toISOString(),
            },
          },
        ],
      }),
    },
  )
  const atJson = await at.json()
  if (!at.ok) {
    console.log("[v0] AIRTABLE FAILED:", at.status, JSON.stringify(atJson.error))
  } else {
    console.log("[v0] AIRTABLE OK — record id:", atJson.records?.[0]?.id)
  }

  // 2. Resend
  console.log("[v0] Testing Resend email to", NOTIFY, "...")
  const resend = new Resend(RESEND_API_KEY)
  const { data, error } = await resend.emails.send({
    from: `Master Billiards Quotes <${FROM}>`,
    to: [NOTIFY],
    replyTo: sample.email,
    subject: `TEST Quote Request — ${sample.name}`,
    text: `This is a test submission.\n\nName: ${sample.name}\nPhone: ${sample.phone}\nEmail: ${sample.email}\nServices: ${sample.services}\nTable: ${sample.tableSize}\nCloth: ${sample.clothGrade} / ${sample.clothColor}\nAddress: ${sample.address}\nNotes: ${sample.notes}`,
  })
  if (error) {
    console.log("[v0] RESEND FAILED:", JSON.stringify(error))
  } else {
    console.log("[v0] RESEND OK — email id:", data?.id)
  }
}

run().catch((e) => console.log("[v0] FATAL:", e.message))
