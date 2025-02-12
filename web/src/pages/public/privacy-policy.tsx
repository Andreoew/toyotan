import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet title="Política de privacidade" />
      <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl rounded-lg bg-muted p-6 shadow-lg md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8 text-center"
          >
            <h2 className="text-3xl font-bold md:text-4xl">
              Política de Privacidade
            </h2>
            <p className="mt-2 text-gray-500">Última atualização: [11/02/2025]</p>
          </motion.div>

          <div className="space-y-6 dark:text-zinc-400">
            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">
                1. Informações Coletadas
              </h3>
              <ul className="mt-2 list-inside list-disc">
                <li>Dados fornecidos pelo usuário (nome, e-mail, telefone, etc.).</li>
                <li>
                  Informações coletadas automaticamente (cookies, endereço IP,
                  etc.).
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">
                2. Uso das Informações
              </h3>
              <ul className="mt-2 list-inside list-disc">
                <li>Para fornecer e melhorar nossos serviços.</li>
                <li>Para comunicação com o usuário.</li>
                <li>Para fins legais e de segurança.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">
                3. Compartilhamento de Dados
              </h3>
              <ul className="mt-2 list-inside list-disc">
                <li>
                  Não vendemos ou compartilhamos dados sem consentimento, exceto
                  quando exigido por lei.
                </li>
                <li>
                  Podemos compartilhar dados com parceiros para melhorar os
                  serviços.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">
                4. Segurança
              </h3>
              <ul className="mt-2 list-inside list-disc">
                <li>
                  Utilizamos medidas técnicas e organizacionais para proteger os
                  dados.
                </li>
                <li>
                  O usuário é responsável por manter suas credenciais seguras.
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">
                5. Direitos do Usuário
              </h3>
              <ul className="mt-2 list-inside list-disc">
                <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
                <li>Solicitar informações sobre o uso de seus dados.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">
                6. Alterações na Política
              </h3>
              <p className="mt-2">
                Podemos atualizar esta política periodicamente. O uso contínuo
                do serviço significa aceitação das mudanças.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">
                7. Contato
              </h3>
              <p className="mt-2">
                Para dúvidas, entre em contato pelo e-mail{" "}
                <span className="font-semibold">contato@toyotan.com.br</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
