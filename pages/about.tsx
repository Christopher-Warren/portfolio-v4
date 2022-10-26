import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MainContainer } from "../components/containers/MainContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Hero } from "../components/home";
import InlineLink from "../components/links/InlineLink";

const About = () => {
  return (
    <MainContainer className="pt-44">
      <div className="justify-between gap-6 md:flex">
        <div className="max-w-lg">
          <div className="relative flex justify-center border md:hidden">
            <Image
              className="mx-auto rounded-xl"
              alt="Me at horsepens 40"
              objectFit="cover"
              layout="intrinsic"
              height={300}
              width={300}
              src="/images/horsepens.jpg"
            ></Image>
          </div>
          <h1 className="mb-6 max-w-lg text-4xl font-bold tracking-tight md:text-5xl md:leading-tight">
            {`I'm Chris Warren. I code in Chattanooga, a mecca of great climbing.`}
          </h1>
          <div className="space-y-6 text-base  leading-7 text-neutral-600 dark:text-neutral-300 ">
            {/* <p>
              I have always been fascinated by technology and using it
              creatively. Wether I'm tearing apart laptops and desktops to fix
              them, or modifying their software, I have always felt at home.
              This curiousity is what lead me to pursue a career in Software
              Engineering.
            </p> */}
            <p>
              In 2018 I decided to give coding a try. About one month into what
              would be my first of many Udemy courses, I haven't been able to
              curb <i>my hunger</i> to learn more. I can say with confidence
              that coding has become a passion of mine.
            </p>
            <p>
              A few months after studying Javascript, I spent another couple
              months learning React, then NodeJS. This was when I was ready to
              build my first project,
              <InlineLink href="/projects"> Refurn</InlineLink>. A simple CRUD
              app for an imaginary shop that restores furniture, with way too
              many forms😅.
            </p>

            <p>
              I have since continued learning, studying, <i>relentlessly</i>{" "}
              coding, and solidifying newly acquired skills by building more
              <InlineLink href="/projects"> Projects</InlineLink>; Full Stack
              Projects that are much more complex than ones made during my first
              year of coding. The most recent of which being this blog, where I
              can share what I've learned along this challenging, and sometimes
              unforgiving path of becoming a self-taught software developer.
            </p>
          </div>
        </div>
        <div className="x-10">
          <div className="relative hidden rotate-3 md:block">
            <Image
              className="rounded-xl"
              alt="Me at horsepens 40"
              objectFit="cover"
              layout="intrinsic"
              height={400}
              width={400}
              src="/images/horsepens.jpg"
            ></Image>
          </div>
          <div className="">
            <ul className="mt-14 text-sm text-neutral-500 dark:text-neutral-400 [&>*]:transition-colors hover:[&>*]:cursor-pointer hover:[&>*]:text-neutral-900 dark:hover:[&>*]:text-white">
              <li className="my-5 max-w-fit">
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
              <li className="my-5 max-w-fit">
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
              <li className="my-5 max-w-fit">
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
              <li className="my-5 max-w-fit">
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
