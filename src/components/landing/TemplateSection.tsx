import Image from 'next/image'
import Link from 'next/link'
import { IoEyeOutline } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const templates = [
  {
    id: '1',
    image: '/imgs/placeholder.jpg',
    title: 'only-cart',
    category: 'Basic',
    description: 'Template simple y efectivo para tiendas pequeñas.',
    plan: 'Basic',
    url: 'https://only-cart.vercel.app/',
    slug: 'only-cart'
  },
  {
    id: '2',
    image: '/imgs/moda.png',
    title: 'moda shop',
    category: 'MVP',
    description: 'Template con diseño elegante para tiendas de moda.',
    plan: 'estandard',
    url: 'https://moda-shop.vercel.app/',
    slug: 'moda-shop'
  },
  {
    id: '3',
    image: '/imgs/bazar.png',
    title: 'bazar campechano',
    category: 'MVP',
    description: 'Template versátil para tiendas de productos variados',
    plan: 'estandard',
    url: 'https://bazarcampechano.com',
    slug: 'bazar-campechano'
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
        <div className="grid md:grid-cols-3 gap-8">
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
    <Card className="overflow-hidden">
      <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover pb-2" />
      <CardContent>
        <h3 className="text-xl font-semibold uppercase mb-1">{title}</h3>
        <p className="text-sm text-gray-400 mb-2">{category}</p>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-sm font-semibold mb-4">Disponible en: Plan {plan}</p>
        <div className='w-full flex justify-center'>
          <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-full">
            <Link href={`templates/${id}`} className='flex items-center justify-center'>
              <IoEyeOutline color={'#FFFFFF'} height="20px" width="20px" className="mr-2" />
              Ver Demo
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
