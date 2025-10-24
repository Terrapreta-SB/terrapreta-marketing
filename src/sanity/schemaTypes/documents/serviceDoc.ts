import { defineType, defineField } from "sanity";

export const serviceDoc = defineType({
  type: "document",
  name: "service",
  title: "Service",
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
