import { defineType, defineField } from "sanity";

export const projectDoc = defineType({
  type: "document",
  name: "project",
  title: "Project",
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
      type: "imageObject",
      name: "mainImage",
      title: "Main Image",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "status",
      title: "Status",
      validation: (e) => e.required(),
    }),
    defineField({ type: "string", name: "location", title: "Location" }),
    defineField({
      type: "number",
      name: "areaRestored",
      title: "Area Restored",
    }),
    defineField({
      type: "string",
      name: "interventionType",
      title: "Intervention Type",
    }),
    defineField({
      type: "contentObject",
      name: "content",
      title: "Content",
    }),
 defineField({
      type: "reference",
      name: "relatedService",
      title: "Related Service",
      to: [{ type: "service" }],
    }),
    defineField({
      type: "reference",
      name: "relatedResearch",
      title: "Related Research",
      to: [{ type: "research" }],
    }),
  ],
});
