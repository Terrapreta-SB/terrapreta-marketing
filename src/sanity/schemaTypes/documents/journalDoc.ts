import { defineType, defineField, defineArrayMember } from "sanity";

export const journalDoc = defineType({
  type: "document",
  name: "journal",
  title: "Journal",
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
      type: "gridDimensionObject",
      name: "gridDimension",
      title: "Grid Dimension",
    }),
    defineField({
      type: "reference",
      name: "tag",
      title: "Tag",
      to: [{ type: "tag" }],
      validation: (e) => e.required(),
    }),
    defineField({
      type: "date",
      name: "publishingDate",
      title: "Publishing Date",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "imageObject",
      name: "mainImage",
      title: "Main Image",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "text",
      name: "shortDescription",
      title: "Short Description",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "array",
      name: "contentObject",
      title: "Content",
      validation: (e) => e.required(),
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "imageObject" }),
      ],
    }),
    defineField({
      type: "referenceToObject",
      name: "relatedTo",
      title: "Related To",
    }),
  ],
});
