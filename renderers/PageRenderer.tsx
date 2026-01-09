import { Page } from '@/domain/page.type'
import React from 'react'
import WidgetRenderer from '@/renderers/WidgetRenderer'
import { Box } from '@mui/material'

interface PageRendererProps {
  page: Page
}

export const PageRenderer: React.FC<PageRendererProps> = ({ page }) => {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      {page.widgets
        .sort((a, b) => a.order - b.order)
        .map((widget) => (
          <WidgetRenderer key={widget.id} widget={widget} />
        ))}
    </Box>
  )
}
