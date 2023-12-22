"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IntroText = {
    slug: "introText",
    access: {
        read: function () { return true; },
    },
    admin: {
        description: "The first introductory body of text.",
    },
    fields: [
        {
            name: "body",
            type: "textarea",
            required: true,
        },
        {
            name: "buttonLink",
            type: "relationship",
            relationTo: "pages",
            required: true,
            admin: {
                description: "A page which the button below the text should lead to.",
            },
        },
    ],
};
exports.default = IntroText;
