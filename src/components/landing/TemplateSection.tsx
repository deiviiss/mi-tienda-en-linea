'use client'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'
import Autoplay from 'embla-carousel-autoplay'
import { Calendar, ExternalLink, Tag, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Dialog, DialogClose, DialogContent, DialogHeader } from '@/components/ui/dialog'

const templates = [
  {
    title: 'Bazar Campechano',
    type: 'Web Application',
    category: 'E-commerce',
    image: 'https://res.cloudinary.com/cloudinary-api-images/image/upload/v1727216675/mi-tienda-en-linea-shop/rf98xdgad3zez6yzztap.png',
    description: 'Desarrollo de una plataforma de e-commerce versátil, ideal para bazares y tiendas con productos variados. Con opciones avanzadas para gestionar inventarios y procesar pagos.',
    features: [
      'Catálogo extensivo con categorías personalizables',
      'Gestión ilimitada de productos con opciones avanzadas de filtrado',
      'Interfaz intuitiva con diseño adaptable a múltiples dispositivos',
      'Integración completa con diversas pasarelas de pago (Paypal, Mercado Pago, transferencias)',
      'Dashboard avanzado con informes de ventas, tráfico y rendimiento',
      'Diseño completamente personalizable con colores y logos propios'
    ],
    technologies: ['NextJs', 'TypeScript', 'NestJs', 'Docker', 'Postgres', 'Prisma', 'Tailwind', 'Cloudinary'],
    scope: 'Solución Personalizada',
    url: 'https://bazarcampechano.com',
    date: '2024-08-09'
  },
  {
    title: 'Piscina en Casa',
    type: 'Landing Page',
    category: 'Servicios',
    image: 'https://res.cloudinary.com/cloudinary-api-images/image/upload/v1745153652/mi-tienda-en-linea-shop/piscinaencasa_nipsve.png',
    description: 'Landing page para promocionar el servicio de renta de piscina portátil, con detalles técnicos, condiciones del servicio y descarga de contrato. ',
    features: [
      'Explicación clara del servicio y su funcionamiento paso a paso',
      'Sección detallada con especificaciones técnicas y tiempos estimados',
      'Condiciones completas del servicio accesibles desde la página',
      'Descarga de contrato y términos legales en PDF',
      'Formulario de contacto e integración directa con WhatsApp'
    ],
    technologies: ['NextJs', 'TypeScript', 'Tailwind', 'Shadcn', 'Lucide Icons'],
    scope: 'Diseño a la medida',
    url: 'https://piscinaencasa.vercel.app/',
    date: '2025-04-18'
  },
  {
    title: 'Ms. Kelly ESL Academy',
    type: 'Landing Page',
    category: 'Educational',
    image: 'https://res.cloudinary.com/cloudinary-api-images/image/upload/v1741975673/mi-tienda-en-linea-shop/esl-academic_npjptl.png',
    description: 'Desarrollo de una página web para la academia Ms. Kelly ESL Academy, donde se proporcionan recursos y contenido educativo para estudiantes de inglés.',
    features: [
      'Información sobre clases y metodología de enseñanza',
      'Recursos educativos gratuitos para estudiantes',
      'Interfaz intuitiva y adaptable a dispositivos móviles'
    ],
    technologies: ['NextJs', 'TypeScript', 'Tailwind', 'Shadcn'],
    scope: 'Diseño a la medida',
    url: 'https://esl-academic.vercel.app/',
    date: '2025-02-28'
  },
  {
    title: 'Educational Newsletter',
    type: 'Web Application',
    category: 'Educational',
    image: 'https://res.cloudinary.com/cloudinary-api-images/image/upload/v1741975672/mi-tienda-en-linea-shop/educational-ewsletter_zhpqqr.png',
    description: 'Desarrollo de un sistema de boletines informativos para la Fundación GK y la escuela El Huerto de la Ilusión, permitiendo la gestión de suscriptores y la creación de newsletters personalizados.',
    features: [
      'Gestión de listas de suscriptores',
      'Creación y personalización de newsletters',
      'Interfaz intuitiva para administradores',
      'Acceso rápido a información de interés para los padres'
    ],
    technologies: ['NextJs', 'TypeScript', 'Postgres', 'Tailwind'],
    scope: 'Creación exclusiva',
    url: 'https://educationalnewsletter.vercel.app/',
    date: '2024-11-25'
  },
  {
    title: 'Dream Nails Chatbot',
    type: 'Chatbot',
    category: 'Automation',
    image: 'https://res.cloudinary.com/cloudinary-api-images/image/upload/v1742078342/mi-tienda-en-linea-shop/dream-nails-chatbot_q08fvl.png',
    description: 'Desarrollo de un chatbot para Dream Nails que integra inteligencia artificial para responder preguntas frecuentes y automatizar la gestión de citas.',
    features: [
      'Asistente virtual para responder preguntas frecuentes',
      'Automatización de agendamiento de citas',
      'Integración con Google Calendar y WhatsApp Business'
    ],
    technologies: ['Node.js', 'Make', 'WhatsApp API', 'Google Calendar API'],
    scope: 'Desarrollo Innovador',
    url: 'https://api.whatsapp.com/send/?phone=529812099475&text=Hola%2C+me+gustar%C3%ADa+agendar+una+cita...&type=phone_number&app_absent=0',
    date: '2025-02-07'
  },
  {
    title: 'Casa Quetzal',
    type: 'Landing Page',
    category: 'E-commerce',
    image: 'https://res.cloudinary.com/cloudinary-api-images/image/upload/v1741975672/mi-tienda-en-linea-shop/quetzal-seed_kvisnr.png',
    description: 'Desarrollo de una landing page para Casa Quetzal Cannabis Seeds, enfocada en presentar la marca y sus valores de sustentabilidad, innovación genética y trazabilidad.',
    features: [
      'Presentación de la marca y sus valores',
      'Información sobre productos y genética avanzada',
      'Diseño moderno y adaptable a dispositivos móviles'
    ],
    technologies: ['NextJs', 'TypeScript', 'Tailwind', 'Shadcn'],
    scope: 'Solución Personalizada',
    url: 'https://quetzalseeds420.vercel.app/',
    date: '2025-02-27'
  },
  {
    title: 'Dream Nails Marketing',
    type: 'Marketing Strategy',
    category: 'Marketing',
    image: 'https://res.cloudinary.com/cloudinary-api-images/image/upload/v1742077688/mi-tienda-en-linea-shop/dream-nails-marketing_dlvo36.png',
    description: 'Gestión de contenido y estrategia de marketing digital para Dream Nails, enfocada en mejorar la presencia en redes sociales y captar más clientes.',
    features: [
      'Creación de copies atractivos para publicaciones',
      'Optimización de contenido para redes sociales',
      'Análisis de rendimiento y mejoras en la estrategia de marketing'
    ],
    technologies: ['Social Media Marketing', 'Copywriting', 'Content Strategy'],
    scope: 'Creación exclusiva',
    url: 'https://www.facebook.com/profile.php?id=100095532879449',
    date: '2025-02-13'
  }
]

