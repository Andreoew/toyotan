import { motion } from "framer-motion";
import imgDiagnostico from "@/assets/images/img_toyotan_5.jpg";
import imgRevisao from "@/assets/images/img_toyotan_7.jpg";
import imgTrocaDeOleo from "@/assets/images/img_toyotan_8.jpg";
import imgLimpeza from "@/assets/images/img_toyotan_10.jpg";
import img from "@/assets/images/img_toyotan_11.jpg";
import { Helmet } from "react-helmet-async";

const services = [
  {
    title: "Troca de Óleo",
    description:
      "A troca de óleo é essencial para a saúde e a longevidade do motor de um veículo. Realizar a troca regularmente melhora o desempenho e economiza combustível.",
    image: `${imgTrocaDeOleo}`,
    tags: ["Troca de Óleo", "Óleo", "Original", "Mobil"],
  },
  {
    title: "Revisão Completa",
    description:
      "A revisão completa do veículo garante segurança e desempenho. Durante essa manutenção, diversos componentes são verificados e ajustados.",
    image: `${imgRevisao}`,
    tags: ["Revisão Completa", "Cuidado", "Periódica"],
  },
  {
    title: "Limpeza de Bico",
    description:
      "A limpeza de bico garante uma queima eficiente do combustível, melhora o desempenho do motor e contribui para a economia de combustível.",
    image: `${imgLimpeza}`,
    tags: ["Limpeza de Bico", "Combustível", "Eficiência", "Desempenho"],
  },
  {
    title: "Diagnóstico",
    description:
      "O diagnóstico automotivo identifica e soluciona problemas no veículo de forma precisa e eficiente, evitando falhas mecânicas inesperadas.",
    image: `${imgDiagnostico}`,
    tags: ["Diagnóstico", "Problemas Mecânicos", "Precisão", "Eficiência"],
  },
  {
    title: "Suspensão",
    description:
      "Somos especialistas em ajustar a suspensão do seu carro para as especificações de fábrica, garantindo conforto e segurança na condução.",
    image: `${img}`,
    tags: ["Suspensão", "Ajuste", "Conforto", "Segurança"],
  },
  {
    title: "Alinhamento",
    description:
      "O alinhamento correto das rodas proporciona uma condução suave, evita desgaste irregular dos pneus e melhora a estabilidade do veículo.",
    image: `${img}`,
    tags: ["Alinhamento", "Rodas", "Estabilidade", "Desgaste"],
  },
  {
    title: "Balanceamento",
    description:
      "O balanceamento das rodas reduz vibrações e melhora a estabilidade do veículo, garantindo uma condução mais segura e confortável.",
    image: `${img}`,
    tags: ["Balanceamento", "Rodas", "Vibração", "Segurança"],
  },
];

export function Services() {
  return (
    <>
      <Helmet title="Serviços" />
      <section id="services" className="relative py-20">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mt-4 text-5xl font-bold md:text-4xl">
              Nossos Serviços
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass group overflow-hidden rounded-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-[533px] w-[500px] object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                  <p className="mb-4 dark:text-gray-400">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
