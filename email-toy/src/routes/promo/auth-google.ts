import { google } from "googleapis";
import { env } from "../../env";

export async function getAuthSheets() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: env.CLIENT_EMAIL,
      private_key: env.PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: env.GOOGLE_SCOPES,
  });
  
  return auth;
}