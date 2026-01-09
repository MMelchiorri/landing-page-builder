'use client'

import React from 'react'
import { widgetRegistry } from '@/widgets/registry'
import { Widget } from '@/domain/widget.type'

interface WidgetRendererProps {
  widget: Widget
}

const WidgetRenderer: React.FC<WidgetRendererProps> = ({ widget }) => {
  const definition = widgetRegistry[widget.code]

  if (!definition) {
    console.warn('Unknown widget:', widget.code)
    return null
  }

  const parsed = definition.schema.safeParse(widget.properties)

  if (!parsed.success) {
    console.error('Invalid widget properties:', widget.code, parsed.error)
    return null
  }

  const Component = definition.component
  return <Component properties={parsed.data} />
}

export default WidgetRenderer
