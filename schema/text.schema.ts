import z from 'zod'

export const TextSchema = z.object({
  title: z.string().min(1).max(100),
  subtitle: z.string().max(500).optional(),
  align: z.enum(['left', 'center', 'right']).default('center'),
  maxWidth: z.enum(['sm', 'md', 'lg', 'xl']).default('md'),
  cta: z
    .object({
      text: z.string().min(1).max(50),
      url: z.url(),
    })
    .optional(),
})

export type TextWidgetProperties = z.infer<typeof TextSchema>
