import { Menu } from 'lucide-react'
import Link from 'next/link'

import Logo from './logo'

export function Header() {
  return (
    <header className="fixed flex h-14 w-full items-center justify-between px-20 py-4 text-white">
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
    </header>
  )
}
