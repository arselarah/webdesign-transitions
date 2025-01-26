import React from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Acerca de mí" },
  { href: "/portfolio", label: "Portafolio" },
  { href: "/contact", label: "Contacto" },
];

const Footer = () => {
  return (
    <footer
      className="footer relative py-28 xl:py-56 px-5 w-full min-h-screen flex flex-col justify-center"
      id="contacto"
    >
      <div className="centered w-full max-w-[100rem] mx-auto xl:px-4">
        <div className="grid justify-items-center">
          <h2 className="heading text-center">
            Ponte en contacto y trabajemos juntos
          </h2>
          <a
            className="heading footer_mailto text-center block hover:underline"
            href="mailto:info@arselara.com"
          >
            info@arselara.com
          </a>
        </div>
        <nav className="footer_nav flex flex-row justify-between items-start">
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className="hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="grow-0 flex justify-end flex-col">
            <li>
              <a
                href="https://www.facebook.com/ArseLaraFotografia"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a href="https://wa.me/528712352773" className="hover:underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:info@arselara.com" className="hover:underline">
                Mail
              </a>
            </li>
          </ul>
        </nav>
        <div className="footer_page-copyright w-full pt-16">
          <p className="text-center">
            ©2025 Arsenio Lara. Derechos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
