"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PageTitle = {
    slug: "pageTitle",
    access: {
        read: function () { return true; },
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
                description: function (_a) {
                    var path = _a.path, value = _a.value;
                    return "".concat(typeof value === "string" ? 60 - value.length : "60", " characters left.");
                },
            },
        }],
};
exports.default = PageTitle;
