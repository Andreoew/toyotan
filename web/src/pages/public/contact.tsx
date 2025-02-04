import { ContactForm } from "@/components/form-contact";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <div className="flex items-center justify-center md:h-[500px]">
      <div className="w-full  p-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <h2 className="text-5xl font-bold md:text-4xl">Contato</h2>
          <p className="mt-4 text-2xl">
            Entre em contato conosco para tirar suas dúvidas.
          </p>
        </motion.div>
        <div className="flex items-center justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
