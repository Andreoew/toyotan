import { TeamSection } from "@/components/team-members";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export function About() {
  return (
    <>
      <Helmet title="Sobre" />
      <section
        id="services"
        className="relative flex flex-col items-center gap-10 py-20"
      >
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-5xl font-bold md:text-4xl">Sobre</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "Missão", text: "Nossa missão é..." },
              { title: "Visão", text: "Nossa visão é..." },
              { title: "Valores", text: "Nossos valores são..." },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 rounded-lg border p-6 text-center shadow-lg"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="">{item.text} (...em construção...)</p>
              </div>
            ))}
          </motion.div>
        </div>

        <TeamSection />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 flex w-full flex-col items-center gap-4 text-center"
        >
          <h2 className="text-5xl font-bold  md:text-4xl">
            Um sonho em movimento
          </h2>
          <p className="mt-4 text-2xl text-muted-foreground">
            O que antes era um sonho, hoje é uma jornada em constante evolução.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mx-auto mt-4 w-full max-w-[1100px] rounded-lg  p-6 text-justify "
          >
            <div className="space-y-4 px-4  leading-relaxed">
              <p>
                A história da <strong>Mecânica Toyotan</strong> começa muito
                antes de sua inauguração. Em 2010, dois apaixonados por mecânica
                automotiva se conheceram enquanto trabalhavam juntos em uma
                concessionária <strong>Toyota</strong>.
              </p>

              <p>
                Compartilhavam a mesma dedicação, o desejo de oferecer um
                serviço de excelência e, acima de tudo, um sonho em comum: abrir
                a própria oficina especializada em veículos Toyota.
              </p>

              <p>
                Os anos passaram, e a experiência adquirida em diagnósticos
                avançados, reparos de precisão e atendimento de qualidade
                fortaleceu ainda mais essa visão.
              </p>

              <p>
                Durante mais de uma década, cada aprendizado e desafio
                enfrentado na concessionária foram lapidando o caminho para o
                grande passo. O sonho amadureceu, transformando-se em um projeto
                concreto.
              </p>

              <p>
                Foi então, em <strong>2024</strong>, que a vontade de empreender
                e a paixão pela mecânica automotiva se tornaram realidade.
                Nascia a <strong>Mecânica Toyotan</strong>, um espaço dedicado a
                oferecer tecnologia, qualidade e confiança para os clientes de{" "}
                <strong>Tangará da Serra - MT</strong> e toda região.
              </p>

              <p>
                Com equipamentos de última geração e uma equipe altamente
                qualificada, a oficina se consolidou como referência na
                manutenção de veículos da <strong>Toyota</strong> e de outras
                montadoras.
              </p>

              <p>
                Cada carro que entra na <strong>Mecânica Toyotan</strong> recebe
                um atendimento diferenciado, com diagnósticos precisos e
                soluções eficientes, garantindo a segurança e o desempenho do
                veículo.
              </p>

              <p>
                Mais do que uma oficina, a <strong>Toyotan</strong> representa
                um compromisso com a excelência e a realização de um sonho que
                começou há muitos anos.
              </p>

              <p>
                A história da <strong>Mecânica Toyotan</strong> é feita de
                dedicação, experiência e, principalmente, paixão por oferecer
                sempre o melhor para seus clientes. E essa jornada está apenas
                começando!
              </p>
            </div>
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
