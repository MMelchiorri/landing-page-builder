import z from 'zod'

export const NavbarSchema = z.object({
  brand: z
    .object({
      name: z.string().min(1).max(50),
      logoUrl: z.string().url().optional(),
      link: z.string().url().optional(),
    })
    .optional(),
  links: z
    .array(
      z.object({
        text: z.string().min(1).max(100),
        url: z.url(),
      })
    )
    .max(10),
  sticky: z.boolean().default(false),
})

export type NavbarWidgetProperties = z.infer<typeof NavbarSchema>
