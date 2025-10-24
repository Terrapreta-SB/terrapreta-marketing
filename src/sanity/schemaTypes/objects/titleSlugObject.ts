import { defineType, defineField } from "sanity";

export const titleSlugObject = defineType({
  type: "object",
  name: "titleSlugObject",
  title: "Title + Slug",
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
  ],
});
