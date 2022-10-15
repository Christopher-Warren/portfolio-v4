import Image from "next/image";

export const ImagesBreak = () => {
  const imgWidth = 290;
  const imgHeight = 300;

  return (
    <div className="-mx-20 overflow-x-clip mt-20">
      <div className="-mx-36">
        <div className="flex justify-between [&>*]:shadow-lg [&>*]:rounded-2xl [&>*:nth-child(even)]:rotate-2 [&>*:nth-child(odd)]:-rotate-2">
          <Image
            alt="hey"
            width={imgWidth}
            layout={"fixed"}
            height={imgHeight}
            className=""
            src={
              "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
            }
          />
          <div className="flex overflow-clip bg-neutral-900">
            <Image
              alt="hey"
              width={imgWidth}
              height={imgHeight}
              className="hover:opacity-50 hover:blur-[1px] hover:scale-105 transition-all duration-500"
              src={
                "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
              }
            />
          </div>

          <div className="flex overflow-clip bg-neutral-900">
            <Image
              alt="hey"
              width={imgWidth}
              height={imgHeight}
              className="hover:opacity-50 hover:blur-[1px] hover:scale-105 transition-all duration-500"
              src={
                "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
              }
            />
          </div>
          <div className="flex overflow-clip bg-neutral-900 ">
            <Image
              alt="hey"
              width={imgWidth}
              height={imgHeight}
              className="hover:opacity-50 hover:blur-[1px] hover:scale-105 transition-all duration-500"
              src={
                "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
              }
            />
          </div>
          <Image
            alt="hey"
            width={imgWidth}
            height={imgHeight}
            src={
              "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
            }
          />
        </div>
      </div>
    </div>
  );
};
