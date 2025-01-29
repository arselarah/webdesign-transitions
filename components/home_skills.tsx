"use client";
import React from "react";
//import { useRef } from "react";
// import { motion, useInView } from "framer-motion";
import { motion } from "framer-motion";

const Home_Skills = () => {
  //const ref = useRef(null);
  //const isInView = useInView(ref, { once: true });
  return (
    <>
      <motion.div
        initial={{
          clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
        }}
        whileInView={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        viewport={{ once: false }}
        transition={{ delay: 0.5, duration: 0.5, ease: "linear" }}
        className="w-full h-[1px] bg-white absolute -top-8 hidden md:flex"
      />
      <motion.div
        className="flex flex-col md:flex-row md:gap-16 content-start "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 1.5, ease: "linear" }}
        viewport={{ once: true }}
      >
        <div className="yointro_text-container pb-6">
          <h2 className="heading">Digital</h2>
        </div>
        <div className="skills_grid pb-16 grow text-white opacity-50">
          <p>UX/UI</p>
          <p>E-Commerce</p>
          <p>Prototipado</p>
          <p>SEO</p>
        </div>
      </motion.div>

      <motion.div
        initial={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
        }}
        whileInView={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
        className="w-[1px] h-full bg-white relative hidden md:flex"
      />
      <motion.div
        initial={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
        }}
        whileInView={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        }}
        viewport={{ once: false }}
        transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
        className="w-full h-[1px] bg-white relative flex md:hidden"
      />
      <motion.div
        className="flex flex-col md:flex-row md:gap-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 1.5, ease: "linear" }}
        viewport={{ once: true }}
      >
        <div className="yointro_text-container pb-6 grow md:flex md:justify-end">
          <h2 className="heading md:text-right">Diseño</h2>
        </div>
        <div className="skills_grid pb-16 text-white opacity-50">
          <p>Identidad</p>
          <p>Diseño Gráfico</p>
          <p>Redes Sociales</p>
          <p>Contenido Audiovisual</p>
        </div>
      </motion.div>
    </>
  );
};

export default Home_Skills;
