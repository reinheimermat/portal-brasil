'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
// import Link from 'next/link'

interface SidebarProps {
  isOpen: boolean
}

const sidebarSlide = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
}

const year = new Date().getFullYear()

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projetos',
    href: '/projetos',
  },
  {
    title: 'Contato',
    href: '/contato',
  },
]

export function Sidebar({ isOpen }: SidebarProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.aside
      variants={sidebarSlide}
      initial="initial"
      animate={isOpen ? 'enter' : 'exit'}
      exit="exit"
      className="absolute inset-0 h-screen bg-[#212121]"
    >
      <div className="container mx-auto flex h-screen flex-col justify-between px-4 pb-8 pt-52">
        <section className="flex flex-col gap-5 font-sans text-7xl font-semibold">
          {links.map((link, index) => (
            <div
              key={index}
              className={clsx(
                'relative block h-fit overflow-y-hidden uppercase',
                hoveredIndex === index && 'w-full max-w-[25vw] overflow-x-auto',
                hoveredIndex !== index && 'w-fit overflow-x-hidden',
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.span
                animate={{ y: hoveredIndex === index ? '-100%' : '0%' }}
                transition={{ duration: 0.2 }}
                className="block font-sans"
              >
                <Link href={link.href}>{link.title}</Link>
              </motion.span>

              <motion.span
                animate={{ y: hoveredIndex === index ? '0%' : '100%' }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-0 block font-serif font-thin text-zinc-300"
              >
                (<Link href={link.href}>{link.title}</Link>)
              </motion.span>
            </div>
          ))}
        </section>

        <footer className="md:flex-0 flex flex-col gap-6 font-sans text-sm text-zinc-300 md:flex-row md:items-center md:justify-between md:gap-11">
          <div className="flex items-start justify-between md:flex-1">
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">Conecte-se</span>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">Localização</span>
              <p>51 912345678</p>
              <p>Rua fantasia Nº 26</p>
              <p>Porto alegre rs brasil</p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-zinc-500">Copyright</span>
              <p>
                &copy; {year} <span>Portal Brasil</span>
              </p>
              <p>
                Todos os direitos reservados. <br />
              </p>
            </div>
          </div>
        </footer>
      </div>
    </motion.aside>
  )
}
