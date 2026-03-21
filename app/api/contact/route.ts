import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = [
  "admin@safeleeinspectionconsultancy.com",
  "hello@businesssortedkent.co.uk",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, phone, company, service, message } = body as {
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

    // Build email HTML
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1a2332; padding: 20px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Enquiry — Safe Lee Inspection &amp; Consultancy</h1>
        </div>
        <div style="padding: 24px; background-color: #ffffff;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${escapeHtml(name!)}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                <a href="mailto:${escapeHtml(email!)}" style="color: #2563eb;">${escapeHtml(email!)}</a>
              </td>
            </tr>
            ${phone?.trim() ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; vertical-align: top;">Phone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                <a href="tel:${escapeHtml(phone)}" style="color: #2563eb;">${escapeHtml(phone)}</a>
              </td>
            </tr>` : ""}
            ${company?.trim() ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; vertical-align: top;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${escapeHtml(company)}</td>
            </tr>` : ""}
            ${service?.trim() ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: bold; vertical-align: top;">Service</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">${escapeHtml(service)}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-weight: bold; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; white-space: pre-wrap;">${escapeHtml(message!)}</td>
            </tr>
          </table>
        </div>
        <div style="background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #64748b;">
          Sent from safeleeinspectionconsultancy.com contact form
        </div>
      </div>
    `;

    const subject = service?.trim()
      ? `New Enquiry: ${service} — ${name}`
      : `New Enquiry from ${name}`;

    const { error: sendError } = await resend.emails.send({
      from: "Safe Lee Website <noreply@safeleeinspectionconsultancy.com>",
      to: RECIPIENTS,
      replyTo: email!,
      subject,
      html: htmlBody,
    });

    if (sendError) {
      console.error("Resend error:", sendError);
      return NextResponse.json(
        { error: "Failed to send your message. Please try calling us instead." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you for your enquiry. We will be in touch shortly.",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Invalid request. Please try again." },
      { status: 400 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
