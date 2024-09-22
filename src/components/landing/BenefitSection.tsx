import { CheckCircle, Headphones, Heart, PenToolIcon, Shield, Users } from 'lucide-react'

const benefits = [
  {
    icon: <Users className="h-12 w-12 text-blue-500" />,
    title: 'Acompañamiento Cercano y Personalizado',
    description: 'Te brindamos apoyo constante para que puedas gestionar tu tienda en línea de manera simple, con asesoría en cada paso.'
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-blue-500" />,
    title: 'Asesoría Simple para No Expertos',
    description: 'No necesitas ser un experto en tecnología. Te guiamos en cómo organizar y gestionar tus productos de forma clara y efectiva.'
  },
  {
    icon: <PenToolIcon className="h-12 w-12 text-blue-500" />,
    title: 'Plataforma Intuitiva y Eficiente',
    description: 'Simplicidad en el uso, adaptada a personas que buscan facilidad sin sacrificar la organización de su tienda.'
  },
  {
    icon: <Headphones className="h-12 w-12 text-blue-500" />,
    title: 'Atención y Soporte Accesible',
    description: 'Recibe soporte técnico y asistencia personalizada cuando lo necesites, con un enfoque cercano y amigable.'
  },
  {
    icon: <Shield className="h-12 w-12 text-blue-500" />,
    title: 'Sin Costos Ocultos',
    description: 'Planes claros y transparentes, sin comisiones sobre ventas, lo que garantiza que puedas enfocarte en crecer sin sorpresas.'
  },
  {
    icon: <Heart className="h-12 w-12 text-blue-500" />,
    title: 'Confianza y Trato Personalizado',
    description: 'Queremos que sientas confianza en todo el proceso. Ofrecemos un trato humano y cercano para ayudarte a alcanzar tus metas.'
  }
]

interface BenefitCardProps {
  icon: JSX.Element
  title: string
  description: string
}

export function BenefitSection() {
  return (
    <section className="bg-white text-gray-800 pb-20 pt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Beneficios Clave</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {
            benefits.map((benefif, index) => {
              return (
                <BenefitCard key={index} {...benefif} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
