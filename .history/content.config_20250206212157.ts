import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/*.md',
            schema: z.object({
                title: z.string(),
                tags: z.array(z.string()),
                image: z.string(),
                date: z.date(),
                excerpt: z.string()
            })
        })
    }
});