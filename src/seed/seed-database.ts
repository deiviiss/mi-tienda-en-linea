import { initialData } from './seed'
import prisma from '../lib/prisma'

const main = async () => {
  // delete all data
  await prisma.user.deleteMany()
  await prisma.templateSlide.deleteMany()
  await prisma.template.deleteMany()

  const { users, templates } = initialData

  // users
  await prisma.user.createMany({
    data: users
  })

  const templateData = templates.map((template) => {
    return {
      id: template.id,
      title: template.title,
      description: template.description,
      features: template.features,
      plan: template.plan,
      category: template.category,
      videoUrl: template.videoUrl,
      url: template.url
    }
  })

  await prisma.template.createMany({
    data: templateData
  })

  const slidesData = templates.flatMap(template =>
    template.slidesImages
      ? template.slidesImages.map(slide => ({
        url: slide.url,
        templateId: template.id
      }))
      : []
  )

  await prisma.templateSlide.createMany({
    data: slidesData
  })

  // eslint-disable-next-line no-console
  console.log('Seed executed successfully')
}

(() => {
  if (process.env.NODE_ENV === 'production') return

  main()
}
)()
