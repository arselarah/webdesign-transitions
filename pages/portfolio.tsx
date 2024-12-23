import React from "react";
import Webs from "../components/webs";
import Graficos from "../components/graficos";
import Proyectos from "../components/proyectos";
import Page from "@/components/page";
import Head from "next/head";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page>
        <div className="hero-inner relative py-28 xl:py-56 px-5 w-full">
          <div className="bg-animation"></div>
          <div className="hero_text-container max-w-[100rem] mx-auto xl:px-4">
            <div className=" text-container_box scroll-reveal-loading">
              <h3 className="text-sm xl:text-xl text-center">Portafolio</h3>
              <h1 className="heading-hero text-center mx-auto">
                <span>
                  Proyectos que fusionan diseño y funcionalidad, llevados a cabo
                  con pasión y precisión
                </span>
              </h1>
            </div>
          </div>
          <div className="colorido"></div>
        </div>
        <div className="yointro section-home-portfolio relative py-28 xl:py-56 px-5 w-full">
          <div className="centered grid_portfolio max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16">
            <div className="titles flex justify-start md:flex-row col-span-4">
              <div className="yointro_text-container">
                <h3 className="text-sm xl:text-xl">Lo que hago</h3>
                <h2 className="heading">Diseño y Desarrollo Web</h2>
              </div>
            </div>

            <Webs />
          </div>{" "}
          {/* centered */}
        </div>{" "}
        {/* section-home-portfolio */}
        <div className="yointro section-home-portfolio relative py-28 xl:py-56 px-5 w-full colorido-inner">
          <div className="centered grid_portfolio max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16">
            <div className="titles flex justify-start md:flex-row col-span-4">
              <div className="yointro_text-container">
                <h3 className="text-sm xl:text-xl">Lo que hago</h3>
                <h2 className="heading">Diseño Gráfico</h2>
              </div>
            </div>
            <div className="portfolio-items grid gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-3 col-span-4">
              <Graficos />
            </div>
          </div>{" "}
          {/* centered */}
        </div>{" "}
        {/* section-home-portfolio */}
        <div className="yointro section-home-portfolio relative py-28 xl:py-56 px-5 w-full colorido-inner">
          <div className="centered grid_portfolio max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16">
            <div className="titles flex justify-start md:flex-row col-span-4">
              <div className="yointro_text-container">
                <h3 className="text-sm xl:text-xl">Lo que hago</h3>
                <h2 className="heading">Proyectos</h2>
              </div>
            </div>
            <div className="portfolio-items grid gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-3 col-span-4">
              <Proyectos />
            </div>
          </div>{" "}
          {/* centered */}
        </div>{" "}
        {/* section-home-portfolio */}
      </Page>
    </>
  );
};

export default Portfolio;
