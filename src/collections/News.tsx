import { CollectionConfig } from "payload/types";

const News: CollectionConfig = {
  slug: "news",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "headline",
  },
  fields: [
    {
      name: "headline",
      type: "text",
    },
    {
      name: "body",
      type: "richText",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default News;
