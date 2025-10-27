import { defineType, defineField } from "sanity";

export const glossaryDoc = defineType({
  type: "document",
  name: "glossary",
  title: "Glossary",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
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
      name: "image",
      title: "Image",
    }),
    defineField({
      type: "text",
      name: "definition",
      title: "Definition",
    }),
  ],
});
