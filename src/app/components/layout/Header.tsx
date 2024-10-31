"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Início" },
  { to: "/", label: "Metodologia" },
  { to: "/", label: "Contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
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
    <motion.header
      className={`lg:absolute fixed top-0 left-0 w-full py-1 lg:px-[105px] z-40 lg:backdrop-blur-0 backdrop-blur-sm transition-all duration-200 ease-in-out ${
        isOpen ? "bg-purple-darkness" : "bg-transparent"
      }`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}>
      <div className="container mx-auto flex justify-between items-center px-8">
        <motion.div
          className="hidden sm:hidden lg:block"
          variants={itemVariants}>
          <Image
            src="/images/sections/humlogohero.png"
            alt="Humtech"
            width={200}
            height={425}
            quality={100}
            className="mt-5"
          />
        </motion.div>

        <motion.button className="z-30" variants={itemVariants}>
          <a href="/">
            <div className="lg:hidden md:block py-3 z-20">
              <Image
               src="/images/Header/logo.png"
                alt="Humtech"
                width={65}
                height={25}
                quality={100}
                className="ml-[40px] tb:ml-[100px] mb:w-[50px] tb:w-[200px] h-auto object-contain"
              />
            </div>
          </a>
        </motion.button>

        <motion.nav
          className="hidden md:flex space-x-8 mr-[100px] z-20"
          variants={itemVariants}>
          {links.map((link) => (
            <Link key={link.to} href={link.to}>
              <span className="text-white font-poppins text-[18px] text-stroke transition duration-300 cursor-pointer hover:text-purple-darkness drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] shadow-2xl">
                {link.label}
              </span>
            </Link>
          ))}
        </motion.nav>

        <div className="fixed w-[82%] md:hidden z-20 flex justify-end">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-1.5 mt">
              <span
                className={`block w-5 h-0.5 rounded-lg bg-slate-300  transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}></span>
              <span
                className={`block w-5 h-0.5 rounded-lg bg-slate-300  transform transition duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}></span>
              <span
                className={`block w-5 h-0.5 rounded-lg bg-slate-300  transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}></span>
            </div>
          </button>
        </div>
      </div>

      <motion.nav
        className={`fixed w-[100%] rounded-b-[10%] border-b-2 border-purple-dark p-10 md:hidden transition-all duration-200 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 bg-gradient-to-b from-purple-darkness to-purple-light"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
        initial={isOpen ? "visible" : "hidden"}
        animate={isOpen ? "visible" : "hidden"}
        variants={containerVariants}>
        <motion.div
          className="flex flex-col items-center space-y-4 mt-4 z-20 rounded-b-lg"
          variants={itemVariants}>
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              tabIndex={isOpen ? 0 : -1}
              aria-hidden={!isOpen}>
              <motion.span
                className="text-white font-poppins text-lg text-stroke rounded-b-lg text-stroke transition duration-300 cursor-pointer hover:text-purple-darkness drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] shadow-2xl"
                variants={itemVariants}>
                {link.label}
              </motion.span>
            </Link>
          ))}
        </motion.div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
