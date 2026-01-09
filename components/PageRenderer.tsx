import { Page } from '@/types/generic/page.type'
import React from 'react'
import WidgetRenderer from '@/components/WidgetRenderer'

interface PageRendererProps {
  page: Page
}

export const PageRenderer: React.FC<PageRendererProps> = ({ page }) => {
  return (
    <div>
      {page.widgets
        .sort((a, b) => a.order - b.order)
        .map((widget) => (
          <WidgetRenderer key={widget.id} widget={widget} />
        ))}
    </div>
  )
}
