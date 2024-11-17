import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_SEND_USER,
        pass: process.env.EMAIL_SEND_PASS,
      },
    });

    const mailOptions = {
      to: process.env.EMAIL_RECEIVE_USER, // Your email to receive messages
      replyTo: email,
      subject: `Contact Form Submission: ${name}`,
      text: `
    You have received a new message from www.omkarsangeet.com contact form:

    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}
  `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email." }), {
      status: 500,
    });
  }
}
