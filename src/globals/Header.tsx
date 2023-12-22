import { GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: () => true,
  },
  admin: {
    description:
      "The part of the website which appears at the top (for desktops) or at the bottom of the screen (for mobiles) and contains the logo and the navigation links.",
  },
  fields: [
    {
      name: "navigation",
      type: "array",
      required: true,
      maxRows: 6,
      fields: [
        {
          name: "page",
          type: "relationship",
          relationTo: "pages",
          required: true,
        },
      ],
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default Header;
