import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
//   variable: "--font-poppins",
// });

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress: scrollEffectPrimero } = useScroll({
    target: ref,
    offset: ["start start", "end .6"],
  });
  const { scrollYProgress: scrollEffectSegundo } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleHero = useTransform(scrollEffectPrimero, [0, 1], [1, 0.9]);
  const translateHeading = useTransform(
    scrollEffectSegundo,
    [0, 1],
    ["0%", "-10%"]
  );
  // const translateHeading = useTransform(
  //   scrollEffectSegundo,
  //   [0, 1],
  //   ["0%", "-50%"]
  // );
  // const translateHeadingSegundo = useTransform(
  //   scrollEffectSegundo,
  //   [0, 1],
  //   ["0%", "50%"]
  // );

  return (
    <>
      <motion.header
        id="hero"
        ref={ref}
        className={`relative flex items-center h-screen min-h-min w-full overflow-clip px-4 ${poppins.className}`}
        style={{ scale: scaleHero }}
      >
        {/* <SafariWindow /> */}
        <div className="absolute top-0 left-0 inset-0 overflow-clip after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black after:bg-opacity-80 origin-bottom">
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            muted
            className="object-cover absolute inset-0 top-0 left-0 w-full h-full"
          >
            <source
              src="assets/7534239-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <motion.div
          style={{ translateY: translateHeading, scale: scaleHero }}
          className="w-full will-change-transform fondoImagen bg-clip-text flex flex-col justify-center items-center h-full"
        >
          <h3 className="text-center text-white">
            Arsenio Lara - Web & Digital Designer
          </h3>
          <div className="flex relative flex-row flex-wrap w-full max-w-[100rem] ">
            <motion.div
              // style={{ translateX: translateHeading }}
              className="flex sm:gap-4 lg:gap-8 flex-wrap"
            >
              <motion.span
                initial="initial"
                animate="hovered"
                className="head_text text-white inline-block overflow-clip"
              >
                <motion.div
                  variants={{ initial: { y: "100%" }, hovered: { y: "0%" } }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    duration: 1,
                    delay: 2,
                  }}
                >
                  Ideas
                </motion.div>
              </motion.span>
              <motion.span
                initial="initial"
                animate="hovered"
                className="head_text text-white inline-block overflow-clip"
              >
                <motion.div
                  variants={{ initial: { y: "100%" }, hovered: { y: "0%" } }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    duration: 1,
                    delay: 2.05,
                  }}
                >
                  Creativas
                </motion.div>
              </motion.span>
            </motion.div>
            <motion.div
              // style={{ translateX: translateHeadingSegundo }}
              className="flex sm:gap-4 lg:gap-8 flex-wrap lg:-mt-[2rem]"
            >
              <motion.span
                initial="initial"
                animate="hovered"
                className="head_text text-white inline-block overflow-clip"
              >
                <motion.div
                  className="leading-[1.2]"
                  variants={{ initial: { y: "100%" }, hovered: { y: "0%" } }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    duration: 1,
                    delay: 2.1,
                  }}
                >
                  Diseño
                </motion.div>
              </motion.span>
              <motion.span
                initial="initial"
                animate="hovered"
                className="head_text text-white inline-block overflow-clip "
              >
                <motion.div
                  className="leading-[1.25] -mt-[.6rem] sm:mt-[0rem]"
                  variants={{ initial: { y: "100%" }, hovered: { y: "0%" } }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    duration: 1,
                    delay: 2.15,
                  }}
                >
                  Inteligente
                </motion.div>
              </motion.span>
            </motion.div>
          </div>
          {/* <h1 className="head_text px-[2vw] xl:px-[8vw] 2xl:px-[12vw] text-white">
            Ideas Creativas,
            <br /> Diseño Inteligente.
          </h1> */}
        </motion.div>
        {/* <div className="gradient"></div> */}
        {/* <div className="fluid">
          <video width="100%" height="100%" autoPlay loop muted>
            <source src="assets/background.mp4" type="video/mp4" />
          </video>
        </div> */}
      </motion.header>
    </>
  );
};

export default Hero;
