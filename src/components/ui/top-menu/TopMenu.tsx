'use client'

import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { IoMenu } from 'react-icons/io5'
import { Button } from '../button'
import { titleFont } from '@/config/fonts'
import { useUiStore } from '@/store'

export const TopMenu = () => {
  const openMenu = useUiStore((state) => state.openSideMenu)

  return (
    <div className='w-full bg-gray-900 fixed top-0 z-20 text-white'>
      <header className="container mx-auto lg:px-20 px-4 py-5 flex justify-between items-center">
        <Link href={'/'}>
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-8 w-8 text-blue-400" />
            <span className="text-xl sm:text-2xl font-bold">Mi Tienda en Línea</span>
          </div>
        </Link>
        <nav>
          <Button
            size="lg"
            type="button"
            variant='ghost'
            onClick={openMenu}
            className={`${titleFont.className} transition-all hover:bg-gray-900 hover:text-white md:hidden`}
          >
            <IoMenu size={30} />
          </Button>
          <ul className="hidden space-x-4 md:flex">
            <li><Link href="/#features" className="hover:text-blue-400 transition-colors">Características</Link></li>
            <li><Link href="/#templates" className="hover:text-blue-400 transition-colors">Templates</Link></li>
            <li><Link href="/#pricing" className="hover:text-blue-400 transition-colors">Precios</Link></li>
            <li><Link href="/#contact" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
