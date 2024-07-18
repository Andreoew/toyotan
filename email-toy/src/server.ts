import fastify from "fastify";
import cors from "@fastify/cors"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { contactRoutes } from "./routes/contacts";
import { errorHandler } from "./error-handler";
import { env } from "./env";

const app = fastify()

app.register(cors, {
  origin: ['https://www.toyotan.com.br', "*"],
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler)

app.register(contactRoutes)

app.listen({
  port: env.PORT,
})
.then(() => {
  console.log(`http server running on http://localhost:${env.PORT}`)
})