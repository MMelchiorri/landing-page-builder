'use client'

import { HeroSchema, FooterSchema, TextSchema } from '@/schema'
import { HeroWidget, TextWidget, FooterWidget } from '@/widget'
import { Widget } from '@/types/generic/widget.type'
import React from 'react'

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

    case 'footer_block':
      const parsedFooter = FooterSchema.safeParse(widget.properties)
      if (!parsedFooter.success) {
        console.error(
          'Invalid footer block widget properties',
          parsedFooter.error
        )
        return null
      }
      return <FooterWidget properties={parsedFooter.data} />

    default:
      return null
  }
}
export default WidgetRenderer
