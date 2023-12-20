import path from "path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { viteBundler } from "@payloadcms/bundler-vite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";
import seoPlugin from "@payloadcms/plugin-seo";

import Users from "./collections/Users";
import Pages from "./collections/Pages";
import Quotes from "./collections/Quotes";
import Cards from "./collections/Cards";
import Media from "./collections/Media";
import Portraits from "./collections/Portraits";
import Teachers from "./collections/Teachers";
import News from "./collections/News";
import Header from "./globals/Header";
import PageTitle from "./globals/PageTitle";
import IntroText from "./globals/IntroText";
import Eminence from "./globals/Eminence";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: lexicalEditor({}),
  globals: [Header, PageTitle, IntroText, Eminence],
  collections: [Users, Media, Portraits, Pages, News, Cards, Teachers, Quotes],
  serverURL: process.env.NODE_ENV === "production"
    ? process.env.PAYLOAD_PUBLIC_SERVER_URL
    : "http://localhost:3000",
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  plugins: [seoPlugin({
    tabbedUI: true,
    collections: ["pages"],
    uploadsCollection: "media",
    generateTitle: ({ doc }) => `Jonang Monastery | ${doc?.title?.value}`,
    generateDescription: ({ doc }) => doc?.excerpt?.value,
    generateURL: ({ doc }) =>
      `https://jonang.in/${collection?.slug}/${doc?.slug?.value}`,
  })],
  rateLimit: {
    max: 200,
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
