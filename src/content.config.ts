import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string().optional(),
    headerImage: z.string().optional(),
    gallery: z.string().optional(),
  }),
})

const sections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/sections" }),
  schema: z.object({
    title: z.string().optional(),
  }),
})

export const collections = { pages, sections }
