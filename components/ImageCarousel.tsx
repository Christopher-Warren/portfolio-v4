import Image from "next/image";
import { useState } from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  images: string[];
  children?: React.ReactNode;
}
import useEmblaCarousel from "embla-carousel-react";

const ImageCarousel: React.FC<Props> = ({ images }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla  overflow-hidden rounded-xl" ref={emblaRef}>
      <div className="embla__container flex w-[500px] rounded-xl">
        <div className="embla__slide flex-grow-0 flex-shrink-0">
          <Image
            alt="proj"
            width={500}
            height={281}
            objectFit="cover"
            className=" rounded-xl"
            src={images[0]}
          />
        </div>
        <div className="embla__slide flex-grow-0 flex-shrink-0">
          <Image
            alt="proj"
            width={500}
            height={281}
            className=" rounded-xl"
            objectFit="cover"
            src={images[1]}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative self-center">
      <div className="absolute flex items-center justify-between  z-10 w-full h-full text-3xl px-4">
        <FontAwesomeIcon
          onClick={() =>
            setSelectedIdx((prev) => {
              if (prev === 0) return images.length - 1;

              return prev - 1;
            })
          }
          className="font-thin text-neutral-300 hover:text-white hover: cursor-pointer transition-colors"
          icon={faChevronLeft}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          onClick={() =>
            setSelectedIdx((prev) => {
              if (prev === images.length - 1) return 0;

              return prev + 1;
            })
          }
          className="font-thin text-neutral-300 hover:text-white hover: cursor-pointer transition-colors"
          icon={faChevronRight}
        ></FontAwesomeIcon>
      </div>
      <div className="relative border">
        <div className="static">
          <Image
            alt="proj"
            width={500}
            height={281}
            objectFit="cover"
            className="rounded-xl transition-transform "
            src={images[selectedIdx]}
          />
        </div>
      </div>
      <div className="absolute">1 2 3</div>
    </div>
  );
};
export default ImageCarousel;
