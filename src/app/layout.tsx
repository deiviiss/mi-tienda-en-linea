import type { Metadata } from 'next'
import { Providers } from '@/components'
import { textFont } from '@/config/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Mi Tienda en Línea',
    default: 'Mi Tienda en Línea'
  },
  description:
    'Crea tu tienda en línea con Mi Tienda en Línea. Vende tus productos en internet de forma fácil y segura.',
  other: {
    'impact-site-verification': '7815ad31-0a0f-41eb-96b5-8a5ab4decb0e'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <Providers>
        <body className={textFont.className}>{children}</body>
      </Providers >
    </html >
  )
}
