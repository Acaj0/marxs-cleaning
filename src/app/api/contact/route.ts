import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { service, name, email, phone, message } = body

    const { data, error } = await resend.emails.send({
      from: "Marx's Cleaning Website <onboarding@resend.dev>",
      to: ["management@marxscleaning.com"], // Replace with your email
      subject: `New Contact Form Submission - ${service}`,
      text: `
        Service: ${service}
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    })

    if (error) {
      return NextResponse.json({ error })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" })
  }
}

