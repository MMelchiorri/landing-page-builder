import z from 'zod'
import React from 'react'

export interface WidgetDefinition {
  code: string
  category: string

  schema: z.ZodSchema
  component: React.ComponentType<any>

  displayName?: string
  description?: string
}
