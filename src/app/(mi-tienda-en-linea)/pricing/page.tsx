'use client'

import { CheckCircle, XCircle } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { useState, useRef, useEffect, Suspense } from 'react'
import { FormContact } from './[slug]/FormContact'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function PlansPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Plans />
    </Suspense>
  )
}

function Plans() {
  const searchParams = useSearchParams()
  const planUser = searchParams.get('plan')

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
      slug: 'ecommerce-basic'
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
      slug: 'ecommerce-standard'
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
      slug: 'ecommerce-premium'
    },
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
      slug: 'marketing-basic'
    },
    {
      title: 'Marketing Premium',
      price: '$4,499',
      features: [
        '12 Posts a la semana para mantener tu marca constantemente visible',
        '8 Videos cortos (spot) con contenido impactante',
        'Pauta publicitaria de $1000 para maximizar tu alcance',
        '12 Historias a la semana para interactuar más con tu audiencia',
        'Estrategia de contenido personalizada',
        'Análisis avanzado de métricas y conversiones',
        'Soporte prioritario',
        'Acompañamiento personalizado'
      ],
      slug: 'marketing-premium'
    },
    {
      title: 'Chatbot Básico',
      price: '$499',
      features: [
        'Validación de números de WhatsApp usando la API de Meta',
        'Automatización de respuestas con información predefinida (horarios, preguntas frecuentes, productos, etc.)',
        'Flujos de conversación básicos para guiar a los usuarios',
        'Asesoría en la creación de mensajes automáticos',
        '2 cambios mensuales en los mensajes del chatbot'
      ],
      slug: 'chatbot-basic'
    },
    {
      title: 'Chatbot Estándar',
      price: '$799',
      features: [
        'Todas las características del plan Básico',
        'Flujos de conversación más complejos y avanzados para guiar al usuario a través de múltiples opciones',
        'Integración con Servicios de Google para agendar citas y almacenar información de los usuarios',
        'Asesoría continua en la optimización de flujos',
        '5 cambios mensuales en los mensajes del chatbot'
      ],
      slug: 'chatbot-standard'
    },
    {
      title: 'Chatbot Premium',
      price: '$1,199',
      features: [
        'Todas las características del plan Avanzado',
        'Integración completa con bases de datos externas para consultas avanzadas',
        'Automatización de respuestas para múltiples servicios y productos',
        'Mantenimiento continuo y actualizaciones de mensajes según la evolución del negocio',
        '15 cambios mensuales en los mensajes del chatbot'
      ],
      slug: 'chatbot-premium'
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
        { name: '6 Posts a la semana', plans: [true, true] },
        { name: '12 Posts a la semana', plans: [false, true] },
        { name: 'Pauta publicitaria de $500', plans: [true, true] },
        { name: 'Pauta publicitaria de $1000', plans: [false, true] },
        { name: 'Estrategia de contenido personalizada', plans: [false, true] },
        { name: '4 videos cortos', plans: [true, true] },
        { name: '8 videos cortos', plans: [false, true] },
        { name: '6 Historias a la semana', plans: [true, true] },
        { name: '12 Historias a la semana', plans: [false, true] },
        { name: 'Análisis avanzado de métricas y conversiones', plans: [false, true] },
        { name: 'Reportes simples de rendimiento', plans: [true, true] }
      ]
    },
    {
      category: 'Chatbots y Automatización',
      items: [
        { name: 'Validación de números de WhatsApp', plans: [true, true, true] },
        { name: '2 cambios mensuales en los mensajes del chatbot', plans: [true, true, true] },
        { name: '5 cambios mensuales en los mensajes del chatbot', plans: [false, true, true] },
        { name: '15 cambios mensuales en los mensajes del chatbot', plans: [false, false, true] },
        { name: 'Automatización de respuestas', plans: [true, true, true] },
        { name: 'Flujos de conversación básicos', plans: [true, true, true] },
        { name: 'Flujos avanzados', plans: [false, false, true] },
        { name: 'Integración con Google Services', plans: [false, true, true] },
        { name: 'Integración con bases de datos externas', plans: [false, false, true] }
      ]
    }
  ]

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

  useEffect(() => {
    if (!planUser) {
      setSelectedPlan('chatbot-standard')
    } else {
      setSelectedPlan(planUser)
    }
  }, [planUser])

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

      <div className="py-10 px-2 text-white">
        {/* Plans */}
        <Carousel
          opts={{
            align: 'start'
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="">
            {pricingPlans.map((plan, index) => {
              const { title, price, features, slug } = plan

              const isSelected = slug === selectedPlan
              return (

                <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                  <Card
                    key={index}
                    className={`bg-gradient-to-br ${isSelected ? 'from-blue-600 to-blue-800' : 'from-gray-700 to-gray-900'} text-white overflow-hidden shadow-xl cursor-pointer flex flex-col justify-between h-full`}
                    onClick={() => { setSelectedPlan(slug) }}
                  >
                    <div>
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
                    </div>
                    <CardFooter className="p-6">
                      <Button onClick={() => { setSelectedPlan(slug) }} className={`w-full ${isSelected ? 'bg-yellow-400 hover:bg-yellow-500 text-gray-900' : 'bg-white hover:bg-gray-100 text-gray-900'} font-bold py-3 rounded-full transition-colors duration-300  hover:scale-105`}>
                        {isSelected ? 'Seleccionado' : 'Seleccionar plan'}
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious variant={'secondary'} className='h-10 w-10 -top-8 left-0 xl:top-1/2 xl:-left-8' />
          <CarouselNext variant={'secondary'} className='h-10 w-10 -top-8 right-0 xl:top-1/2 xl:-right-8' />
        </Carousel>

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
