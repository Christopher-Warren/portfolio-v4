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

export const Hero = () => {
  return (
    <div className="max-w-2xl ">
      <div className="dark:neumorphism-shadow h-[75px] w-[75px] overflow-hidden  rounded-full bg-gradient-to-br  from-neutral-300  to-neutral-100  dark:from-neutral-700 dark:to-neutral-300/10">
        <Image alt="me" width={75} height={75} src={"/images/headshot2.png"} />
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl md:leading-snug">
        Unapologetically self-taught{" "}
        <span className="bg-gradient-to-br from-teal-500 to-green-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-green-400">
          full stack
        </span>{" "}
        developer.
      </h1>
      <p className="mt-6 text-base  leading-7 text-neutral-500 dark:text-neutral-400">
        {`I'm Chris, a full stack web developer that specializes in the front end. I'm currently building a blog to add to my `}
        <InlineLink href="/projects">{`list of projects `}</InlineLink>
        {`so I can share, and perhaps teach, some of the things I've learned in my journey of becoming a software developer.`}
      </p>

      {/* connect icons */}
      <div className="mt-6 flex gap-6 text-xl text-neutral-500 dark:text-neutral-400 [&>*]:transition-colors hover:[&>*]:cursor-pointer hover:[&>*]:text-neutral-900 dark:hover:[&>*]:text-white">
        <Link href={socialLinks.linkedin}>
          <a>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </Link>
        <Link href={socialLinks.github}>
          <a>
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </Link>
        <Link href={socialLinks.twitter}>
          <a>
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
        </Link>
        <Link href={socialLinks.stackoverflow}>
          <a>
            <FontAwesomeIcon icon={faStackOverflow} />
          </a>
        </Link>
      </div>
      {/* <button className="mt-6 rounded-md bg-gradient-to-tr from-emerald-500 via-teal-500 to-green-500 px-4 py-2 text-white  shadow-lg shadow-teal-700 duration-200 hover:shadow-none">
        Download CV
      </button> */}
    </div>
  );
};
