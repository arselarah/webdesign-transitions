import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Acerca de mí' },
  { href: '/portfolio', label: 'Portafolio' },
  { href: '/contact', label: 'Contacto' }
]

const Footer = () => {
  return (
    <footer
      className='footer relative z-0 flex min-h-screen w-full flex-col justify-center bg-[#ede8e3] px-5 py-28 xl:py-56'
      id='contacto'
    >
      <div className='centered mx-auto w-full max-w-[100rem] xl:px-4'>
        <div className='grid justify-items-center'>
          <h2 className='heading text-center'>
            Ponte en contacto y trabajemos juntos
          </h2>
          <a
            className='heading footer_mailto block text-center hover:underline'
            href='mailto:info@arselara.com'
          >
            info@arselara.com
          </a>
        </div>
        <nav className='footer_nav flex flex-row items-start justify-between'>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} className='hover:underline'>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className='flex grow-0 flex-col justify-end'>
            <li>
              <a
                href='https://www.facebook.com/ArseLaraFotografia'
                className='hover:underline'
              >
                Facebook
              </a>
            </li>
            <li>
              <a href='https://wa.me/528712352773' className='hover:underline'>
                WhatsApp
              </a>
            </li>
            <li>
              <a href='mailto:info@arselara.com' className='hover:underline'>
                Mail
              </a>
            </li>
          </ul>
        </nav>
        <div className='footer_page-copyright w-full pt-16'>
          <p className='text-center'>
            ©2025 Arsenio Lara. Derechos Reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
