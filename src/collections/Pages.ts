import { CollectionConfig } from "payload/types";
import {
  BlocksFeature,
  defaultFeatures,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { QuoteBlock } from "../blocks/QuoteBlock";

const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    create: ({ req: { user } }) => true,
    read: () => true,
    update: ({ req: { user } }) => true,
    delete: ({ req: { user } }) => true,
    admin: ({ req: { user } }) => {},
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "slug",
      type: "text",
    },
    {
      name: "title",
      type: "text",
    },
    {
      name: "content",
      type: "richText",
    },
  ],
};

export default Pages;
