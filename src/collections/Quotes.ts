import { CollectionConfig } from "payload/types";
import QuoteBlock from "../blocks/QuoteBlock";

const Quotes: CollectionConfig = {
  slug: "quotes",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "quote",
      type: "richText",
      editor: lexicalEditor({
        features: [],
      }),
    },
    {
      name: "addSourceLanguage",
      type: "checkbox",
      label: "Quote in source language",
      admin: {
        description:
          "Check this box to enable adding the quote in its source language.",
      },
    },
    {
      name: "originalQuote",
      type: "richText",
      admin: {
        condition: (data) => data.addSourceLanguage,
      },
    },
    {
      name: "originalQuoteLang",
      type: "text",
      label: "Original quote language",
      required: true,
      admin: {
        condition: (data) => data.addSourceLanguage,
        description: () => {
          return (
            <div>
              A{" "}
              <a
                href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
                target="_blank"
              >
                two-letter language code
              </a>{" "}
              denoting the language of the quote.{" "}
              <i>Examples: English: en, Tibetan: bo, Pali: pi.</i>
            </div>
          );
        },
      },
    },
    {
      name: "source",
      type: "text",
    },
  ],
};

export default Quotes;
