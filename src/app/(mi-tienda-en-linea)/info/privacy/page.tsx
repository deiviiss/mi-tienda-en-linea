import { SectionContentPrivacy } from '@/components/info'

export default function TermsAndConditions() {
  return (
    <>
      <header className="border-t-[1px] shadow print:hidden">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">Políticas de privacidad de Mi Tienda en Línea</h1>
        </div>
      </header>

      <SectionContentPrivacy />
    </>
  )
}
