"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LayoutMobile = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="bg-purple-100 p-6 rounded-lg flex flex-col text-[#320057] sm:hidden overflow-x-hidden overflow-hidden">
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={itemVariants}
      >
        <h2 className="text-[18px] font-semibold mb-2">
          Potencialize sua Empresa
        </h2>
        <p className="text-[11px] mb-4 text-black">
          Transforme desafios em oportunidades de sucesso
        </p>
      </motion.div>

      <motion.div
        className="bg-[#753DCD] p-4 rounded-[40px] mb-4 max-w-md shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={itemVariants}
      >
        <p className="text-[12px] text-white">
          Na <span className="font-bold text-[#C584F5]">Humtech</span>,
          acreditamos que o verdadeiro crescimento empresarial é impulsionado
          pelas <span className="font-bold text-[#C584F5]">PESSOAS</span>. Com
          anos de experiência na área de Recursos Humanos, nossa abordagem
          inovadora, baseada na metodologia do{" "}
          <span className="font-bold text-[#C584F5]">RH Estratégico 5.0</span>,
          não só otimiza os processos de recursos humanos, mas também transforma
          equipes em motores de{" "}
          <span className="font-bold text-[#C584F5]">sucesso</span>.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center items-center mb-4 space-x-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={itemVariants}
      >
        <div className="w-[160px] h-[161px] rounded-[40px] overflow-hidden">
          <Image
            src="/images/sections/picset.png"
            alt="Mobile Section"
            width={160}
            height={161}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-[#753DCD] text-white p-4 rounded-[40px] w-[180px] h-[161px] flex-shrink-0 flex items-center justify-center shadow-2xl">
          <p className="text-[11px]">
            Nos comprometemos em alinhar{" "}
            <span className="font-bold text-[#C584F5]">estratégias</span> com as
            metas específicas de cada cliente, garantindo{" "}
            <span className="font-bold text-[#C584F5]">
              soluções personalizadas
            </span>{" "}
            que <span className="font-bold text-[#C584F5]">capacitam</span> as
            equipes a se destacarem.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="bg-[#320057] p-4 rounded-[40px] max-w-md shadow-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={itemVariants}
      >
        <div className="relative p-6 rounded-lg">
          <p className="text-white text-[12px]">
            
            Somos parceiros de confiança,
            <br />
            <span className="font-bold text-[#C584F5]">impulsionando</span>{" "}
            empresas em direção a<br />
            um <span className="font-bold text-[#C584F5]">futuro</span> de
            sucesso sustentável.
            <br />
            Nossa equipe altamente
            <br />
            <span className="font-bold text-[#C584F5]">qualificada</span> e
            experiente
            <br />
            está pronta para
            <br />
            construir uma equipe de
            <br />
            alta performance que irá
            <br />
            <span className="font-bold text-[#C584F5]">impulsionar</span> o
            <br />
            crescimento do seu
            <br />
            negócio. Com a consultoria
            <br />
            <span className="font-bold text-[#C584F5]">Humtech RH 5.0</span>,
            você está
            <br />
            preparado para o{" "}
            <span className="font-bold text-[#C584F5]">futuro</span>.<br />
            Entre em contato
            <br /> conosco e leve sua
            <br />
            empresa ao próximo
            <br /> patamar!
          </p>

          <div className="absolute -top-20 -right-[221px] w-[520px] h-[520px] overflow-hidden">
            <Image
              src="/images/sections/cracha.png"
              alt="Crachá Humtech"
              layout="fill"
              objectFit="contain"
              quality={100}
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={itemVariants}
      >
        <a
          href="https://api.whatsapp.com/send?phone=5541987838860&text=Olá,%20estava%20no%20site%20e%20gostaria%20de%20mais%20informações..."
          target="_blank"
          rel="noopener noreferrer"
          className="block w-[164.185px] mx-auto" 
        >
          <motion.button
            className="mt-4 bg-[#320057] hover:bg-purple-600 text-white py-2 px-4 rounded-full shadow-2xl w-full h-[48.644px] text-[10px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={itemVariants}
          >
            TRANSFORME SUA EMPRESA
          </motion.button>
        </a>
      </motion.div>

    </div>
  );
};

export default LayoutMobile;
