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
import { Hero } from "../components/home";

const About = () => {
  return (
    <MainContainer>
      <Hero />
      {/* <button className="mt-6 bg-gradient-to-tr text-white duration-200 from-emerald-500 via-teal-600 to-green-500 shadow-lg hover:shadow-none  shadow-teal-700 rounded-md px-4 py-2">
              Download CV
            </button> */}
      {/* image break */}

      <div className="">hello</div>
      <div className="h-96 flex  border-white justify-between">
        <div className="bg-red-600 w-32 h-32 text-center">BASE</div>
        <div className="sm:bg-red-600 w-32 h-32 text-center">SM</div>
        <div className="md:bg-red-600 w-32 h-32 text-center">MD</div>
        <div className="lg:bg-red-600 w-32 h-32 text-center">LG</div>
        <div className="xl:bg-red-600 w-32 h-32 text-center">XL</div>
        <div className="2xl:bg-red-600 w-32 h-32 text-center">2XL</div>
      </div>
      <div className="h-screen  border-b-2 border-white"></div>
      <div className="h-screen  border-b-2 border-white"></div>
      <div className="h-screen  border-b-2 border-white"></div>
    </MainContainer>
  );
};
export default About;
