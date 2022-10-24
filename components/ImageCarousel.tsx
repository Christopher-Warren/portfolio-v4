import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

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
  const [emblaRef, embla] = useEmblaCarousel();

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());

    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div
      className="relative top-1/2 mx-auto max-w-5xl -translate-y-1/2"
      // onClick={(e) => {
      //   console.log(e);
      // }}
    >
      <div className=" relative w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          <div className="relative h-[90vh] flex-shrink-0 flex-grow-0 basis-full">
            <Image
              className="h-full "
              alt="proj"
              layout="fill"
              objectFit="scale-down"
              objectPosition="top"
              src={images[0]}
            />
          </div>
          <div className="relative h-[90vh] flex-shrink-0 flex-grow-0 basis-full">
            <Image
              className="h-full"
              alt="proj2"
              layout="fill"
              objectFit="contain"
              objectPosition="top"
              src={images[1]}
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute top-0 flex h-full w-full items-center justify-between text-4xl">
        <button className="pointer-events-auto cursor-pointer p-3 text-neutral-500/50 transition-colors hover:text-white">
          <FontAwesomeIcon
            onClick={scrollPrev}
            icon={faChevronLeft}
          ></FontAwesomeIcon>
        </button>
        <button className="pointer-events-auto cursor-pointer p-3 text-neutral-500/50 transition-colors hover:text-white">
          <FontAwesomeIcon
            onClick={scrollNext}
            icon={faChevronRight}
          ></FontAwesomeIcon>
        </button>

        <div className="absolute bottom-0 right-0 left-0 flex justify-center">
          {scrollSnaps.map((_, index) => {
            return (
              <button
                className="pointer-events-auto p-3"
                key={index}
                onClick={() => scrollTo(index)}
                type="button"
              >
                <div
                  className={` h-3 w-3 rounded-full backdrop-blur ${
                    selectedIndex === index
                      ? "bg-neutral-500/60"
                      : "bg-neutral-500/20"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ImageCarousel;
