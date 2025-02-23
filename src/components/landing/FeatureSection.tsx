import { CheckCircle } from 'lucide-react'

const features: Record<string, string[]> = {
  Ecommerce: [
    'Catálogo de productos personalizable',
    'Carrito de compras optimizado',
    'Soluciones de pago integradas'
  ],
  'Marketing Digital': [
    'Estrategias personalizadas',
    'Gestión de redes sociales',
    'Calendario de publicaciones inteligente'
  ],
  Chatbots: [
    'Asistencia automatizada 24/7',
    'Chatbot adaptado a tu negocio',
    'Integración con WhatsApp'
  ]
}

interface FeatureItemProps {
  icon: JSX.Element
  text: string
}

export function FeatureSection() {
  return (
    <section id="features" className="bg-gradient-to-b from-gray-800 to-gray-700 w-full flex-col justify-center flex px-4 pb-20 pt-24">
      <div className="container mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold mb-12 text-center">Herramientas Esenciales para tu Negocio</h2>

        <div className="grid md:grid-cols-3 gap-8 space-y-4 sm:space-y-0">
          {Object.keys(features).map((category: string, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-4">{category}</h3>
              <div>
                {
                  features[category].map((feature, i) => (
                    <FeatureItem key={i} icon={<CheckCircle />} text={feature} />
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, text }: FeatureItemProps) {
  return (
    <div className="flex items-center space-x-3 my-2">
      <div className="flex-shrink-0 w-6 h-6 text-blue-400">{icon}</div>
      <p>{text}</p>
    </div>
  )
}
