"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Donations = {
    slug: "donations",
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: "headline",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "textarea",
            required: true,
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "goal",
            type: "number",
            required: true,
        },
    ],
};
exports.default = Donations;
