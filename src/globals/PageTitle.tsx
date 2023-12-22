import { GlobalConfig } from "payload/types";

const PageTitle: GlobalConfig = {
  slug: "pageTitle",
  access: {
    read: () => true,
  },
  admin: {
    description: "The main title of the website which appears at the top.",
  },
  fields: [{
    name: "title",
    type: "text",
    required: true,
    maxLength: 60,
    admin: {
      description: ({ path, value }) =>
        `${
          typeof value === "string" ? 60 - value.length : "60"
        } characters left.`,
    },
  }],
};

export default PageTitle;
