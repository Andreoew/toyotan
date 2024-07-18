import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { getMailClient } from "../lib/mail";
import { render } from "@react-email/components";
import { Email } from "../components/email-template";
import nodemailer from "nodemailer";
import { env } from "../env";

export async function contactRoutes(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/contact",
    {
      schema: {
        body: z.object({
          email: z.string().email(),
          name: z.string(),
          phone: z.string(),
          messageText: z.string(),
        })
      }
    },
    async (request, reply) => {
      try {
        const { name, email, phone, messageText } = request.body;
      const mail = await getMailClient();

      const emailHtml = render(Email({ name, email, phone, messageText }));

      const message = await mail.sendMail({
        from: {
          name: "Sistema de e-mail - Site Toyotan",
          address: env.SMTP_USER,
        },
        to: {
          name: name,
          address: env.SEND_EMAIL,
        },
        subject: `Nova Mensagem de Cliente - ${name}`,
        html: emailHtml,
      });

      console.log(nodemailer.getTestMessageUrl(message));
      
      reply.status(200).send()
      } catch (error) {
        console.log(error)

        reply.status(400).send()
      }

    }
  )
    
}
