import { PromoForm } from "@/components/form-promo";
import { getValidity } from "@/lib/get-validity";
import { motion } from "framer-motion";

import { Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

export default function Promo() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["validity"],
    queryFn: getValidity,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  if (error) {
    return (
      <p className="text-center text-red-500">Erro ao carregar promoções.</p>
    );
  }

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <p className="text-2xl font-semibold">
          Verificando as promoções existentes...
        </p>
      </div>
    );
  }

  const validity =
    data?.values?.length > 1 ? data.values[data.values.length - 1] : null;

  return (
    <>
      <Helmet title="Promoção Toyotan" />
      {validity ? (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-full  p-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto  max-w-2xl text-center"
            >
              <h2 className="mt-10 text-5xl font-bold md:mt-20 md:text-4xl">
                Promoção Toyotan
              </h2>
              <p className="mt-4 text-2xl">
                Deixe seu contato para participar da promoção.
              </p>
            </motion.div>
            <div className="flex items-center justify-center py-10">
              <PromoForm />
            </div>

            <p className="text-center">
              {validity
                ? `Promoção válida de ${validity[1]} a ${validity[2]}`
                : "Nenhuma promoção disponível"}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center px-10 text-justify">
            <p className="strong py-1 underline">Regras da promoção</p>
            <p className="text-xl font-medium text-zinc-500">
              {validity ? validity[3] : "Sem regras disponíveis"}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-full p-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <h2 className="text-5xl font-bold md:text-4xl">
                Promoção Toyotan
              </h2>
              <p className="mt-4 text-2xl">
                Que pena! Nenhuma promoção disponível.
              </p>
            </motion.div>

            <div className="flex items-center justify-center">
              <p className="text-2xl text-zinc-600">Promoções indisponíveis</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
