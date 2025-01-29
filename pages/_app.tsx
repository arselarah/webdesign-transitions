import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import "./globals.css";
import { Poppins } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StickyCursor from "@/components/stickCursor";
import NavMobile from "@/components/NavMobile";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <NavBar />
      <NavMobile />
      <StickyCursor />
      <AnimatePresence mode="wait">
        <Component
          key={router.route}
          {...pageProps}
          className={`${poppins.className}`}
        />
      </AnimatePresence>
      <Footer />
    </>
  );
};

export default App;
