import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const HeaderHero = () => {
  return (
    <section className="container flex flex-col justify-center items-center text-center mx-auto h-screen max-w-[720px] mt-16 px-1">
      <h1 className="text-5xl font-bold mb-6 tracking-wider">Transforma tu negocio con tu propia tienda en línea</h1>
      <p className="text-xl mb-8">Control total, sin comisiones ocultas, y soporte cercano en cada paso.</p>
      <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
        <Link href={'#contact'}>Empieza Hoy</Link>
      </Button>
    </section>
  )
}
