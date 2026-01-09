import { HeroSchema, FooterSchema, TextSchema } from '@/schema'
import { HeroWidget, TextWidget, FooterWidget } from '@/widgets'
import { WidgetDefinition } from '@/types/generic/widget-registry.type'

export const widgetRegistry: Record<string, WidgetDefinition> = {
  hero_card: {
    code: 'hero_card',
    category: 'header',
    schema: HeroSchema,
    component: HeroWidget,
  },

  text_block: {
    code: 'text_block',
    category: 'body',
    schema: TextSchema,
    component: TextWidget,
  },

  footer_block: {
    code: 'footer_block',
    category: 'footer',
    schema: FooterSchema,
    component: FooterWidget,
  },
}
