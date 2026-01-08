export type WidgetCategory = 'header' | 'footer' | 'body' | 'sidebar' | 'modal'

export interface Widget {
  id: string
  code: string
  category: WidgetCategory
  properties: Record<string, string>
  order: number
}
