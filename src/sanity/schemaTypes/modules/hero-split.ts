import { defineField, defineType } from "sanity";

export const heroSplitModule = defineType({
  name: "heroSplitModule",
  title: "Hero (split)",
  type: "object",
  groups: [{ name: "content", default: true }, { name: "asset" }],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (e) => e.required(),
      group: "content",
    }),
  ],
});
