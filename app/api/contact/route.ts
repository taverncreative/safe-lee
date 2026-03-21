import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      company?: string;
      service?: string;
      message?: string;
    };

    // Validate required fields
    const errors: string[] = [];

    if (!name?.trim()) errors.push("Name is required.");
    if (!email?.trim()) errors.push("Email is required.");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.push("Please provide a valid email address.");
    if (!message?.trim()) errors.push("Message is required.");

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    // TODO: Add email sending (e.g. Resend, Nodemailer, SendGrid)
    console.log("Contact form submission:", body);

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. We will be in touch shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}
