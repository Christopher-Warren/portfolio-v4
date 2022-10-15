import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
// overflow-hidden w-[150px] h-[150px] rounded-3xl bg-green-200 ring ring-offset-neutral-800 ring-neutral-700 ring-offset-2
export const Hero = () => {
  return (
    <div className="max-w-2xl ">
      <div className="overflow-hidden w-[150px] h-[150px] rounded-full  bg-gradient-to-br from-neutral-300  to-neutral-100  dark:from-neutral-700  dark:to-neutral-300/10 dark:neumorphism-shadow">
        <Image
          alt="me"
          width={150}
          height={150}
          src={"/images/headshot2.png"}
        />
      </div>

      <h1 className="text-5xl mt-6 font-bold tracking-tighter ">
        Unapologetically self-taught full stack developer.
      </h1>
      <p className="mt-6 text-base font-light dark:text-neutral-300 text-neutral-600 leading-7 ">
        I’m Chris, a software designer and entrepreneur based in New York City.
        I’m the founder and CEO of Planetaria, where we develop technologies
        that empower regular people to explore space on their own terms.
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
      {/* <button className="mt-6 bg-gradient-to-tr text-white duration-200 from-emerald-500 via-teal-500 to-green-500 shadow-lg hover:shadow-none  shadow-teal-700 rounded-md px-4 py-2">
        Download CV
      </button> */}
    </div>
  );
};
