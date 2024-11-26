import { motion } from 'framer-motion'

interface MenuProps {
  isOpen: boolean
  toggleMenu: () => void
}

export function MenuDropdown({ isOpen, toggleMenu }: MenuProps) {
  return (
    <button onClick={toggleMenu} className="z-10">
      <motion.svg
        width="35"
        height="25"
        viewBox="0 0 24 24"
        fill="#fff"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.rect
          width="24"
          height="2"
          rx="1.5"
          initial={{ y: 3 }}
          animate={{ y: isOpen ? 12 : 3, rotate: isOpen ? 45 : 0 }}
        />
        <motion.rect
          width="24"
          height="2"
          rx="1.5"
          initial={{ y: 12 }}
          animate={{ opacity: isOpen ? 0 : 1 }}
        />
        <motion.rect
          width="24"
          height="2"
          rx="1.5"
          initial={{ y: 20 }}
          animate={{ y: isOpen ? 12 : 20, rotate: isOpen ? -45 : 0 }}
        />
      </motion.svg>
    </button>
  )
}
