import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { MainContainer } from "../components/containers/MainContainer";
// I’ve worked on tons of little projects over the years but these are the ones
//  that I’m most proud of. Many of them are open-source, so if you see something
//  that piques your interest, check out the code and contribute if you have ideas for how it can be improved.
const projects = () => {
  return (
    <MainContainer className="pt-56">
      <div className="max-w-2xl ">
        <h1 className="text-5xl mt-6 font-bold tracking-tighter ">
          Things I've made to show the world my web dev chops.
        </h1>
        <p className="mt-6 text-base font-light dark:text-neutral-300 text-neutral-600 leading-7 ">
          I've worked on many projects throughout the past few years but these
          are the ones that I'm most proud of. Most of them are actively
          deployed and accompanied by public repos, so feel free to check them
          out.
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
    </MainContainer>
  );
};
export default projects;
