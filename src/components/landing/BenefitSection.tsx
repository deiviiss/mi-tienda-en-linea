'use client'
import Autoplay from 'embla-carousel-autoplay'
import { CheckCircle, Globe, Heart, MessageCircle, PenToolIcon, Users } from 'lucide-react'
import { useRef } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const benefits = [
  {
    icon: <Users className="h-12 w-12 text-blue-500" />,
    title: 'Acompañamiento Cercano y Personalizado',
    description: 'Te brindamos apoyo constante para que puedas gestionar tu tienda en línea de manera simple, con asesoría en cada paso.'
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-blue-500" />,
    title: 'Asesoría Simple para No Expertos',
    description: 'No necesitas ser un experto en tecnología. Te guiamos en cómo organizar y gestionar tus productos de forma clara y efectiva.'
  },
  {
    icon: <Globe className="h-12 w-12 text-blue-500" />,
    title: 'Expansión de Audiencia',
    description: 'Con estrategias de marketing digital, tu tienda puede llegar a una audiencia más amplia, ampliando significativamente tu base de clientes potenciales.'
  },
  {
    icon: <PenToolIcon className="h-12 w-12 text-blue-500" />,
    title: 'Plataforma Intuitiva y Eficiente',
    description: 'Simplicidad en el uso, adaptada a personas que buscan facilidad sin sacrificar la organización de su tienda.'
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-blue-500" />,
    title: 'Automatización con Chatbots',
    description: 'Ofrece atención al cliente las 24 horas del día, respondiendo automáticamente a las consultas y mejorando la experiencia del usuario.'
  },
  {
    icon: <Heart className="h-12 w-12 text-blue-500" />,
    title: 'Confianza y Trato Personalizado',
    description: 'Queremos que sientas confianza en todo el proceso. Ofrecemos un trato humano y cercano para ayudarte a alcanzar tus metas.'
  }
]

interface BenefitCardProps {
  icon: JSX.Element
  title: string
  description: string
}

export function BenefitSection() {
  const plugin = useRef(
    Autoplay({ delay: 3000 })
  )
  return (
    <section className="bg-white text-gray-800 pb-20 pt-24">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Lo que obtienes con MiTiendaEnLínea</h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start'
          }}
          className="w-full max-w-3xl mx-auto md:hidden"
        >
          <CarouselContent className="">
            {
              benefits.map((benefif, index) => {
                return (
                  <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                    <BenefitCard {...benefif} />
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {
            benefits.map((benefif, index) => {
              return (
                <BenefitCard key={index} {...benefif} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
