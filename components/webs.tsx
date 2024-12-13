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
    title: "Ingetrol",
    description: "Diseño Web | UX/UI",
    link: "https://ingetrolcorp.com/",
    imageClass: "ingetrol",
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
  {
    title: "Neumosalud",
    description: "Diseño Web",
    link: "https://neumosalud.com/",
    imageClass: "neumosalud",
  },
  {
    title: "Lux Systems",
    description: "Diseño Web",
    link: "https://luxsystems.mx/",
    imageClass: "lux",
  },
  {
    title: "Arse Lara Fotografía",
    description: "Diseño Web",
    link: "https://arselara.com/",
    imageClass: "arse-lara",
  },
];

const Webs = () => {
  return (
    <>
      <motion.div
        className="portfolio-items grid gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-3 col-span-4"
        initial={{ opacity: 0, y: "50px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.5, ease: "linear" }}
      >
        {portfolioData.map((item, index) => (
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
              <div
                className={`item-image ${item.imageClass} pb-[100%] relative`}
              >
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
                  <a href={item.link}>Visitar Sitio Web</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Webs;
