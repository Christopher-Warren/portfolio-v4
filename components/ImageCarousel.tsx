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
  aspectRatio: "wide" | "vertical";
  children?: React.ReactNode;
}
import useEmblaCarousel from "embla-carousel-react";

const ImageCarousel: React.FC<Props> = ({ images, aspectRatio }) => {
  const [emblaRef, embla] = useEmblaCarousel();

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const [isGrabbing, setIsGrabbing] = useState(false);

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
      className={`relative w-[500px] h-[${
        aspectRatio === "vertical" ? "400" : "281"
      }px] overflow-hidden rounded-lg border border-neutral-800`}
    >
      <div
        className={`rounded-xl ${
          isGrabbing ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={() => setIsGrabbing(true)}
        onPointerUp={() => setIsGrabbing(false)}
        ref={emblaRef}
      >
        <div className="flex">
          <div className="flex-shrink-0 flex-grow-0 ">
            <Image
              alt="proj"
              width={500}
              height={aspectRatio === "vertical" ? 400 : 281}
              objectFit="contain"
              objectPosition="top"
              src={images[0]}
            />
          </div>
          {/* <div className="flex-grow-0 flex-shrink-0">
            <Image
              alt="proj"
              width={500}
              height={281}
              objectFit="cover"
              src={images[1]}
            />
          </div> */}
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
