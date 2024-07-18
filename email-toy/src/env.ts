import { z } from "zod"

const envSchema = z.object({
  // API_BASE_URL: z.string().url(),
  // WEB_BASE_URL: z.string().url(),
  SMTP_HOST: z.string(),
  SMTP_USER: z.string(),
  SMTP_PASS: z.string(),
  SMTP_SECURE: z.coerce.boolean().default(false),
  PORT: z.coerce.number().default(3333),
  SMTP_PORT: z.coerce.number().default(465),
  SEND_EMAIL: z.string()
})

export const env = envSchema.parse(process.env)