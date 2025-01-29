"use client";
import React from "react";
import { motion } from "framer-motion";

const portfolioData = [
  {
    title: "JOY center Kids",
    description: "Diseño Web | UX/UI",
    link: "https://joycenterkids.com/",
    imageClass: "joy-center",
  },

  {
    title: "Málika Skin Care",
    description: "Diseño Web | UX/UI",
    link: "https://malikaskincaremx.com/",
    imageClass: "malika",
  },
  {
    title: "Betha Pharma",
    description: "Desarrollo Web | Wordpress",
    link: "https://bethapharma.com/",
    imageClass: "betha",
  },
];

const Home_Portafolio = () => {
  return (
    <>
      {portfolioData.map((item, index) => (
        <motion.div
          key={index}
          className="relative h-screen w-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9, y: "50px" }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2 * (index + 1),
            duration: 0.7,
            ease: "linear",
          }}
        >
          <div className="portfolio-items_item w-full max-w-[50rem] px-4 lg:px-10">
            <div className={`item-image ${item.imageClass} pb-[100%] relative`}>
              <a
                href={item.link}
                className="absolute top-0 left-0 w-full h-full z-[1]"
              ></a>
            </div>
            <div className="item-info flex flex-col md:flex-row items-start md:items-center justify-between text-white">
              <div className="item-info_left ">
                <p className="text-white opacity-50">{item.description}</p>
                <h4 className="text-white">{item.title}</h4>
              </div>
              <div className="item-info_right">
                <a href={item.link}>Visitar Sitio Web</a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Home_Portafolio;
