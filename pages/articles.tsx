import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import InlineLink from "../components/links/InlineLink";
import { socialLinks } from "../assets/socialLinks";
import { MainContainer } from "../components/containers/MainContainer";

const Articles = () => {
  return (
    <MainContainer className="pt-44">
      <div className="max-w-2xl pb-20">
        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl md:leading-snug">
          Blog is currently being worked on! 🚧🚀
        </h1>
        <p className="mt-6 text-base  leading-7 text-neutral-500 dark:text-neutral-400">
          Please feel free to check back soon as I will be posting articles in
          the near future.
        </p>

        {/* <button className="mt-6 rounded-md bg-gradient-to-tr from-emerald-500 via-teal-500 to-green-500 px-4 py-2 text-white  shadow-lg shadow-teal-700 duration-200 hover:shadow-none">
        Download CV
      </button> */}
      </div>
    </MainContainer>
  );
};

export default Articles;
