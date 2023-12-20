import { CollectionConfig } from "payload/types";

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
      relationTo: "portraits",
    },
  ],
};

export default Teachers;
