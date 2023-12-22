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
var sendNewsletter_1 = require("../hooks/sendNewsletter");
var Newsletters = {
    slug: "newsletters",
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: "body",
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
        (0, richtext_lexical_1.lexicalHTML)("body", { name: "bodyHtml" }),
    ],
    hooks: {
        afterChange: [sendNewsletter_1.sendNewsletter],
    },
};
exports.default = Newsletters;
