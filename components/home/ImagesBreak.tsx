import Image from "next/image";

import * as React from "react";

export const ImagesBreak = ({ images }: any) => {
  return (
    <div
      className="-mx-4 mt-10 overflow-x-hidden py-4
     lg:-mx-10 xl:-mx-20"
    >
      <div className="-mx-96 md:-mx-36">
        <div className="flex justify-between [&>*]:mx-2  [&>*]:h-56 [&>*]:w-full [&>*]:rounded-2xl [&>*]:shadow-lg md:[&>*]:h-60 xl:[&>*]:mx-4 xl:[&>*]:h-72   [&>*:nth-child(even)]:rotate-2 [&>*:nth-child(odd)]:-rotate-2">
          {images &&
            images.map((image: any) => {
              return (
                <div key={image.src} className="relative overflow-hidden">
                  <div
                    className={`${image.className} absolute inset-0 z-[-1] h-full w-full scale-150 transform blur-2xl filter`}
                  />
                  <Image
                    src={image.src}
                    alt="hey"
                    layout="fill"
                    objectFit="cover"
                    blurDataURL={image.src}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
