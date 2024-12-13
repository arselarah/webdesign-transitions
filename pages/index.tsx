import Page from "@/components/page";
import Hero from "@/components/Hero";
import Home_Skills from "@/components/home_skills";
import Home_Portafolio from "@/components/home_portafolio";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Page>
      <Hero />
      <section className="w-full">
        <div className="relative py-28 xl:py-56 px-5 w-full">
          <div className="centered max-w-[100rem] mx-auto xl:px-4">
            <motion.div
              className="titles flex justify-start md:flex-row"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
            >
              <div className="yointro_text-container scroll-reveal">
                <h3 className="text-sm xl:text-xl">Acerca de mi</h3>
                <h2 className="heading">
                  <span>Diseñador web y digital freelance</span>
                </h2>
              </div>
            </motion.div>
            <motion.div
              className=" 
					w-full flex justify-end md:flex-row"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
            >
              <div className="subtitles">
                <p className="text-gray-primario">
                  Hola, soy Arsenio Lara, diseñador web y digital freelance. Me
                  dedico a cada proyecto con pasión para crear algo elegante,
                  duradero y efectivo para ti y tus clientes.
                </p>
              </div>
            </motion.div>
          </div>{" "}
          {/* centered */}
        </div>{" "}
        {/* section-home-about */}
        <div className="yointro section-home-portfolio relative pt-28 xl:pt-56 px-5 w-full">
          <div className="centered max-w-[100rem] mx-auto xl:px-4 grid_portfolio flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="titles flex justify-start md:flex-row">
              <div className="yointro_text-container">
                <h3 className="text-sm xl:text-xl">Lo que hago</h3>
                <h2 className="heading">
                  <span>Portafolio</span>
                </h2>
              </div>
            </div>
            <div className="portfolio-items grid gap-4 md:gap-8 md:grid-cols-2 col-span-4 grow">
              <Home_Portafolio />
            </div>
          </div>{" "}
          {/* centered */}
          {/* <div className='colorido'></div> */}
        </div>{" "}
        {/* section-home-portfolio */}
        <div className="relative py-28 xl:py-56 px-5 w-full">
          <div className="centered max-w-[100rem] mx-auto xl:px-4">
            <motion.div
              className="titles flex justify-start md:flex-row"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
            >
              <div className="yointro_text-container scroll-reveal">
                <h3 className="text-sm xl:text-xl">Cómo lo hago</h3>
                <h2 className="heading">
                  <span>
                    Impulsando la innovación en el ámbito digital, soy Arsenio,
                    diseñador web y digital freelance.
                  </span>
                </h2>
              </div>
            </motion.div>
            <motion.div
              className=" 
					w-full flex justify-end md:flex-row"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
            >
              <div className="subtitles">
                <p className="text-gray-primario">
                  Mi enfoque se centra en crear experiencias de usuario
                  excepcionales y desarrollar sitios web dinámicos mediante el
                  uso de tecnologías de vanguardia como HTML5, CSS3, React y
                  Next.js, entre otras.
                </p>
              </div>
            </motion.div>
          </div>{" "}
          {/* centered */}
        </div>{" "}
        {/* section-home-about */}
        <div className="yointro section-what-Ido  relative py-28 xl:py-56 px-5 w-full">
          <div className="centered max-w-[100rem] mx-auto xl:px-4 overflow-hidden xl:overflow-visible">
            <div className="skills">
              <Home_Skills />
            </div>
          </div>{" "}
          {/* centered */}
        </div>{" "}
        {/* section-what-Ido */}
      </section>
    </Page>
  );
}
