import { TeamSection } from "@/components/team-members";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const mission =
  "Oferecer um serviço de excelência em reparos e manutenção de veículos, combinando conhecimento técnico e experiência prática com o objetivo de superar as expectativas dos nossos clientes, com soluções confiáveis e personalizadas.";
const vision =
  "Ser referência em serviços automotivos de excelência e confiabilidade, destacando-se pela dedicação ao cuidado com cada veículo e pela constante inovação em técnicas e ferramentas.";
const value = [
  <ul className="mx-auto max-w-[900px] list-none space-y-3 text-left">
    <li>
      <strong>Compromisso com a Qualidade:</strong> Priorizar o uso dos melhores
      equipamentos e práticas, garantindo serviços que façam a diferença na vida
      útil e desempenho dos veículos.
    </li>
    <li>
      <strong>Transparência e Confiança:</strong> Valorizar uma comunicação
      honesta com os clientes, construindo relações baseadas na confiança e na
      credibilidade.
    </li>
    <li>
      <strong>Trabalho em Equipe:</strong> Unir esforços e conhecimentos para
      alcançar um propósito comum, mantendo a excelência e o respeito em cada
      etapa do serviço.
    </li>
    <li>
      <strong>Inovação e Dedicação:</strong> Investir continuamente em melhorias
      e aperfeiçoamento para oferecer sempre o melhor aos nossos clientes e
      parceiros.
    </li>
  </ul>,
];

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
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          >
            {[
              { title: "Missão", text: mission },
              { title: "Visão", text: vision },
              { title: "Valores", text: value },
            ].map((item, index, array) => (
              // className="mx-auto flex w-full max-w-md flex-col items-center 
              // gap-6 rounded-xl border p-8 shadow-xl transition-all 
              // duration-300 hover:scale-105 hover:border-red-500 hover:shadow-red-500/30"
              <div
                key={index}
                className={`flex flex-col items-center gap-4 rounded-lg border p-6 text-center shadow-lg transition-all duration-300 hover:scale-105 hover:border-red-500 hover:shadow-red-500/30 ${
                  index === array.length - 1 ? "lg:col-span-2" : ""
                }`}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-justify dark:text-muted-foreground">
                  {item.text}
                </p>
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
