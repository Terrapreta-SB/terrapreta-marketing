import { defineType, defineField } from "sanity";

export const gridDimensionObject = defineType({
  type: "object",
  name: "gridDimensionObject",
  title: "Grid Dimension",
  fields: [
    defineField({
      type: "boolean",
      name: "isBig",
      title: "Is Big?",
    }),
  ],
});
