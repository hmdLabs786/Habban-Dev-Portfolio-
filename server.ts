import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for contact form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    try {
      // 1. Send "Thank You" email to the user
      const thankYouHtml = `
        <div style="background-color: #020617; color: #f8fafc; font-family: sans-serif; padding: 40px; border-radius: 16px; border: 1px solid #1e293b; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #38bdf8; font-size: 24px; margin-bottom: 20px;">Hi ${name},</h1>
          <p style="font-size: 16px; line-height: 1.6; color: #94a3b8;">
            Thank you for reaching out! I've received your message and will get back to you as soon as possible.
          </p>
          <div style="background-color: #0f172a; padding: 20px; border-radius: 12px; margin: 20px 0; border: 1px solid #334155;">
            <p style="color: #38bdf8; font-weight: bold; margin-bottom: 8px;">Your Message:</p>
            <p style="color: #cbd5e1; font-style: italic;">"${message}"</p>
          </div>
          <p style="font-size: 16px; line-height: 1.6; color: #94a3b8;">
            Best regards,<br/>
            <strong style="color: #38bdf8;">Habban Madani</strong>
          </p>
          <hr style="border: 0; border-top: 1px solid #1e293b; margin: 30px 0;" />
          <p style="font-size: 12px; color: #64748b; text-align: center;">
            © ${new Date().getFullYear()} Habban-Dev. All rights reserved.
          </p>
        </div>
      `;

      await transporter.sendMail({
        from: `"Habban Madani" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "Thank you for contacting me!",
        html: thankYouHtml,
      });

      // 2. Send form data to the owner
      const ownerHtml = `
        <div style="background-color: #020617; color: #f8fafc; font-family: sans-serif; padding: 40px; border-radius: 16px; border: 1px solid #1e293b; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #38bdf8; font-size: 24px; margin-bottom: 20px;">New Contact Form Submission</h1>
          <div style="background-color: #0f172a; padding: 20px; border-radius: 12px; border: 1px solid #334155;">
            <p style="margin-bottom: 10px;"><strong style="color: #38bdf8;">Name:</strong> ${name}</p>
            <p style="margin-bottom: 10px;"><strong style="color: #38bdf8;">Email:</strong> ${email}</p>
            <p style="margin-bottom: 0;"><strong style="color: #38bdf8;">Message:</strong></p>
            <p style="color: #cbd5e1; margin-top: 5px;">${message}</p>
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: `New Message from ${name}`,
        html: ownerHtml,
      });

      res.json({ message: "Success" });
    } catch (error) {
      console.error("Email error:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
