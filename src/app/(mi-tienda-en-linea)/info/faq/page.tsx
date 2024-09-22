'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

const faqs = [
  {
    question: '¿Qué nos diferencia de plataformas como Shopify y WordPress?',
    answer: 'Nuestra principal diferencia es el acompañamiento personalizado. Nos reunimos con los clientes para entender sus necesidades y adaptamos una de nuestras plantillas a las expectativas de su tienda. Además, brindamos soporte continuo para asegurar que todo funcione sin problemas.'
  },
  {
    question: '¿Qué sucede si dejo de renovar mi suscripción?',
    answer: 'Si no renuevas tu suscripción, tu tienda será suspendida y no estará disponible en línea. Sin embargo, te ofreceremos una copia de seguridad de tu base de datos para que puedas conservar la información de tus productos y clientes.'
  },
  {
    question: '¿Se puede hacer un único pago en lugar de una suscripción mensual?',
    answer: 'No ofrecemos un esquema de pago único. Nuestro modelo incluye actualizaciones y soporte continuos, por lo que las suscripciones permiten mantener tu tienda operativa y al día.'
  },
  {
    question: '¿Qué incluye la administración del servidor en Vercel?',
    answer: 'Mi Tienda en Línea se encarga de la administración básica del servidor en Vercel, incluyendo la gestión de la plataforma en el plan gratuito. Si superas los límites del plan, te notificaremos para que puedas actualizar.'
  },
  {
    question: '¿Puedo actualizar mi plan si necesito más funciones o productos?',
    answer: 'Sí, puedes cambiar tu plan en cualquier momento para obtener más funcionalidades o incrementar el número de productos en tu tienda.'
  },
  {
    question: '¿Qué pasa si se mejora el MVP después de que ya adquirí el servicio?',
    answer: 'Los nuevos clientes recibirán la nueva versión del MVP. A los clientes existentes se les ofrecerá la opción de actualizar a precios preferenciales.'
  },
  {
    question: '¿Qué métodos de pago aceptan para las suscripciones?',
    answer: 'Aceptamos Paypal, Mercado Pago, transferencias bancarias y pagos en efectivo.'
  },
  {
    question: '¿Qué sucede si supero el plan gratuito de Cloudinary o Vercel?',
    answer: 'Si superas los límites, te notificaremos para que decidas si deseas actualizar tu plan o ajustar el uso de recursos.'
  },
  {
    question: '¿Ofrecen soporte técnico en fines de semana o solo en días laborables?',
    answer: 'Ofrecemos soporte técnico de lunes a viernes, con soporte de emergencia los fines de semana para clientes con planes avanzados.'
  },
  {
    question: '¿Qué tan segura es mi tienda en línea?',
    answer: 'Implementamos medidas de seguridad para proteger los datos de tu tienda y clientes, aunque no podemos garantizar una seguridad al 100% debido a la naturaleza de Internet.'
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen text-gray-100 py-12 border-t-[1px] shadow ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <h1 className="text-4xl font-bold mb-8">Preguntas Frecuentes</h1>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-600 rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-gray-700 p-4 text-lg hover:bg-gray-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="bg-gray-800 p-4 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
