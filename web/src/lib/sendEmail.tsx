import { api } from "./api";


type FormSchema = {
  name: string;
  email: string;
  phone: string;
  messageText: string;
};

export async function sendEmail(data: FormSchema) {  

 const response = await api.post("/contact", {
  name: data.name,
  email: data.email,
  phone: data.phone,
  messageText: data.messageText
 })

 const { messageId } = response.data

 return messageId

}
