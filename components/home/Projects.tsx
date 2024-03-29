import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

import { faImages } from "@fortawesome/free-regular-svg-icons";
import { MainContainer } from "../../components/containers/MainContainer";

import Head from "next/head";

import ImageViewer from "../../components/modals/ImageViewer";
import { useState } from "react";

import { getProjects } from "../../assets/getProjectsData";
import { ProjectType } from "../../@types/Projects";

interface Props {
  projects: ProjectType[];
}

const Projects = ({ projects }: Props) => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <>
      {selectedProject && (
        <ImageViewer
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      )}

      <div className="max-w-2xl ">
        <h2 className="mt-20 text-3xl font-bold tracking-tight md:text-3xl md:leading-snug ">
          {`Below are `}
          <span className="bg-gradient-to-br from-teal-500 to-green-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-400">
            Projects
          </span>
          {` I've built to show the world my web dev chops.`}
        </h2>
        <p className="mt-6 text-base leading-7 text-neutral-500 dark:text-neutral-400 ">
          {`I've worked on many projects throughout the past few years but these
            are the ones that I'm most proud of. Most of them are actively
            deployed and accompanied by public repos, so feel free to check them
            out.`}
        </p>
      </div>
      <div className="pb-2">
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              id={`${project.folderName}`}
              key={index}
              className="group my-20"
            >
              <div className="md:flex">
                <div
                  className={`relative md:max-w-md xl:max-w-lg ${
                    isEven ? "order-2 " : ""
                  }`}
                >
                  <div className="rounded ">
                    <div
                      className={`mb-6 flex items-end ${
                        isEven ? "md:ml-20" : "md:mr-20"
                      }`}
                    >
                      <div className="mr-5 inline-block">
                        <span className="text-green-700 dark:text-green-400">
                          Featured
                        </span>
                        <h2 className="text-2xl font-bold tracking-tighter">
                          <Link href={project.demoURL}>{project.name}</Link>
                        </h2>
                      </div>
                      <div className="pointer-events-none -mb-1 text-4xl text-neutral-600 opacity-20 dark:text-neutral-400">
                        /
                      </div>
                      <div className="ml-5 text-2xl text-neutral-600  dark:text-neutral-400">
                        <Link href={project.sourceURL}>
                          <a
                            target="_blank"
                            className="transition-colors hover:text-neutral-800 dark:hover:text-neutral-100"
                          >
                            <Icon icon={faGithub} />
                          </a>
                        </Link>
                        <Link href={project.demoURL}>
                          <a
                            target="_blank"
                            className={`${
                              project.demoURL.length === 0 && "hidden"
                            } ml-5 transition-colors hover:text-neutral-800 dark:hover:text-neutral-100`}
                          >
                            <Icon icon={faExternalLink} />
                          </a>
                        </Link>
                      </div>
                    </div>
                    {/* mobile images */}
                    <div
                      className={`relative mb-6 flex justify-center self-center md:hidden`}
                    >
                      <button
                        onClick={(e) => setSelectedProject(project)}
                        className={`absolute left-0 z-20 m-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-neutral-600 backdrop-blur transition-colors hover:text-neutral-900 dark:bg-neutral-800/70 dark:text-neutral-300 dark:hover:text-white`}
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
                    <div
                      className=" relative z-10 mb-4 rounded border-2 border-neutral-100 bg-white/80  p-4 shadow-lg backdrop-blur
                    dark:border-neutral-800 dark:bg-neutral-900/80 md:p-6"
                    >
                      <p
                        dangerouslySetInnerHTML={{
                          __html: project.description,
                        }}
                        className="text-base  text-neutral-600 dark:text-neutral-300"
                      ></p>
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
                  className={`relative hidden justify-center self-center md:flex ${
                    isEven ? "md:inset-x-9" : "md:-inset-x-9"
                  }`}
                >
                  <button
                    onClick={(e) => setSelectedProject(project)}
                    className={`absolute z-20 m-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-neutral-600 backdrop-blur transition-colors hover:text-neutral-900 dark:bg-neutral-800/70 dark:text-neutral-300 dark:hover:text-white ${
                      isEven ? "left-0" : "right-0"
                    }`}
                  >
                    <Icon icon={faImages} />
                  </button>
                  <div
                    className="cursor-pointer"
                    onClick={(e) => setSelectedProject(project)}
                  >
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
      </div>
    </>
  );
};

export default Projects;
