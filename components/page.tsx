import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import Contador from './Contador'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-poppins'
})

interface PageProps {
  children: ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <>
      <motion.div
        initial={{
          //opacity: 1,
          clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'
        }}
        animate={{
          //opacity: 0,
          clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)'
        }}
        exit={{
          //opacity: 0,
          clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)'
        }}
        transition={{ delay: 3, duration: 1.5, ease: 'backInOut' }}
        className='fixed inset-0 z-[49] flex w-full flex-col items-start justify-end overflow-clip bg-black p-16'
      >
        <div className='flex w-full flex-col items-end justify-end gap-8 overflow-hidden'>
          <div className={`w-fit flex-initial ${poppins.className}`}>
            <Contador />
          </div>
          <div className='flex w-full grow items-center justify-start overflow-clip rounded-full bg-white bg-opacity-20'>
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 3, ease: 'linear' }}
              className='relative h-4 w-full origin-right bg-white'
            ></motion.div>
          </div>
        </div>
      </motion.div>
      <div>{children}</div>
    </>
  )
}
