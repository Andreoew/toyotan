import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/lib/sendEmail";
import { toast } from "sonner";
import { WhatsAppLink } from "./whatsapp-link";

const formSchema = z.object({
  name: z.string({ message: "Obrigatório" }).min(3, {
    message: "Nome deve ter ao menos 3 caracteres",
  }),
  email: z.string({ message: "Obrigatório" }).email({
    message: "Deve ser um e-mail válido.",
  }),
  phone: z.string({ message: "Precisamos do seu número de telefone." }),
  messageText: z.string({ message: "Queremos te ouvir" }),
});

type FormSchema = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      messageText: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: FormSchema) {
    try {
      await sendEmail(data);
      form.reset();
      toast.success(`${data.name}, seu email foi enviando com sucesso.`);
    } catch (error) {
      console.error("Failed to send email: ", error);
      toast.error("Que pena", {
        description: `${data.name}, tivemos um erro.`,
        action: (
          <WhatsAppLink
            phone={"5565999182810"}
            title="Fale conosco agora!"
            height="56px"
            width="56px"
          />
        ),
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full grid-cols-2 flex-col justify-between gap-5 space-y-10 px-6 md:grid"
      >
        <div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl">Nome</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Seu nome completo"
                    {...field}
                    className="h-16 text-2xl"
                  />
                </FormControl>
                <FormDescription className="text-[1.2rem]">
                  Seu nome completo.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl">E-mail</FormLabel>
                <FormControl>
                  <Input
                    placeholder="seuemail@com.br"
                    {...field}
                    className="h-16 text-2xl"
                  />
                </FormControl>
                <FormDescription className="text-[1.2rem]">
                  Seu melhor e-mail.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl">Telefone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="65 99999 9999"
                    {...field}
                    className="h-16 text-2xl"
                  />
                </FormControl>
                <FormDescription className="text-[1.2rem]">
                  Seu número de telefone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid w-full gap-2">
          <FormField
            control={form.control}
            name="messageText"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel className="text-2xl">Sua mensagem</FormLabel> */}
                <FormControl>
                  <Textarea
                    placeholder="Escreva sua mensagem"
                    className="resize-none"
                    {...field}
                    rows={18}
                    style={{
                      fontSize: 16,
                    }}
                  />
                </FormControl>
                <FormDescription className="text-[1.2rem]">
                  Queremos entender melhor o que você precisa.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            disabled={isSubmitting}
            type="submit"
            className={`hover:bg-muted-foreground/90 h-16 bg-muted-foreground text-2xl text-muted ${isSubmitting ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
