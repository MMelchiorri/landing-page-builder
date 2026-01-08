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
  properties: Record<string, unknown>
  order: number
}
