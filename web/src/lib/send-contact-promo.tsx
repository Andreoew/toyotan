import { api } from "./api";


type FormSchema = {
  name: string;  
  phone: string;
};

export async function sendContactPromo(data: FormSchema) {  

 const response = await api.post("/create", {
  name: data.name,
  phone: data.phone,
 })

 const status = response.status

 return status

}
