import "dotenv/config";
import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;
let initError: Error | null = null;

const getTransporter = () => {
  if (transporter) return transporter;
  if (initError) throw initError;

  const mailerEmail = process.env.MAILER_EMAIL;
  const mailerPassword = process.env.MAILER_PASSWORD;

  if (!mailerEmail || !mailerPassword) {
    initError = new Error("MAILER_EMAIL and MAILER_PASSWORD must be set");
    throw initError;
  }

  transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: mailerEmail,
      pass: mailerPassword,
    },
    logger: process.env.NODE_ENV !== "production",
    debug: process.env.NODE_ENV !== "production",
  });

  return transporter;
};

const sendMail = async ({
  to,
  subject,
  text,
  html,
}: MailOptions): Promise<void> => {
  const mailerEmail = process.env.MAILER_EMAIL;
  const mailOptions = {
    from: mailerEmail,
    to,
    subject,
    text,
    html,
  };

  try {
    await getTransporter().sendMail(mailOptions);
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to send email: ${error.message}`);
    }
    throw new Error("Failed to send email");
  }
};

interface MailOptions {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export { sendMail };
