"use client";
import React from "react";
import { motion } from "framer-motion";

const portfolioDataPY = [
  {
    title: "Málika Skin Care",
    description: "Diseño Web",
    link: "https://arselara.com/webs/malika2.0/",
    imageClass: "malika-2",
  },
  {
    title: "Patrick Habanero",
    description: "Diseño Web",
    link: "https://arselara.com/webs/patrickhabanero/",
    imageClass: "patrick-habanero",
  },
  {
    title: "Beach Body",
    description: "Diseño Web",
    link: "https://arselara.com/webs/gym/",
    imageClass: "beach-body",
  },
  {
    title: "Don Fermín",
    description: "Diseño Web",
    link: "https://arselara.com/webs/tequila/",
    imageClass: "tequila",
  },
  {
    title: "File Trust",
    description: "Diseño Web",
    link: "https://arselara.com/webs/filetrust/",
    imageClass: "file-trust",
  },
  {
    title: "Grupo Integración",
    description: "Diseño Web",
    link: "https://arselara.com/webs/grupo-integracion/",
    imageClass: "grupo-integracion",
  },
  {
    title: "Arse Lara Fotografía",
    description: "Diseño Web",
    link: "https://ingetrol.arselara.com",
    imageClass: "alh",
  },
];

const Proyectos = () => {
  return (
    <>
      {portfolioDataPY.map((item, index) => (
        <motion.div
          key={index}
          className="portfolio-items_container"
          initial={{ opacity: 0, scale: 0.9, y: "50px" }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2 * (index + 1),
            duration: 0.7,
            ease: "linear",
          }}
        >
          <div className="portfolio-items_item">
            <div className={`item-image ${item.imageClass} pb-[100%] relative`}>
              <a
                href={item.link}
                className="absolute top-0 left-0 w-full h-full z-[1]"
              ></a>
            </div>
            <div className="item-info flex items-center justify-between">
              <div className="item-info_left">
                <p>{item.description}</p>
                <h4 className="text-gray-primario">{item.title}</h4>
              </div>
              <div className="item-info_right">
                <a href={item.link}>Visitar</a>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default Proyectos;
