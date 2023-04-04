import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import InlineLink from "../links/InlineLink";
import { socialLinks } from "../../assets/socialLinks";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export const Hero = () => {
  return (
    <div className="max-w-2xl ">
      <div className="h-[75px] w-[75px] overflow-hidden  rounded-full bg-gradient-to-br  from-neutral-300  to-neutral-100  dark:from-neutral-700 dark:to-neutral-300/10">
        <Image
          alt="Portiat of Chris Warren"
          width={75}
          height={75}
          src={"/images/headshot2.png"}
        />
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl md:leading-snug">
        Passionate, and solution focused{" "}
        <span className="bg-gradient-to-br from-teal-500 to-green-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-400">
          Front End
        </span>{" "}
        developer.
      </h1>
      <p className="mt-6 text-base  leading-7 text-neutral-500 dark:text-neutral-400">
        {`I'm Chris, a Front End developer that specializes in building fast and user friendly experiences using React and React Native.`}
      </p>

      {/* connect icons */}
      <div className="mt-6 space-x-6 text-xl text-neutral-500 dark:text-neutral-400 [&>*]:transition-colors hover:[&>*]:cursor-pointer hover:[&>*]:text-neutral-900 dark:hover:[&>*]:text-white">
        <Link href={socialLinks.linkedin}>
          <a
            target="_blank"
            aria-label="Visit Christopher Warren's LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
        <Link href={socialLinks.github}>
          <a
            target="_blank"
            aria-label="Visit Christopher Warren's GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </Link>
        {/* <Link href={socialLinks.twitter}>
          <a
            target="_blank"
            aria-label="Visit Christopher Warren's Twitter profile"
          >
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
        </Link> */}
        <Link href={socialLinks.stackoverflow}>
          <a
            target="_blank"
            aria-label="Visit Christopher Warren's Stackoverflow profile"
          >
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </Link>
      </div>

      <div className="mt-7">
        <a
          href="mailto:chrisalmith@gmail.com"
          className="group mr-6 inline-block rounded-md bg-neutral-100 p-[1px]"
        >
          <div className="h-full w-full items-center justify-center rounded-md bg-white px-6 py-3 text-neutral-900 shadow-lg transition-colors hover:text-neutral-50 group-hover:bg-neutral-900 dark:bg-neutral-100">
            <FontAwesomeIcon className="mr-3" icon={faEnvelope} />
            Contact Me
          </div>
        </a>

        <a
          href="/documents/CHRISTOPHERWARREN2023.docx"
          className="group inline-block rounded-md bg-gradient-to-tr  from-cyan-400 to-green-400 p-[1px]"
        >
          <div className="h-full w-full items-center justify-center rounded-md bg-white px-6 py-3 shadow-lg shadow-green-500/20 transition-all hover:text-neutral-900 group-hover:bg-transparent group-hover:shadow-none dark:bg-neutral-900">
            <FontAwesomeIcon className="mr-3" icon={faDownload} />
            Download Resume
          </div>
        </a>
      </div>
    </div>
  );
};
