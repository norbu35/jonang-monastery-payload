"use client";
import { useLivePreview } from "@payloadcms/live-preview-react";
import { Page as PageType } from "@/payload-types";
import Page from "./pages/Page";
import Newsletter from "./pages/Newsletter";

const PageClient: React.FC<{
  page: {
    title?: string;
    contentHtml?: string;
    bodyHtml?: string;
  };
}> = ({ page: initialPage }) => {
  const { data } = useLivePreview<PageType>({
    initialData: initialPage,
    serverURL: "http://localhost:3000",
    depth: 2,
  });

  return (
    data?.contentHtml && <Page data={data} /> ||
    data?.bodyHtml && <Newsletter data={data} /> ||
    null
  );
};

export default PageClient;
