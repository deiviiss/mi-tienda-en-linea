export interface ITemplateSlide {
  id: string
  url: string
}

export interface ITemplate {
  id: string
  title: string
  description: string
  features: string[]
  plan: string
  category: string
  templateSlides: ITemplateSlide[] | null
  videoUrl: string | null
  url: string | null
}
