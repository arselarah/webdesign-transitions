"use client";
import React from "react";
import Link from "next/link";
// import Image from "next/image";
// import { TransitionLinks } from "@app/utils/TransitionLinks";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Acerca de mí" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/contact", label: "Contacto" },
];

const NavBar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 z-10 bg-transparent w-full h-fit flex flex-row py-5">
        <div className="navBar_container relative w-full flex flex-row items-center px-4 max-w-[100rem] h-6 mx-auto">
          <div className="logo-prueba w-[250px] relative z-20 flex flex-row justify-start">
            <Link className="pr-4" href="/" passHref>
              <img className="w-[40px] h-[40px]" src="../logo.svg" alt="" />
            </Link>
          </div>
          <div className="hidden md:flex flex-row grow gap-8 justify-end">
            {links.map((link, index) => (
              <div
                key={index}
                className="relative efecto-hover overflow-hidden"
              >
                <div className="ghost-link">
                  <Link
                    className=" text-white uppercase font-medium text-[14px]"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </div>
                <a className=" text-black uppercase font-medium text-[14px] mix-blend-difference">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
