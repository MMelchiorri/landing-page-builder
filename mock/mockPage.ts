import { Page } from '@/domain/page.type'

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
      id: 'widget_000',
      code: 'navigation_bar',
      category: 'header',
      properties: {
        id: 'nav_001',
        links: [
          { text: 'Home', url: '/', label: 'Home' },
          { text: 'About', url: '/about', label: 'About' },
          { text: 'Contact', url: '/contact', label: 'Contact' },
        ],
        logo: {
          url: '/image/logo.png',
          alt: 'Site Logo',
        },
      },
      order: 0,
    },
    {
      id: 'widget_001',
      code: 'hero_card',
      category: 'body',
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
    {
      id: 'widget_002',
      code: 'text_block',
      category: 'body',
      properties: {
        id: 'text_001',
        title: 'About Us',
        subtitle: 'Learn more about our mission and values.',
        align: 'left',
        maxWidth: 'md',
        cta: {
          text: 'Read More',
          url: 'https://www.example.com/about',
        },
      },
      order: 2,
    },
    {
      id: 'widget_003',
      code: 'footer_block',
      category: 'footer',
      properties: {
        id: 'footer_001',
        text: '© 2024 Example Company. All rights reserved.',
        links: [
          { text: 'Privacy Policy', url: '/privacy', label: 'Privacy Policy' },
          {
            text: 'Terms of Service',
            url: '/terms',
            label: 'Terms of Service',
          },
        ],
      },
      order: 3,
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
