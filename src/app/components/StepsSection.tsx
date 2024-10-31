"use client";

import Image from 'next/image';
import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface StepProps {
  stepNumber: string;
  title: ReactNode;
  description: ReactNode;
  customClasses: string;
}

const Step = ({ stepNumber, title, description, customClasses }: StepProps) => (
  <motion.div
    className={`flex flex-col items-center text-center p-4 ${customClasses}`}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
    }}
  >
    <h3 className="text-purple-darkness font-bold text-lg mb-2">{stepNumber}</h3>
    <h4 className="text-purple font-bold text-base mb-4">{title}</h4>
    <p className="text-gray-700 text-[18px]">{description}</p>
  </motion.div>
);

const DesktopStepsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const steps = [
    {
      stepNumber: '',
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
      customClasses: '',
    },
    {
      stepNumber: '',
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
      customClasses: '',
    },
    {
      stepNumber: '',
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
          crescimento, possíveis <strong>oportunidades de <br />
          melhoria</strong>, preparando o terreno para a <br />
          transformação.
        </>
      ),
      customClasses: '',
    },
    {
      stepNumber: '',
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
          nesta fase crucial. A transição do <strong>antigo <br />
          para o novo</strong> é feita de forma suave, com <br />
          um foco nos <strong>resultados</strong> e especial nas <br />
          pessoas que compõem sua organização.
        </>
      ),
      customClasses: '',
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
      }}
      className="hidden lg:grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gradient-to-b from-[#DBC8E0] to-[#FFFFFF] pt-16 pb-16"
    >
      <div className="flex justify-center items-center order-2 lg:order-none lg:mx-[100px]">
        <Step
          stepNumber={steps[0].stepNumber}
          title={steps[0].title}
          description={steps[0].description}
          customClasses={steps[0].customClasses}
        />
      </div>
      <div className="flex justify-center items-center order-4 lg:order-none lg:mx-[100px]">
        <Step
          stepNumber={steps[1].stepNumber}
          title={steps[1].title}
          description={steps[1].description}
          customClasses={steps[1].customClasses}
        />
      </div>

      <div className="lg:block lg:col-span-2">
        <Image
          src='/images/sections/info.png'
          alt="Informações"
          quality={100}
          layout="responsive"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full"
        />
      </div>

      <div className="flex justify-center items-center order-1 lg:order-none lg:mx-[100px]">
        <Step
          stepNumber={steps[2].stepNumber}
          title={steps[2].title}
          description={steps[2].description}
          customClasses={steps[2].customClasses}
        />
      </div>
      <div className="flex justify-center items-center order-3 lg:order-none lg:mx-[100px]">
        <Step
          stepNumber={steps[3].stepNumber}
          title={steps[3].title}
          description={steps[3].description}
          customClasses={steps[3].customClasses}
        />
      </div>
    </motion.div>
  );
};

export default DesktopStepsSection;
