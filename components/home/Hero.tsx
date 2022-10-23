import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

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
        I’m Chris, a software designer and entrepreneur based in New York City.
        I’m the founder and CEO of Planetaria, where we develop technologies
        that empower regular people to explore space on their own terms.
      </p>

      {/* connect icons */}
      <div className="mt-6 flex gap-6 text-xl text-neutral-500 dark:text-neutral-400 [&>*]:transition-colors hover:[&>*]:cursor-pointer hover:[&>*]:text-neutral-900 dark:hover:[&>*]:text-white">
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
      {/* <button className="mt-6 bg-gradient-to-tr text-white duration-200 from-emerald-500 via-teal-500 to-green-500 shadow-lg hover:shadow-none  shadow-teal-700 rounded-md px-4 py-2">
        Download CV
      </button> */}
    </div>
  );
};
