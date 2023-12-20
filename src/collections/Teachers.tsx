import { CollectionConfig } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

const Teachers: CollectionConfig = {
  slug: "teachers",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "roles",
      type: "array",
      fields: [
        {
          name: "role",
          type: "text",
        },
      ],
    },
    {
      name: "portrait",
      type: "upload",
      required: true,
      relationTo: "portraits",
    },
    {
      name: "shortBio",
      type: "textarea",
      required: true,
    },
    {
      name: "fullBio",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("fullBio", { name: "fullBioHtml" }),
  ],
};

export default Teachers;
