import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

const pricingPlans = [
  {
    title: 'Marketing Básico',
    price: '$2,499',
    features: [
      '6 Posts a la semana para mantener tu marca activa',
      '4 Videos cortos (spot) para generar engagement',
      'Pauta publicitaria de $500 para impulsar tu alcance',
      '6 Historias a la semana para conectar directamente con tu audiencia',
      'Asesoría básica en gestión de contenido',
      'Reportes simples de rendimiento',
      'Soporte básico',
      'Acompañamiento personalizado'
    ],
    plan: 'marketing-basic'
  },
  {
    title: 'Ecommerce Estándar',
    price: '$299',
    features: [
      'Todas las características del plan ecommerce básico',
      'Registro de clientes',
      'Hasta 500 productos incluidos',
      'Integración con pasarelas de pago (Paypal, Mercado Pago, transferencias, efectivo)',
      'Páginas legales y de contacto',
      'Soporte prioritario',
      'Análisis avanzado de ventas',
      'Acompañamiento personalizado'
    ],
    plan: 'ecommerce-standard'
  },
  {
    title: 'Chatbot Estándar',
    price: '$799',
    features: [
      'Todas las características del plan ChatBot Básico',
      'Flujos de conversación más complejos y avanzados para guiar al usuario a través de múltiples opciones',
      'Integración con Servicios de Google para agendar citas y almacenar información de los usuarios',
      'Asesoría continua en la optimización de flujos',
      '5 cambios mensuales en los mensajes del chatbot'
    ],
    plan: 'chatbot-standard'
  }
]

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  plan: string
}

export function PricingSection() {
  return (
    <section id="pricing" className="bg-gradient-to-b from-gray-800 to-gray-700 pb-20 pt-24">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="text-3xl font-bold mb-12 text-center">Planes para tu Negocio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {
            pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            )
            )
          }
        </div>
        <Button
          variant='outline'
          className="mt-16 mx-auto block rounded-full bg-transparent"
        ><Link href="/pricing">Todos nuestros planes</Link></Button>

      </div>
    </section>
  )
}

function PricingCard({ title, price, features, plan }: PricingCardProps) {
  const isPopular = title === 'Chatbot Estándar'
  return (
    <Card className={`bg-gradient-to-br ${isPopular ? 'from-blue-600 to-blue-800' : 'from-gray-700 to-gray-900'} text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl flex flex-col justify-between`}>
      <div>
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
      </div>
      <CardFooter className="p-6">
        <Button asChild className={`w-full ${isPopular ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-white hover:bg-gray-100 text-gray-900'} font-bold py-3 rounded-full transition-colors duration-300`}>
          <Link href={`/pricing?plan=${plan}`} className='transition-all duration-300 hover:scale-105' >
            Más
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
