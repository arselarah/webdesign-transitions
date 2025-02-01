import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

const projects = [
  {
    title: 'JOY center Kids',
    description: 'Diseño Web | UX/UI',
    text: 'Desde el nombre hasta la identidad visual, diseñé el branding completo de Joy Center Kids, incluyendo paleta de colores, logotipo y redes sociales. Desarrollé su sitio web con React, CSS y WordPress, fusionando creatividad y tecnología para una experiencia única.',
    link: 'https://joycenterkids.com/',
    imageClass: 'joy-center-web',
    imgUrl: '/assets/joy.jpg'
  },
  {
    title: 'Ingetrol',
    description: 'Diseño Web | UX/UI',
    text: 'Rediseñé por completo ingetrolcorp.com utilizando HTML, CSS y JavaScript, optimizando su funcionalidad y diseño. Desarrollé un sitio bilingüe, mejorando la experiencia del usuario y la presencia global de la marca.',
    link: 'https://ingetrolcorp.com/',
    imageClass: 'ingetrol-web',
    imgUrl: '/assets/ingetrol.jpg'
  },
  {
    title: 'Málika Skin Care',
    description: 'Diseño Web | UX/UI',
    text: 'Diseñé y desarrollé malikaskincaremx.com desde cero, utilizando HTML, CSS y JavaScript. Creé una plataforma visualmente atractiva y funcional, totalmente alineada con la identidad y objetivos de la marca.',
    link: 'https://malikaskincaremx.com/',
    imageClass: 'malika-web',
    imgUrl: '/assets/malika.jpg'
  },
  {
    title: 'Betha Pharma',
    description: 'Desarrollo Web | Wordpress',
    text: 'Construí bethapharma.com en WordPress, una tienda en línea enfocada en nutrición para bodybuilders. Desarrollé una plataforma funcional y visualmente atractiva para una experiencia de compra fluida y eficiente.',
    link: 'https://bethapharma.com/',
    imageClass: 'betha-web',
    imgUrl: '/assets/betha.jpg'
  },
  {
    title: 'Neumosalud',
    description: 'Diseño Web',
    text: 'Desarrollé neumosalud.com utilizando HTML, CSS y JavaScript, creando un sitio web rápido, responsive y fácil de navegar para una clínica especializada en salud respiratoria.',
    link: 'https://neumosalud.com/',
    imageClass: 'neumosalud-web',
    imgUrl: '/assets/neumosalud.jpg'
  },
  {
    title: 'Lux Systems',
    description: 'Diseño Web',
    text: 'Desarrollé luxsystems.mx con HTML, CSS y JavaScript, diseñando una plataforma moderna y funcional para una empresa líder en alumbrado público con presencia nacional y múltiples concesiones.',
    link: 'https://luxsystems.mx/',
    imageClass: 'lux-web',
    imgUrl: '/assets/lux.jpg'
  },
  {
    title: 'Arse Lara Fotografía',
    description: 'Diseño Web',
    text: 'Construí arselara.com con Next.js, Tailwind CSS, Framer Motion y GSAP, diseñando un portafolio web dinámico y visualmente impactante para un fotógrafo profesional.',
    link: 'https://arselara.com/',
    imageClass: 'arse-lara-web',
    imgUrl: '/assets/arse-lara.jpg'
  }
]

type CardProps = {
  i: number
  title: string // Título de la tarjeta
  description: string // URL de la imagen
  link: string // URL de la imagen
  text: string
  imgUrl: string
  imageClass: string
  progress: MotionValue<number> // MotionValue del progreso del scroll
  range: [number, number] // Rango para la animación de transformación
  targetScale: number // Escala objetivo para la animación
}

