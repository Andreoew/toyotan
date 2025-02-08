import { motion } from "framer-motion";
import imgElismar from "@/assets/elismar.png";
import imgJessica from "@/assets/jessica.png";
import imgMarcel from "@/assets/marcel.png";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Elismar Moura Gonçalves",
    role: "CEO & Fundador & Técnico",
    image: new URL(imgElismar, import.meta.url).href,
  },
  {
    name: "Marcel Renato Sato",
    role: "CEO & Fundador & Técnico",
    image: new URL(imgMarcel, import.meta.url).href,
  },
  {
    name: "Jéssica Sato",
    role: "Administração e Atendimento",
    image: new URL(imgJessica, import.meta.url).href,
  },
];

export function TeamSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-5xl font-bold md:text-4xl">Nossa equipe</h2>
          <p className="mt-4 text-2xl">
            Conheça as pessoas que fazem tudo acontecer.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid gap-16 text-center md:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="mx-auto flex w-full max-w-md flex-col items-center 
              gap-6 rounded-xl border p-8 shadow-xl transition-all 
              duration-300 hover:scale-105 hover:border-red-500 hover:shadow-red-500/30"
            >
              <div className="relative flex h-[28rem] w-80 items-center justify-center overflow-hidden rounded-lg bg-zinc-300">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full opacity-0 blur-md transition-opacity duration-500"
                    onLoad={(e) =>
                      e.currentTarget.classList.remove("blur-md", "opacity-0")
                    }
                  />
                ) : (
                  <span className="text-gray-900">Imagem não disponível</span>
                )}
              </div>

              <h3 className="whitespace-normal break-words text-2xl font-bold">
                {member.name}
              </h3>
              <p className="text-xl text-gray-500 leading-relaxed">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
