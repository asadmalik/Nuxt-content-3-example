import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: 'blog/*.md',
            schema: z.object({
                title: z.string(),
                author: z.string(),
                tags: z.array(z.string()),
                coverImage: z.string(),
                date: z.date(),
                excerpt: z.string(),
                type: z.string()
            })
        })
    }
});