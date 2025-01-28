"use client";
import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Acerca de mí" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/contact", label: "Contacto" },
];

const NavMobile = () => {
  const [menuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.body.classList.remove("overflow-hidden");
      document.documentElement.style.overflowY = "scroll";
    }
  }, []);

  const handleMenu = () => {
    const menuMobile = document.querySelector(".mobile-menu");
    const animatedIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");
    // const cerrar = document.querySelector('.menu-transition');

    //Agregar animación de salida
    menuMobile?.classList.toggle("menu-transition");
    animatedIcon?.classList.toggle("animate-icon");
    closeIcon?.classList.toggle("rotate-icon");
  };

  const closeMenu = () => {
    const menuMobile = document.querySelector(".mobile-menu");
    const animatedIcon = document.querySelector(".menu-icon");
    const closeIcon = document.querySelector(".close-icon");

    // Quitar animaciones (eliminar clases)
    menuMobile?.classList.remove("menu-transition");
    animatedIcon?.classList.remove("animate-icon");
    closeIcon?.classList.remove("rotate-icon");
  };

  return (
    <>
      <div className="fixed right-0 top-0 z-50 h-16 flex items-center bg-transparent mix-blend-difference ">
        <button
          className="relative w-10 h-10 md:hidden cursor-pointer mr-5 menu-icon hover:scale-110 ease-in duration-200 z-[60] rounded-full bg-black "
          onClick={handleMenu}
        >
          <div className="flex flex-col justify-between h-5 items-center">
            <span className=" text-slate-900 backdrop-invert "></span>
            <span className=" text-white backdrop-invert"></span>
            <span className=" text-white backdrop-invert"></span>
          </div>
        </button>
      </div>
      <div className="fixed top-0 left-0 w-full h-dvh z-50 md:hidden mobile-menu origin-top will-change-transform">
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-between h-16 px-5 items-center">
            <div className="origin-bottom overflow-hidden menu-title">
              <h3 className="font-semibold text-xl pt-8 ">
                Ideas creativas,
                <br />
                Diseño inteligente
              </h3>
            </div>
            <button
              className="cursor-pointer w-8 h-8 close-icon flex items-center relative hover:scale-110 ease-in duration-200"
              onClick={handleMenu}
            >
              <span></span>
            </button>
          </div>
          <div className="flex flex-col justify-center w-full h-full text-center mobile-links gap-2">
            {links.map((link, index) => (
              <div
                key={index}
                className="origin-bottom overflow-hidden will-change-transform"
              >
                <Link href={link.href} onClick={closeMenu}>
                  <span className="">{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full mobile-social-links gap-2 p-4">
            <div>
              <a href="https://www.facebook.com/ArseLaraFotografia">Facebook</a>
            </div>
            <div>
              <a href="https://wa.me/528712352773">WhatsApp</a>
            </div>
            <div>
              <a href="mailto:info@arselara.com">Mail</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMobile;
