import { defineType, defineField } from "sanity";

export const referenceToObject = defineType({
  type: "object",
  name: "referenceToObject",
  title: "Reference To",
  fields: [
    defineField({
      type: "reference",
      name: "relatedService",
      title: "Related Service",
      to: [{ type: "service" }],
    }),
    defineField({
      type: "reference",
      name: "relatedProject",
      title: "Related Project",
      to: [{ type: "project" }],
    }),
    defineField({
      type: "reference",
      name: "relatedResearch",
      title: "Related Research",
      to: [{ type: "research" }],
    }),
  ],
});
