import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const HeaderHero = () => {
  return (

    <section className='flex gap-2 relative sm:bg-[url("/imgs/banner.png")] bg-[url("/imgs/banner2.png")] bg-fixed bg-cover bg-top bg-no-repeat'>
      <div className="container flex flex-col justify-center items-center text-center mx-auto h-screen max-w-[720px] px-1 z-10">
        <h1 className="text-5xl font-bold mb-6 tracking-wider pt-12">Transforma tu negocio con tu propia tienda en línea</h1>
        <p className="text-xl mb-8">Control total, sin comisiones ocultas, y soporte cercano en cada paso.</p>
        <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
          <Link href={'#contact'}>Empieza Hoy</Link>
        </Button>
      </div>
    </section>

  )
}
