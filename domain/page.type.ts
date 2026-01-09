import { SeoMetadata } from '@/domain/seo.types'
import { Widget } from '@/domain/widget.type'
import { Accessibility } from '@/domain/accessibility.type'
import { Themes } from '@/domain/theme.type'

export interface Page {
  id: string
  pageTitle: string
  slug: string
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
