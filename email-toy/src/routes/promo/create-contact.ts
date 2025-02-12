import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { google } from "googleapis"
import { getAuthSheets } from "./auth-google";
import { env } from "../../env";


export async function createContact(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/create",
    {
      schema: {
        body: z.object({
          name: z.string(),
          phone: z.string(),
        }),
        response: {
          201: z.object({
            values: z.unknown()
          })
        }
      }
    },
    async (request, reply) => {
      const { name, phone } = request.body;
      const date = new Date();
      const formattedDate = date.toLocaleDateString("pt-BR", { timeZone: "UTC" });
      try {

        const client = await getAuthSheets();

        const service = google.sheets({ version: "v4", auth: client });

        const row = await service.spreadsheets.values.append({
          spreadsheetId: env.SPREADSHEET_ID,
          range: "Promo",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [formattedDate, name, phone]
            ]
          }
        });                    
      
        return reply.status(201).send()
      } catch (error) {
        console.log(error)
      }

    }
  )
    
}
