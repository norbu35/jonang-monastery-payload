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
var richtext_lexical_1 = require("@payloadcms/richtext-lexical");
var Activities = {
    slug: "activities",
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: "description",
            type: "richText",
            editor: (0, richtext_lexical_1.lexicalEditor)({
                features: function (_a) {
                    var defaultFeatures = _a.defaultFeatures;
                    return __spreadArray(__spreadArray([], defaultFeatures, true), [
                        (0, richtext_lexical_1.HTMLConverterFeature)({}),
                    ], false);
                },
            }),
        },
        {
            name: "image",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        (0, richtext_lexical_1.lexicalHTML)("description", { name: "descriptionHtml" }),
    ],
};
exports.default = Activities;
