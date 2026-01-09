import z from 'zod'

export const FooterSchema = z.object({
  text: z.string().min(1).max(200),
  links: z
    .array(
      z.object({
        text: z.string().min(1).max(100),
        label: z.string().min(1).max(50),
        icon: z.string().max(100).optional(),
        url: z.url(),
      })
    )
    .max(10),
})

export type FooterWidgetProperties = z.infer<typeof FooterSchema>
