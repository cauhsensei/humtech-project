"use client";

import Image from "next/image";
import Button from "../components/Button";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useOnScreen } from "../hooks/useOnScreen";

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen({ threshold: 0.1 });

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
    <motion.section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center bg-purple-600 px-4 py-16"
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={itemVariants}>
      
      <Image
        src="/images/HeroSection/bghero.png"
        alt="Background HeroSection"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 hidden lg:block"
        quality={100}
      />

      <Image
        src="/images/HeroSection/bgheromobile.png"
        alt="Background HeroSectionMobile"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 block dk:hidden overflow-hidden"
        quality={100}
      />

      <motion.div
        className="z-10 mb:flex-col dk:flex-row mb:items-center dk:items-start justify-between my-0 w-full"
        variants={itemVariants}>
        <motion.div className="flex mb:flex-col dk:flex-row">
          <motion.div
            className="dk:w-1/2 flex flex-col mb:items-center dk:items-start mb:text-center dk:text-left transform mb:translate-x-[100vw] mb:mt-[-200px] dk:mt-0 mb:mr-0 dk:ml-[70px] 2dk:ml-[150px] 3dk:ml-[200px]"
            variants={itemVariants}>
            <motion.span
              className="text-white text-[15px] 4dk:text-[25px] mb-6 mb:hidden dk:flex"
              variants={itemVariants}>
              ESTRATÉGIAS PARA IDENTIFICAR E PREPARAR FUTUROS LÍDERES
            </motion.span>
            <motion.h1
              className="text-white mb:text-4xl dk:text-[60px] 4dk:text-[100px] lg:text-7xl mb-4"
              variants={itemVariants}>
              Humtech
            </motion.h1>
            <motion.h2
              className="text-purple-darkness mb:text-3xl dk:text-[55px] 4dk:text-[80px] lg:text-6xl mb-6"
              variants={itemVariants}>
              Recursos Humanos
            </motion.h2>
            <motion.span
              className="text-white text-sm dk:text-[18px] 4dk:text-[30px] mb-6 mt-3"
              variants={itemVariants}>
              Entrega de resultados através
              <br /> de pessoas com RH
              <span className="text-purple-darkness font-bold text-xl lg:text-3xl">
                {" "}
                5.0!
              </span>
            </motion.span>
            <motion.div className="relative flex items-center space-x-2 mb-6 z-20">
              <motion.div
                className="flex absolute mb:top-0 dk:top-[-50px] mb:left-[-40px] dk:left-[245px] 4dk:left-[350px]"
                variants={itemVariants}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 19 19"
                    fill="#320057">
                    <path d="M6.55651 6.28816L8.54011 2.29346C8.59786 2.17785 8.68666 2.08061 8.79657 2.01265C8.90648 1.94469 9.03315 1.90869 9.16238 1.90869C9.2916 1.90869 9.41827 1.94469 9.52818 2.01265C9.63809 2.08061 9.7269 2.17785 9.78464 2.29346L11.7682 6.28816L16.2027 6.93257C16.3306 6.9503 16.451 7.00364 16.55 7.0865C16.6491 7.16935 16.7228 7.27839 16.7629 7.40115C16.8029 7.52392 16.8077 7.65547 16.7765 7.78079C16.7454 7.90612 16.6796 8.02016 16.5868 8.1099L13.3785 11.2174L14.1359 15.6076C14.2329 16.1711 13.6373 16.6002 13.1281 16.3345L9.16238 14.2608L5.19592 16.3345C4.68742 16.6009 4.09188 16.1711 4.18885 15.6068L4.94626 11.2166L1.73797 8.10914C1.64558 8.01933 1.58023 7.9054 1.54936 7.78031C1.51848 7.65521 1.52333 7.52396 1.56333 7.40147C1.60334 7.27899 1.6769 7.17019 1.77567 7.08743C1.87443 7.00467 1.99442 6.95128 2.12202 6.93333L6.55651 6.28816Z" />
                  </svg>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative dk:w-1/2 w-full h-full"
            variants={itemVariants}>
            <motion.div
              className="absolute hover:transition duration-300 ease-in-out  mb:text-[7px] tb:text-[14px] 4dk:text-[18px] mb:top-[265%] mb:left-[17%]  3mb:top-[305%] 3mb:left-[17%] 
            dk:top-[290%] dk:left-[3%] 2dk:left-[-3%] 4dk:top-[340%] bg-white/30 backdrop-blur-md text-white border-2 border-white/20  shadow-lg mb:py-2 mb:px-[20px] dk:px-[45px] rounded-[18px]  "
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}>
              + Cultura
              <br /> de Entrega
            </motion.div>
            <motion.div
              className="absolute mb:text-[7px] tb:text-[14px] 4dk:text-[18px] mb:top-[440%] mb:left-[15%] 3mb:top-[500%] 3mb:left-[17%] 
            dk:top-[90%] dk:left-[0%] bg-white/30 backdrop-blur-md text-white border-2 border-white/20  shadow-lg mb:py-2 mb:px-[25px] rounded-[18px]  "
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}>
              + Engajamento
              <br /> do Time
            </motion.div>
            <motion.div
              className="absolute mb:text-[7px] tb:text-[14px] 4dk:text-[18px] mb:top-[265%] mb:left-[65%] 3mb:top-[305%] 3mb:left-[65%] 
            dk:top-[180%] dk:left-[54%] bg-white/30 backdrop-blur-md text-white border-2 border-white/20  shadow-lg  mb:py-2 mb:px-[20px] dk:px-[35px] rounded-[18px] "
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}>
              + Retenção
              <br /> + Resultado
              <br /> + Performance
            </motion.div>
            <motion.div
              className="absolute mb:text-[7px] tb:text-[14px] 4dk:text-[18px] mb:top-[483%] mb:left-[55%] 3mb:top-[545%] 3mb:left-[58%] 
            dk:top-[380%] dk:left-[44%] 4dk:top-[460%] bg-white/30 backdrop-blur-md text-white border-2 border-white/20  shadow-lg t mb:py-2 mb:px-[26px] rounded-[18px]  "
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}>
              + Agilidade
              <br /> na Adaptação
            </motion.div>

            <motion.div
              variants={itemVariants}>
              <Button className="bg-purple-bg text-white mb:text-[12px] tb:text-[20px] dk:text-[22px] transform mb:translate-x-[33vw] mb:translate-y-[83vw] 2mb:translate-x-[34vw] translate-y-[45vw] tb:translate-x-[37vw] 2tb:translate-x-[38vw] tb:translate-y-[55vw] 2tb:translate-y-[60vw] 3tb:translate-x-[43vw] 3tb:translate-y-[53vw] dk:translate-x-[-36vw] dk:translate-y-[27vw] 3dk:translate-y-[22vw] px-6 tb:px-9 py-2 dk:py-4 3dk:py-6 mt-6 hover:bg-purple-dark transition duration-300">
                SAIBA MAIS
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
