import { defineField, defineType } from "sanity";

export const aboutDoc = defineType({
  type: "document",
  name: "about",
  title: "About",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Title",
      validation: (e) => e.required(),
    }),
  ],
});
