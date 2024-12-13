"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Hero = () => {
  // Valor animado para el desplazamiento vertical
  const y = useMotionValue(0);

  // Efecto para actualizar el valor animado en función del scroll
  useEffect(() => {
    const handleScroll = () => {
      y.set(window.scrollY * 0.25); // Ajusta el factor de desplazamiento aquí
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [y]);

  // Transforma el valor de scroll en un desplazamiento vertical
  const translateY = useTransform(y, (value) => `${value}px`);

  // Transforma el valor de scroll en una escala
  const scale = useTransform(y, [0, 300], [1, 1.5]); // Ajusta los límites aquí
  const opacity = useTransform(y, [0, 300], [1, 0]); // Ajusta los límites aquí

  return (
    <header
      id="hero"
      className="flex items-center h-screen min-h-min w-full pb-32 gradient-bottom overflow-clip"
    >
      <motion.div
        className="w-full max-w-[100rem] mx-auto z-0 scroll-reveal-loading fade-out will-change-transform"
        initial={{ opacity: 0, scale: 0.9, y: "50px" }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          type: "tween",
          duration: 0.5,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          y: translateY, // Vincula el desplazamiento vertical
          scale: scale, // Vincula la escala al scroll
          opacity: opacity,
        }}
      >
        <h3 className="text-center">Arsenio Lara - Web & Digital Designer</h3>
        <h1 className="head_text text-center">
          <span>
            Ideas creativas.
            <br />
            Diseño inteligente
          </span>
        </h1>
      </motion.div>
      <div className="gradient"></div>
      <div className="fluid">
        <video width="100%" height="100%" autoPlay loop muted>
          <source src="assets/background.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
  );
};

export default Hero;
