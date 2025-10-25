import { defineField, defineType } from "sanity";

export const capabilityDoc = defineType({
  type: "document",
  name: "capability",
  title: "Capability",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Title",
      validation: (e) => e.required(),
    }),
  ],
});
