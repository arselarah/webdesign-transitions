import { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import StickyCursor from "./stickCursor";
import NavMobile from "./NavMobile";

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <>
      <StickyCursor />
      <NavBar />
      <NavMobile />
      <main>{children}</main>
      <Footer />
    </>
  );
}
