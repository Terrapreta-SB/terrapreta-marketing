import { defineField, defineType } from "sanity";

export const unGoalDoc = defineType({
  type: "document",
  name: "unGoal",
  title: "United Nations Goal",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "image",
      name: "logoPositive",
      title: "Logo Positive",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "image",
      name: "logoNegative",
      title: "Logo Negative",
      validation: (e) => e.required(),
    }),
  ],
});
