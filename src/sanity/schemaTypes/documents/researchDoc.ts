import { defineType, defineField } from "sanity";

export const researchDoc = defineType({
  type: "document",
  name: "research",
  title: "Research",
  fields: [
    defineField({
      type: "titleSlugObject",
      name: "titleSlug",
      title: "Title + Slug",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "imageObject",
      name: "mainImage",
      title: "Main Image",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "referenceToObject",
      name: "relatedTo",
      title: "Related To",
    }),
  ],
});
