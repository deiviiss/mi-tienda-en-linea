import { Headphones, PenTool } from 'lucide-react'
import { type ReactNode } from 'react'
import { BsGlobeCentralSouthAsia } from 'react-icons/bs'
import { Card, CardContent } from '@/components/ui/card'

const valueCards = [
  {
    title: 'Control y Personalización',
    icon: <PenTool className="h-16 w-16" />,
    description: 'Sin limitaciones de grandes plataformas. Tu tienda, tus reglas.',
    color: 'bg-blue-600'
  },
  {
    title: 'Visibilidad Efectiva',
    icon: <BsGlobeCentralSouthAsia className="h-16 w-16" />,
    description: 'Destaca en tu nicho con campañas digitales focalizadas.',
    color: 'bg-teal-600'
  },
  {
    title: 'Soporte Personalizado',
    icon: <Headphones className="h-16 w-16" />,
    description: 'Acompañamiento constante para aprovechar al máximo tu plataforma.',
    color: 'bg-purple-600'
  }
]

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
  color: string
}

export function ValuePropositionSection() {
  return (
    <section className="bg-gradient-to-b from-gray-800 to-gray-700 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">¿Por qué elegir Mi Tienda en Línea?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {
            valueCards.map((card, index) => (
              <ValueCard key={index} {...card} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

function ValueCard({ icon, title, description, color }: ValueCardProps) {
  return (
    <Card className={`${color} text-white overflow-hidden transition-transform duration-300 hover:scale-105`}>
      <CardContent className="p-6 flex flex-col items-center text-center h-full">
        <div className="mb-6 p-4 bg-white bg-opacity-20 rounded-full">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-lg">{description}</p>
      </CardContent>
    </Card>
  )
}
