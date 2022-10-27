import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  project: ProjectType;

  children?: React.ReactNode;
}
import useEmblaCarousel from "embla-carousel-react";
import { ProjectType } from "../@types/Projects";

const ImageCarousel: React.FC<Props> = ({ project }) => {
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
    <>
      <div className="relative top-1/2 mx-auto max-w-5xl -translate-y-1/2">
        <div className=" relative w-full overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {project.images.map((imageSrc: string) => {
              return (
                <div
                  key={imageSrc}
                  className="relative h-[80vh] flex-shrink-0 flex-grow-0 basis-full"
                >
                  <Image
                    className="relative h-full"
                    alt="proj"
                    layout="fill"
                    objectFit={
                      project.folderName === "geochat" ? "contain" : "cover"
                    }
                    objectPosition="top"
                    src={imageSrc}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="pointer-events-none absolute top-0 flex h-full w-full items-center justify-between text-4xl">
          <button
            disabled={!prevBtnEnabled}
            className="pointer-events-auto cursor-pointer p-3 text-neutral-400 transition-colors hover:text-white disabled:text-neutral-500/20"
          >
            <FontAwesomeIcon
              onClick={scrollPrev}
              icon={faChevronLeft}
            ></FontAwesomeIcon>
          </button>
          <button
            disabled={!nextBtnEnabled}
            className="pointer-events-auto cursor-pointer p-3 text-neutral-400 transition-colors hover:text-white disabled:text-neutral-500/20"
          >
            <FontAwesomeIcon
              onClick={scrollNext}
              icon={faChevronRight}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>{" "}
      <div className="absolute bottom-5 right-0 left-0 flex flex-wrap justify-center md:bottom-10">
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
    </>
  );
};
export default ImageCarousel;
