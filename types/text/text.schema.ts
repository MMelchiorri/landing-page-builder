import z from 'zod'

export const TextSchema = z.object({
  title: z.string().min(1).max(100),
  subtitle: z.string().max(500).optional(),
})

export type TextWidgetProperties = z.infer<typeof TextSchema>
