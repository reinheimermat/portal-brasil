'use client'

import { motion } from 'framer-motion'

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

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <motion.aside
      variants={sidebarSlide}
      initial="initial"
      animate={isOpen ? 'enter' : 'exit'}
      exit="exit"
      className="absolute inset-0 h-screen w-full bg-[#212121]"
    >
      {/* Conteúdo da sidebar */}
    </motion.aside>
  )
}
