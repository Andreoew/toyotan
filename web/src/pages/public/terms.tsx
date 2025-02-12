import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet title="Termos de Uso" />

      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl bg-muted shadow-lg rounded-lg p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold  md:text-4xl">
              Termos e Condições
            </h2>
            <p className="text-gray-500 mt-2">Última atualização: [11/02/2025]</p>
          </motion.div>

          <div className="space-y-6 dark:text-zinc-400">
            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">1. Definições</h3>
              <ul className="list-disc list-inside mt-2">
                <li><strong>Usuário:</strong> qualquer pessoa que acessa ou utiliza os serviços.</li>
                <li><strong>Plataforma:</strong> refere-se ao site, aplicativo ou qualquer outro meio digital oferecido pela Toyotan Mecânica Especializada.</li>
                <li><strong>Conteúdo:</strong> qualquer informação, dado ou material disponibilizado na plataforma.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">2. Uso da Plataforma</h3>
              <ul className="list-disc list-inside mt-2">
                <li>O usuário deve fornecer informações corretas e atualizadas.</li>
                <li>É proibido o uso para atividades ilegais ou não autorizadas.</li>
                <li>A empresa pode suspender ou excluir contas que violem os termos.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">3. Propriedade Intelectual</h3>
              <ul className="list-disc list-inside mt-2">
                <li>Todos os direitos sobre a plataforma e seu conteúdo pertencem à empresa.</li>
                <li>O usuário não pode copiar, modificar ou distribuir o conteúdo sem autorização.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">4. Limitação de Responsabilidade</h3>
              <ul className="list-disc list-inside mt-2">
                <li>A empresa não se responsabiliza por danos causados pelo uso inadequado do serviço.</li>
                <li>O serviço pode conter links para sites de terceiros, pelos quais não nos responsabilizamos.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">5. Alterações nos Termos</h3>
              <p className="mt-2">
                Podemos atualizar estes termos a qualquer momento. O uso contínuo da plataforma significa aceitação das mudanças.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold dark:text-zinc-300">6. Contato</h3>
              <p className="mt-2">
                Para dúvidas, entre em contato pelo e-mail <span className="font-semibold ">contato@toyotan.com.br</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
