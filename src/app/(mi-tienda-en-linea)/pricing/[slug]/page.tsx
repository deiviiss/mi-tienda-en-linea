'use client'

import { CheckCircle, XCircle } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { FormContact } from './FormContact'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface Props {
  params: {
    slug: string
  }
}

export default function PlanBySlugPage({ params }: Props) {
  const { slug } = params

  const pricingPlans = [
    {
      title: 'Ecommerce Básico',
      price: '$99',
      features: [
        'Carrito de compras',
        'Catálogo de productos',
        'Hasta 100 productos incluidos',
        'Mantenimiento de productos (sin registro de clientes)',
        'Mantenimiento de pedidos',
        'Soporte básico',
        'Estadísticas básicas de ventas',
        'Asistencia de marketing inicial',
        'Acompañamiento personalizado'
      ],
      slug: 'basic'
    },
    {
      title: 'Ecommerce Estándar',
      price: '$299',
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
      title: 'Ecommerce Premium',
      price: '$499',
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
    },
    {
      title: 'Marketing Básico',
      price: '$149',
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
      price: '$349',
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
      price: '$599',
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

  const pricingPlansOptions = pricingPlans.map((plan) => {
    return {
      slug: plan.slug,
      title: plan.title
    }
  })

  const planTitles = ['Básico', 'Estándar', 'Premium']

  const features = [
    {
      category: 'Gestión de Productos y Pedidos',
      items: [
        { name: 'Carrito de compras', plans: [true, true, true] },
        { name: 'Catálogo de productos', plans: [true, true, true] },
        { name: 'Hasta 100 productos incluidos', plans: [true, true, true] },
        { name: 'Hasta 500 productos incluidos', plans: [false, true, true] },
        { name: 'Productos ilimitados', plans: [false, false, true] },
        { name: 'Mantenimiento de productos (sin registro de clientes)', plans: [true, true, true] },
        { name: 'Mantenimiento de pedidos', plans: [true, true, true] },
        { name: 'Registro de clientes', plans: [false, true, true] }
      ]
    },
    {
      category: 'Integración de Pagos y Legal',
      items: [
        { name: 'Integración con pasarelas de pago (Paypal, Mercado Pago, transferencias, efectivo)', plans: [false, true, true] },
        { name: 'Páginas legales y de contacto', plans: [false, true, true] },
        { name: 'Páginas legales y de contacto personalizables', plans: [false, true, true] }
      ]
    },
    {
      category: 'Soporte y Acompañamiento',
      items: [
        { name: 'Soporte básico', plans: [true, true, true] },
        { name: 'Soporte prioritario', plans: [false, true, true] },
        { name: 'Asistencia de marketing inicial', plans: [true, true, true] },
        { name: 'Acompañamiento personalizado', plans: [true, true, true] }
      ]
    },
    {
      category: 'Análisis y Estadísticas',
      items: [
        { name: 'Estadísticas básicas de ventas', plans: [true, true, true] },
        { name: 'Análisis avanzado de ventas', plans: [false, true, true] },
        { name: 'Dashboard avanzado', plans: [false, false, true] }
      ]
    },
    {
      category: 'Personalización y Mantenimiento',
      items: [
        { name: 'Personalización avanzada', plans: [false, true, true] },
        { name: 'Diseño exclusivo', plans: [false, false, true] },
        { name: 'Actualizaciones y mantenimiento continuo', plans: [true, true, true] }
      ]
    },
    {
      category: 'Marketing y Estrategia Digital',
      items: [
        { name: 'Administración de redes sociales: 2-3 publicaciones semanales', plans: [true, true, true] },
        { name: 'Creación de copys y diseños simples con Canva', plans: [true, true, true] },
        { name: 'Gestión de campañas publicitarias en Facebook Ads', plans: [false, true, true] },
        { name: 'Producción audiovisual: edición de videos e imágenes', plans: [false, false, true] },
        { name: 'Consultoría continua en marketing digital', plans: [false, false, true] }
      ]
    }
  ]

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  useEffect(() => {
    if (slug) {
      setSelectedPlan(slug)
    }
  }, [slug])

  const [showAllFeatures, setShowAllFeatures] = useState(false)
  const [activeCategory, setActiveCategory] = useState('Gestión de Productos y Pedidos')
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (showAllFeatures && scrollAreaRef.current) {
      const categoryElement = scrollAreaRef.current.querySelector(`[data-category="${activeCategory}"]`)
      if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [activeCategory, showAllFeatures])

  return (
    <>
      <header className="border-t-[1px] shadow print:hidden">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl text-center font-bold text-white">Todos nuestros planes</h1>
        </div>
      </header>

      <div className="py-10 text-white">
        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 p-1 sm:p-5 max-w-[1300px] mx-auto">
          {pricingPlans.map((plan, index) => {
            const { title, price, features, slug } = plan

            const isSelected = slug === selectedPlan
            return (

              <Card
                key={index}
                className={`bg-gradient-to-br ${isSelected ? 'from-blue-600 to-blue-800' : 'from-gray-700 to-gray-900'} text-white overflow-hidden transition-all duration-300 hover:scale-105 shadow-xl cursor-pointer`}
                onClick={() => { setSelectedPlan(slug) }}
              >
                <CardHeader className="text-center p-6 relative">
                  {isSelected && (
                    <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
                      Seleccionado
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
                  <Button onClick={() => { setSelectedPlan(slug) }} className={`w-full ${isSelected ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-white hover:bg-gray-100 text-gray-900'} font-bold py-3 rounded-full transition-colors duration-300  hover:scale-105`}>
                    {isSelected ? 'Seleccionado' : 'Seleccionar plan'}
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>

        {/* Details plans */}
        <Button
          variant='outline'
          onClick={() => { setShowAllFeatures(!showAllFeatures) }}
          className="my-20 mx-auto block rounded-full bg-transparent"
        >
          {showAllFeatures ? 'Ocultar todas las funcionalidades' : 'Mostrar todas las funcionalidades'}
        </Button>

        {showAllFeatures && (
          <div className="flex justify-center mb-20">
            <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory} orientation="vertical" className="min-[700px]:flex w-full px-1 lg:w-auto">
              <TabsList className="bg-gray-800 h-auto flex flex-col items-stretch justify-start rounded-lg text-white mb-2 min-[700px]:mr-4">
                {features.map((category) => (
                  <TabsTrigger
                    key={category.category}
                    value={category.category}
                    className="text-left py-3 px-4 border-l-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-gray-700"
                  >
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex-grow">
                {features.map((category) => (
                  <TabsContent key={category.category} value={category.category} className="mt-0 min-w-[300px]  lg:min-w-[700px] lg:max-w-[700px]">
                    <ScrollArea className="h-[500px] rounded-md border border-gray-700">
                      <table className="w-full">
                        <thead className="bg-gray-800 sticky top-0">
                          <tr>
                            <th className="p-2 text-left w-1/3"></th>
                            {planTitles.map((title, index) => (
                              <th key={index} className="p-2 text-center">
                                {title}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {category.items.map((feature, featureIndex) => (
                            <tr key={featureIndex} className="border-b border-gray-700">
                              <td className="p-2 max-w-10 sm:min-w-10 overflow-hidden">{feature.name}</td>
                              {feature.plans.map((available, planIndex) => (
                                <td key={planIndex} className="p-2 text-center">
                                  {available
                                    ? <CheckCircle className="inline-block text-green-500" />
                                    : <XCircle className="inline-block text-red-500" />
                                  }
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </ScrollArea>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        )}

        {/* CTA */}
        <section className="bg-blue-600 pb-20 pt-24 mb-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para impulsar tu negocio?</h2>
            <p>Completa el formulario a continuación y comienza tu viaje.</p>
          </div>
        </section >

        {/* Contact Form */}
        < FormContact pricingPlans={pricingPlansOptions} selectedPlan={selectedPlan || ''
        } setSelectedPlan={setSelectedPlan} />
      </div >
    </>
  )
}
