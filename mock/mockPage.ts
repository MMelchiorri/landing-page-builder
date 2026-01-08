import { Page } from '@/types/page.type'

export const mockPage: Page = {
  id: 'page_001',
  pageTitle: 'Sample Page',
  slug: 'sample-page',
  description: 'This is a sample page for testing purposes.',
  seoMetadata: {
    title: 'Sample Page SEO Title',
    description: 'SEO description for the sample page.',
    keywords: ['sample', 'page', 'test'],
    canonicalUrl: 'https://www.example.com/sample-page',
    ogImageUrl: 'https://www.example.com/images/sample-og-image.jpg',
    ogTitle: 'Sample Page Open Graph Title',
    ogDescription: 'Open Graph description for the sample page.',
    robots: 'index, follow',
    languageAlternates: [{ en: 'https://www.example.com/sample-page' }],
  },
  theme: 'modern',
  widgets: [
    {
      id: 'widget_001',
      code: 'hero_banner',
      category: 'header',
      properties: {
        id: 'hero_001',
        title: 'Welcome to Our Site',
        subtitle: 'We are glad to have you here.',
        backgroundImage: {
          url: '/image/img.png',
          alt: 'Hero Background',
        },
      },
      order: 1,
    },
  ],
  accessibility: {
    contrastRatio: 'normal',
    wcagLevel: 'AA',
    screenReaderOptimized: true,
    skipLinksEnabled: true,
    languageAttribute: 'en',
    keyboardNavigation: true,
  },
  status: 'draft',
  requiresRebuild: true,
  version: 1,
  createdAt: new Date('2024-01-01T10:00:00Z'),
  updatedAt: new Date('2024-01-02T12:00:00Z'),
  createdBy: 'user_123',
  updatedBy: 'user_456',
}
