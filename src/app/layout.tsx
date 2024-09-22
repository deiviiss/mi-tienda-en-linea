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
    'Crea tu tienda en línea con Mi Tienda en Línea. Vende tus productos en internet de forma fácil y segura.'
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
