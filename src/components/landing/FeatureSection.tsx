import { CheckCircle } from 'lucide-react'

const featuresStandardPackage = [
  'Catálogo de productos con buscador en tiempo real y categorías personalizables.',
  'Detalle del producto con slider de imágenes, descripción y opción de agregar al carrito.',
  'Carrito de compras con notificaciones.',
  'Registro de clientes con email, teléfono y dirección opcional.',
  'Opciones de entrega personalizables.',
  'Historial de pedidos con estados actualizados.',
  'Integración con pasarelas de pago (Paypal, Mercado Pago, transferencias, efectivo).',
  'Personalización con colores y logo.',
  'Optimización SEO y SSR, con vista previa de productos compartidos mediante URLs.',
  'Notificaciones por correo electrónico de compras y pagos.'
]

interface FeatureItemProps {
  icon: JSX.Element
  text: string
}

export function FeatureSection() {
  return (
    <section id="features" className="bg-gradient-to-b from-gray-800 to-gray-700 w-full flex-col justify-center flex px-4 pb-20 pt-24">
      <div className="container mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold mb-12 text-center">Características del Paquete Estándar</h2>
        <div className="grid md:grid-cols-2 gap-8 space-y-4">
          {
            featuresStandardPackage.map((feature, index) => (
              <FeatureItem key={index} icon={<CheckCircle />} text={feature} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-6 h-6 text-blue-400">{icon}</div>
      <p>{text}</p>
    </div>
  )
}
