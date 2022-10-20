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
    <div className="relative h-[281px] w-[500px] overflow-hidden rounded-xl">
      <div
        className={`rounded-xl ${
          isGrabbing ? "cursor-grabbing" : "cursor-grab"
        }`}
        onPointerDown={() => setIsGrabbing(true)}
        onPointerUp={() => setIsGrabbing(false)}
        ref={emblaRef}
      >
        <div className="flex">
          <div className="flex-grow-0 flex-shrink-0 ">
            <Image
              alt="proj"
              width={500}
              height={281}
              objectFit="cover"
              src={images[0]}
            />
          </div>
          <div className="flex-grow-0 flex-shrink-0">
            <Image
              alt="proj"
              width={500}
              height={281}
              objectFit="cover"
              src={images[1]}
            />
          </div>
        </div>
      </div>
      <div className="absolute w-full top-0 h-full text-4xl flex items-center justify-between pointer-events-none">
        <button className="text-neutral-500/50 hover:text-white cursor-pointer transition-colors pointer-events-auto p-3">
          <FontAwesomeIcon
            onClick={scrollPrev}
            icon={faChevronLeft}
          ></FontAwesomeIcon>
        </button>
        <button className="text-neutral-500/50 hover:text-white cursor-pointer transition-colors pointer-events-auto p-3">
          <FontAwesomeIcon
            onClick={scrollNext}
            icon={faChevronRight}
          ></FontAwesomeIcon>
        </button>

        <div className="flex justify-center absolute bottom-0 right-0 left-0">
          {scrollSnaps.map((_, index) => {
            return (
              <button
                className="p-3 pointer-events-auto"
                key={index}
                onClick={() => scrollTo(index)}
                type="button"
              >
                <div
                  className={` rounded-full w-3 h-3 backdrop-blur ${
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
