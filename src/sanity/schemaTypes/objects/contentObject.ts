import { defineArrayMember, defineField, defineType } from "sanity";

export const contentObject = defineType({
  type: "object",
  name: "contentObject",
  title: "Content",
  fields: [
    defineField({
      type: "array",
      name: "content",
      title: "Content",
      validation: (e) => e.required(),
      of: [
        defineArrayMember({ type: "block" }),
        defineArrayMember({ type: "imageObject" }),
      ],
    }),
  ],
});
