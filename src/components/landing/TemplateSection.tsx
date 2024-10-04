import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const templates = [
  // {
  //   id: '1',
  //   image: '/imgs/placeholder.jpg',
  //   title: 'only-cart',
  //   category: 'Basic',
  //   description: 'Template simple y efectivo para tiendas pequeñas.',
  //   plan: 'Basic',
  //   url: 'https://only-cart.vercel.app/',
  //   slug: 'only-cart'
  // },
  {
    id: '2',
    image: 'https://res.cloudinary.com/cloudinary-api-images/image/upload/v1727216675/mi-tienda-en-linea-shop/rf98xdgad3zez6yzztap.png',
    title: 'bazar campechano',
    category: 'MVP',
    description: 'Template versátil para tiendas de productos variados',
    plan: 'estandard',
    url: 'https://bazarcampechano.com',
    slug: 'bazar-campechano'
  },
  {
    id: '3',
    image: 'https://res.cloudinary.com/cloudinary-api-images/image/upload/v1727220023/mi-tienda-en-linea-shop/zsa3mut5xhzggrvf0lvc.png',
    title: 'moda shop',
    category: 'MVP',
    description: 'Template con diseño elegante para tiendas de moda.',
    plan: 'estandard',
    url: 'https://moda-shop.vercel.app/',
    slug: 'moda-shop'
  }
  // {
  //   image: '/imgs/placeholder.jpg',
  //   title: 'custom',
  //   category: 'custom',
  //   description: 'Diseña tu propio template personalizado',
  //   plan: 'custom y premium'
  // }
]

interface TemplateCardProps {
  id: string
  image: string
  title: string
  description: string
  category: string
  plan: string
  url: string
}

export function TemplateSection() {
  return (
    <section id="templates" className="bg-white text-gray-800 pb-20 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Explora Nuestros Templates</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-[1200px] mx-auto">
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

function TemplateCard({ image, title, description, category, plan, id }: TemplateCardProps) {
  return (
    <Card className="overflow-hidden max-w-[450px] mx-auto">
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover pb-2" />
      <CardContent>
        <h3 className="text-xl font-semibold uppercase mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{category}</p>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm font-semibold mb-4">Disponible en: Plan {plan}</p>
        <div className='w-full flex justify-center'>
          <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-full">
            <Link href={`templates/${id}`} className='flex items-center justify-center'>
              Ver
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
