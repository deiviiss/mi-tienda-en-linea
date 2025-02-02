'use client'

import { Printer } from 'lucide-react'
import { useState, useEffect } from 'react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'

interface ISection {
  id: string
  title: string
}

export const SectionContentTerms = () => {
  const [activeSection, setActiveSection] = useState('descripcion')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredSections, setFilteredSections] = useState<ISection[]>([])

  const sections = [
    { id: 'descripcion', title: 'Descripción del Servicio' },
    { id: 'responsabilidad', title: 'Responsabilidad del Usuario' },
    { id: 'limitaciones', title: 'Limitaciones del Servicio' },
    { id: 'planes', title: 'Planes y Productos' },
    { id: 'rescision', title: 'Rescisión y Cancelación' },
    { id: 'mantenimiento', title: 'Mantenimiento y Soporte' },
    { id: 'reembolsos', title: 'Reembolsos' },
    { id: 'modificaciones', title: 'Modificaciones' },
    { id: 'ley', title: 'Ley Aplicable' }
  ]

  useEffect(() => {
    setFilteredSections(
      sections.filter(section =>
        section.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
  }, [searchTerm])

  const handlePrint = () => {
    window.print()
  }

  const handleAccept = () => {
    toast.success('Términos y Condiciones Aceptados',
      {
        position: 'top-right',
        duration: 2000
      }
    )
  }
  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-6">
        <nav className="w-full md:w-64 flex-shrink-0 print:hidden">
          <Card className="bg-gradient-to-br from-gray-700 to-gray-900 shadow-xl">
            <CardContent className="p-4">
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Buscar..."
                  value={searchTerm}
                  onChange={(e) => { setSearchTerm(e.target.value) }}
                  className="border-blue-600"
                />
              </div>
              <ScrollArea className="h-[calc(100vh-200px)]">
                {filteredSections.map((section) => (
                  <Button
                    key={section.id}
                    variant={activeSection === section.id ? 'primary' : 'ghost'}
                    className="w-full justify-start mb-2 text-left text-blue-100 hover:text-white hover:bg-blue-800"
                    onClick={() => { setActiveSection(section.id) }}
                  >
                    {section.title}
                  </Button>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>
        </nav>
        <div className="flex-grow">
          <Card className="bg-gray-800 bg-opacity-50">
            <CardContent className="p-6">
              <ScrollArea className="h-[calc(100vh-200px)]">
                {activeSection === 'descripcion' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">1. Descripción del Servicio</h2>
                    <p className="text-gray-200">Mi Tienda en Línea ofrece la creación y mantenimiento de tiendas online personalizadas bajo un esquema de membresía. Cada tienda es desplegada en servidores de Vercel y utiliza Cloudinary para el almacenamiento de imágenes. Los usuarios pueden elegir entre diferentes planes de suscripción con características escalables como el número de productos y funcionalidades adicionales. El dominio personalizado es responsabilidad del usuario, aunque Mi Tienda en Línea ofrece asistencia en el proceso de adquisición.</p>
                    <p className="text-gray-200 mt-1">Ofrecemos un enfoque integral que no solo cubre la parte técnica de la tienda, sino que también incluye estrategias de marketing digital para impulsar las ventas y la visibilidad de tu negocio en línea.</p>
                  </section>
                )}
                {activeSection === 'responsabilidad' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">2. Responsabilidad del Usuario</h2>
                    <p className="text-gray-200">El usuario es responsable de cumplir con las normativas legales y fiscales aplicables a los productos y servicios que ofrece en su tienda online. Esto incluye, pero no se limita a, garantizar la legalidad de los productos y su conformidad con las leyes locales sobre derechos de autor, marcas, y comercio. Mi Tienda en Línea no se hace responsable de la veracidad ni la legalidad del contenido publicado por los usuarios en sus tiendas.</p>
                  </section>
                )}
                {activeSection === 'limitaciones' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">3. Limitaciones del Servicio</h2>
                    <p className="text-gray-200">Los servicios proporcionados por Mi Tienda en Línea están sujetos a las limitaciones de las plataformas externas, incluyendo:</p>
                    <ul className="list-disc pl-6 mt-2 text-gray-200">
                      <li>Vercel: Limitado a 60 horas de cómputo y 256 MB de almacenamiento en su plan gratuito.</li>
                      <li>Cloudinary: Limitado a 25 créditos mensuales en el plan gratuito.</li>
                    </ul>
                    <p className="mt-2 text-gray-200">Si el usuario excede estas limitaciones, deberá actualizar a un plan pago de dichos servicios o asumir las interrupciones resultantes. Además, la pasarela de pagos PayPal aplica una comisión del 4% por transacción, que deberá ser asumida por el usuario.</p>
                  </section>
                )}
                {activeSection === 'planes' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">4. Planes y Productos</h2>
                    <p className="text-gray-200">Los planes de suscripción incluyen:</p>
                    <ul className="list-disc pl-6 mt-2 text-gray-200">
                      <li>Plan Básico ($99/mes): Hasta 100 productos, carrito de compras, mantenimiento de pedidos, y soporte básico.</li>
                      <li>Plan Estándar ($299/mes): Hasta 500 productos, registro de clientes, pasarelas de pago integradas, y soporte prioritario.</li>
                      <li>Plan Premium ($499/mes): Productos ilimitados, personalización avanzada, dashboard avanzado, y soporte premium.</li>
                    </ul>
                    <p className="mt-2 text-gray-200">Mi Tienda en Línea no garantiza que el número de productos en los planes superior sea ilimitado, ya que está sujeto a las limitaciones de los servicios externos.</p>
                  </section>
                )}
                {activeSection === 'rescision' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">5. Rescisión y Cancelación</h2>
                    <p className="text-gray-200">El usuario puede cancelar su suscripción en cualquier momento, lo que resultará en la suspensión del servicio de la tienda. En caso de cancelación, Mi Tienda en Línea proporcionará una copia de seguridad de la base de datos para que el usuario pueda utilizarla en el futuro. Si la cancelación es por impago o violación de los términos, no se proporcionará respaldo de la base de datos, y se notificará al usuario antes de la suspensión del servicio.</p>
                  </section>
                )}
                {activeSection === 'mantenimiento' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">6. Mantenimiento y Soporte</h2>
                    <p className="text-gray-200">El nivel de soporte varía según el plan de suscripción:</p>
                    <ul className="list-disc pl-6 mt-2 text-gray-200">
                      <li>Básico: Soporte por WhatsApp.</li>
                      <li>Estándar: Soporte por WhatsApp y llamadas de voz.</li>
                      <li>Premium: Soporte por WhatsApp, llamadas de voz y asistencia remota con AnyDesk.</li>
                    </ul>
                    <p className="mt-2 text-gray-200">Mi Tienda en Línea se reserva el derecho de ajustar los tiempos de respuesta según el plan adquirido.</p>
                  </section>
                )}
                {activeSection === 'reembolsos' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">7. Reembolsos</h2>
                    <p className="text-gray-200">No se ofrecen reembolsos por cancelaciones o insatisfacción con el servicio. La permanencia mínima es de 6 meses, y el pago del servicio es por adelantado.</p>
                  </section>
                )}
                {activeSection === 'modificaciones' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">8. Modificaciones</h2>
                    <p className="text-gray-200">Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Se recomienda revisar esta página periódicamente. El uso continuado del servicio después de cualquier modificación constituirá la aceptación de los términos actualizados.</p>
                  </section>
                )}
                {activeSection === 'ley' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">9. Ley Aplicable</h2>
                    <p className="text-gray-200">Estos términos y condiciones se regirán por las leyes aplicables en Campeche, México, y cualquier disputa será resuelta en sus tribunales competentes.</p>
                  </section>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex flex-col w-full min-[440px]:flex-row gap-4 justify-between items-center print:hidden">
        <p className="text-sm text-white">Última actualización: {new Date().toLocaleDateString()}</p>
        <div className="flex gap-2 items-center">
          <Button onClick={handlePrint} className="bg-blue-600 hover:bg-blue-700 text-white">
            <Printer className="h-4 w-4" />
            <span className='hidden sm:block ml-2'>Imprimir</span>
          </Button>
          <Button onClick={handleAccept} className="bg-green-600 hover:bg-green-700 text-white">
            Aceptar Términos y Condiciones
          </Button>
        </div>
      </div>
    </main>
  )
}
