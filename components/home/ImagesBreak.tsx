import Image from "next/image";

export const ImagesBreak = () => {
  const imgWidth = 290;
  const imgHeight = 300;

  // [&>*]:h-80 [&>*]:w-72

  return (
    <div
      className="-mx-4 mt-10 overflow-x-hidden py-4
     lg:-mx-10 xl:-mx-20"
    >
      <div className="-mx-96 md:-mx-36">
        <div className="flex justify-between [&>*]:mx-2  [&>*]:h-56 [&>*]:w-full [&>*]:rounded-2xl [&>*]:shadow-lg md:[&>*]:h-60 xl:[&>*]:mx-4 xl:[&>*]:h-72   [&>*:nth-child(even)]:rotate-2 [&>*:nth-child(odd)]:-rotate-2">
          <div className="relative z-20 overflow-hidden">
            <Image
              alt="hey"
              layout="fill"
              objectFit="cover"
              objectPosition={30}
              className=""
              src={"/images/climbing/climbing1.jpg"}
            />
          </div>

          <div className="relative z-20 overflow-hidden">
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
          </div>
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
