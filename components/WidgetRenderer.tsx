import { HeroSchema } from '@/types/hero/hero.schema'
import { Widget } from '@/types/generic/widget.type'
import { HeroWidget } from '@/types/hero/HeroWidget'
import React from 'react'

interface WidgetRendererProps {
  widget: Widget
}

const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  switch (widget.code) {
    case 'hero_banner':
      const parsed = HeroSchema.safeParse(widget.properties)
      if (!parsed.success) {
        console.error('Invalid hero widget properties', parsed.error)
        return null
      }
      return <HeroWidget properties={parsed.data} />

    default:
      return null
  }
}
export default WidgetRenderer
