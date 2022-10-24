import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  faExternalLink,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { faImages } from "@fortawesome/free-regular-svg-icons";
import { MainContainer } from "../components/containers/MainContainer";
import ImageCarousel from "../components/ImageCarousel";
import Head from "next/head";

import { projects } from "../assets/projects";
import ImageViewer from "../components/modals/ImageViewer";
import { useState } from "react";

const Projects = () => {
  const [images, setImages] = useState<string[] | null>(null);

  return (
    <>
      <Head>
        <title>Christopher Warren - Projects</title>
      </Head>

      {images && <ImageViewer images={images} setImages={setImages} />}

      <MainContainer className="pt-52">
        <div className="max-w-2xl ">
          <h1 className="mt-6 text-5xl font-bold tracking-tighter ">
            Things I've built to show the world my web dev chops.
          </h1>
          <p className="mt-6 text-base font-light leading-7 text-neutral-600 dark:text-neutral-300 ">
            I've worked on many projects throughout the past few years but these
            are the ones that I'm most proud of. Most of them are actively
            deployed and accompanied by public repos, so feel free to check them
            out.
          </p>

          {/* connect icons */}

          {/* <button className="mt-6 bg-gradient-to-tr text-white duration-200 from-emerald-500 via-teal-500 to-green-500 shadow-lg hover:shadow-none  shadow-teal-700 rounded-md px-4 py-2">
            Download CV
          </button> */}
        </div>

        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={index} className="group my-20">
              <div className="md:flex">
                <div
                  className={`relative md:max-w-md xl:max-w-lg ${
                    isEven ? "order-2 md:-inset-x-9" : "md:inset-x-9"
                  }`}
                >
                  <div className="rounded ">
                    <div
                      className={`mb-6 flex items-end justify-between ${
                        isEven ? "md:ml-24" : "md:mr-24"
                      }`}
                    >
                      <div className="inline-block">
                        <span className="text-green-700 dark:text-green-400">
                          Featured
                        </span>
                        <h2 className="text-2xl font-bold tracking-tighter">
                          {project.name}
                        </h2>
                      </div>
                      <div className="text-2xl text-neutral-600 dark:text-neutral-400">
                        <Link href="">
                          <a className="hover:text-neutral-800 dark:hover:text-neutral-100">
                            <Icon icon={faGithub} />
                          </a>
                        </Link>
                        <Link href="">
                          <a className="ml-4 hover:text-neutral-800 dark:hover:text-neutral-100">
                            <Icon icon={faExternalLink} />
                          </a>
                        </Link>
                      </div>
                    </div>

                    <div
                      className="bg-b relative z-10 mb-4 rounded border-2 border-neutral-100 bg-white bg-transparent p-6 shadow-lg
                    backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/80"
                    >
                      <p className="text-base  text-neutral-600 dark:text-neutral-300">
                        {project.description}
                      </p>
                    </div>
                    <div className="relative z-10 mb-4 flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => {
                        return (
                          <span
                            key={tech + index + techIndex}
                            className="rounded border bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600 backdrop-blur dark:border-neutral-700 dark:bg-neutral-800/70  dark:text-neutral-400"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div
                  className={`relative flex justify-center self-center ${
                    isEven ? "md:inset-x-9" : "md:-inset-x-9"
                  }`}
                >
                  <button
                    onClick={(e) => setImages(project.images)}
                    className={`absolute z-20 m-3 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800/70 text-neutral-600 backdrop-blur dark:text-neutral-100 ${
                      isEven ? "left-0" : "right-0"
                    }`}
                  >
                    <Icon icon={faImages} />
                  </button>
                  <div className="">
                    <Image
                      alt="proj"
                      className="rounded"
                      width={600}
                      height={300}
                      objectFit="cover"
                      src={project.primaryImage}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </MainContainer>
    </>
  );
};

export default Projects;
