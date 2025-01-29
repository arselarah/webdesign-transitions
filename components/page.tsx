import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { setupSmoothScroll } from "@/utils/smooth-scroll";
import Contador from "./Contador";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  const router = useRouter();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
          }}
          animate={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          }}
          exit={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          }}
          transition={{ delay: 3, duration: 1.5, ease: "backInOut" }}
          className="bg-black fixed inset-0 z-[9999]"
        />
        <motion.div
          initial={{
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
          }}
          animate={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
          }}
          transition={{ delay: 3, duration: 1.5, ease: "backInOut" }}
          className="bg-black fixed inset-0 z-[9999] flex flex-col justify-end items-start p-16 overflow-clip"
        >
          <div className="flex flex-col w-full overflow-hidden gap-8">
            <div className={`flex-initial w-fit ${poppins.className}`}>
              {/* <p className="text-5xl text-white">Cargando</p> */}
              <Contador />
            </div>
            <div className="w-full grow flex justify-start items-center bg-white bg-opacity-20 rounded-full overflow-clip">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "linear" }}
                className=" h-4 bg-white relative"
              ></motion.div>
            </div>
          </div>
        </motion.div>
        <div
          key={router.pathname}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 0 }}
          // transition={{ delay: 1, duration: 0.5 }}
          // initial={{
          //   clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
          // }}
          // animate={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" }}
          // exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
          // transition={{ duration: 1.5, ease: "backInOut" }}
        >
          <main>{children}</main>
        </div>
      </AnimatePresence>
    </>
  );
}
