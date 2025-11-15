import { defineField, defineType } from "sanity";

export const organizationDoc = defineType({
  type: "document",
  name: "organization",
  title: "Organization",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Name",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "type",
      title: "Type",
      validation: (e) => e.required(),
      options: {
        list: [
          { title: "Client", value: "client" },
          { title: "Partner", value: "partner" },
          { title: "Sponsor", value: "sponsor" },
        ],
      },
    }),
    defineField({
      type: "image",
      name: "logoDark",
      title: "Logo White",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "image",
      name: "logoLight",
      title: "Logo Black",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "type",
      media: "logo",
    },
  },
});
