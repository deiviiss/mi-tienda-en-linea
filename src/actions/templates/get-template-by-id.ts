'use server'

import { type ITemplate } from '@/interfaces/templates/template.interface'
import prisma from '@/lib/prisma'

export const getTemplateById = async (id: string): Promise<ITemplate | null > => {
  const template = await prisma.template.findUnique({
    where: {
      id
    },
    include: {
      templateSlides: {
        select: {
          id: true,
          url: true
        }
      }
    }
  })

  if (!template) {
    return null
  }

  return template
}
