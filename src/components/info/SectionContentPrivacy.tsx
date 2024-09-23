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

export const SectionContentPrivacy = () => {
  const [activeSection, setActiveSection] = useState('recoleccion')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredSections, setFilteredSections] = useState<ISection[]>([])

  const sections = [
    { id: 'recoleccion', title: 'Recolección de Datos' },
    { id: 'datos_terceros', title: 'Datos de Terceros' },
    { id: 'almacenamiento', title: 'Almacenamiento y Transferencia de Datos' },
    { id: 'seguridad', title: 'Seguridad de los Datos' },
    { id: 'retencion', title: 'Retención de Datos' },
    { id: 'derechos', title: 'Derechos del Usuario' },
    { id: 'cambios', title: 'Cambios en esta Política' }
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
    toast.success('Política de Privacidad Aceptada',
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
                    className="w-full justify-start mb-2 text-left text-white hover:text-white hover:bg-blue-800"
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
                {activeSection === 'recoleccion' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">1. Recolección de Datos</h2>
                    <p className="text-gray-200">
                      Recolectamos datos personales como nombre, correo electrónico, teléfono, y dirección para procesar pedidos y notificaciones. También recogemos información técnica como direcciones IP y datos de tráfico para mejorar el rendimiento del sitio y proporcionar un mejor servicio.
                    </p>
                  </section>
                )}
                {activeSection === 'datos_terceros' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">2. Datos de Terceros (Clientes de Tiendas)</h2>
                    <p className="text-gray-200">
                      Mi Tienda en Línea actúa como procesador de los datos de los clientes de las tiendas gestionadas por los usuarios. Estos datos son utilizados únicamente para la gestión de pedidos y no serán compartidos con terceros, salvo que sea necesario para cumplir con el servicio (e.g. pasarelas de pago como PayPal). Los usuarios son responsables de cumplir con las leyes locales de protección de datos respecto a sus clientes.
                    </p>
                  </section>
                )}
                {activeSection === 'almacenamiento' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">3. Almacenamiento y Transferencia de Datos</h2>
                    <p className="text-gray-200">
                      Los datos personales son almacenados en servidores de Vercel y Cloudinary, que pueden estar ubicados fuera del país de residencia del usuario. Al utilizar nuestros servicios, el usuario consiente la transferencia internacional de sus datos, que se realizará con las medidas de seguridad apropiadas.
                    </p>
                  </section>
                )}
                {activeSection === 'seguridad' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">4. Seguridad de los Datos</h2>
                    <p className="text-gray-200">
                      Tomamos medidas de seguridad para proteger la información personal del acceso no autorizado. Sin embargo, no podemos garantizar la seguridad total debido a la naturaleza de Internet.
                    </p>
                  </section>
                )}
                {activeSection === 'retencion' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">5. Retención de Datos</h2>
                    <p className="text-gray-200">
                      Conservamos los datos personales mientras la cuenta esté activa. Si la cuenta es cancelada, los datos serán eliminados en un plazo de 30 días, salvo que existan obligaciones legales de retención. A petición del usuario, se podrá entregar una copia de seguridad de los datos.
                    </p>
                  </section>
                )}
                {activeSection === 'derechos' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">6. Derechos del Usuario</h2>
                    <p className="text-gray-200">
                      El usuario tiene derecho a acceder, corregir, eliminar o limitar el uso de sus datos personales en cualquier momento. Para ejercer estos derechos, puede acceder a su cuenta o contactarnos directamente.
                    </p>
                  </section>
                )}
                {activeSection === 'cambios' && (
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-white">7. Cambios en esta Política</h2>
                    <p className="text-gray-200">
                      Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Cualquier cambio sustancial será notificado a través de nuestro sitio web.
                    </p>
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
            Aceptar Política de Privacidad
          </Button>
        </div>
      </div>
    </main>
  )
}
