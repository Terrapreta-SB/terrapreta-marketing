import { defineType, defineField } from "sanity";

export const tagDoc = defineType({
  type: "document",
  name: "tag",
  title: "Tag",
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
  ],
});
