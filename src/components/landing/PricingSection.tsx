import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

const pricingPlans = [
  {
    title: 'Plan Básico',
    price: '$199',
    features: [
      'Carrito de compras',
      'Catálogo de productos',
      'Hasta 100 productos incluidos',
      'Mantenimiento de productos (sin registro de clientes)',
      'Mantenimiento de pedidos',
      'Soporte básico',
      'Estadísticas básicas de ventas',
      'Asistencia de marketing inicial',
      'Acompañamiento personalizado'],
    slug: 'basic'
  },
  {
    title: 'Plan Estándar',
    price: '$399',
    features: [
      'Todas las características del plan básico',
      'Registro de clientes',
      'Hasta 500 productos incluidos',
      'Integración con pasarelas de pago (Paypal, Mercado Pago, transferencias, efectivo)',
      'Páginas legales y de contacto',
      'Soporte prioritario',
      'Análisis avanzado de ventas',
      'Asistencia de marketing inicial',
      'Acompañamiento personalizado'
    ],
    slug: 'standard'
  },
  {
    title: 'Plan Premium',
    price: '$599',
    features: [
      'Todas las características estándar',
      'Productos ilimitados',
      'Personalización avanzada',
      'Páginas legales y de contacto personalizables',
      'Diseño exclusivo',
      'Dashboard avanzado',
      'Actualizaciones y mantenimiento continuo',
      'Asistencia de marketing inicial',
      'Acompañamiento personalizado'
    ],
    slug: 'premium'
  }
]

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  slug: string
}

export function PricingSection() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-gray-800 to-gray-700 pb-20 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Planes de Suscripción</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {
            pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            )
            )
          }
        </div>
      </div>
    </section>
  )
}

function PricingCard({ title, price, features, slug }: PricingCardProps) {
  const isPopular = title === 'Plan Premium'
  return (
    <Card className={`bg-gradient-to-br ${isPopular ? 'from-blue-600 to-blue-800' : 'from-gray-700 to-gray-900'} text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl`}>
      <CardHeader className="text-center p-6 relative">
        {isPopular && (
          <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
            Más Popular
          </div>
        )}
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-center justify-center">
          <span className="text-5xl font-extrabold">{price}</span>
          <span className="text-xl ml-2">/mes</span>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6">
        <Button asChild className={`w-full ${isPopular ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-white hover:bg-gray-100 text-gray-900'} font-bold py-3 rounded-full transition-colors duration-300`}>
          <Link href={`/princing/${slug}`} >
            Elegir Plan
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
