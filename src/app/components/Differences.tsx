"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";

interface DifferenceItemProps {
  number: string;
  title: string;
  color: string;
}

const DifferenceItem: React.FC<DifferenceItemProps> = ({ number, title, color }) => {
  const [hasRotated, setHasRotated] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (inView && !hasRotated) {
        setHasRotated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasRotated]);

  return (
    <motion.div
      className="flex flex-row items-center justify-start sm:flex-col sm:items-center mb-6 sm:mb-0"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={hasRotated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="relative flex items-center justify-center">
      
        <motion.div
          className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
          animate={hasRotated ? { rotate: 280 } : {}}
          transition={{
            duration: 7.5,
            ease: "easeInOut",
          }}
        >
          <div
            className="absolute w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] bg-transparent border-[5px] rounded-t-full border-b-0"
            style={{ borderColor: color }}
          ></div>
        </motion.div>

        <div
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full flex items-center justify-center z-10"
          style={{ backgroundColor: color }}
        >
          <span className="text-white font-bold text-xs sm:text-lg">{number}</span>
        </div>
      </div>

      <p className="ml-4 text-purple-darkness font-bold text-xs sm:text-sm lg:text-[16px] sm:ml-0 sm:mt-2 text-left sm:text-center">
        {title}
      </p>
    </motion.div>
  );
};

const Differences = () => {
  const items = [
    { number: "01", title: "Diagnóstico", color: "#845BC8" },
    { number: "02", title: "Implantação de novos processos de negócios", color: "#57128B" },
    { number: "03", title: "Gestão de Performance", color: "#6125C5" },
    { number: "04", title: "Pesquisas de clima (pulse)", color: "#9525BE" },
    { number: "05", title: "Monitoramento constante de todas as ações", color: "#910CA0" },
    { number: "06", title: "Definir e executar o planejamento estratégico de negócio", color: "#845BC8" },
    { number: "07", title: "Elaboração do planejamento estratégico do RH", color: "#57128B" },
    { number: "08", title: "Pesquisas de mercado", color: "#6125C5" },
    { number: "09", title: "Employee Experience", color: "#9525BE" },
    { number: "10", title: "Employer Branding", color: "#910CA0" },
    { number: "11", title: "Cargos e salários", color: "#845BC8" },
    { number: "12", title: "Definição dos processos de RH", color: "#57128B" },
    { number: "13", title: "Desenvolvimento dos líderes", color: "#6125C5" },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
      }}
      className="pt-8 px-4"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="max-w-full mx-auto sm:mx-[197px] text-left mb-8 text-sm sm:text-lg lg:text-xl text-purple-darkness"
      >
        <p className="mb-4">
          Nossa abordagem é impulsionada por{" "}
          <span className="font-bold">tecnologias de ponta</span> e métodos{" "}
          <span className="font-bold">humanizados</span>. Com acesso às
          ferramentas mais avançadas do setor, estamos sempre à frente para{" "}
          <span className="font-bold">melhorar processos internos</span> e,
          consequentemente, os <span className="font-bold">resultados</span> dos
          nossos clientes.
        </p>
        <p>
          Com uma equipe{" "}
          <span className="font-bold">qualificada e experiente</span>, estamos
          prontos para ajudar na construção da{" "}
          <span className="font-bold">equipe de sucesso</span> que sua empresa
          precisa.
        </p>
      </motion.div>

      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="text-center text-xl sm:text-2xl font-semibold text-purple-darkness mb-8 sm:mb-[100px] mt-8 sm:mt-[100px]"
      >
        Veja os diferenciais da{" "}
        <span className="text-purple-700 font-bold">HumTech</span>
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-7 gap-4 sm:gap-6 sm:ml-[30px] sm:mr-[30px] lg:ml-[120px] lg:mr-[120px]"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        {items.slice(0, 7).map((item, index) => (
          <DifferenceItem
            key={index}
            number={item.number}
            title={item.title}
            color={item.color}
          />
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 sm:ml-[30px] sm:mr-[30px] lg:ml-[190px] lg:mr-[190px] mt-6"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        {items.slice(7).map((item, index) => (
          <DifferenceItem
            key={index}
            number={item.number}
            title={item.title}
            color={item.color}
          />
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center mb-[100px] sm:mt-12 sm:mb-[100px]"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=5541987838860&text=Olá,%20estava%20no%20site%20e%20gostaria%20de%20mais%20informações..."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center"
        >
          <Button className="text-white bg-[#320057] mt-16 sm:mt-32 w-[90%] max-w-[463px] h-[46px] sm:h-[60px] md:h-[102px] shadow-2xl rounded-full hover:bg-opacity-90 transition duration-300 text-center whitespace-nowrap text-xs sm:text-sm md:text-base">
            COMECE SUA TRANSFORMAÇÃO AGORA
          </Button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Differences;
