import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MainContainer } from "../components/containers/MainContainer";
import { Navbar } from "../components/navigation/Navbar";
import { DarkModeProvider } from "../components/providers/DarkModeProvider";

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
  const imgHeight = 320;

  return (
    <DarkModeProvider>
      <MainContainer>
        <Navbar />

        <div className="pt-44 max-w-2xl ">
          <h1 className="text-5xl font-bold tracking-tighter text-neutral-100">
            Unapologetically self-taught full stack developer.
          </h1>
          <p className="mt-6 text-base font-light text-neutral-300 leading-7">
            I’m Chris, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>
          <div className="text-xl text-neutral-300 flex gap-6 mt-6 hover:[&>*]:text-white hover:[&>*]:cursor-pointer [&>*]:transition-colors">
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

        <div className="-mx-20 overflow-x-clip mt-32">
          <div className="-mx-36">
            <div className="flex justify-between [&>*]:shadow-lg  [&>*]:rounded-2xl [&>*:nth-child(even)]:rotate-2 [&>*:nth-child(odd)]:-rotate-2 ">
              <Image
                alt="hey"
                width={imgWidth}
                layout={"fixed"}
                height={imgHeight}
                className="shadow- shadow-white"
                src={
                  "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
                }
              />
              <div className="flex overflow-clip hover:bg-neutral-900 transition-colors">
                <Image
                  alt="hey"
                  width={imgWidth}
                  height={imgHeight}
                  className="hover:opacity-70 transition-opacity"
                  src={
                    "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
                  }
                />
              </div>

              <div className="flex  overflow-clip hover:bg-neutral-900 transition-colors">
                <Image
                  alt="hey"
                  width={imgWidth}
                  height={imgHeight}
                  className="hover:opacity-70 transition-opacity"
                  src={
                    "https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=384&q=75"
                  }
                />
              </div>
              <div className="flex  overflow-clip hover:bg-neutral-900 transition-colors">
                <Image
                  alt="hey"
                  width={imgWidth}
                  height={imgHeight}
                  className="hover:opacity-70 transition-opacity"
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
    </DarkModeProvider>
  );
};

export default Home;
