import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MainContainer } from "../components/containers/MainContainer";
import { Navbar } from "../components/navigation/Navbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Hero } from "../components/home";

const About = () => {
  return (
    <MainContainer className="pt-40">
      <div className="justify-between gap-6 md:flex">
        <div className="max-w-lg space-y-6">
          <h1 className="max-w-lg text-4xl font-bold tracking-tight md:text-5xl md:leading-tight">
            {`I'm Chris Warren. I live in Chattanooga, a home of great climbing.`}
          </h1>
          <p className="text-base  leading-7 text-neutral-600 dark:text-neutral-300 ">
            {`I've worked on many projects throughout the past few years but these
            are the ones that I'm most proud of. Most of them are actively
            deployed and accompanied by public repos, so feel free to check them
            out.`}
          </p>
        </div>
        <div className="">
          {/* "relative h-[300px] w-[300px] border lg:h-[400px] lg:w-[400px] xl:h-[500px] xl:w-[500px]" */}
          <div className="relative rotate-1 ">
            <Image
              className="rounded-xl"
              alt="Me at horsepens 40"
              objectFit="cover"
              layout="intrinsic"
              height={500}
              width={500}
              src="/images/horsepens.jpg"
            ></Image>
          </div>
          <div className="">
            <ul className="mt-6 text-sm text-neutral-500 dark:text-neutral-400 [&>*]:transition-colors hover:[&>*]:cursor-pointer hover:[&>*]:text-neutral-900 dark:hover:[&>*]:text-white">
              <li className="my-4 max-w-fit">
                <Link href="">
                  <a className="flex items-center">
                    <FontAwesomeIcon
                      className="mr-3 h-6 w-6 text-2xl "
                      icon={faLinkedin}
                    />
                    <span className="align-top">Follow on LinkedIn</span>
                  </a>
                </Link>
              </li>
              <li className="my-4 max-w-fit">
                <Link href="">
                  <a className="flex items-center">
                    <FontAwesomeIcon
                      className="mr-3 h-6 w-6 text-2xl"
                      icon={faGithub}
                    />
                    <span className="align-top">Follow on Github</span>
                  </a>
                </Link>
              </li>
              <li className="my-4 max-w-fit">
                <Link href="">
                  <a className="flex items-center">
                    <FontAwesomeIcon
                      className="mr-3 h-6 w-6 text-2xl "
                      icon={faTwitter}
                    />
                    <span className="align-top">Follow on Twitter</span>
                  </a>
                </Link>
              </li>
              <li className="my-4 max-w-fit">
                <Link href="">
                  <a className="flex items-center">
                    <FontAwesomeIcon
                      className="mr-3 h-6 w-6 text-2xl "
                      icon={faStackOverflow}
                    />
                    <span className="align-top">Follow on LinkedIn</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* connect icons */}

        {/* <button className="mt-6 bg-gradient-to-tr text-white duration-200 from-emerald-500 via-teal-500 to-green-500 shadow-lg hover:shadow-none  shadow-teal-700 rounded-md px-4 py-2">
            Download CV
          </button> */}
      </div>
    </MainContainer>
  );
};
export default About;