interface TemplateCardProps {
  title: string
  type: string
  category: string
  description: string
  features: string[]
  technologies: string[]
  scope: string
  url: string
  date: string
  image: string
}

export function TemplateSection() {
  const plugin = useRef(
    Autoplay({ delay: 3000 })
  )
  return (
    <section id="templates" className="bg-white text-gray-800 pb-20 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-1 text-center">Nuestros Clientes, Nuestros Proyectos</h2>
        <h3 className='text-xl font-semibold mb-12 text-center text-gray-400'>Soluciones digitales efectivas para tu negocio</h3>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start'
          }}
          className="w-full max-w-3xl sm:max-w-6xl mx-auto"
        >
          <CarouselContent className="">
            {
              templates.map((template, index) => {
                return (
                  <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                    <TemplateCard {...template} />
                  </CarouselItem>
                )
              })
            }
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="hidden gap-8 max-w-[1200px] mx-auto">
          {
            templates.map((template, index) => (
              <TemplateCard key={index} {...template} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

function TemplateCard({ image, title, description, category, date, scope, technologies, type, url }: TemplateCardProps) {
  // Format date to be more readable
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null)

  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full bg-muted">
        <img
          src={image || '/placeholder.svg'}
          alt={title}
          className="w-full h-full object-cover"
          onClick={() => { setSelectedImageUrl(image) }}
        />
        <ImageModal imageUrl={selectedImageUrl} url={url} title={title} onClose={() => { setSelectedImageUrl(null) }} />
      </div>
      <CardHeader className="p-4 pb-0">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs font-normal">
                {category}
              </Badge>
              <Badge variant="secondary" className="text-xs font-normal">
                {type}
              </Badge>
            </div>
            <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-grow">
        <div>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-6">{description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Tag className="h-4 w-4" />
            <span>{scope}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={url} target="_blank" rel="noopener noreferrer" className="w-full">
          <Button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-md font-medium transition-colors">
            Ver demo
            <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

interface ImageModalProps {
  imageUrl?: string | null
  url: string
  title: string
  onClose: () => void
}
function ImageModal({ imageUrl, onClose, url, title }: ImageModalProps) {
  return (
    <Dialog open={!!imageUrl} onOpenChange={onClose}>
      <DialogContent className="w-full sm:max-w-[100vh] max-h-[90vh] p-0 overflow-hidden bg-primary bg-opacity-65 border-none">
        <DialogClose className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-0 hover:bg-primary hover:text-white transition-opacity z-10">
          <X className="h-4 w-4" />
          <span className="sr-only">Cerrar</span>
        </DialogClose>

        {imageUrl && (
          <div className="relative w-full h-[70vh] sm:h-[90vh]">
            <DialogHeader className='flex items-center justify-center gap-2 w-full absolute top-16 sm:top-12'>
              <DialogTitle>
                <h1 className='text-secondary text-2xl'>{title}</h1>
              </DialogTitle>
            </DialogHeader>
            <Image
              src={imageUrl}
              alt="Imagen en modal"
              fill
              className="rounded-lg object-contain"
            />
            <Button
              asChild
              variant={'secondary'}
              className="flex items-center justify-center gap-2 w-full absolute bottom-10 right-10 z-10"
            >
              <Link href={url} target="_blank" className='max-w-56 w-full mx-auto'>
                Ver demo
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}

      </DialogContent>
      <DialogDescription className='hidden'></DialogDescription>
    </Dialog>
  )
}
