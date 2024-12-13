// "use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Page from "@/components/page";

// import image_1 from '@public/assets/logos/ai.svg'
// import image_2 from '@public/assets/logos/al.svg'

const About = () => {
  const logos = [
    { src: "/assets/logos/ai.svg", alt: "Adobe Illustrator" },
    { src: "/assets/logos/al.svg", alt: "Adobe Lightroom" },
    { src: "/assets/logos/ap.svg", alt: "Adobe Photoshop" },
    { src: "/assets/logos/css3.svg", alt: "CSS3" },
    { src: "/assets/logos/figma.svg", alt: "Figma" },
    { src: "/assets/logos/google.svg", alt: "Google" },
    { src: "/assets/logos/html5.svg", alt: "HTML5" },
    { src: "/assets/logos/meta.svg", alt: "Meta" },
    { src: "/assets/logos/next_js_14.svg", alt: "Next JS" },
    { src: "/assets/logos/react_logo.svg", alt: "React JS" },
    { src: "/assets/logos/vscode.svg", alt: "VS Code" },
    { src: "/assets/logos/wp.svg", alt: "WordPress" },
  ];

  // Estado para calcular cuántos logos adicionales se necesitan
  const [repeatedLogos, setRepeatedLogos] = useState(logos);

  useEffect(() => {
    // Duplicar logos dinámicamente para llenar el contenedor
    const scrollerWidth = window.innerWidth; // Ancho de la pantalla
    const logoWidth = 80; // Ancho estimado de cada logo (ajusta según tu diseño)
    const minLogosNeeded = Math.ceil(scrollerWidth / logoWidth) + 1; // Logos necesarios para llenar + 1 para transición continua
    const repeated = Array(minLogosNeeded).fill(logos).flat();
    setRepeatedLogos(repeated);
  }, []);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "Diseño y Desarrollo Web",
      content:
        "Con experiencia en la creación de sitios web dinámicos y responsivos, domino tecnologías como JavaScript, React.js, Next.js, HTML5, CSS3, PHP y MySQL. Mi enfoque es desarrollar interfaces atractivas, optimizadas y funcionales que mejoren la experiencia de usuario y cumplan con las necesidades comerciales de cada proyecto.",
    },
    {
      title: "UX/UI",
      content:
        "Especializado en la creación de interfaces intuitivas y experiencias de usuario fluidas, combino diseño visual y funcionalidad para desarrollar productos digitales que cautivan y son fáciles de usar. Domino Figma y Adobe XD, herramientas esenciales para el prototipado de proyectos web y aplicaciones, garantizando diseños colaborativos, precisos y centrados en el usuario. Mi enfoque asegura interacciones efectivas y visualmente atractivas, entregando soluciones innovadoras que conectan con las necesidades de los usuarios.",
    },
    {
      title: "Diseño Gráfico",
      content:
        "Creatividad, innovación y atención al detalle definen mi enfoque en el diseño gráfico. Con herramientas como Adobe Photoshop, Illustrator, InDesign, Premiere Pro y After Effects, creo logotipos, material publicitario y más, siempre buscando transmitir la esencia de cada marca a través de composiciones visuales impactantes.",
    },
    {
      title: "Marketing Digital",
      content:
        "Cuento con amplia experiencia en estrategias de marketing digital, con gran conocimiento en la creación y gestión de campañas efectivas en plataformas como Facebook Ads y Google Ads. A través de análisis de datos y optimización constante, ayudo a las marcas a aumentar su visibilidad, generar leads y maximizar su ROI en el entorno digital.",
    },
    {
      title: "Content Creator",
      content:
        "Con más de 12 años de experiencia en fotografía profesional, ofrezco contenido visual de alta calidad en diversas áreas: social, de productos y documental. Además, tengo habilidades en edición de video y manejo de drones, utilizando herramientas de Adobe como Lightroom, Photoshop, Premiere Pro y After Effects para crear resultados impactantes.",
    },
  ];

  return (
    <Page>
      <div className="hero-inner relative py-28 xl:py-56 px-5 w-full">
        <div className="bg-animation"></div>
        <div className="hero_text-container max-w-[100rem] mx-auto xl:px-4">
          <div className=" text-container_box scroll-reveal-loading">
            <h3 className="text-sm xl:text-xl text-center">Acerca de mi</h3>
            <h1 className="heading-hero text-center mx-auto">
              <span>
                Creo interfaces intuitivas y efectivas que destacan e impulsan
                resultados para una conexión genuina con los usuarios
              </span>
            </h1>
          </div>
        </div>
        <div className="colorido"></div>
      </div>
      <div className="yointro section-what-Ido relative py-28 xl:py-56 px-5 w-full">
        <div className="centered max-w-[100rem] mx-auto xl:px-4">
          <div className="relative pb-28 xl:pb-56">
            <div className="titles flex justify-start md:flex-row">
              <motion.div
                className="yointro_text-container scroll-reveal"
                initial={{ opacity: 0, y: "50px" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
              >
                <h3 className="text-sm xl:text-xl">
                  Diseñador web y digital freelance
                </h3>
                <h2 className="heading">
                  <span>
                    ¡Hola! Soy Arsenio Lara, diseñador web, UX/UI y fotógrafo
                    profesional con más de 12 años de experiencia en proyectos
                    digitales.
                  </span>
                </h2>
              </motion.div>
            </div>
            <motion.div
              className="w-full flex justify-end md:flex-row"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
            >
              <div className="subtitles">
                <p className="text-gray-primario">
                  Combino creatividad, estrategia y tecnología de manera
                  integral para dar vida a ideas únicas y convertirlas en
                  experiencias visuales memorables. Cada proyecto es una
                  oportunidad para diseñar soluciones innovadoras que conecten
                  emocionalmente con las personas, optimicen su interacción y
                  cumplan objetivos claros, logrando un equilibrio entre
                  estética, funcionalidad y propósito.
                </p>
              </div>
            </motion.div>
          </div>
          <div className="skills">
            <div className="">
              <div className="yointro_text-container">
                <motion.div
                  className="relative pb-28 xl:pb-56"
                  initial={{ opacity: 0, y: "50px" }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
                >
                  <div className="titles flex justify-start md:flex-row">
                    <div className="yointro_text-container scroll-reveal">
                      <h3 className="text-sm xl:text-xl">Skills</h3>
                      <h2 className="heading">
                        <span>Habilidades Técnicas y Creativas</span>
                      </h2>
                    </div>
                  </div>
                  <div className="w-full flex justify-start md:flex-row">
                    <div className="subtitles">
                      <p className="text-gray-primario">
                        Experiencia integral en herramientas, lenguajes y
                        estrategias para proyectos digitales impactantes. Soy un
                        apasionado de la tecnología y la creatividad, con amplia
                        experiencia en herramientas y lenguajes como:
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.article
                className="acordeon"
                initial={{ opacity: 0, y: "50px" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
              >
                {accordionData.map((item, index) => (
                  <div
                    key={index}
                    className="accordion-item relative w-full border-t-[1px] border-slate-500 py-8"
                  >
                    <button
                      className={`accordion-header text-clampacordeon font-medium text-center w-full flex items-center justify-between`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <span>{item.title}</span>
                      <motion.div
                        className="icon"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: activeIndex === index ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-plus"
                        >
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </motion.div>
                    </button>
                    <motion.div
                      className="accordion-content overflow-hidden"
                      initial={{ height: 0 }}
                      animate={{
                        height: activeIndex === index ? "auto" : 0,
                        opacity: activeIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-clampP font-light leading-8 py-6">
                        {item.content}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </motion.article>

              {/* <div className='skills_grid-about grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-5'>
								<div className='skill-item'>
                  <p>HTML y CSS</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div>
                  </div>
                </div>
								<div className='skill-item'>
                  <p>Wordpress</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>React JS</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>Next JS</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>After Effects</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div></div><div></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>InDesign</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>Photoshop</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>Lightroom</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>Premiere PRO</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>Adobe XD</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>Figma</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>Illustrator</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>VS Code</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>META Ads</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>Google Ads</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div></div><div></div><div></div>
                  </div>
                </div>
                <div className='skill-item'>
                  <p>Excel / Word</p>
                  <div className='circles-box'>
                    <div className='colored'></div><div className='colored'></div><div className='colored'></div><div className='colored'></div><div></div>
                  </div>
                </div>
							</div> */}
            </div>
          </div>
        </div>{" "}
        {/* centered */}
      </div>{" "}
      {/* section-what-Ido */}
      <div className="yointro section-what-Ido relative py-8 xl:py-16 px-5 w-ful overflow-hidden scroll-mask">
        <div className="skills carrucel overflow-hidden relative w-full">
          <motion.div
            className="scroller flex"
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              duration: 10, // Velocidad del carrusel
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {repeatedLogos.map((logo, index) => (
              <div
                key={index}
                className="taglist px-10 flex-shrink-0 w-40 h-40"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
        {/* </div> centered */}
      </div>{" "}
      {/* section-what-Ido */}
      <div className="yointro section-what-Ido relative py-28 xl:py-56 px-5 w-full">
        <div className="centered max-w-[100rem] mx-auto xl:px-4">
          <div className="skills">
            <div>
              <motion.div
                className="yointro_text-container"
                initial={{ opacity: 0, y: "50px" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
              >
                <div className="relative pb-28 xl:pb-56">
                  <div className="titles flex justify-start md:flex-row">
                    <div className="yointro_text-container scroll-reveal">
                      <h3 className="text-sm xl:text-xl">Expertise</h3>
                      <h2 className="heading">
                        <span>Formación y Especialización</span>
                      </h2>
                    </div>
                  </div>
                  <div className="w-full flex justify-start md:flex-row">
                    <div className="subtitles">
                      <p className="text-gray-primario">
                        He cursado diplomados en Marketing Digital (Marketing
                        Mundial y Asociación Latinoamericana de Usuarios de
                        Internet SC) y de Community Manager (TEINUX). Además, he
                        completado un curso de diseño UX de OpenClassRooms.
                        Trabajando en el certificado de diseño UX de Google.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="skills_grid-experiencia"
                initial={{ opacity: 0, y: "50px" }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5, ease: "linear" }}
              >
                <div className="experiencia-item py-16 border-t-[1px] border-slate-500">
                  <div className="col-span-2">
                    <h3 className="text-clampacordeon font-medium">
                      Diplomado de Marketing Digital
                    </h3>
                  </div>
                  <div className="col-span-2 subtitles">
                    <p className="text-gray-500">
                      Impartido en Guadalajara por Jaime Bravo (Marketing
                      Mundial y Asociación Latinoamericana de Usuarios de
                      Internet SC).
                    </p>
                  </div>
                </div>
                <div className="experiencia-item py-16 border-y-[1px] border-slate-500 ">
                  <div className="col-span-2">
                    <h3 className="text-clampacordeon font-medium">
                      Community Manager Guadalajara
                    </h3>
                  </div>
                  <div className="col-span-2 subtitles">
                    <p className="text-gray-500">
                      Impartido en Guadalajara por Roberto Corona (TEINUX).
                    </p>
                  </div>
                </div>
                <div className="experiencia-item py-16 border-b-[1px] border-slate-500">
                  <div className="col-span-2">
                    <h3 className="text-clampacordeon font-medium">
                      Google UX Design Certificate (Cursando)
                    </h3>
                  </div>
                  <div className="col-span-2 subtitles">
                    <p className="text-gray-500">
                      Desarrollado por Google. Incorpora los aspectos básicos
                      del diseño de UX: cómo lograr empatía con los usuarios,
                      crear wireframes y prototipos, y realizar investigaciones
                      para probar los diseños.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>{" "}
        {/* centered */}
      </div>{" "}
      {/* section-what-Ido */}
    </Page>
  );
};

export default About;
