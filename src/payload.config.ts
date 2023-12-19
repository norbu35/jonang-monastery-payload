import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { viteBundler } from "@payloadcms/bundler-vite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import Pages from "./collections/Pages";
import Quotes from "./collections/Quotes";
import Cards from "./collections/Cards";
import Media from "./collections/Media";
import Header from "./globals/Header";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: lexicalEditor({}),
  globals: [Header],
  collections: [Users, Pages, Quotes, Cards, Media],
  serverURL: process.env.NODE_ENV === "production"
    ? process.env.PAYLOAD_PUBLIC_SERVER_URL
    : "http://localhost:3000",
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  plugins: [payloadCloud()],
  rateLimit: {
    max: 100,
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
