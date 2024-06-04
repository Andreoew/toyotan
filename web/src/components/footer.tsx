import { WhatsAppLink } from "./whatsapp-link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mt-10 flex flex-col items-center justify-center border-t py-4">
      <h4 className="mb-2 text-center text-2xl">
        Todos os direitos reservados - &copy; {year} TOYOTAN MECÂNICA ESPECIALIZADA
      </h4>
      <span className="flex items-center justify-center gap-2 text-lg text-secondary-foreground">
        Desenvolvido por:{" "}
        <a
          href="https://adss.com.br"
          target="_blank"
          className="text-secondary-foreground underline"
        >
          Adss
        </a>
        <WhatsAppLink
          phone="5565996643812"
          title="Clique para falar com o desenvolvedor."
          height="24px"
          width="24px"
        />
      </span>
    </div>
  );
}
