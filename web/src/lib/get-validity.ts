import { api } from "./api";

export async function getValidity() {
  console.log("🔄 Fazendo requisição para /validity");
  const response = await api.get("/validity")

  return response.data
}