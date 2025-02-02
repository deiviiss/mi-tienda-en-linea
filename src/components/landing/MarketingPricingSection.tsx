import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

const pricingPlans = [
  {
    title: 'Marketing Básico',
    price: '$1,499',
    features: [
      'Administración de redes sociales: 2-3 publicaciones semanales (promoción directa en publicaciones)',
      'Creación de copys y diseños simples con Canva y herramientas de AI',
      'Calendario de publicaciones mensual',
      'Reporte básico de métricas (interacciones, alcance y crecimiento de seguidores) con explicación personalizada',
      'Asesoría inicial en gestión de proyectos (uso básico de Trello o Notion)',
      'Soporte y asesoría directa en marketing digital (enfoque en resultados simples y medibles)'
    ],
    slug: 'marketing-basic'
  },
  {
    title: 'Marketing Estándar',
    price: '$1,999',
    features: [
      'Todas las características del Plan Básico Integral',
      'Gestión de campañas publicitarias en Facebook Ads (usando el Administrador de Anuncios de Facebook, con configuraciones simples para tráfico frío y retargeting)',
      'Estrategia de contenido personalizada: 3-4 publicaciones semanales con optimización de copys y segmentación básica',
      'Informe mensual detallado con métricas clave (incluyendo CTR, interacciones y conversiones) explicado en reuniones directas',
      'Configuración básica de flujos de trabajo en herramientas como Asana, Trello o Notion',
      'Definición de objetivos claros (más seguidores, interacciones o contacto vía WhatsApp) y seguimiento personalizado'
    ],
    slug: 'marketing-standard'
  },
  {
    title: 'Marketing Premium',
    price: '$2,499',
    features: [
      'Todas las características del Plan Intermedio Integral',
      'Producción audiovisual: edición de videos e imágenes (utilizando CapCut y Clipchamp) adaptados a tu marca',
      'Gestión avanzada de campañas publicitarias: asesoría en segmentación, remarketing y pruebas básicas para optimizar resultados, explicado de forma sencilla',
      'Consultoría y soporte continuo en marketing digital, con reuniones mensuales para revisar resultados y ajustar estrategias',
      'Optimización de perfiles y actualización constante de imágenes y portadas en redes sociales',
      'Capacitación personalizada en marketing digital y en el uso de herramientas de gestión de proyectos, con enfoque práctico y directo'
    ],
    slug: 'marketing-premium'
  }
]

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  slug: string
}

export function MarketingPricingSection() {
  return (
    <section id="marketing" className="bg-gradient-to-b from-gray-700 to-gray-800 pb-20 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Planes de Suscripción Marketing Digital</h2>
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
          <Link href={`/princing/${slug}`} className='transition-all duration-300 hover:scale-105' >
            Más
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
