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

import { faIdCard as skillsIcon } from "@fortawesome/free-regular-svg-icons";

import Link from "next/link";
import { Hero } from "../components/home";
import InlineLink from "../components/links/InlineLink";
import TextInput from "../components/inputs/TextInput";
import { socialLinks } from "../assets/socialLinks";

const About = () => {
  const skills = [
    { name: "Typescript", icon: "/images/logos/tech/icons8-typescript.svg" },
    { name: "React", icon: "/images/logos/tech/icons8-react-native.svg" },
    {
      name: "React Native",
      icon: "/images/logos/tech/icons8-react-native.svg",
    },
    { name: "Next.js", icon: "/images/logos/tech/icons8-next.js.svg" },
    {
      name: "NodeJS/Express",
      icon: "/images/logos/tech/icons8-node-js-48.png",
    },
    { name: "MongoDB", icon: "/images/logos/tech/icons8-mongodb.svg" },
    { name: "MySQL", icon: "/images/logos/tech/icons8-my-sql-48.png" },
    { name: "AWS S3", icon: "/images/logos/tech/icons8-amazon-s3-50.png" },
    {
      name: "Cloud Firestore",
      icon: "/images/logos/tech/icons8-cloud-firestore.svg",
    },
    { name: "Redux", icon: "/images/logos/tech/icons8-redux.svg" },
    { name: "GraphQL", icon: "/images/logos/tech/icons8-graphql.svg" },
    { name: "TailwindCSS", icon: "/images/logos/tech/tailwind-css.svg" },
    { name: "SASS", icon: "/images/logos/tech/icons8-sass-avatar.svg" },
    { name: "Bootstrap", icon: "/images/logos/tech/icons8-bootstrap.svg" },
    { name: "HTML", icon: "/images/logos/tech/icons8-html-5.svg" },
    { name: "CSS", icon: "/images/logos/tech/icons8-css3.svg" },
  ];

  return (
    <>
      <Head>
        <title>Christopher Warren - About</title>
      </Head>
      <MainContainer className="pt-44">
        <div className="justify-between gap-6 md:flex">
          {/* Left */}
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
              <p>
                In 2018 I decided to give coding a try. About one month into
                what would be my first of many Udemy courses, I haven&apos;t
                been able to curb <i>my hunger</i> to learn more. I can say with
                confidence that coding has become a passion of mine.
              </p>
              <p>
                A few months after studying Javascript, I spent another couple
                months learning React, then NodeJS. This was when I was ready to
                build my first project,
                <InlineLink href="/projects#refurn"> Refurn</InlineLink>. A
                simple CRUD app for an imaginary shop that restores furniture,
                with way too many forms😅.
              </p>

              <p>
                I have since continued learning, studying, <i>relentlessly</i>{" "}
                coding, and solidifying newly acquired skills by building more
                <InlineLink href="/projects"> Projects</InlineLink>; Full Stack
                Projects that are much more complex than ones made during my
                first year of coding. The most recent of which being this blog,
                where I can share what I&apos;ve learned along this challenging,
                and sometimes unforgiving path of becoming a self-taught
                software developer.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className="">
            <div className="relative hidden rotate-3  md:block">
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

            {/* right bottom */}
            <div className="mt-10 flex justify-between gap-6 pb-32">
              {/* skills */}
              <div className="w-full rounded-lg border border-neutral-200 p-5 shadow-xl  dark:border-neutral-700">
                <div className="mb-5 flex">
                  <FontAwesomeIcon
                    className="mr-4 self-center  text-xl text-neutral-400 "
                    icon={skillsIcon}
                    mask={["far", "circle"]}
                  />
                  <span className="text-lg text-neutral-600 dark:text-neutral-100">
                    Skills
                  </span>
                </div>
                <div className="text-neutral-400">
                  <ul className="space-y-2 ">
                    {skills.map((skill) => {
                      return (
                        <li className="flex items-center" key={skill.name}>
                          <div className="relative mr-2 inline-block h-4 w-4">
                            {skill.icon && (
                              <Image
                                layout="fill"
                                alt={skill.name}
                                src={skill.icon}
                              />
                            )}
                          </div>
                          {skill.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* socials */}
              <div className="mt-[22px] whitespace-nowrap">
                <ul className="text-sm text-neutral-500 dark:text-neutral-400 [&>*]:transition-colors hover:[&>*]:cursor-pointer hover:[&>*]:text-neutral-900 dark:hover:[&>*]:text-white">
                  <li className="max-w-fit">
                    <Link href={socialLinks.linkedin}>
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
                    <Link href={socialLinks.github}>
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
                    <Link href={socialLinks.twitter}>
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
                    <Link href={socialLinks.stackoverflow}>
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
          </div>
          {/* connect icons */}

          {/* <button className="mt-6 bg-gradient-to-tr text-white duration-200 from-emerald-500 via-teal-500 to-green-500 shadow-lg hover:shadow-none  shadow-teal-700 rounded-md px-4 py-2">
            Download CV
          </button> */}
        </div>
      </MainContainer>
    </>
  );
};
export default About;
