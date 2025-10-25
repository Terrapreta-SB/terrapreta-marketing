import { defineField, defineType } from "sanity";

export const processDoc = defineType({
  type: "document",
  name: "process",
  title: "Process",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Title",
      validation: (e) => e.required(),
    }),
  ],
});
