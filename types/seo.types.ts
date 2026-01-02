export interface SeoMetadata {
  title: string
  description: string
  keywords: string[]
  canonicalUrl?: string
  ogImageUrl?: string
  ogTitle?: string
  ogDescription?: string
  robots?: string
  languageAlternates?: Record<string, string>[]
}
