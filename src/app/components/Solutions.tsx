"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Solutions = () => {
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
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative bg-purple-darkness w-full h-[100px] lg:h-[317px]"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center lg:items-center"
        variants={itemVariants}
      >
        <div className="text-center">
          <motion.h2
            className="font-montserrat text-[18px] lg:text-[50px] leading-tight lg:leading-none tracking-wide lg:tracking-wider"
            variants={itemVariants}
          >
            <span className="text-[#845BC8]">Soluções</span> <span className="text-white">que vão</span>
          </motion.h2>
          <motion.h2
            className="font-montserrat text-[18px] lg:text-[50px] leading-tight lg:leading-none tracking-wide lg:tracking-wider"
            variants={itemVariants}
          >
            <span className="text-[#845BC8]">além</span> <span className="text-white">do convencional</span>
          </motion.h2>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Solutions;
