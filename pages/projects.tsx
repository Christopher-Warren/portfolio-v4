import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import {
  faExternalLink,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
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

      <MainContainer className="pt-56">
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
            <div key={index} className="my-20 justify-between group">
              <div className="xl:grid grid-cols-12">
                <div
                  className={`col-span-5 xl:col-span-6 ${isEven && "order-2"}`}
                >
                  <div className="rounded">
                    <span className="dark:text-green-400 text-green-700 mt-6">
                      Featured
                    </span>
                    <div className="flex justify-between">
                      <h2 className="text-2xl font-bold tracking-tighter mb-6">
                        {project.name}
                      </h2>
                      <div className="text-2xl text-neutral-600 dark:text-neutral-400">
                        <Link href="">
                          <FontAwesomeIcon
                            className="mr-4 cursor-pointer hover:text-neutral-800 dark:hover:text-neutral-100"
                            icon={faGithub}
                          ></FontAwesomeIcon>
                        </Link>
                        <Link href="">
                          <FontAwesomeIcon
                            className="cursor-pointer hover:text-neutral-800 dark:hover:text-neutral-100"
                            icon={faExternalLink}
                          ></FontAwesomeIcon>
                        </Link>
                      </div>
                    </div>

                    <div className="xl:hidden col-span-7 xl:col-span-6 self-center mx-auto flex justify-center mb-8">
                      <ImageCarousel images={project.images}></ImageCarousel>
                    </div>
                    <div className="dark:border-neutral-800 border-neutral-100 bg-b border-2 bg-white bg-transparent rounded p-6 shadow-lg mb-4">
                      <p className="text-base  dark:text-neutral-300 text-neutral-600">
                        {project.description}
                      </p>
                    </div>
                    <div className="mb-4 flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => {
                        return (
                          <span
                            key={tech + index + techIndex}
                            className="dark:bg-neutral-800 bg-neutral-200 border dark:border-neutral-700 dark:text-neutral-400 text-neutral-600 rounded px-2 py-0.5  text-xs"
                          >
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div
                  className={`hidden lg:block col-span-7 xl:col-span-6 self-center ${
                    !isEven && "justify-self-end self-center"
                  }`}
                >
                  <ImageCarousel images={project.images}></ImageCarousel>
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
