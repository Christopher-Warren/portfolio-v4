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
        <h1 className="text-5xl mt-6 font-bold tracking-tighter">
          Unapologetically self-taught full stack developer.
        </h1>
        <p className="mt-6 text-base font-light dark:text-neutral-300 text-neutral-600 leading-7">
          I’m Chris, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
        </p>

        {/* connect icons */}
        <div className="text-xl dark:text-neutral-300 text-neutral-600 flex gap-6 mt-6 dark:hover:[&>*]:text-white hover:[&>*]:text-neutral-900 hover:[&>*]:cursor-pointer [&>*]:transition-colors">
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
      <div className="mt-32">hello</div>
      <div className="h-screen  border-b-2 border-white"></div>
      <div className="h-screen  border-b-2 border-white"></div>
      <div className="h-screen  border-b-2 border-white"></div>
      <div className="h-screen  border-b-2 border-white"></div>
    </MainContainer>
  );
};

export default Home;
