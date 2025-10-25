import { defineArrayMember, defineField, defineType } from "sanity";

const MAX_CAPABILITIES = 6;

export const serviceDoc = defineType({
  type: "document",
  name: "service",
  title: "Service",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Title",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "slug",
      name: "slug",
      title: "Slug",
      validation: (e) => e.required(),
      options: {
        source: "name",
      },
    }),
    defineField({
      type: "text",
      name: "shortDescription",
      title: "Short Description",
    }),
    defineField({
      type: "imageObject",
      name: "mainImage",
      title: "Main Image",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "array",
      name: "capabilities",
      title: "Capabilities",
      description: `You can select up to ${MAX_CAPABILITIES} capabilities`,
      of: [
        defineArrayMember({ type: "reference", to: [{ type: "capability" }] }),
      ],
      validation: (e) => e.max(MAX_CAPABILITIES),
    }),
    defineField({
      type: "contentObject",
      name: "pageContent",
      title: "Page Content",
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
