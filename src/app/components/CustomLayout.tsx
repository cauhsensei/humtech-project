"use client"

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const highlightColor = "text-purple-card font-bold";

const CustomLayout = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row justify-center items-center h-auto text-white leading-[1.5] tracking-wide"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div
        style={{ width: "815px", height: "831px" }}
        className="relative mx-auto"
      >
        <Image
          src="/images/sections/substract.png"
          alt="Substract"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="absolute inset-0 flex flex-col justify-start items-start p-4 md:p-12 ">
          <div className="text-responsive leading-tight md:leading-[1.5]">
            <motion.div className="mb-6 pl-2 md:pl-5" variants={itemVariants}>
              <p className="text-[24px]">
                Na <span className={highlightColor}>Humtech</span>
                , acreditamos que o verdadeiro
                <br />
                crescimento empresarial é impulsionado pelas
                <br />
                <span className={highlightColor}>PESSOAS</span>. Com anos de
                experiência na área
                <br />
                de Recursos Humanos, nossa abordagem{" "}
                <span className={highlightColor}>inovadora</span>,<br />
                baseada na metodologia do RH Estratégico{" "}
                <span className={highlightColor}>5.0</span>, não
                <br />
                só otimiza os processos de recursos humanos, mas
                <br />
                também transforma equipes em motores de
                <br />
                <span className={highlightColor}>sucesso</span>
              </p>
            </motion.div>

            <motion.div className="pl-5 p-7 text-[24px]" variants={itemVariants}>
              <p>
                Nos
                <br />
                comprometemos em <br />
                alinhar <span className={highlightColor}>estratégias</span>
                <br />
                com as metas
                <br /> específicas de cada
                <br /> cliente,
                <br />
                garantindo{" "}
                <span className={highlightColor}>
                  soluções
                  <br /> personalizadas
                </span>
                <br />
                que <span className={highlightColor}>capacitam</span> as equipes
                <br /> a se destacarem.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute top-[75%] left-[48%] transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src="/images/sections/picset.png"
          alt="Imagem de Exemplo"
          width={350}
          height={400}
          className="object-cover"
          quality={100}
        />
      </div>

      <motion.div
        className="bg-purple-darkness text-[11px] md:text-[20px] p-[20px] rounded-[30px] md:rounded-[50px] shadow-2xl mt-6 md:mt-0 md:ml-[10px] relative"
        style={{ width: "498px", height: "795px" }}
        variants={itemVariants}
      >
        <div className="relative z-10 flex flex-col items-center h-full ">
          <p className="pl-[10px] md:pl-[20px] md:pr-[20px] text-center md:text-left text-[25px] pt-[55px]">
            <br />
            Somos parceiros de confiança,{" "}
            <span className={highlightColor}>impulsionando</span> empresas em
            direção a um{" "}
            <span className={highlightColor}>futuro de sucesso</span>{" "}
            sustentável.
            <br />
            Nossa equipe altamente{" "}
            <span className={highlightColor}>qualificada</span> e experiente
            está pronta para construir uma equipe de alta performance que irá
            impulsionar o crescimento do seu negócio. Com a consultoria{" "}
            <span className={highlightColor}>Humtech RH 5.0</span>, você está
            preparado para o <span className={highlightColor}>futuro</span>.
            <br />
            Entre em contato conosco e leve sua empresa ao próximo patamar!
          </p>
        </div>

        <div className="absolute right-[-30px] top-[-80px] md:hidden overflow-hidden">
          <Image
            src="/images/sections/cracha.png"
            alt="Crachá Humtech"
            width={220}
            height={250}
            quality={100}
            className="rounded-[20px]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CustomLayout;
