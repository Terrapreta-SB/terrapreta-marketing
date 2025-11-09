import { defineField, defineType } from "sanity";

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
      options: {
        hotspot: true,
      },
    }),
    defineField({ type: "string", name: "altContent", title: "Alt Content" }),
    defineField({ type: "string", name: "caption", title: "Caption" }),
  ],
});
