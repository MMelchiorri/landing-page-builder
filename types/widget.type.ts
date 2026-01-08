export type WidgetCategory =
  | 'header'
  | 'footer'
  | 'body'
  | 'sidebar'
  | 'modal | navbar'

export interface Widget {
  id: string
  code: string
  category: WidgetCategory
  properties: HeroWidgetProperties | NavBarWidgetProperties
  order: number
}

interface WidgetBaseProperties {
  id: string
  title: string
  subtitle?: string
}

export interface HeroWidgetProperties extends WidgetBaseProperties {
  title: string
  subtitle: string
  backgroundImageUrl?: {
    url: string
    alt: string
  }
  ctaText?: {
    label: string
    link: string
  }
}

export interface NavBarWidgetProperties extends WidgetBaseProperties {
  links: Array<{
    label: string
    url: string
  }>
}
