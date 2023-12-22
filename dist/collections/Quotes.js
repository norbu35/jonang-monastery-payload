"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Quotes = {
    slug: "quotes",
    access: {
        read: function () { return true; },
    },
    admin: {
        useAsTitle: "title",
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
            admin: {
                description: "A short label to show as the name of the quote.",
            },
        },
        {
            name: "quote",
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
        (0, richtext_lexical_1.lexicalHTML)("quote", { name: "quoteHtml" }),
        {
            name: "addSourceLanguage",
            type: "checkbox",
            label: "Quote in source language",
            admin: {
                description: "Check this box to enable adding the quote in its source language.",
            },
        },
        {
            name: "originalQuote",
            type: "richText",
            editor: (0, richtext_lexical_1.lexicalEditor)({
                features: function (_a) {
                    var defaultFeatures = _a.defaultFeatures;
                    return __spreadArray(__spreadArray([], defaultFeatures, true), [
                        (0, richtext_lexical_1.HTMLConverterFeature)({}),
                    ], false);
                },
            }),
            admin: {
                condition: function (data) { return data.addSourceLanguage; },
            },
        },
        (0, richtext_lexical_1.lexicalHTML)("originalQuote", { name: "originalQuoteHtml" }),
        {
            name: "originalQuoteLang",
            type: "text",
            label: "Original quote language",
            required: true,
            admin: {
                condition: function (data) { return data.addSourceLanguage; },
                description: function () { return ((0, jsx_runtime_1.jsxs)("div", { children: ["A", " ", (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes", target: "_blank" }, { children: "two-letter language code" })), " ", "denoting the language of the source quote.", " ", (0, jsx_runtime_1.jsx)("i", { children: "Examples: English: en, Tibetan: bo, Pali: pi" })] })); },
            },
        },
        {
            name: "source",
            type: "text",
        },
    ],
};
exports.default = Quotes;
