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

import { toast } from "sonner";
import { WhatsAppLink } from "./whatsapp-link";
import icoWhatsapp from "@/assets/whatsapp.svg";
import { sendContactPromo } from "@/lib/send-contact-promo";
import { Checkbox } from "./ui/checkbox";

const formSchema = z.object({
  name: z.string({ message: "Obrigatório" }).min(3, {
    message: "Nome deve ter ao menos 3 caracteres",
  }),
  phone: z
    .string({ message: "Precisamos do seu número de telefone." })
    .length(11, { message: "O telefone deve ter exatamente 11 dígitos." })
    .regex(/^\d{11}$/, { message: "O telefone deve conter apenas números." }),
  terms: z.literal(true, {
    errorMap: () => ({ message: "Você precisa aceitar os termos." }),
  }),
});

type FormSchema = z.infer<typeof formSchema>;

export function PromoForm() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit(data: FormSchema) {
    try {
      await sendContactPromo(data);
      console.log("dados: ", data);
      form.reset();
      toast.success(`${data.name}, seu contato foi enviando com sucesso.`);
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
        className="flex w-[500px]  flex-col justify-center gap-5 space-y-10 px-6 md:grid"
      >
        <div className="flex w-full flex-col gap-5">
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
                <FormMessage className="text-[1.2rem]" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-2xl">Contato</FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2  rounded-lg border border-input px-4 focus-within:ring-2 focus-within:ring-primary">
                    <img src={icoWhatsapp} width={24} height={24} alt="" />
                    <input
                      placeholder="65 99999 9999"
                      autoComplete="off"
                      type="tel"
                      {...field}
                      className="!focus:ring-0 !focus:outline-none h-16 flex-1 !border-none bg-transparent text-2xl !outline-none !ring-0 autofill:bg-transparent"
                    />
                  </div>
                </FormControl>
                <FormDescription className="text-[1.2rem]">
                  Seu número de telefone celular.
                </FormDescription>
                <FormMessage className="text-[1.2rem]" />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  id="terms"
                  className="size-5 rounded-md"
                />
              </FormControl>
              <div className="grid gap-1.5 leading-none">
                <FormLabel
                  htmlFor="terms"
                  className="text-[1.2rem] font-medium dark:text-zinc-500"
                >
                  Aceitar os termos e condições
                </FormLabel>
                <p className="text-[1.2rem] dark:text-zinc-500">
                  De acordo com as leis 12.965/2014 e 13.709/2018, que regulam a
                  internet e o tratamento de dados pessoais no Brasil, ao me
                  inscrever autorizo a Toyotan Mecânica Especializada a enviar
                  notificações por WhatsApp e outros meios e automaticamente
                  concordo com os{" "}
                  <a
                    className="underline dark:text-zinc-300"
                    target="_blank"
                    href="/terms"
                  >
                    termos de uso
                  </a>{" "}
                  e{" "}
                  <a
                    className="underline dark:text-zinc-300"
                    target="_blank"
                    href="/privacy"
                  >
                    políticas de privacidade
                  </a>
                  .
                </p>
                <FormMessage className="text-[1.2rem]" />
              </div>
            </FormItem>
          )}
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className={`h-16 bg-muted-foreground text-2xl text-muted hover:bg-muted-foreground/90 ${isSubmitting ? "cursor-not-allowed opacity-50" : ""}`}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </form>
    </Form>
  );
}
