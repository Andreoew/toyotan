import { Slider } from "@/components/slider";
import { CarFront, CreditCard, Wrench } from "lucide-react";
import imgPneu from "@/assets/pneu-sem-bg.png";
import icoWhatsapp from "@/assets/whatsapp.svg";
import imgVeic from "@/assets/toyota-s-bg.png";
import { MyGoogleMap } from "@/components/google-map";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Home() {
  return (
    <>
      <div className="md:flex md:flex-col">
        <Slider />        
        <div className="flex justify-center">
          <div className="grid h-full w-full max-w-[124rem] grid-cols-1 gap-4 md:bg-secondary  shadow shadow-secondary-foreground/30 md:grid-cols-3">
            <div className="flex min-h-[200px] flex-col items-center justify-center px-4 py-3 font-bold bg-muted md:bg-muted">
              <CreditCard />
              <span className="mt-2 text-center">Parcele em até 3X</span>
            </div>
            <div className="flex min-h-[200px] flex-col items-center justify-center px-4 py-3 font-bold bg-muted md:bg-muted">
              <CarFront />
              <span className="mt-2 text-center">
                Garantia em peças e serviços
              </span>
            </div>
            <div className="flex min-h-[200px] flex-col items-center justify-center px-4 py-3 font-bold bg-muted md:bg-muted">
              <Wrench />
              <span className="mt-2 text-center">
                Mão de obra especializada
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="my-20 flex w-full max-w-[124rem] flex-col justify-center  text-center">
            <h2 className="text-5xl">Nossos Serviços</h2>

            <div className="grid justify-center py-28 md:grid-cols-3">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col justify-center gap-3 text-center w-[350px]"
              >
                <AccordionItem
                  value="item-1"
                  className="flex flex-col justify-center gap-1 text-center"
                >
                  <AccordionTrigger className="rounded bg-muted px-5">
                    <span className="flex h-14 items-center justify-center md:justify-start">
                      Troca de Óleo
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="rounded bg-muted p-3 text-justify text-2xl font-semibold">
                    A troca de óleo é essencial para a saúde e a longevidade do
                    motor de um veículo. O óleo lubrificante desempenha um papel
                    crucial ao reduzir o atrito entre as peças móveis do motor,
                    evitando o desgaste prematuro e o superaquecimento. Com o
                    tempo, o óleo se degrada e acumula impurezas, perdendo sua
                    eficácia. Realizar a troca de óleo regularmente garante que
                    o motor funcione de maneira eficiente, melhorando o
                    desempenho e economizando combustível. Além disso, a
                    manutenção preventiva ajuda a evitar falhas mecânicas graves
                    e onerosas, proporcionando segurança e confiabilidade ao
                    veículo.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="flex flex-col justify-center gap-1 text-center"
                >
                  <AccordionTrigger className="rounded bg-muted px-5">
                    <span className="flex h-14 items-center justify-center md:justify-start">
                      Revisão Completa
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="rounded bg-muted p-3 text-justify text-2xl font-semibold">
                    A revisão completa do veículo é fundamental para garantir
                    sua segurança e desempenho. Durante essa manutenção, são
                    verificados e ajustados diversos componentes, como freios,
                    suspensão, pneus e sistema elétrico. Essa inspeção
                    preventiva identifica problemas antes que se tornem graves,
                    evitando reparos caros e aumentando a vida útil do veículo.
                    Além disso, manter as revisões em dia assegura que o carro
                    esteja em conformidade com as normas de segurança e
                    desempenho, proporcionando tranquilidade e confiabilidade ao
                    motorista.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-3"
                  className="flex flex-col justify-center gap-1 text-center"
                >
                  <AccordionTrigger className="rounded bg-muted px-5">
                    <span className="flex h-14 items-center justify-center md:justify-start">
                      Limpeza de Bico
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="rounded bg-muted p-3 text-justify text-2xl font-semibold">
                    A limpeza de bico é crucial para o bom funcionamento do
                    sistema de injeção de combustível do veículo. Os bicos
                    injetores, responsáveis por pulverizar o combustível na
                    câmara de combustão, podem acumular sujeira e resíduos ao
                    longo do tempo. Esse acúmulo prejudica a pulverização
                    adequada, resultando em perda de desempenho, aumento no
                    consumo de combustível e emissões de poluentes. Realizar a
                    limpeza de bico regularmente garante uma queima eficiente do
                    combustível, melhora o desempenho do motor e contribui para
                    a economia de combustível, além de reduzir o impacto
                    ambiental.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-4"
                  className="flex flex-col justify-center gap-1 text-center"
                >
                  <AccordionTrigger className="rounded bg-muted px-5">
                    <span className="flex h-14 items-center justify-center  md:justify-start">
                      Diagnóstico
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="rounded bg-muted p-3 text-justify text-2xl font-semibold">
                    O diagnóstico automotivo é essencial para identificar e
                    solucionar problemas no veículo de forma precisa e
                    eficiente. Nossa equipe de técnicos capacitados, treinados
                    por uma das maiores montadoras do mundo, possui o
                    conhecimento e as habilidades necessárias para utilizar
                    ferramentas avançadas de diagnóstico. Esse expertise permite
                    detectar falhas com rapidez e precisão, garantindo reparos
                    corretos e evitando substituições desnecessárias. A
                    capacitação contínua dos nossos profissionais assegura que
                    seu veículo receba o melhor atendimento, mantendo-o seguro e
                    em perfeito funcionamento.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="relative flex flex-col items-center justify-center text-center py-20">
                <img
                  src={imgPneu}
                  alt="Image de peças"
                  // className="h-[250px] w-[250px] animate-spin-slow md:h-[350px] md:w-[350px]"
                  className="h-[275px] w-[275px] animate-spin-slow md:h-[330px] md:w-[330px]"
                  style={{
                    maxHeight: '95%',
                    maxWidth: '95%',
                    objectFit: 'contain'
                  }}
                />
                <img
                  src={imgVeic}
                  alt="Imagem de veículo"
                  // className="absolute top-1/2 left-1/2 h-[300px] w-auto max-w-full -translate-x-1/2 -translate-y-1/2 -rotate-90 transform md:h-[275px] md:w-auto"

                  // className="absolute h-[200px] w-auto max-w-full -rotate-90 transform md:h-[275px] md:w-auto"
                  className="absolute h-[200px] w-auto max-w-full -rotate-90 transform md:h-[275px] md:w-auto"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) rotate(-90deg)',
                  }}
                />
              </div>
              <div className="flex flex-col justify-center gap-3 text-start items-end">
                <Accordion
                  type="single"
                  collapsible
                  className="flex flex-col justify-center gap-3 text-center w-[350px]"
                >
                  <AccordionItem
                    value="item-1"
                    className="flex flex-col justify-center gap-1 text-center"
                  >
                    <AccordionTrigger className="rounded bg-muted px-5">
                      <span className="flex h-14 items-center justify-center md:justify-start">
                        Suspensão
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="rounded bg-muted p-3 text-justify text-2xl font-semibold">
                      Somos especialistas em ajustar a suspensão do seu carro
                      para as especificações de fábrica. Oferecemos serviços
                      abrangentes que incluem substituição de amortecedores,
                      molas, pivôs, coxins, barras estabilizadoras e buchas.
                      Conte conosco para manter seu veículo seguro, confortável
                      e em perfeito estado de funcionamento.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    className="flex flex-col justify-center gap-1 text-center"
                  >
                    <AccordionTrigger className="rounded bg-muted px-5">
                      <span className="flex h-14 items-center justify-center md:justify-start">
                        Alinhamento
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="rounded bg-muted p-3 text-justify text-2xl font-semibold">
                      O alinhamento é fundamental para a segurança e o
                      desempenho do seu veículo. Com técnicos especializados e
                      equipamentos de ponta, garantimos que suas rodas estejam
                      alinhadas corretamente, proporcionando uma condução suave,
                      evitando desgaste irregular dos pneus e melhorando a
                      estabilidade do veículo.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    className="flex flex-col justify-center gap-1 text-center"
                  >
                    <AccordionTrigger className="rounded bg-muted px-5">
                      <span className="flex h-14 items-center justify-center md:justify-start">
                        Balanceamento
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="rounded bg-muted p-3 text-justify text-2xl font-semibold">
                      O balanceamento das rodas é essencial para uma condução
                      suave e segura. Com nossos serviços de balanceamento,
                      garantimos que suas rodas estejam equilibradas, reduzindo
                      vibrações, desgaste prematuro dos pneus e melhorando a
                      estabilidade do veículo, especialmente em altas
                      velocidades. Confie em nós para um balanceamento preciso e
                      eficiente.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-4"
                    className="flex flex-col justify-center gap-1 text-center"
                  >
                    <AccordionTrigger className="rounded bg-muted px-5">
                      <span className="flex h-14 items-center justify-center  md:justify-start">
                        Sistema de Freio
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="rounded bg-muted p-3 text-justify text-2xl font-semibold">
                      O sistema de freio é essencial para a segurança do seu
                      veículo. Oferecemos uma ampla gama de peças e serviços
                      para mantê-lo em perfeito funcionamento. Com pastilhas de
                      freio, sangria, discos de freio, fluido de freio, lonas,
                      sapatas e muito mais, você pode rodar tranquilamente e com
                      total segurança. Confie em nós para cuidar do seu sistema
                      de freios e garantir sua tranquilidade na estrada.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[124rem] gap-16 rounded px-2 md:grid md:grid-cols-[1fr_2fr]">
            <p className="col-span-2 flex h-14 w-48 items-center rounded bg-muted pl-2">
              Localização:
            </p>
            <div className="flex flex-col">
              <address>
                Rua 1 A, nº 764 w, Parque Tangará, Tangará Da Serra - MT,
                78300-000, Brasil
              </address>

              <div className="flex h-full flex-col items-center justify-center gap-6 p-6 text-center md:p-0">
                <span className="flex flex-col items-center justify-center gap-2 text-3xl">
                  <a href="/" className="relative flex h-10 w-10">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <img
                      title="Clique para falar conosco."
                      src={icoWhatsapp}
                      className="relative inline-flex h-10 w-10 rounded-full bg-green-500"
                    />
                  </a>
                  Entre em contato
                  <p>(65) 99664-3812</p>
                </span>
              </div>
            </div>
            <MyGoogleMap />
          </div>
        </div>
      </div>
    </>
  );
}
