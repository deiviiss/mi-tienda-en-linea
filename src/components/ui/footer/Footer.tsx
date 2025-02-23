import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 print:hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3  gap-8 max-w-[1600px] mx-auto">
          <div>
            <h3 className="text-lg font-semibold mb-4">Acerca de</h3>
            <p className="text-sm text-gray-400">Mi Tienda en Línea es la solución perfecta para emprendedores que buscan lanzar su negocio en línea con facilidad y profesionalismo.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#templates"
                  className="text-gray-400 hover:text-white p-0"
                >Template</Link></li>
              <li><Link href="/#pricing" className="text-gray-400 hover:text-white">Planes</Link></li>
              <li><Link href="/#contact" className="text-gray-400 hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/info/terms" className="text-gray-400 hover:text-white">Términos y condiciones</Link></li>
              <li><Link href="/info/privacy" className="text-gray-400 hover:text-white">Políticas de privacidad</Link></li>
              <li><Link href="/info/faq" className="text-gray-400 hover:text-white">FAQs</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p><span>© {new Date().getFullYear()}</span> Mi Tienda en Línea. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
