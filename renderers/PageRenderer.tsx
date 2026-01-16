import WidgetRenderer from '@/renderers/WidgetRenderer'
import { LayoutRoot } from '@/components/LayoutRoot'
import React from 'react'
import { WidgetCategory } from '@/domain/widget.type'
import { LayoutConfig } from '@/components/config/layout.config'

interface PageRendererProps {
  page: {
    widgets: Array<{
      id: string
      code: string
      category: WidgetCategory
      properties: Record<string, any>
      order: number
    }>
  }
}

export const PageRenderer: React.FC<PageRendererProps> = ({ page }) => {
  const header = page.widgets.filter((w) => w.category === 'header')
  const body = page.widgets.filter((w) => w.category === 'body')
  const footer = page.widgets.filter((w) => w.category === 'footer')

  return (
    <LayoutRoot
      header={header.map((w) => (
        <WidgetRenderer key={w.id} widget={w} />
      ))}
      body={body.map((w) => (
        <WidgetRenderer key={w.id} widget={w} />
      ))}
      footer={footer.map((w) => (
        <WidgetRenderer key={w.id} widget={w} />
      ))}
    />
  )
}
