import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log the message (in production, integrate with email service like Resend/Nodemailer)
    console.log("Contact form submission:", { name, email, subject, message });

    // For production: integrate with Resend/Nodemailer/SendGrid here
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'dhirajkumarvandrangi@gmail.com',
    //   subject: `Portfolio Contact: ${subject || 'New message'} from ${name}`,
    //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`
    // });

    return NextResponse.json({ success: true, message: "Message received" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
