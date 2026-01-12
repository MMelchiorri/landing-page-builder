import { Page } from '@/domain/page.type'
import React from 'react'
import WidgetRenderer from '@/renderers/WidgetRenderer'
import { Box } from '@mui/material'
import { LayoutRoot } from '@/components/LayoutRoot'

interface PageRendererProps {
  page: Page
}

export const PageRenderer: React.FC<PageRendererProps> = ({ page }) => {
  const header = page.widgets.filter((w) => w.category === 'header')
  const body = page.widgets.filter((w) => w.category === 'body')
  const footer = page.widgets.filter((w) => w.category === 'footer')
  console.log('PageRenderer render', { page, header, body, footer })

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <LayoutRoot
        header={header.map((widget) => (
          <WidgetRenderer key={widget.id} widget={widget} />
        ))}
        main={body.map((widget) => (
          <WidgetRenderer key={widget.id} widget={widget} />
        ))}
        footer={footer.map((widget) => (
          <WidgetRenderer key={widget.id} widget={widget} />
        ))}
      />
    </Box>
  )
}
