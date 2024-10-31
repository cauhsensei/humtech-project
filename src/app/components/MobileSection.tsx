"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StepProps {
  stepNumber: string;
  title: ReactNode;
  description: ReactNode;
}

const Step = ({ stepNumber, title, description }: StepProps) => (
  <motion.div
    className="flex flex-col items-start text-left lg:items-start lg:text-left p-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-purple-darkness font-bold text-[10px] mb-2">
      {stepNumber}
    </h3>
    <h4 className="text-purple-card font-bold text-[10px] mb-4">{title}</h4>
    <p className="text-gray-700 text-[10px]">{description}</p>
  </motion.div>
);

const MobileStepsSection = () => {
  const steps = [
    {
      stepNumber: "",
      title: (
        <>
          Diagnóstico <br />
          Profundo
        </>
      ),
      description: (
        <>
          Antes de qualquer ação, mergulhamos no <br />
          <strong>plano estratégico</strong> da sua empresa com <br />
          intuito de analisar metas, planos de <br />
          crescimento, possíveis{" "}
          <strong>
            oportunidades de <br />
            melhoria
          </strong>
          , preparando o terreno para a <br />
          transformação.
        </>
      ),
    },
    {
      stepNumber: "",
      title: (
        <>
          Planejamento <br />
          Estratégico
        </>
      ),
      description: (
        <>
          Com os dados em mãos, elaboramos um <br />
          plano <strong>personalizado</strong> de estruturação da <br />
          área de RH para atender às suas <br />
          <strong>necessidades específicas</strong>. Cada detalhe <br />
          é meticulosamente considerado para <br />
          garantir um caminho claro rumo aos <br />
          seus <strong>objetivos</strong>.
        </>
      ),
    },
    {
      stepNumber: "",
      title: (
        <>
          Implementação <br />
          Focada
        </>
      ),
      description: (
        <>
          É hora de <strong>agir!</strong> Todas as estratégias <br />
          delineadas e aprovadas entram em ação <br />
          nesta fase crucial. A transição do{" "}
          <strong>
            antigo <br />
            para o novo
          </strong>{" "}
          é feita de forma suave, com <br />
          um foco nos <strong>resultados</strong> e especial nas <br />
          pessoas que compõem sua organização.
        </>
      ),
    },
    {
      stepNumber: "",
      title: (
        <>
          Monitoramento <br />
          Contínuo
        </>
      ),
      description: (
        <>
          Nosso trabalho não termina com a <br />
          implementação. Monitoramos de perto <br />
          cada <strong>etapa do processo</strong>, ajustando <br />
          conforme necessário para garantir o <br />
          <strong>sucesso contínuo</strong> do seu time.
        </>
      ),
    },
  ];

  return (
    <div className="relative block lg:hidden bg-gradient-to-b from-[#DBC8E0] to-[#FFFFFF] px-2">
      <div className="grid grid-cols-3  justify-center items-center">
        <div className="col-span-2 flex flex-col justify-center items-center">
          {steps.map((step, index) => (
            <div key={`step-${index}`} className="flex items-center">
              <Step
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>

        <motion.div
          className="col-span-1 relative w-full h-full flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/sections/bgmob.png"
            alt="Imagem Mobile"
            layout="fill" 
            objectFit="cover" 
            quality={100}
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-[-40px] right-0 z-50 flex justify-end pr-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=5541987838860&text=Olá,%20estava%20no%20site%20e%20gostaria%20de%20mais%20informações..."
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <button className="bg-purple-card hover:bg-purple-card text-white py-4 px-4 rounded-full shadow-2xl font-normal text-[12px] font-sans">
            QUERO FALAR COM A HUMTECH
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default MobileStepsSection;
