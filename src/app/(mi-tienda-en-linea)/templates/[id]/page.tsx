import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTemplateById } from '@/actions'
import { ButtonBack, ImageCarrousel } from '@/components'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Props {
  params: {
    id: string
  }
}

export default async function TemplateByIdPage({ params }: Props) {
  const { id } = params

  const templateData = await getTemplateById(id)
  if (!templateData) {
    notFound()
  }

  const isUrlAviable = templateData.url !== null
  const isVideoUrlAviable = templateData.videoUrl !== null || templateData.videoUrl === ''
  const isImagesAviable = templateData.templateSlides !== null

  const { title, url, videoUrl, features, plan, category, description, templateSlides } = templateData

  return (
    <div className="min-h-screen text-white pb-10">
      <header className="border-t-[1px] shadow print:hidden flex justify-between w-full items-center">
        <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white">{title}</h1>

        </div>
        <ButtonBack className='text-white' name='Regresar' />
      </header>

      <div className="container mx-auto px-4">
        {/* Video Section */}
        {
          isVideoUrlAviable
            ? (
              <div className="mb-10 w-full max-w-4xl mx-auto">
                <video
                  className="w-full rounded-lg shadow-xl"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src={videoUrl || undefined} type="video/mp4" />
                  Tu navegador no soporta el tag de video.
                </video>
              </div>)
            : null
        }

        {/* Template Details */}
        <Card className="bg-gray-800 text-white mb-10 max-w-4xl mx-auto">

          <CardHeader className='flex'>
            <CardTitle className="text-xl font-bold">Detalles del template</CardTitle>
            <div className="flex justify-end items-center gap-2 mb-2 mt-2 sm:mt-0 sm:mb-4">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Plan: {plan}</span>
              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">Categoría: {category}</span>
            </div>
          </CardHeader>

          <CardContent>
            <p className="text-lg mb-6">{description}</p>

            <h3 className="text-xl font-semibold mb-2">Características:</h3>
            <ul className="list-disc pl-5 space-y-2">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Image Slider */}
        {
          isImagesAviable
            ? (
              <div className='w-full flex items-center justify-center mb-10'>
                <ImageCarrousel slides={templateSlides || []} autoSlide />
              </div>)
            : null
        }

        <div className="flex justify-end gap-2">
          {
            isUrlAviable
              ? (
                <Button asChild size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  <Link href={url ?? ''} target="_blank">Ver Sitio</Link>
                </Button>)
              : null
          }
          <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            <Link href={'/#contact'}>Lo quiero</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
