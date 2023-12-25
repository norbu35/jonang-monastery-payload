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
          name: "navigationType",
          type: "radio",
          options: [
            {
              label: "Link",
              value: "link",
            },
            {
              label: "Label",
              value: "label",
            },
          ],
          defaultValue: "link",
          admin: {
            description:
              "Choose Label if the navigation item is just a label for a submenu and does not link to a page.",
          },
        },
        {
          name: "label",
          type: "text",
          required: true,
          admin: {
            condition: (_, siblingData) =>
              siblingData.navigationType === "label",
          },
        },
        {
          name: "link",
          type: "relationship",
          relationTo: "pages",
          required: true,
          admin: {
            condition: (_, siblingData) =>
              siblingData.navigationType === "link",
          },
        },
        {
          name: "sublinks",
          type: "array",
          admin: {
            description:
              "If the navigation item should have a dropdown submenu which contains more links, add them here.",
          },
          fields: [
            {
              name: "page",
              type: "relationship",
              relationTo: "pages",
            },
          ],
        },
      ],
      admin: {
        description:
          "Each navigation item can be a just a link on click, a link on click and open a submenu on hover, or just a label with no link and which opens a submenu on hover.",
      },
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
