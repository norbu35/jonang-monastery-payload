"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = {
    slug: "cards",
    access: {
        read: function () { return true; },
    },
    admin: {
        useAsTitle: "header",
    },
    fields: [
        {
            name: "header",
            type: "text",
            required: true,
            maxLength: 50,
            admin: {
                description: function (_a) {
                    var path = _a.path, value = _a.value;
                    return "".concat(typeof value === "string" ? 50 - value.length : "50", " characters left.");
                },
            },
        },
        {
            name: "body",
            type: "text",
            required: true,
            maxLength: 120,
            admin: {
                description: function (_a) {
                    var path = _a.path, value = _a.value;
                    return "".concat(typeof value === "string" ? 120 - value.length : "120", " characters left.");
                },
            },
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
exports.default = Card;
