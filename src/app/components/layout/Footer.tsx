"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
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
    <motion.footer
      id="contato"
      ref={ref}
      className="relative bg-purple-extralight w-full font-sans text-white py-10"
      initial="visible"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        <motion.div className="text-center" variants={itemVariants}>
          <h3 className="text-[25px] lg:text-[35px] font-semibold">
            <span className="text-purple-darkness font-montserrat">Vamos</span> Conversar?
          </h3>
          <span className="block font-sans text-[12px] lg:text-[20px] my-10">
            Entre em contato conosco através das informações abaixo.
          </span>
        </motion.div>
        <motion.div
          className="w-full flex flex-col lg:flex-row justify-around items-center space-y-4 lg:space-y-0 lg:space-x-8"
          variants={itemVariants}
        >

          <div className="flex text-[13px] lg:text-[17px] items-center pr-[50px] lg:pr-0">
            <Image
              src="/images/Testimonials/iconnumber.png"
              alt="Phone Icon"
              width={35}
              height={35}
              quality={100}
            />
            <a href="tel:+5541988707173" className="ml-2 hover:underline">
              (41) 98870-7173
            </a>
          </div>
          
          <div className="flex text-[13px] lg:text-[17px] items-center">
            <Image
              src="/images/Testimonials/iconemail.png"
              alt="Email Icon"
              width={35}
              height={35}
              quality={100}
            />
            <a href="mailto:contato@humtech.com.br" className="ml-2 hover:underline">
              contato@humtech.com.br
            </a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
