import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { google } from "googleapis"
import { getAuthSheets } from "./auth-google";
import { env } from "../../env";


export async function getContacts(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/contacts",
    {
      schema: {
        response: {
          200: z.object({
            values: z.unknown()
          })
        }
      }
    },
    async (request, reply) => {
      try {

        const client = await getAuthSheets();

        const service = google.sheets({ version: "v4", auth: client });

        const result = await service.spreadsheets.values.get({
          spreadsheetId: env.SPREADSHEET_ID,
          range: "Promo",
        });      

        // console.log("Result Data:", result.data);
        // console.log("Values:", result.data.values);
              
      
        return reply.status(200).send(result.data)
      } catch (error) {
        console.log(error)
      }

    }
  )
    
}
