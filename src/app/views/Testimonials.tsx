"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Mariana Oliveira",
    feedback:
      "Simplesmente incrível! Desde o primeiro contato até a finalização do processo, a equipe foi muito profissional e atenciosa. Sempre prontos para ajudar e esclarecer qualquer dúvida. Recomendo de olhos fechados!",
  },
  {
    name: "Carlos Andrade",
    feedback:
      "Tive uma experiência excelente! O atendimento é humanizado, senti que realmente se preocupam com as necessidades tanto das empresas quanto dos candidatos. Profissionais super competentes e prestativos. Parabéns!",
  },
  {
    name: "Beatriz Souza",
    feedback:
      "Gostaria de agradecer pela oportunidade que me proporcionaram. O suporte foi impecável e as vagas oferecidas estavam totalmente alinhadas ao meu perfil. É nítido que há um cuidado genuíno com as pessoas. Recomendo demais!",
  },
  {
    name: "Rodrigo Pereira",
    feedback:
      "Melhor experiência com uma empresa de RH até hoje! O processo foi rápido e transparente, e sempre me mantiveram atualizado. A equipe é muito profissional e acolhedora, me senti bem assistido em todas as etapas.",
  },
  {
    name: "Camila Fernandes",
    feedback:
      "Empresa de RH que realmente faz a diferença! O acompanhamento foi excelente, com um atendimento próximo e personalizado. Eles entendem as necessidades tanto do candidato quanto da empresa. Ajudaram muito na minha recolocação!",
  },
  {
    name: "Gustavo Soeira",
    feedback:
      "Fiquei extremamente satisfeito com o atendimento. Uma empresa que preza pelo cuidado com as pessoas e sempre disposta a escutar e ajudar. Se você busca uma equipe comprometida, essa é a melhor escolha!",
  },
  {
    name: "Luciana Ribeiro",
    feedback:
      "O trabalho dessa equipe é incrível! Desde o primeiro contato, me senti valorizado como candidato. Eles foram transparentes em todo o processo e sempre disponíveis para tirar dúvidas. Empresa super confiável e competente!",
  },
  {
    name: "Bruno Costa",
    feedback:
      "Fui muito bem assessorado em todas as etapas do processo. O time de RH foi atencioso, sempre me mantendo informado sobre cada detalhe. Foi, sem dúvida, uma das melhores experiências que já tive. Recomendo com toda certeza!",
  },
  {
    name: "Paula Martins",
    feedback:
      "Tive um suporte maravilhoso durante todo o processo de recrutamento. Os profissionais foram extremamente competentes e dedicados. Sempre me senti bem orientado e motivado. Essa empresa de RH realmente se destaca!",
  },
  {
    name: "Felipe Almeida",
    feedback:
      "Não poderia estar mais satisfeito! A equipe é super qualificada e o atendimento é de uma gentileza ímpar. Fiquei impressionado com o nível de comprometimento e atenção a cada detalhe. Sem dúvida, um serviço de excelência!",
  },
];

const duplicateArray = <T,>(arr: T[], times: number): T[] =>
  [].concat(...Array(times).fill(arr)) as T[];

const Testimonials: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const duplicatedTestimonials = duplicateArray(testimonials, 2);

  return (
    <div
      className="bg-purple-darkness mb:rounded-t-[40px] pb-32 pt-32"
      style={{ backgroundImage: "url('/images/sections/bgtestimonials.png')" }}
    >
      <h2 className="mb:text-[22px] tb:text-[32px] text-[40px] pb-5 font-montserrat font-bold text-white text-center">
        Depoimentos
      </h2>
      <p className="mb:text-[13px] tb:text-[23px] text-center text-white font-sans mb-32">
        Confira alguns depoimentos abaixo de nossos parceiros:
      </p>
      <div className="overflow-hidden relative">
        <motion.div
          className="flex space-x-4"
          initial={{ x: 0 }}
          animate={{ x: isMobile ? "-100vw" : "-50vw" }} 
          transition={{
            repeat: Infinity,
            duration: isMobile ? 20 : 30, 
            ease: "linear",
          }}
          style={{ width: isMobile ? "200%" : "100%" }} 
        >
          {duplicatedTestimonials.map(
            (testimonial: Testimonial, index: number) => (
              <div
                key={index}
                className={`${
                  isMobile
                    ? "w-[300px] h-[180px]" 
                    : "w-[450px] h-[262px]"
                } flex-shrink-0 rounded-2xl bg-white p-4 flex flex-col justify-between`}
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`font-bold text-customBrown ${
                      isMobile ? "text-sm" : "text-base" 
                    }`}
                  >
                    {testimonial.name}
                  </p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-300">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p
                  className={`text-customGray font-poppins mt-auto mb-auto text-center ${
                    isMobile ? "text-xs" : "text-sm" 
                  }`}
                >
                  {testimonial.feedback}
                </p>
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