const Card = ({
  i,
  title,
  description,
  link,
  text,
  imgUrl,
  imageClass,
  progress,
  range,
  targetScale
}: CardProps) => {
  const container = useRef(null)

  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: [".9 end", "start start"],
  // });
  const scale = useTransform(progress, range, [1, targetScale])
  //const bluring = useTransform(progress, range, [1, targetScale]);
  // const blur = useTransform(progress, range, [1, 0]);

  // const blur = useTransform(scrollYProgress, [0, 1], ["0", "1"]);
  // console.log("Hola", blur);

  return (
    <>
      <div
        ref={container}
        className={`cardContainer sticky top-0 flex h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-8 py-20 md:py-40 ${poppins.className} will-change-transform`}
        style={{
          zIndex: `${i + 20}`
        }}
      >
        <div
          className={`${imageClass} absolute inset-0 top-0 bg-cover bg-center bg-no-repeat`}
        ></div>
        <div
          className={`bg-especial absolute inset-0 left-0 top-0 bg-opacity-75`}
        ></div>
        <motion.div
          className='card relative flex aspect-video h-full w-full max-w-[80rem] flex-col items-center justify-center overflow-hidden bg-[#ede8e3] md:h-auto md:flex-row'
          style={{
            scale
            //top: `calc(0% + ${i * 1}rem)`,
          }}
        >
          <div className='relative h-full w-full overflow-clip bg-gray-500 md:w-1/2'>
            <Link href={link}>
              <img
                src={imgUrl}
                alt={title}
                className='h-full w-full object-cover'
              />
            </Link>
          </div>
          <div className='flex h-full w-full flex-col justify-between p-7 md:w-1/2 md:p-16'>
            <div className='flex h-full flex-col justify-start gap-8 pb-8 md:gap-16'>
              <h3 className='text-2xl text-clampHCards font-medium text-black'>
                {title}
              </h3>
              <motion.div
                initial={{
                  width: '0%'
                }}
                whileInView={{
                  width: '100%'
                }}
                viewport={{ once: false }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  ease: 'linear'
                }}
                className='relative h-[1px] w-full bg-black'
              />
              <p className='text-gray-primario text-clampPCards font-light opacity-50'>
                {text}
              </p>
            </div>

            <div className='flex justify-between'>
              <p className='text-sm text-black opacity-50 xl:text-xl'>
                {description}
              </p>
              <Link href={link}>
                <BsBoxArrowUpRight />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}
const Webs = () => {
  const container = useRef(null)
  //const refBar = useRef(null);
  const { scrollYProgress: primerProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  const { scrollYProgress: scrollBar } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  //const progreso = useTransform(scrollBar, [0, 1], ["0%", "100%"]);

  const scaleX = useSpring(scrollBar, {
    stiffness: 500,
    damping: 20,
    restDelta: 0.001
  })

  return (
    <div ref={container} className='relative w-full'>
      <motion.div
        style={{ scaleX }}
        className='sticky left-0 top-[calc(100%-8px)] z-[30] h-2 origin-left bg-white mix-blend-difference will-change-transform'
      ></motion.div>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05
        const isVisible = i <= 6 // Mostrar solo las primeras 4 tarjetas
        return (
          isVisible && (
            <Card
              key={i}
              i={i}
              {...project}
              progress={primerProgress}
              range={[i * 0.1, 1]}
              targetScale={targetScale}
            />
          )
        )
      })}
    </div>
  )
}

export default Webs

// const Webs = () => {
//   return (
//     <>
//       <motion.div
//         className="portfolio-items grid gap-4 md:gap-8 md:grid-cols-2 xl:grid-cols-3 col-span-4"
//         initial={{ opacity: 0, y: "50px" }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 2.3, duration: 0.5, ease: "linear" }}
//       >
//         {portfolioData.map((item, index) => (
//           <motion.div
//             key={index}
//             className="portfolio-items_container"
//             initial={{ opacity: 0, scale: 0.9, y: "50px" }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: 0.2 * (index + 1),
//               duration: 0.7,
//               ease: "linear",
//             }}
//           >
//             <div className="portfolio-items_item">
//               <div
//                 className={`item-image ${item.imageClass} pb-[100%] relative`}
//               >
//                 <a
//                   href={item.link}
//                   className="absolute top-0 left-0 w-full h-full z-[1]"
//                 ></a>
//               </div>
//               <div className="item-info flex items-center justify-between">
//                 <div className="item-info_left">
//                   <p>{item.description}</p>
//                   <h4 className="text-gray-primario">{item.title}</h4>
//                 </div>
//                 <div className="bg-black text-white inline-block rounded-[50vw] p-[.7rem_1.5rem] border-[1px] border-black hover:bg-transparent hover:text-black transition-colors duration-300 text-[.8rem]">
//                   <a href={item.link}>Visitar Sitio Web</a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </>
//   );
// };

// export default Webs;
