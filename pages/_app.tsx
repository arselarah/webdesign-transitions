import { motion, AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { setupSmoothScroll } from "@/utils/smooth-scroll";
import { useEffect } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    setupSmoothScroll();
  }, []);
  // Restablecer el scroll al inicio de la página cada vez que cambie la ruta
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <Component {...pageProps} className={`${poppins.className}`} />

        <motion.div
          className="slide-in absolute inset-0 top-0 left-0 w-full h-svh bg-black z-50"
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          className="slide-out absolute inset-0 top-0 left-0 w-full h-svh bg-black z-50 "
          initial={{ opacity: 1, visibility: "visible" }}
          animate={{ opacity: 0, visibility: "hidden" }}
          exit={{ opacity: 0, visibility: "hidden" }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
        ></motion.div>
        <div
          className={`loading-container flex flex-col justify-center items-center gap-0 text-white text-5xl font-semibold tracking-wider leading-[0.8] `}
        >
          <div className="overflow-hidden origin-left">
            <span className="loading-span">UX UI</span>
          </div>
          <div className="overflow-hidden object-right">
            <span className="loading-span">arselara</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default App;
