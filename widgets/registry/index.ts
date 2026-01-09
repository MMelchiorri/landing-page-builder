import { HeroSchema, FooterSchema, TextSchema, NavbarSchema } from '@/schema'
import { HeroWidget, TextWidget, FooterWidget, NavbarWidget } from '@/widgets'
import { WidgetDefinition } from '@/types/generic/widget-registry.type'

export const widgetRegistry: Record<string, WidgetDefinition> = {
  navigation_bar: {
    code: 'navigation_bar',
    category: 'header',
    schema: NavbarSchema,
    component: NavbarWidget,
  },
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
