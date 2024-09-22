'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { IoCloseOutline } from 'react-icons/io5'
import { useUiStore } from '@/store'

export const Sidebar = () => {
  const isSideMenuOpen = useUiStore((state) => state.isSideMenuOpen)
  const closeMenu = useUiStore((state) => state.closeSideMenu)

  return (
    <div>
      {
        isSideMenuOpen && (
          <>
            {/* background */}
            <div className='fixed top-0 left-0 w-screen h-screen z-30 bg-black opacity-30'>
            </div>
            {/* blur */}
            <div onClick={closeMenu} className='fade-in fixed top-0 left-0 w-screen h-screen z-30 backdrop-filter backdrop-blur-sm'>
            </div>
          </>
        )
      }

      <nav className={
        clsx(
          'fixed p-5 right-0 top-0 w-full md:w-[350px] h-screen bg-gray-900 z-40 shadow-2xl transform transition-all duration-300',
          {
            'translate-x-full': !isSideMenuOpen
          }
        )
      }>

        <IoCloseOutline
          size={50}
          className='absolute top-5 right-5 cursor-pointer'
          onClick={closeMenu}
        />

        {/* menú */}
        <div className='mt-16'>
          <Link href='/#features'
            onClick={() => { closeMenu() }}
            className='flex items-center mt-7 p-2 hover:bg-black hover:text-white rounded-none transition-all'>
            <span className='ml-3 text-xl'>Características</span>
          </Link>

          <Link href='/#templates'
            onClick={() => { closeMenu() }}
            className='flex items-center mt-7 p-2 hover:bg-black hover:text-white rounded-none transition-all'>
            <span className='ml-3 text-xl'>Templates</span>
          </Link>

          <Link href='/#pricing'
            onClick={() => { closeMenu() }}
            className='flex items-center mt-7 p-2 hover:bg-black hover:text-white rounded-none transition-all'>
            <span className='ml-3 text-xl'>Precios</span>
          </Link>

          <Link href='/#contact'
            onClick={() => { closeMenu() }}
            className='flex items-center mt-7 p-2 hover:bg-black hover:text-white rounded-none transition-all'>
            <span className='ml-3 text-xl'>Contacto</span>
          </Link>

        </div>

      </nav >

    </div >
  )
}
