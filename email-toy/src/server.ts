import fastify from "fastify";
import cors from "@fastify/cors"
import { serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import { contactRoutes } from "./routes/contacts";
import { errorHandler } from "./error-handler";
import { env } from "./env";
import { getContacts } from "./routes/promo/get-contacts";
import { createContact } from "./routes/promo/create-contact";
import { getDateValidityPromo } from "./routes/promo/get-validity-promo";
import { createPromoValidity } from "./routes/promo/create-validity-promo";


const app = fastify()

app.register(cors, {
  origin: ['https://www.toyotan.com.br'],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],  
})

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler)

app.register(contactRoutes)
app.register(createContact)
app.register(getContacts)
app.register(getDateValidityPromo)
app.register(createPromoValidity)

app.listen({
  port: env.PORT,
})
.then(() => {
  console.log(`http server running on http://localhost:${env.PORT}`)
})