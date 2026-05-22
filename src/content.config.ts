import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

// Keep ONLY testimonials since you are using it!
const testimonials = defineCollection({
    loader: glob({
        pattern: "**/[^_]*.{md,mdx}",
        base: "./src/data/testimonials",
    }),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            testimonial: z.string(),
            image: image(),
            order: z.number(),
            draft: z.boolean().optional(),
        }),
});

// Export only the active collection
export const collections = {
    testimonials,
};