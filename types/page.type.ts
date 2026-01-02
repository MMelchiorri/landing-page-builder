import { SeoMetadata } from './seo.types'
import { Widget } from '@/types/widget.type'
import { Accessibility } from '@/types/accesibility.types'
import { Themes } from '@/types/theme.type'

export interface Page {
  id: string
  pageTitle: string
  slug: string
  name: string
  description: string
  seoMetadata: SeoMetadata
  theme: Themes
  widgets: Widget[]
  accessibility: Accessibility
  status: 'draft' | 'published' | 'archived'
  requiresRebuild: boolean
  version: number
  publishedAt?: Date
  createdAt: Date
  updatedAt: Date
  createdBy: string
  updatedBy: string
}
