import { Widget } from '@/types/widget.type'
import { HeroWidget } from '@/components/HeroWidget'
import React from 'react'

interface WidgetRendererProps {
  widget: Widget
}

const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  switch (widget.code) {
    case 'hero_banner':
      return (
        <HeroWidget properties={widget.properties as Record<string, string>} />
      )

    default:
      return null
  }
}
export default WidgetRenderer
