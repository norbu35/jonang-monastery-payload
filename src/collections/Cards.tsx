import { CollectionConfig } from "payload/types";

const Card: CollectionConfig = {
  slug: "cards",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "header",
  },
  fields: [
    {
      name: "header",
      type: "text",
      required: true,
    },
    {
      name: "body",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "link",
      type: "relationship",
      relationTo: "pages",
      required: true,
    },
  ],
};

export default Card;
