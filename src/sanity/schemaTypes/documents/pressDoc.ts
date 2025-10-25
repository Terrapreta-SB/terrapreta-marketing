import { defineField, defineType } from "sanity";

export const pressDoc = defineType({
  type: "document",
  name: "press",
  title: "Press",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Title",
      validation: (e) => e.required(),
    }),
  ],
});
