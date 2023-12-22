"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var richtext_lexical_1 = require("@payloadcms/richtext-lexical");
var Pages = {
    slug: "pages",
    access: {
        read: function () { return true; },
        delete: function () { return false; },
    },
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            name: "slug",
            type: "text",
            admin: {
                description: function () { return ((0, jsx_runtime_1.jsxs)("div", { children: ["All pages on the website will start with the address", " ", (0, jsx_runtime_1.jsx)("em", { children: "www.jonang.in" }), " and then followed by the ", (0, jsx_runtime_1.jsx)("b", { children: "slug" }), " ", "of the page. The slug:", (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Is all small letters" }), (0, jsx_runtime_1.jsx)("li", { children: "Contains dashes instead of spaces" }), (0, jsx_runtime_1.jsx)("li", { children: "Has a forward slash (/) between every subpage" })] }), (0, jsx_runtime_1.jsxs)("i", { children: [(0, jsx_runtime_1.jsx)("b", { children: "Example" }), ": If you're creating an 'About Us' page, the slug (", (0, jsx_runtime_1.jsx)("u", { children: "underlined" }), ") will be: jonang.in/", (0, jsx_runtime_1.jsx)("u", { children: "about-us" }), ". If you're creating an 'Our History' page, which is ", (0, jsx_runtime_1.jsx)("b", { children: "subpage to" }), " ", "'About Us', the slug will be: jonang.in/", (0, jsx_runtime_1.jsx)("u", { children: "about-us/our-history" }), ". Note the ", (0, jsx_runtime_1.jsx)("b", { children: "/" }), " ", "between the page about-us and its subpage our-history."] })] })); },
            },
            required: true,
        },
        {
            name: "title",
            type: "text",
            admin: {
                description: "The title will be shown on top of the page as a heading.",
            },
            required: true,
        },
        {
            name: "content",
            type: "richText",
            required: true,
            editor: (0, richtext_lexical_1.lexicalEditor)({
                features: function (_a) {
                    var defaultFeatures = _a.defaultFeatures;
                    return __spreadArray(__spreadArray([], defaultFeatures, true), [
                        (0, richtext_lexical_1.HTMLConverterFeature)({}),
                    ], false);
                },
            }),
        },
        (0, richtext_lexical_1.lexicalHTML)("content", { name: "contentHtml" }),
    ],
};
exports.default = Pages;
