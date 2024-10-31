"use client";

import Image from "next/image";
import Button from "../components/Button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HumanTech: React.FC = () => {
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
    <motion.section
      ref={ref}
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="bg-purple-darkness w-full rounded-[40px] 3tb:rounded-[100px] shadow-2xl p-8 h-[550px] tb:h-[790px] 2tb:h-[730px] 3tb:h-[1200px] dk:h-[800px] 3dk:h-[1000px] mt-[10px] 3tb:mt-[-1px] 2xl:mt-[0px] flex flex-col items-center 3tb:items-start z-20 relative">
        <div className="3tb:pt-[70px] dk:pt-2 3tb:pl-[263px] 3tb:h-[790px] flex flex-col items-center 3tb:items-start text-violet-light">
          <motion.h2
            className="3tb:block hidden text-start text-[18px] 3tb:text-[30px] dk:text-[40px] pt-2 3tb:pt-0 pr-16 dk:pt-0 3tb:pr-0 font-sans mb-6"
            variants={itemVariants}
          >
            Unimos o <span className="text-white">melhor</span>
            <br /> de dois mundos:
            <br /> <span className="text-white">HUM</span>anidade +
            <span className="text-white">TEC</span>nologia.
          </motion.h2>
          <motion.h2
            className="3tb:hidden block text-start text-[18px] tb:text-[25px] pt-2 3tb:pt-0 pr-[160px] 3tb:pr-0 3tb:text-[30px] font-sans mb-6"
            variants={itemVariants}
          >
            Unimos o{" "}
            <span className="text-white">
              melhor
              <br />{" "}
            </span>
            de dois mundos:
            <br />
            <span className="text-white">HUM</span>anidade +<br />
            <span className="text-white">TEC</span>nologia.
          </motion.h2>
        </div>
        <div className="3tb:pb-[130px] 3tb:pl-[482px] 3tb:h-[790px] flex flex-col items-center">
          <motion.p
            className="3tb:block hidden text-start font-montserrat text-white text-[25px] dk:text-[23px] 2xl:text-[35px] ml-[45px] 3tb:mr-[0px] 3tb:ml-[0px] mb-4"
            variants={itemVariants}
          >
            Oferecemos soluções inovadoras em Recursos Humanos,
            <br /> entendendo as necessidades da equipe e construindo um
            <br /> ambiente de trabalho colaborativo. Toda a consultoria é feita
            <br /> com base no conceito de RH Estratégico 5.0, que compreende a
            <br /> ideia de um setor de RH mais eficiente, estratégico e
            conectado
            <br /> com a tecnologia, focando na personalização da experiência do
            <br /> colaborador.
          </motion.p>
          <motion.p
            className="3tb:block hidden text-start font-montserrat text-white text-[25px] 2xl:text-[35px] dk:text-[23px] dk:mr-[50px] 2xl: m-0 mb-4"
            variants={itemVariants}
          >
            Com uma equipe qualificada e experiente, estamos prontos
            <br /> para ajudar na construção da equipe de sucesso que sua
            <br /> empresa precisa.
          </motion.p>
          <motion.p
            className="3tb:hidden block text-start font-montserrat text-white mb:text-[10px] tb:text-[16px] tb: tb:ml-[200px] mb-4 ml-[130px]"
            variants={itemVariants}
          >
            Oferecemos soluções inovadoras
            <br /> em Recursos Humanos,
            <br /> entendendo as necessidades da
            <br /> equipe e construindo um
            <br /> ambiente de trabalho
            <br />
            colaborativo. Toda a consultoria é<br /> feita com base no conceito
            de RH
            <br />
            Estratégico 5.0, que compreende
            <br /> a ideia de um setor de RH mais
            <br />
            eficiente, estratégico e<br /> conectado com a tecnologia,
            <br /> focando na personalização da
            <br /> experiência do colaborador.
          </motion.p>
          <motion.p
            className="3tb:hidden block text-start font-montserrat text-white mb:text-[10px] tb:text-[16px] m-0 mb-4 ml-[130px] tb:ml-[200px] 3tb:ml-0"
            variants={itemVariants}
          >
            Com uma equipe qualificada e<br /> experiente, estamos prontos para
            <br /> ajudar na construção da equipe
            <br /> de sucesso que sua empresa
            <br /> precisa.
          </motion.p>
          <motion.div
            className="absolute w-[212px] 3tb:w-[500px] dk:w-[270px] 4dk:w-[550px] mb:right-[140px] mb:top-[955px] 2mb:right-[150px] 2mb:top-[930px] 3mb:right-[168px] tb:top-[1220px] tb:left-[215px] 
             2tb:top-[1150px] 2tb:left-[245px] 3tb:right-0 3tb:left-[300px] 2xl:left-[1250px] top-[940px] 3tb:top-[1870px] dk:top-[930px] dk:left-[900px] 2dk:left-[980px] 3dk:w-[300px] 3dk:top-[1100px] 3dk:left-[1150px] 4dk:top-[1110px] 4dk:left-[1330px] overflow-hidden z-10"
            variants={itemVariants}
          >
            <Image
              src="/images/HumanTech/info.png"
              alt="Descrição da imagem"
              width={457}
              height={960}
              quality={100}
              className="w-[360px]"
            />
          </motion.div>
          <motion.div
            className="absolute bg-violet-light font-sans text-[10px] 3tb:text-[18px] text-white hover:bg-purple-darkness transition duration-300 cursor-pointer font-normal 3tb:w-[452px] h-[50px] 3tb:h-[60px] mt-[350px] tb:mt-[552px] 2tb:mt-[490px] 3tb:mt-[790px] 3tb:mr-[450px] 3tb:ml-0 dk:mt-[445px] dk:ml-[350px] 2dk:mt-[410px] 3dk:mt-[565px] shadow-2xl border-2 border-purple-darkness/50 hover:border-purple/30 rounded-[35px] flex items-center justify-center"
            variants={itemVariants}
          >
            <Button className="px-4 py-2">
              QUERO TRANSFORMAR A MINHA EMPRESA
            </Button>
          </motion.div>
        </div>
        <div className="absolute mb:w-[270px]  tb:w-[450px] 3tb:w-[1000px] tb:top-[200px] tb:right-[120px] 2tb:right-[150px] mr-[280px] 3tb:mr-0 top-[160px] 3tb:top-[250px] 2xl:top-[550px] 3tb:left-[10px] 3dk:top-[250px] z-10">
          <Image
            src="/images/HumanTech/brain.png"
            alt="Descrição da imagem"
            width={500}
            height={300}
            quality={100}
            className="z-10"
          />
        </div>
      </div>
      <div className="w-full h-[1100px] 3tb:h-[1666px] dk:h-[950px] 3dk:h-[1000px] 4dk:h-[1100px] relative z-0 flex-col items-center justify-center p-8 mt-[-100px]">
        <Image
          src="/images/HumanTech/bghumantech.png"
          alt=""
          quality={100}
          layout="fill"
          objectFit="cover"
        />
        <Image
          src="/images/HumanTech/bgmobile.png"
          alt=""
          quality={100}
          layout="fill"
          objectFit="cover"
          className="3tb:hidden"
        />
        <motion.div
          className="flex flex-col items-center space-y-6 mt-[150px] 3tb:mt-[170px]  relative"
          variants={containerVariants}
        >
          <motion.h2
            className="text-start font-sans text-white mb:text-[15px] 3tb:text-[35px] mr-[150px] dk:text-[30px] 2dk:text-[35px] 3dk:text-[35px] 4dk:text-[50px] 3tb:mr-0 dk:mr-[700px] 2dk:mr-[800px] 3dk:mr-[1000px] 4dk: font-bold"
            variants={itemVariants}
          >
            Parceiros estratégicos
            <br />
            do seu RH:
            <br />
            <span className="text-purple-darkness">Inovação</span> e
            <span className="text-purple-darkness"> Resultado</span>
          </motion.h2>
          <motion.p
            className="3tb:block hidden text-start font-montserrat text-white 3tb:text-[20px] 4dk:text-[27px] 3tb:pt-[60px] 3tb:pl-[105px] 3tb:pb-16 dk:mr-[640px] 2dk:mr-[780px] 3dk:mr-[980px] 4dk:mr-[1000px]"
            variants={itemVariants}
          >
            A metodologia RH 5.0 é projetada para auxiliar
            <br />
            o departamento de Recursos Humanos da sua
            <br />
            empresa no desenvolvimento de equipes e na
            <br />
            retenção de talentos. Nossa abordagem
            <br />
            combina tecnologias de ponta com métodos
            <br />
            humanizados, garantindo um suporte completo
            <br />
            e eficaz. Com acesso às ferramentas mais
            <br />
            avançadas do mercado, estamos sempre à
            <br />
            frente, otimizando processos internos e
            <br />
            aprimorando os resultados dos nossos clientes.
          </motion.p>
          <motion.p
            className="3tb:hidden block text-start font-montserrat text-white text-[13px] 3tb:text-[20px] 3tb:pt-[60px] 3tb:pl-[100px] pb-5 3tb:pb-16"
            variants={itemVariants}
          >
            A metodologia RH 5.0 é projetada para auxiliar
            <br />
            o departamento de Recursos Humanos da sua
            <br />
            empresa no desenvolvimento de equipes e na
            <br />
            retenção de talentos. Nossa abordagem
            <br />
            combina tecnologias de ponta com métodos
            <br />
            humanizados, garantindo um suporte completo
            <br />
            e eficaz. Com acesso às ferramentas mais
            <br />
            avançadas do mercado, estamos sempre à
            <br />
            frente, otimizando processos internos e
            <br />
            aprimorando os resultados dos nossos clientes.
          </motion.p>
          <div className="flex w-full justify-center 3tb:justify-start">
            <motion.div
              className="flex items-center justify-center font-normal text-[12px] 3tb:text-[15px] dk:text-[16px] 2dk:text-[18px] 3dk:text-[20px] 4dk:text-[22px] bg-violet-light font-sans w-[286px] 3tb:w-[380px] dk:w-[400px] 2dk:w-[420px] 3dk:w-[450px] 4dk:w-[500px] 
    mt-[415px] h-[50px] 3tb:h-[55px] dk:h-[60px] 2dk:h-[65px] 3dk:h-[70px] 4dk:h-[75px] mb:top-[970px] 
    tb:mt-[485px] 2tb:mt-[475px] 3tb:mt-[695px] 3tb:ml-[300px] 
    dk:mt-[-00px] dk:ml-[440px] 2dk:mt-[-30px] 2dk:ml-[500px] 
    3dk:mt-[-0px] 3dk:ml-[630px] 4dk:mt-[-30px] 4dk:ml-[740px] 
    text-white hover:bg-purple-darkness transition duration-300 cursor-pointer border-2 border-purple-darkness/50 hover:border-purple/30 shadow-2xl rounded-[35px] z-30"
              variants={itemVariants}
            >
              <Button>COMECE SUA TRANSFORMAÇÃO AGORA</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HumanTech;
