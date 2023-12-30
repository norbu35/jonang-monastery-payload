"use client";
import { useLivePreview } from "@payloadcms/live-preview-react";
import { Page as PageType } from "@/payload-types";

const PageClient: React.FC<{
  page: {
    title: string;
  };
}> = ({ page: initialPage }) => {
  const { data } = useLivePreview<PageType>({
    initialData: initialPage,
    serverURL: "http://localhost:3000",
    depth: 2,
  });

  return (
    <>
      <div className="flex h-40 items-center justify-center bg-[url('/src/assets/images/vajra-bell.webp')] bg-cover bg-center md:mt-20 md:h-52 lg:mt-[96px] lg:h-60">
        <h1 className="text-center font-quicksand text-4xl font-semibold text-white">
          {data && data.title}
        </h1>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data.contentHtml }}
        className="section-padding"
      />
    </>
  );
};

export default PageClient;
