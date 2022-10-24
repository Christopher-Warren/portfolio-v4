import Image from "next/image";
import { ElementType, ReactElement, useEffect, useState } from "react";
import ImageCarousel from "../ImageCarousel";

interface Props {
  images: string[];
  setImages: any;
}

const ImageViewer: React.FC<Props> = ({ images, setImages }) => {
  useEffect(() => {
    images && (document.body.style.overflow = "hidden");

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [images]);
  return (
    <div
      onClick={(e: any) => {
        if (e.target.localName !== "img") {
          setImages(null);
        }
      }}
      className={`${
        images ? "block" : "hidden"
      } fixed z-50 h-screen w-screen overflow-hidden bg-neutral-900/50 backdrop-blur`}
    >
      <div className="relative mx-auto h-full w-full max-w-7xl ">
        <button
          onClick={() => setImages(null)}
          className="absolute top-0 right-0 z-10 "
        >
          close
        </button>
        {/* <Image objectFit="cover" layout="fill" src={images[0]}></Image> */}
        <ImageCarousel images={images} />
      </div>
    </div>
  );
};
export default ImageViewer;
