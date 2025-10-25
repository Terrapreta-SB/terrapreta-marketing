import { defineField, defineType } from "sanity";

export const siteDoc = defineType({
  type: "document",
  name: "site",
  title: "Site",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Title",
      validation: (e) => e.required(),
    }),
  ],
});
