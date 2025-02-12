import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { google } from "googleapis"
import { getAuthSheets } from "./auth-google";
import { env } from "../../env";

export async function getDateValidityPromo(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    "/validity",
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
        console.log("🔄 Buscando novos dados da planilha...");
        const client = await getAuthSheets();

        const service = google.sheets({ version: "v4", auth: client });

        const result = await service.spreadsheets.values.get({
          spreadsheetId: env.SPREADSHEET_ID,
          range: "Validity",
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
