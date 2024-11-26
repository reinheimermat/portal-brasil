'use client'

import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Logo from './logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <motion.header
      className="fixed w-full py-4 text-white transition-colors"
      animate={{ backgroundColor: scrolled ? 'black' : 'transparent' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Logo />
        <div className="flex items-center gap-8">
          <nav className="flex gap-5 font-sans tracking-widest">
            <Link href="/about">Projetos</Link>
            <Link href="/about">Contato</Link>
          </nav>
          <button>
            <Menu size={34} />
          </button>
        </div>
      </div>
    </motion.header>
  )
}
