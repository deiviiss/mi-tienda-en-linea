import { IoStar } from 'react-icons/io5'
import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    quote: 'Gracias a Mi Tienda en Línea, pude lanzar mi negocio en tiempo récord. ¡El soporte es increíble!',
    author: 'Valeria Moreno',
    company: 'Bazar Campechano'
  },
  {
    quote: 'La flexibilidad y personalización que ofrecen es inigualable. Su soporte ha sido clave para nuestro éxito.',
    author: 'José Ruiz',
    company: 'Casa Quetzal'
  },
  {
    quote: 'El acompañamiento que recibimos fue clave para el éxito de nuestra tienda en línea.',
    author: 'Abigail Hilera',
    company: 'Shop Abigail'
  }
]

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
}

export function TestimonialSection() {
  return (
    <section className="bg-white text-gray-800 pb-20 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {
            testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, author, company }: TestimonialCardProps) {
  return (
    <Card className="bg-gray-100">
      <CardContent className="p-6">
        <div className='flex'>
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index}>
              <IoStar className="h-6 w-6 text-yellow-400 mb-4" />
            </span>
          ))}
        </div>
        <p className="text-gray-800 mb-4">&quot;{quote}&quot;</p>
        <div className="font-semibold">{author}</div>
        <div className="text-gray-600">{company}</div>
      </CardContent>
    </Card>
  )
}
