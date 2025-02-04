import { motion } from "framer-motion";
// import imgElismar from "@/assets/elismar.png";
// import imgMarcel from "@/assets/marcel.png";

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Elismar Moura Gonçalves",
    role: "CEO & Fundador & Técnico",
    // image: new URL(imgElismar, import.meta.url).href,
  },
  {
    name: "Marcel Renato Sato",
    role: "CEO & Fundador & Técnico",
    // image: new URL(imgMarcel, import.meta.url).href,
  },
  {
    name: "Jéssica Sato",
    role: "Administração e Atendimento",
    // image: new URL(imgMarcel, import.meta.url).href,
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
          className="grid gap-32 text-center md:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="mx-auto flex w-full max-w-xs flex-col items-center gap-4 rounded-lg border p-6 shadow-lg"
            >
              <div className="relative flex h-96 w-64 items-center justify-center overflow-hidden rounded-md bg-zinc-300">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover object-center opacity-0 transition-opacity duration-500 blur-md"
                    onLoad={(e) => e.currentTarget.classList.remove("blur-md", "opacity-0")}
                  />
                ) : (
                  <span className="text-gray-900">Imagem não disponível</span>
                )}
              </div>

              <h3 className="whitespace-normal break-words text-xl font-semibold ">
                {member.name}
              </h3>
              <p className="text-lg">{member.role}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
