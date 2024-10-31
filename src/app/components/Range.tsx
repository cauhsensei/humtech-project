"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Range = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div id='metodologia'
      ref={ref}
      className="relative bg-purple-bg w-full h-[100px] lg:h-[317px]"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center lg:items-start lg:mx-[200px] lg:flex-col"
        variants={itemVariants}
      >
        <motion.div
          className="flex flex-row lg:flex-col text-white mx-4 lg:mx-0 space-x-2 lg:space-x-0 lg:space-y-2"
          variants={itemVariants}
        >
          <h1 className="font-montserrat font-normal text-[18px] lg:text-[60px] leading-tight lg:leading-none tracking-wide lg:tracking-wider">
            Nossa <br /> Metodologia
          </h1>
          <p className="text-[11px] lg:text-[20px] text-left mt-[15px] lg:mt-[10px] leading-relaxed lg:leading-loose tracking-wide lg:tracking-wider lg:ml-[50px] lg:pl-[200px]">
            Pronto para Transformar o seu RH?
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute top-0 right-[-420px] mt-[-350px] z-[999]"
        variants={itemVariants}
      >
     
      </motion.div>

      <motion.div
        className="hidden lg:block absolute left-0 z-[998]"
        style={{ bottom: '-350px' }}
        variants={itemVariants}
      >
        <Image
          src="/images/sections/curve.png"
          alt="Curva"
          layout="fixed"
          width={500}
          height={100}
          quality={100}
        />
      </motion.div>
    </motion.div>
  );
};

export default Range;
