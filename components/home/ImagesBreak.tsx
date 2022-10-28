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
              console.log(image);
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

          {/* <div className="relative z-20 overflow-hidden">
            <Image
              alt="hey"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className=""
              src={"/images/climbing/climbing2.jpg"}
            />
          </div>

          <div className="relative z-20 overflow-hidden">
            <Image
              alt="hey"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className=""
              src={"/images/climbing/climbing3.jpg"}
            />
          </div>

          <div className="relative z-20  overflow-hidden">
            <Image
              alt="hey"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              className=""
              src={"/images/climbing/climbing4.jpg"}
            />
          </div>
          <div className="relative z-20 overflow-hidden">
            <Image
              alt="hey"
              layout="fill"
              objectFit="cover"
              objectPosition={-40}
              className=""
              src={"/images/climbing/climbing5.jpg"}
            />
          </div> */}
          {/* <div className="flex overflow-clip bg-neutral-900">
            <Image
              alt="hey"
              className="transition-all duration-500 hover:scale-105 hover:opacity-50 hover:blur-[1px]"
              src={"/images/climbing/climbing2.jpg"}
            />
          </div>

          <div className="flex overflow-clip bg-neutral-900">
            <Image
              alt="hey"
              className="transition-all duration-500 hover:scale-105 hover:opacity-50 hover:blur-[1px]"
              src={"/images/climbing/climbing3.jpg"}
            />
          </div>
          <div className="flex overflow-clip bg-neutral-900 ">
            <Image
              alt="hey"
              className="transition-all duration-500 hover:scale-105 hover:opacity-50 hover:blur-[1px]"
              src={"/images/climbing/climbing4.jpg"}
            />
          </div>

          <Image alt="hey" src={"/images/climbing/climbing5.jpg"} /> */}
        </div>
      </div>
    </div>
  );
};
