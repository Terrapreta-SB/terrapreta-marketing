import { defineType, defineField } from "sanity";

export const imageObject = defineType({
  type: "object",
  name: "imageObject",
  title: "Image",
  fields: [
    defineField({
      type: "image",
      name: "image",
      title: "Image",
      validation: (e) => e.required(),
    }),
    defineField({ type: "string", name: "altContent", title: "Alt Content" }),
    defineField({ type: "string", name: "caption", title: "Caption" }),
  ],
});
