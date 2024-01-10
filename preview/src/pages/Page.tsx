import React from "react";

const Page: React.FC<{
  data: {
    title: string;
    contentHtml: string;
  };
}> = ({ data }) => {
  return (
    <>
      <div className="flex h-40 items-center justify-center bg-[url('/src/assets/images/vajra-bell.webp')] bg-cover bg-center md:mt-20 md:h-52 lg:mt-[96px] lg:h-60">
        <h1 className="text-center font-quicksand text-4xl font-semibold text-white">
          {data?.title}
        </h1>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: data?.contentHtml }}
        className="section-padding"
      />
    </>
  );
};

export default Page;
