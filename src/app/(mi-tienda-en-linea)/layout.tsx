import { IoArrowUpOutline, IoLogoWhatsapp } from 'react-icons/io5'
import { ButtonContactWhatsApp, ButtonScrollTop, Footer, NextProgress, Sidebar, TopMenu } from '@/components'
import { Toaster } from '@/components/ui/sonner'

export default function MiTiendaEnLineaLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <NextProgress />
      <TopMenu />

      <Sidebar />

      {children}

      <ButtonScrollTop
        className='fixed bottom-10 right-2 md:right-16 z-10 text-black hover:no-underline hover:text-gray-900 text-xl flex gap-1 p-2 rounded-none border-black border bg-white h-12 w-12 print:hidden'
        icon={<IoArrowUpOutline />}
      />

      <ButtonContactWhatsApp className='fixed bottom-28 right-2 md:right-16 z-10 text-black hover:no-underline hover:text-gray-900 text-xl flex gap-1 p-2 rounded-none border-black border bg-white h-12 w-12 print:hidden'
        icon={<IoLogoWhatsapp />}
      />

      <Toaster />

      <Footer />
    </main>
  )
}
