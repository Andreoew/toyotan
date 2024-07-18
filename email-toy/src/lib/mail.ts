import 'dotenv/config'
import nodemailer from 'nodemailer';
import { env } from '../env';

export async function getMailClient(){
  // const account = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: env.SMTP_PORT,
    secure: env.SMTP_SECURE,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS
    }
  })

  return transporter
}