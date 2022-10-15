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
