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
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Home: NextPage = () => {
  const imgWidth = 290;
  const imgHeight = 300;

  const articles = [
    {
      date: "September 5, 2022",
      title: "Crafting a design system for a multiplanetary future",
      body: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
      read: "read",
    },
    {
      date: "September 5, 2022",
      title: "Crafting a design system for a multiplanetary future",
      body: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
      read: "read",
    },
    {
      date: "September 5, 2022",
      title: "Crafting a design system for a multiplanetary future",
      body: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
      read: "read",
    },
  ];

  return (
    <MainContainer>
      <div className="pt-32 max-w-2xl ">
        <Image
          alt="me"
          className="rounded-full"
          objectFit="cover"
          objectPosition="top"
          width={100}
          height={100}
          layout="fixed"
          src={
            "https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/106610319_3420818937930887_4070409338961351227_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bFq1EX1qPBcAX92c1Fi&tn=if_MeQGpU084xV1a&_nc_ht=scontent-atl3-1.xx&oh=00_AT_TzGIRof7tya5RKqzm35IzgIqc0x7LfSm7gL_5UCUdXg&oe=636EB997"
          }
        />
        <h1 className="text-5xl mt-6 font-bold tracking-tighter ">
          Unapologetically self-taught full stack developer.
        </h1>
        <p className="mt-6 text-base font-light dark:text-neutral-300 text-neutral-600 leading-7 ">
          I’m Chris, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        {/* connect icons */}
        <div className="text-xl dark:text-neutral-400 text-neutral-600 flex gap-6 mt-6 dark:hover:[&>*]:text-white hover:[&>*]:text-neutral-900 hover:[&>*]:cursor-pointer [&>*]:transition-colors">
          <Link href="">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faCodepen}></FontAwesomeIcon>
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faStackOverflow} />
          </Link>
        </div>
      </div>
      {/* <button className="mt-6 bg-gradient-to-tr text-white duration-200 from-emerald-500 via-teal-600 to-green-500 shadow-lg hover:shadow-none  shadow-teal-700 rounded-md px-4 py-2">
          Download CV
        </button> */}
      {/* image break */}
      <div className="-mx-20 overflow-x-clip mt-20">
        <div className="-mx-36">
          <div className="flex justify-between [&>*]:shadow-lg [&>*]:rounded-2xl [&>*:nth-child(even)]:rotate-2 [&>*:nth-child(odd)]:-rotate-2">
            <Image
              alt="hey"
              width={imgWidth}
              layout={"fixed"}
              height={imgHeight}
              className=""
              src={
                "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
              }
            />
            <div className="flex overflow-clip bg-neutral-900">
              <Image
                alt="hey"
                width={imgWidth}
                height={imgHeight}
                className="hover:opacity-50 hover:blur-[1px] hover:scale-105 transition-all duration-500"
                src={
                  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
                }
              />
            </div>

            <div className="flex overflow-clip bg-neutral-900">
              <Image
                alt="hey"
                width={imgWidth}
                height={imgHeight}
                className="hover:opacity-50 hover:blur-[1px] hover:scale-105 transition-all duration-500"
                src={
                  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
                }
              />
            </div>
            <div className="flex overflow-clip bg-neutral-900 ">
              <Image
                alt="hey"
                width={imgWidth}
                height={imgHeight}
                className="hover:opacity-50 hover:blur-[1px] hover:scale-105 transition-all duration-500"
                src={
                  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
                }
              />
            </div>
            <Image
              alt="hey"
              width={imgWidth}
              height={imgHeight}
              src={
                "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
              }
            />
          </div>
        </div>
      </div>

      <div className="mt-32 flex gap-6 pb-32 ">
        <div className="w-full">
          {/* Articles section */}
          {articles.map(({ date, title, body, read }) => {
            return (
              <div
                key={date}
                className="relative even:my-16 group cursor-pointer"
              >
                <div className="absolute w-full h-full bg-neutral-800 opacity-0 group-hover:opacity-100 scale-x-105 scale-y-125 transition-opacity rounded-lg duration-200"></div>
                <div className="relative  text-neutral-600 dark:text-neutral-500 mb-3 border-l-4 border-green-400 px-4 leading-4">
                  {date}
                </div>
                <div className="relative text-white text-lg font-semibold mb-3">
                  {title}
                </div>
                <div className="relative text-neutral-600 dark:text-neutral-400 mb-3 text-sm leading-6">
                  {body}
                </div>
                <div className="relative text-neutral-600 dark:text-green-400 text-sm">
                  Read article
                </div>
              </div>
            );
          })}
        </div>
        {/* Articles section */}
        {/* info section */}
        <div className="w-full pl-32">
          <div className="w-full rounded-lg p-5 border border-neutral-700 mb-10">
            <div>Stay up to date</div>
            <p className="mb-6">get notified</p>
            <div className="flex justify-between">
              <input
                type="text"
                className="flex-1 px-2 py-2 bg-neutral-800 border border-neutral-700 focus:border-green-500 rounded outline-none focus:ring ring-green-500/10 ring-offset-1 ring-offset-neutral-900"
              ></input>
              <button className="px-4 py-2 ml-4 bg-neutral-700 rounded text-sm">
                Join
              </button>
            </div>
          </div>

          <div className="w-full rounded-lg p-5 border border-neutral-700">
            <div>Projects</div>
            <div className="flex justify-between items-center text-sm">
              <div className="w-10 h-10 rounded-full bg-neutral-700"></div>
              <div className="flex-1">
                <p className="text-base">Easydash</p>
                <span>Fullstack</span>
              </div>
              <p className="self-end">react, node</p>
            </div>
          </div>
        </div>
        {/* ... info section */}
      </div>
    </MainContainer>
  );
};

export default Home;
