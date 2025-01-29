import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StickyCursor from "@/components/stickCursor";
import NavMobile from "@/components/NavMobile";
import { setupSmoothScroll, destroySmoothScroll } from "@/utils/smooth-scroll";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    setupSmoothScroll(); // Inicializar Lenis al cargar

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleRouteChange = () => {
      destroySmoothScroll(); // 🔴 Detener Lenis antes de cambiar de página
      window.scrollTo(0, 0); // 🔄 Resetear scroll manualmente
      setTimeout(() => setupSmoothScroll(), 3000); // 🟢 Reiniciar Lenis después de un pequeño delay
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
  return (
    <>
      <NavBar />
      <NavMobile />
      <StickyCursor />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitstate"
          transition={{ duration: 0.5 }}
          variants={{
            initialState: { opacity: 0 },
            animateState: { opacity: 1 },
            exitstate: {},
          }}
        >
          <Component
            key={router.route}
            {...pageProps}
            className={`${poppins.className}`}
          />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
