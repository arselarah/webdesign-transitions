import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
//   variable: "--font-poppins",
// });

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress: scrollEffectPrimero } = useScroll({
    target: ref,
    offset: ['start start', 'end .6']
  })
  const { scrollYProgress: scrollEffectSegundo } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const scaleHero = useTransform(scrollEffectPrimero, [0, 1], [1, 0.9])
  const translateHeading = useTransform(
    scrollEffectSegundo,
    [0, 1],
    ['0%', '-10%']
  )
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
        id='hero'
        ref={ref}
        className={`relative flex h-screen min-h-min w-full items-center overflow-clip px-4 ${poppins.className}`}
        style={{ scale: scaleHero }}
      >
        {/* <SafariWindow /> */}
        <div className="absolute inset-0 left-0 top-0 origin-bottom overflow-clip after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-black after:bg-opacity-80 after:content-['']">
          <video
            width='100%'
            height='100%'
            autoPlay
            loop
            muted
            className='absolute inset-0 left-0 top-0 h-full w-full object-cover'
          >
            <source
              src='assets/7534239-hd_1920_1080_25fps.mp4'
              type='video/mp4'
            />
          </video>
        </div>
        <motion.div
          style={{ translateY: translateHeading, scale: scaleHero }}
          className='fondoImagen flex h-full w-full flex-col items-center justify-center bg-clip-text will-change-transform'
        >
          <div className='overflow-clip'>
            <motion.h3
              initial={{ y: '-50px' }}
              animate={{ y: 0 }}
              transition={{
                type: 'spring',
                bounce: 0.25,
                duration: 1,
                delay: 4.15
              }}
              className='text-center text-white'
            >
              Arsenio Lara - Web & Digital Designer
            </motion.h3>
          </div>

          <div className='relative flex w-full max-w-[100rem] flex-row flex-wrap'>
            <motion.div
              // style={{ translateX: translateHeading }}
              className='flex flex-wrap sm:gap-4 lg:gap-8'
            >
              <motion.span
                initial='initial'
                animate='hovered'
                className='head_text inline-block overflow-clip text-white'
              >
                <motion.div
                  variants={{ initial: { y: '100%' }, hovered: { y: '0%' } }}
                  transition={{
                    type: 'spring',
                    bounce: 0.25,
                    duration: 1,
                    delay: 4
                  }}
                >
                  Ideas
                </motion.div>
              </motion.span>
              <motion.span
                initial='initial'
                animate='hovered'
                className='head_text inline-block overflow-clip text-white'
              >
                <motion.div
                  variants={{ initial: { y: '100%' }, hovered: { y: '0%' } }}
                  transition={{
                    type: 'spring',
                    bounce: 0.25,
                    duration: 1,
                    delay: 4.05
                  }}
                >
                  Creativas
                </motion.div>
              </motion.span>
            </motion.div>
            <motion.div
              // style={{ translateX: translateHeadingSegundo }}
              className='flex flex-wrap sm:gap-4 lg:-mt-[2rem] lg:gap-8'
            >
              <motion.span
                initial='initial'
                animate='hovered'
                className='head_text inline-block overflow-clip text-white'
              >
                <motion.div
                  className='leading-[1.2]'
                  variants={{ initial: { y: '100%' }, hovered: { y: '0%' } }}
                  transition={{
                    type: 'spring',
                    bounce: 0.25,
                    duration: 1,
                    delay: 4.1
                  }}
                >
                  Diseño
                </motion.div>
              </motion.span>
              <motion.span
                initial='initial'
                animate='hovered'
                className='head_text inline-block overflow-clip text-white'
              >
                <motion.div
                  className='-mt-[.6rem] leading-[1.25] sm:mt-[0rem]'
                  variants={{ initial: { y: '100%' }, hovered: { y: '0%' } }}
                  transition={{
                    type: 'spring',
                    bounce: 0.25,
                    duration: 1,
                    delay: 4.15
                  }}
                >
                  Inteligente
                </motion.div>
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}

export default Hero
