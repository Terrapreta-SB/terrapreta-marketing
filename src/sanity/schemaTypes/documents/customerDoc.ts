import { defineField, defineType } from "sanity";

export const customerDoc = defineType({
  type: "document",
  name: "customer",
  title: "About",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "image",
      name: "mainImage",
      title: "Main Image",
    }),
    defineField({
      type: "text",
      name: "shortDescription",
      title: "Short Description",
      description: "Max 280 characters",
      validation: (e) =>
        e.max(280).error("Short Description must be less than 280 characters"),
    }),
  ],
});
