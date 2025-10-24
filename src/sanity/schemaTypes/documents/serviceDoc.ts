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
      type: "reference",
      name: "relatedProject",
      title: "Related Project",
      to: [{ type: "project" }],
    }),
    defineField({
      type: "reference",
      name: "relatedResearch",
      title: "Related Research",
      to: [{ type: "research" }],
    }),
  ],
});
