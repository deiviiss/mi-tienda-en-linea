import bcrypt from 'bcryptjs'

interface SeedTemplate {
  id: string
  title: string
  description: string
  features: string[]
  plan: string
  category: string
  slidesImages: Array<{ id: string, url: string }> | null
  videoUrl: string | null
  url: string | null
}

interface SeedUser {
  email: string
  name: string
  phoneNumber: string
  password: string
  role: 'admin' | 'user'
}

interface SeedData {
  templates: SeedTemplate[]
  users: SeedUser[]
}

export const initialData: SeedData = {

  templates: [
    {
      id: '1',
      title: 'Only-Cart',
      description: 'Ideal para tiendas pequeñas que buscan un enfoque simple y efectivo. Con un carrito de compras intuitivo y un catálogo de productos fácil de gestionar, este template es perfecto para iniciar ventas en línea rápidamente.',
      features: [
        'Interfaz minimalista enfocada en la funcionalidad',
        'Carrito de compras con actualización rápida de productos',
        'Gestión de hasta 100 productos con opciones básicas de personalización',
        'Notificaciones de pedidos y ventas en tiempo real',
        'Soporte técnico básico por correo electrónico',
        'Panel simple de gestión de pedidos y productos',
        'Acompañamiento inicial para configuración',
        'Sin registro de clientes, ideal para ventas directas'
      ],
      plan: 'Basic',
      category: 'Basic',
      slidesImages: null,
      videoUrl: null,
      url: null
    },

    {
      id: '2',
      title: 'Moda Shop',
      description: 'Un template elegante y sofisticado diseñado para tiendas de moda. Resalta visualmente tus productos y ofrece una experiencia de compra fluida, desde la navegación hasta la pasarela de pago.',
      features: [
        'Interfaz visual atractiva diseñada para productos de moda',
        'Búsqueda avanzada y filtros personalizados por categorías',
        'Hasta 500 productos con gestión avanzada de inventario',
        'Pasarelas de pago seguras y personalizables (Paypal, Mercado Pago, transferencias)',
        'Páginas dedicadas a políticas de privacidad y contacto',
        'Dashboard detallado con métricas de ventas y tráfico',
        'Soporte técnico prioritario en horas hábiles',
        'Asistencia personalizada para optimización continua'
      ],
      plan: 'Estándar',
      category: 'MVP',
      slidesImages: [
        {
          id: '1',
          url: '/imgs/moda.png?height=400&width=600'
        },
        {
          id: '2',
          url: '/imgs/moda.png?height=400&width=600'
        }
      ],
      videoUrl: 'https://example.com/video.mp4',
      url: 'https://moda-shop.vercel.app'
    },
    {
      id: '3',
      title: 'Bazar Campechano',
      description: 'Un template versátil diseñado para tiendas que ofrecen productos variados. Perfecto para bazares y tiendas con categorías extensas, ofreciendo personalización y herramientas avanzadas para gestionar productos de diferentes tipos.',
      features: [
        'Catálogo extensivo con categorías personalizables',
        'Gestión ilimitada de productos con opciones avanzadas de filtrado',
        'Interfaz intuitiva con diseño adaptable a múltiples dispositivos',
        'Integración completa con diversas pasarelas de pago (Paypal, Mercado Pago, transferencias)',
        'Dashboard avanzado con informes de ventas, tráfico y rendimiento',
        'Diseño completamente personalizable con colores y logos propios',
        'Actualizaciones automáticas de seguridad y rendimiento',
        'Acompañamiento continuo con soporte técnico personalizado'
      ],
      plan: 'Premium',
      category: 'MVP',
      slidesImages: [
        {
          id: '1',
          url: '/imgs/bazar.png?height=400&width=600'
        },
        {
          id: '2',
          url: '/imgs/bazar.png?height=400&width=600'
        }
      ],
      videoUrl: 'https://example.com/cafe-video.mp4',
      url: 'https://bazarcampechano.com'
    }

  ],

  users: [
    {
      email: 'mitiendaenlinea.app@hotmail.com',
      name: 'Mi tienda en línea',
      password: bcrypt.hashSync('userseed'),
      role: 'admin',
      phoneNumber: '+521981250049'
    }
  ]

}
