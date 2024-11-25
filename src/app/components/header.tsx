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
      className="fixed flex h-14 w-full items-center justify-between px-20 py-4 text-white transition-colors"
      animate={{ backgroundColor: scrolled ? 'black' : 'transparent' }}
      transition={{ duration: 0.6 }}
    >
      <Logo />
      <div className="flex items-center gap-8">
        <nav className="flex gap-5">
          <Link href="/about">Projetos</Link>
          <Link href="/about">Contato</Link>
        </nav>
        <button>
          <Menu size={34} />
        </button>
      </div>
    </motion.header>
  )
}
