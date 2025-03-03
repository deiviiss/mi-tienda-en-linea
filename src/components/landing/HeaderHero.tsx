import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { TypeWritter } from '@/components/ui/type-writter/TypeWritter'

export const HeaderHero = () => {
  return (

    <section className='flex gap-2 relative sm:bg-[url("/imgs/banner.png")] bg-[url("/imgs/banner2.png")] bg-fixed bg-cover bg-top bg-no-repeat'>
      <div className="container flex flex-col justify-center items-center text-center mx-auto h-screen max-w-[720px] px-1 z-10 animate-fade-up">
        <h1 className="text-5xl leading-tight font-bold mb-6 tracking-wider pt-12">Tu Negocio Digital</h1>
        {/* <p className="text-xl mb-8">Ecommerce, Marketing Digital, Gestión de Proyectos.</p> */}
        <TypeWritter />
        <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
          <Link href={'#contact'}>Empieza Hoy</Link>
        </Button>
      </div>
    </section>

  )
}
