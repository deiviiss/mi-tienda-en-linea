'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Button } from '../button'
import { titleFont } from '@/config/fonts'
import { useUiStore } from '@/store'

export const TopMenu = () => {
  const logo = '/imgs/logoWeb.png'
  const openMenu = useUiStore((state) => state.openSideMenu)
  const [bgColor, setBgColor] = useState('bg-none')
  const fixedScrollThreshold = 0.5 // 1% scroll threshold

  const handleScroll = () => {
    // calculate the vertical scroll percentage
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    setBgColor(scrolled > fixedScrollThreshold ? 'bg-gray-900' : 'bg-none') // change the background color if the percentage is greater than the fixed value
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll) // add the event listener for the scroll

    return () => {
      window.removeEventListener('scroll', handleScroll) // delete the event listener when the component is unmounted
    }
  }, [])

  return (
    <div className={`w-full fixed top-0 z-20 text-white ${bgColor} transition-colors duration-300`}>
      <header className="container mx-auto lg:px-20 px-4 py-3  flex justify-between items-center">
        <Link href={'/'}>
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="logo" width={421} height={101} className='w-44 sm:w-60' />
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
            <li><Link href="/#templates" className="hover:text-blue-400 transition-colors">Templates</Link></li>
            <li><Link href="/#pricing" className="hover:text-blue-400 transition-colors">Planes</Link></li>
            <li><Link href="/#contact" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
