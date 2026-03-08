// src/content/config.ts
import { z, defineCollection } from 'astro:content';

// Definimos la colección de nuestro diario / logs
const logCollection = defineCollection({
  type: 'content', // Especificamos que es una colección de Markdown/MDX
  schema: z.object({
    title: z.string().max(100, "El título debe ser conciso."),
    date: z.date(),
    // Tipado estricto: Solo permitimos estas etiquetas exactas.
    tags: z.array(
      z.enum([
        'Kaizen', 
        'Kairós', 
        'Mōría', 
        'Filaucía', 
        'Chasis'
      ])
    ).optional(),
    draft: z.boolean().default(false),
    summary: z.string().max(200).optional(),
  }),
});

// Exportamos el objeto 'collections' para que Astro lo registre
export const collections = {
  'log': logCollection,
};