import { Widget } from '@/types/widget.type'
import { HeroWidget } from '@/components/HeroWidget'
import React from 'react'

interface WidgetRendererProps {
  widget: Widget
}

export const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  switch (widget.code) {
    case 'hero_banner':
      return <HeroWidget properties={widget.properties} />

    default:
      return null
  }
}
