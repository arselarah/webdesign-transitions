'use client'
import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/about', label: 'Acerca de mí' },
  { href: '/portfolio', label: 'Portafolio' },
  { href: '/contact', label: 'Contacto' }
]

const NavMobile = () => {
  const [menuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden')
      document.documentElement.style.overflowY = 'hidden'
    } else {
      document.body.classList.remove('overflow-hidden')
      document.documentElement.style.overflowY = 'scroll'
    }
  }, [])

  const handleMenu = () => {
    const menuMobile = document.querySelector('.mobile-menu')
    const animatedIcon = document.querySelector('.menu-icon')
    const closeIcon = document.querySelector('.close-icon')
    // const cerrar = document.querySelector('.menu-transition');

    //Agregar animación de salida
    menuMobile?.classList.toggle('menu-transition')
    animatedIcon?.classList.toggle('animate-icon')
    closeIcon?.classList.toggle('rotate-icon')
  }

  const closeMenu = () => {
    const menuMobile = document.querySelector('.mobile-menu')
    const animatedIcon = document.querySelector('.menu-icon')
    const closeIcon = document.querySelector('.close-icon')

    // Quitar animaciones (eliminar clases)
    menuMobile?.classList.remove('menu-transition')
    animatedIcon?.classList.remove('animate-icon')
    closeIcon?.classList.remove('rotate-icon')
  }

  return (
    <>
      <div className='fixed right-0 top-0 z-50 flex h-16 items-center bg-transparent mix-blend-difference'>
        <button
          className='menu-icon relative z-[60] mr-5 h-10 w-10 cursor-pointer rounded-full bg-black duration-200 ease-in hover:scale-110 md:hidden'
          onClick={handleMenu}
        >
          <div className='flex h-5 flex-col items-center justify-between'>
            <span className='text-slate-900 backdrop-invert'></span>
            <span className='text-white backdrop-invert'></span>
            <span className='text-white backdrop-invert'></span>
          </div>
        </button>
      </div>
      <div className='mobile-menu fixed left-0 top-0 z-50 h-dvh w-full origin-top will-change-transform md:hidden'>
        <div className='flex h-full w-full flex-col'>
          <div className='flex h-16 items-center justify-between px-5'>
            <div className='menu-title origin-bottom overflow-hidden'>
              <h3 className='pt-8 text-xl font-semibold'>
                Ideas creativas,
                <br />
                Diseño inteligente
              </h3>
            </div>
            <button
              className='close-icon relative flex h-8 w-8 cursor-pointer items-center duration-200 ease-in hover:scale-110'
              onClick={handleMenu}
            >
              <span></span>
            </button>
          </div>
          <div className='mobile-links flex h-full w-full flex-col justify-center gap-2 text-center'>
            {links.map((link, index) => (
              <div
                key={index}
                className='origin-bottom overflow-hidden will-change-transform'
              >
                <Link href={link.href} onClick={closeMenu}>
                  <span className=''>{link.label}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className='mobile-social-links flex w-full justify-center gap-2 p-4'>
            <div>
              <a href='https://www.facebook.com/ArseLaraFotografia'>Facebook</a>
            </div>
            <div>
              <a href='https://wa.me/528712352773'>WhatsApp</a>
            </div>
            <div>
              <a href='mailto:info@arselara.com'>Mail</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavMobile
