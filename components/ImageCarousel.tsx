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
    <div className="relative h-[281px] w-[500px] self-center">
      <div className="embla  rounded-xl" ref={emblaRef}>
        <div className="embla__container flex rounded-xl ">
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
      <div className="absolute  w-full top-0 h-full text-4xl flex items-center justify-between pointer-events-none px-3">
        <FontAwesomeIcon
          onClick={scrollPrev}
          className="text-neutral-500 hover:text-white hover:cursor-pointer transition-colors pointer-events-auto"
          icon={faChevronLeft}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          onClick={scrollNext}
          className="text-neutral-500 hover:text-white hover:cursor-pointer transition-colors pointer-events-auto"
          icon={faChevronRight}
        ></FontAwesomeIcon>
      </div>
      <div className="flex justify-center mt-2">
        {scrollSnaps.map((_, index) => {
          return (
            <button
              key={index}
              className={`embla__dots  bg-neutral-800  rounded-full w-5 h-5 mx-2 ${
                selectedIndex === index ? "bg-neutral-600" : ""
              }`}
              onClick={() => scrollTo(index)}
              type="button"
            />
          );
        })}
      </div>
    </div>
  );
};
export default ImageCarousel;
