import z from 'zod'

export const HeroSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  subtitle: z.string().optional(),
  backgroundImage: z
    .object({
      url: z.string(),
      alt: z.string().optional(),
    })
    .optional(),
  cta: z
    .object({
      label: z.string().min(1, 'CTA label is required'),
      link: z.url('CTA link must be a valid URL'),
    })
    .optional(),
})

export type HeroWidgetProperties = z.infer<typeof HeroSchema>
