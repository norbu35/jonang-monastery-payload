"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var path_1 = __importDefault(require("path"));
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var bundler_vite_1 = require("@payloadcms/bundler-vite");
var richtext_lexical_1 = require("@payloadcms/richtext-lexical");
var config_1 = require("payload/config");
var plugin_seo_1 = __importDefault(require("@payloadcms/plugin-seo"));
var Users_1 = __importDefault(require("./collections/Users"));
var Pages_1 = __importDefault(require("./collections/Pages"));
var Quotes_1 = __importDefault(require("./collections/Quotes"));
var Cards_1 = __importDefault(require("./collections/Cards"));
var Media_1 = __importDefault(require("./collections/Media"));
var Portraits_1 = __importDefault(require("./collections/Portraits"));
var Teachers_1 = __importDefault(require("./collections/Teachers"));
var News_1 = __importDefault(require("./collections/News"));
var Donations_1 = __importDefault(require("./collections/Donations"));
var Newsletters_1 = __importDefault(require("./collections/Newsletters"));
var Header_1 = __importDefault(require("./globals/Header"));
var PageTitle_1 = __importDefault(require("./globals/PageTitle"));
var IntroText_1 = __importDefault(require("./globals/IntroText"));
var Eminence_1 = __importDefault(require("./globals/Eminence"));
var Activities_1 = __importDefault(require("./globals/Activities"));
exports.default = (0, config_1.buildConfig)({
    admin: {
        user: Users_1.default.slug,
        bundler: (0, bundler_vite_1.viteBundler)(),
        livePreview: {
            url: "http://localhost:3000",
            collections: ["newsleters", "pages"],
        },
    },
    editor: (0, richtext_lexical_1.lexicalEditor)({}),
    globals: [Header_1.default, PageTitle_1.default, IntroText_1.default, Eminence_1.default, Activities_1.default],
    collections: [
        Users_1.default,
        Media_1.default,
        Portraits_1.default,
        Pages_1.default,
        Newsletters_1.default,
        News_1.default,
        Teachers_1.default,
        Cards_1.default,
        Donations_1.default,
        Quotes_1.default,
    ],
    serverURL: process.env.NODE_ENV === "production"
        ? process.env.PAYLOAD_PUBLIC_SERVER_URL
        : "http://localhost:3000",
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.DATABASE_URI,
    }),
    plugins: [(0, plugin_seo_1.default)({
            tabbedUI: true,
            collections: ["pages"],
            uploadsCollection: "media",
            generateTitle: function (_a) {
                var _b;
                var doc = _a.doc;
                return "Jonang Monastery | ".concat((_b = doc === null || doc === void 0 ? void 0 : doc.title) === null || _b === void 0 ? void 0 : _b.value);
            },
            generateDescription: function (_a) {
                var _b;
                var doc = _a.doc;
                return (_b = doc === null || doc === void 0 ? void 0 : doc.excerpt) === null || _b === void 0 ? void 0 : _b.value;
            },
            generateURL: function (_a) {
                var _b;
                var doc = _a.doc;
                return "https://jonang.in/".concat(collection === null || collection === void 0 ? void 0 : collection.slug, "/").concat((_b = doc === null || doc === void 0 ? void 0 : doc.slug) === null || _b === void 0 ? void 0 : _b.value);
            },
        })],
    rateLimit: {
        max: 1000,
        trustProxy: true,
    },
    cors: process.env.NODE_ENV === " production" ? ["https://jonang.in"] : [
        "http://localhost:4321",
        "https://jonang.netlify.app",
        "http://localhost:3000",
    ],
    graphQL: {
        disable: true,
    },
});
