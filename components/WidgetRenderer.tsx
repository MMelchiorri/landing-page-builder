import { HeroSchema } from '@/types/hero/hero.schema'
import { TextSchema } from '@/types/text/text.schema'
import { Widget } from '@/types/generic/widget.type'
import { HeroWidget } from '@/types/hero/HeroWidget'
import React from 'react'
import { TextWidget } from '@/types/text/TextWidget'

interface WidgetRendererProps {
  widget: Widget
}

const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  switch (widget.code) {
    case 'hero_card':
      const parsed = HeroSchema.safeParse(widget.properties)
      if (!parsed.success) {
        console.error('Invalid hero widget properties', parsed.error)
        return null
      }
      return <HeroWidget properties={parsed.data} />
    case 'text_block':
      const parsedText = TextSchema.safeParse(widget.properties)
      if (!parsedText.success) {
        console.error('Invalid text block widget properties', parsedText.error)
        return null
      }
      return <TextWidget properties={parsedText.data} />

    default:
      return null
  }
}
export default WidgetRenderer
