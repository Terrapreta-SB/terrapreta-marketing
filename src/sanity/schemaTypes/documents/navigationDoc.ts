import { defineArrayMember, defineField, defineType } from "sanity";

export const navigationDoc = defineType({
  type: "document",
  name: "navigation",
  title: "Navigation",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Title",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "array",
      name: "links",
      title: "Links",
      of: [defineArrayMember({ type: "linkObject" })],
    }),
  ],
});
