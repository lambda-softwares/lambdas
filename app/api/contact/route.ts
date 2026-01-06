import { type NextRequest, NextResponse } from "next/server"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  sector: z.string().min(1),
  message: z.string().min(10),
  budget: z.string().optional(),
  honeypot: z.string().max(0),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the form data
    const validatedData = contactSchema.parse(body)

    // In a real implementation, you would:
    // 1. Send email notification to lambda@denning.pro
    // 2. Store the lead in a database or CRM
    // 3. Send confirmation email to the user

    // For now, we'll just log the submission and return success
    console.log("Contact form submission:", {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company,
      sector: validatedData.sector,
      message: validatedData.message,
      budget: validatedData.budget,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 400 })
  }
}
