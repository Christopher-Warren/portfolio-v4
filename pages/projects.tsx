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

const Projects = () => {
  return (
    <>
      <Head>
        <title>Christopher Warren - Projects</title>
      </Head>

      <MainContainer className="pt-52">
        <div className="max-w-2xl ">
          <h1 className="text-5xl mt-6 font-bold tracking-tighter ">
            Things I've built to show the world my web dev chops.
          </h1>
          <p className="mt-6 text-base font-light dark:text-neutral-300 text-neutral-600 leading-7 ">
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
            <div key={index} className="my-20 group">
              <div className="flex  ">
                <div
                  className={`max-w-lg relative   ${
                    isEven ? "order-2 -inset-x-9" : "inset-x-9"
                  }`}
                >
                  <div className="rounded ">
                    <div
                      className={`flex justify-between mb-6 items-end ${
                        isEven ? "ml-24" : "mr-24"
                      }`}
                    >
                      <div className=" inline-block">
                        <span className="dark:text-green-400 text-green-700">
                          Featured
                        </span>
                        <h2 className="text-2xl font-bold tracking-tighter">
                          {project.name}
                        </h2>
                      </div>
                      <div className=" text-2xl text-neutral-600 dark:text-neutral-400">
                        <Link href="">
                          <a className="  hover:text-neutral-800 dark:hover:text-neutral-100">
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
                      className="relative dark:border-neutral-800 border-neutral-100 bg-b border-2 bg-white bg-transparent rounded p-6 shadow-lg mb-4
                    dark:bg-neutral-900/80 z-10 backdrop-blur
                    "
                    >
                      <p className="text-base  dark:text-neutral-300 text-neutral-600">
                        {project.description}
                      </p>
                    </div>
                    <div className="relative z-10 mb-4 flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => {
                        return (
                          <span
                            key={tech + index + techIndex}
                            className="dark:bg-neutral-800/70 backdrop-blur bg-neutral-200 border dark:border-neutral-700 dark:text-neutral-400 text-neutral-600 rounded px-2 py-0.5  text-xs"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div
                  className={` self-center relative  ${
                    isEven ? "inset-x-9" : "-inset-x-9"
                  }`}
                >
                  <button
                    className={`flex w-10 h-10 rounded-full justify-center items-center absolute z-20 bg-neutral-800/70 backdrop-blur right-0 m-3   text-neutral-600 dark:text-neutral-100 ${
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
                      src={project.images[0]}
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
