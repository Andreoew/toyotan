import { FastifyInstance } from "fastify";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import z from "zod";
import { google } from "googleapis";
import { getAuthSheets } from "./auth-google";
import { env } from "../../env";

export async function createPromoValidity(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().post(
    "/create-validity",
    {
      schema: {
        body: z.object({
          start: z.string(),
          end: z.string(),
        }),
        response: {
          201: z.object({
            values: z.unknown(),
          }),
          400: z.object({
            message: z.string(),
          }),
          500: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { start, end } = request.body;
  
      // Obtemos a data de hoje formatada como "DD/MM/YYYY"
      const today = new Date();
      const todayFormatted = today.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  
      // Convertendo `start` para Date para comparação
      const [day, month, year] = start.split("/");
      const startDate = new Date(`${year}-${month}-${day}T00:00:00Z`);
  
      if (startDate < today) {
        return reply.status(400).send({ message: "Data de início não pode ser menor que hoje." });
      }
  
      try {
        const client = await getAuthSheets();
        const service = google.sheets({ version: "v4", auth: client });
  
        const existingPromos = await service.spreadsheets.values.get({
          spreadsheetId: env.SPREADSHEET_ID,
          range: "Validity",
        });
  
        // Verifica se já existe um registro com a mesma data de início
        const alreadyExists = existingPromos.data.values?.some(
          (row) => row[1] === start // Segunda coluna (índice 1) = Data de Início
        );
  
        if (alreadyExists) {
          return reply.status(400).send({ message: "Data já cadastrada." });
        }
  
        // Adicionamos a nova linha mantendo "Data de Criação"
        await service.spreadsheets.values.append({
          spreadsheetId: env.SPREADSHEET_ID,
          range: "Validity",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [[todayFormatted, start, end]], // Adicionando "Data de Criação"
          },
        });
  
        return reply.status(201).send();
      } catch (error) {
        console.error(error);
        return reply.status(500).send({ message: "Erro interno ao cadastrar validade." });
      }
    }
  );
  
  
}
