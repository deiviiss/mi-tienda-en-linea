import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Providers } from '@/components'
import { textFont } from '@/config/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Tu Negocio Digital',
    default: 'Tu Negocio Digital'
  },
  description:
    'Impulsa tu negocio con soluciones digitales a medida: e-commerce, marketing, chatbots y gestión de proyectos en un solo lugar.',
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
        <body className={textFont.className}>
          {children}
          <Analytics />
          <SpeedInsights />
          <GoogleAnalytics gaId="G-M5E9J1WMNP" />
        </body>
      </Providers >
    </html >
  )
}
