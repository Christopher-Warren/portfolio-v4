import type { NextPage } from "next";
import Head from "next/head";
import { MainContainer } from "../components/containers/MainContainer";
import { Hero, ImagesBreak, Info, RecentArticles } from "../components/home";

import { getPlaiceholder } from "plaiceholder";
import { extractImgSrc } from "@plaiceholder/tailwindcss/utils";
import { getProjects } from "../assets/getProjectsData";
import Projects from "../components/home/Projects";

const getImagesFromPlaiceholders = (...classNames: string[]) =>
  Promise.all(
    classNames.map(async (className) => {
      const { img } = await getPlaiceholder(extractImgSrc(className));

      return { className, ...img };
    })
  );

export const getStaticProps = async () => {
  const images = await getImagesFromPlaiceholders(
    "plaiceholder-[/images/climbing/climbing1.jpg]",
    "plaiceholder-[/images/climbing/climbing2.jpg]",
    "plaiceholder-[/images/climbing/climbing3.jpg]",
    "plaiceholder-[/images/climbing/climbing4.jpg]",
    "plaiceholder-[/images/climbing/climbing5.jpg]"
  );

  const projects = await getProjects();

  return {
    props: {
      images,
      projects,
    },
  };
};

const Home: NextPage = ({ images, projects }: any) => {
  return (
    <>
      <Head>
        <title>Christopher Warren - Front End Developer</title>

        <meta property="og:title" content="Christopher Warren - Portfolio" />
        <meta property="og:image" content="/images/seo/seo-linkedin.png" />
        <meta
          property="og:description"
          content="The porfolio page of Christopher Warren"
        />
        <meta property="og:url" content="https://www.chriswarren.tech/" />
      </Head>

      <MainContainer className="">
        <Hero />
        <ImagesBreak images={images} />
        <Projects projects={projects} />
        {/* <div className="mt-20 gap-6 pb-32 lg:flex xl:mt-32 ">
          <RecentArticles />
          <Info />
        </div> */}
      </MainContainer>
    </>
  );
};

export default Home;
