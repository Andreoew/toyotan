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
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="text-5xl font-bold  md:text-4xl">
            Um sonho em movimento
          </h2>
          <p className="mt-4 text-2xl">
            O que antes era um sonho, hoje é uma jornada em constante evolução.
          </p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 "
          >
            Tudo começou... (...em construção...)
          </motion.p>
        </motion.div>
      </section>
    </>
  );
}
