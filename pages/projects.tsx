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
// I’ve worked on tons of little projects over the years but these are the ones
//  that I’m most proud of. Many of them are open-source, so if you see something
//  that piques your interest, check out the code and contribute if you have ideas for how it can be improved.

const projects = [
  "https://www.chriswarren.tech/images/GeoChat/5.png",
  "https://www.chriswarren.tech/images/easydash/login.png",
  "https://www.chriswarren.tech/images/fenrir-preview.png",
  "https://www.chriswarren.tech/images/dev-apparel.png",
];

const projects2 = [
  {
    name: "Easy Dash",
    link: "link",
    description:
      "A Fullstack, GraphQL powered inventory management system. It features a dashboard in which a store owner can create, modify, and delete products. The store owner can also Easydash is a Fullstack, GraphQL powered inventory management system. It features a dashboard in which a store owner can create, modify, and delete products. The store owner can also Easydash is a Fullstack, GraphQL powered inventory management system. It features a dashboard in which a store owner can create, modify, and delete products. The store owner can also",
    tech: [],
    images: [
      "https://www.chriswarren.tech/images/GeoChat/5.png",
      "https://www.chriswarren.tech/images/easydash/login.png",
    ],
  },
  {
    name: "Easy Dash",
    link: "link",
    description:
      "A Fullstack, GraphQL powered inventory management system. It features a dashboard in which a store owner can create, modify, and delete products. The store owner can also Easydash is a Fullstack, GraphQL powered inventory management system. It features a dashboard in which a store owner can create, modify, and delete products. The store owner can also Easydash is a Fullstack, GraphQL powered inventory management system. It features a dashboard in which a store owner can create, modify, and delete products. The store owner can also",
    tech: [],
    images: [
      "https://www.chriswarren.tech/images/GeoChat/5.png",
      "https://www.chriswarren.tech/images/easydash/login.png",
    ],
  },
  {
    name: "Easy Dash",
    link: "link",
    description:
      "A Fullstack, GraphQL powered inventory management system. It features a dashboard in which a store owner can create, modify, and delete products. The store owner can also Easydash is a Fullstack, GraphQL powered inventory management system. It features a dashboard in which a store owner can create, modify, and delete products. The store owner can also Easydash is a Fullstack, GraphQL powered inventory management system. It features a dashboard in which a store owner can create, modify, and delete products. The store owner can also",
    tech: [],
    images: [
      "https://www.chriswarren.tech/images/GeoChat/5.png",
      "https://www.chriswarren.tech/images/easydash/login.png",
    ],
  },
];

const Projects = () => {
  return (
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

      {projects2.map((link, index) => {
        return (
          <div
            key={index}
            className="flex my-32 justify-between odd:flex-row-reverse group"
          >
            <div className="w-1/2 rounded">
              <span className="text-green-400 mt-6">Featured</span>
              <h2 className="text-2xl font-bold tracking-tighter mb-6">
                EasyDash
              </h2>
              <div className="dark:border-neutral-800 border-neutral-100 bg-b border-2 bg-white bg-transparent rounded p-6 shadow-lg mb-4">
                <p className="text-base  dark:text-neutral-300 text-neutral-600">
                  A Fullstack, GraphQL powered inventory management system. It
                  features a dashboard in which a store owner can create,
                  modify, and delete products. The store owner can also Easydash
                  is a Fullstack, GraphQL powered inventory management system.
                  It features a dashboard in which a store owner can create,
                  modify, and delete products. The store owner can also Easydash
                  is a Fullstack, GraphQL powered inventory management system.
                  It features a dashboard in which a store owner can create,
                  modify, and delete products. The store owner can also{" "}
                </p>
              </div>
              <div className="mb-4">
                <span className="bg-neutral-700 rounded px-2 py-0.5 text-sm">
                  React
                </span>
                <span className="bg-neutral-900 border border-green-400 rounded px-2 py-0.5 mx-2 text-sm">
                  React
                </span>
                <span className="bg-neutral-900 border border-green-400 rounded px-2 py-0.5 mx-2 text-sm">
                  React
                </span>
              </div>

              <div className="text-xl">
                <Link href="">
                  <FontAwesomeIcon
                    className="mr-4"
                    icon={faGithub}
                  ></FontAwesomeIcon>
                </Link>
                <Link href="">
                  <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                </Link>
              </div>
            </div>

            <ImageCarousel images={link.images}></ImageCarousel>

            {/* <div className="relative border">
                <div className="static">
                  <Image
                    alt="proj"
                    width={500}
                    height={281}
                    objectFit="cover"
                    className="rounded-xl transition-transform"
                    src={link.images[0]}
                  />
                </div>
                <div className="">
                 
                </div>
              </div> */}
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Projects;
